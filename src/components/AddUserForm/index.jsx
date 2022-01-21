import React,{useState} from "react";
import { v1 as uuidv1 } from 'uuid';

export const AddUserForm = ({allList2,addItem, close}) => {
    const [name,SetName] = useState("")
    const [imgApp,SetImgApp] = useState('')
    const [description,Setdescription ] = useState('')

    const import1 = (e) =>{
      
        SetImgApp(e.target.value)
        console.log(imgApp)
    }

    const import2 = (e) =>{
        SetName(e.target.value)
       
    }
    const import3 = (e) =>{
        Setdescription(e.target.value)
    }


    const AddUser = ()=>{
        let item = {
            id:uuidv1(),
            name:name,
            image:imgApp,
            description:description,

        }
        addItem(item)
        SetName("")
        SetImgApp("")
        Setdescription("")
    }

    return <div>
        <div className="field-input-group">
            <input placeholder="Avatar"
             type="text"
              className="ant-input"
              value={imgApp}
               onChange={import1}/>
        </div>
        <div className="field-input-group">
            <input placeholder="Name"
             type="text"
              className="ant-input"
              value={name}
               onChange={import2}/>
        </div>
        <div className="field-input-group">
            <input placeholder="Content"
             type="text"
              className="ant-input"
              value={description}
               onChange={import3}/>
        </div>
        <div className="modal-new-user-footer">
            <button className="ant-btn ant-btn-primary" onClick={AddUser} >
                Save
            </button>
            <button onClick={close} className="ant-btn" style={{marginLeft: 10}}>
                Cancel
            </button>
        </div>
    </div>
}
