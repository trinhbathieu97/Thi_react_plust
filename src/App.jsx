import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { Modal } from 'antd';

import {ListUser} from './components/ListUser'
import {AddUserForm} from './components/AddUserForm'

import 'antd/dist/antd.css'
import './App.css';

function App() {

    const [state,SetState] = useState([])


    useEffect(() => {
        const List = async () => {
          try {
            const res = await axios.get(
              "https://5d36d86c86300e0014b647c7.mockapi.io/users"
            );
    
            SetState(res.data);
          } catch (error) {
            console.log(error.msg);
          }
        };
        List();
      }, []);


    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleOpenModal = () => {
        setIsModalVisible(true)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    const AddState = async (item) =>{
      try {
          const res = await axios.post("https://5d36d86c86300e0014b647c7.mockapi.io/users", item)
          await SetState([res.data,...state]);
          setIsModalVisible(false)
      } catch (e) {
          console.log(e.msg)
      }
    }

    const DeleteList = async (item)=>{
        const newList = state.filter(i => i.id !== item)
        try {
            await axios.delete(`https://5d36d86c86300e0014b647c7.mockapi.io/users/${item}`)
            await SetState(newList)
        } catch (e) {
            console.log(e.msg)
        }
    }

    return (
        <div className="App">
            <h2>List user</h2>
            <div className="header-add-user">
                <button className="ant-btn ant-btn-primary" onClick={handleOpenModal}>
                    Add New User
                </button>
            </div>
            <ListUser 
            allList = {state}
            deleteUi = {DeleteList}
             />
            <Modal title="Basic Modal" visible={isModalVisible} footer={null} onCancel={handleCancel}>
                <AddUserForm close = {handleCancel}
                allList2 = {state}
                addItem = {AddState}
                />
            </Modal>
        </div>
    );
}

export default App;
