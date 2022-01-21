import './ListUser.css'
import React from 'react'

export const ListUser = ({allList,deleteUi}) => {


    const Deletes = (id)=>{
        deleteUi(id)
    }

    return <div className="ant-list-items">
        <div className="ant-list-item">
          
            {
                allList.map(list =>  <div key={list.id} className="ant-list-item-meta">
                <div className="ant-list-item-meta-avatar">
                    <span className="ant-avatar ant-avatar-circle ant-avatar-image">
                        <img src={list.image}/>
                    </span>
                </div>
                <div className="ant-list-item-meta-content">
                    <h4 className="ant-list-item-meta-title">
                        <a>{list.name}</a>
                    </h4>
                    <div className="ant-list-item-meta-description">
                       {list.description}
                       
                    </div>
                </div>
                <ul className="ant-list-item-action">
                    <li >
                        <a>Edit</a>
                    </li>
                    <li >
                        <a onClick={()=>Deletes(list.id)}>Remove</a>
                    </li>
                </ul>
            </div>)
            }

        </div>
    </div>
}