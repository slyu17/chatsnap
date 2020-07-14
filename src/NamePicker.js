import React, {useState, useEffect} from 'react'
import {FiEdit,FiSave} from 'react-icons/fi'


function NamePicker(props){
    const [name,setName] = useState('')
    const [editing, setEditing] = useState(false)

    useEffect(()=>{
        const storedName = localStorage.getItem('name')
        if(storedName) {
          setName(storedName)
          props.saveName(storedName)
        }
    }, [])

    return <div className="pickName">
        {editing && <> 
            <input value = {name} onChange={e=> setName(e.target.value)} />
            <FiSave className = "save" size={30} color = "white"
                onClick = {()=> {
                    setEditing(!editing)
                    props.saveName(name)
                    localStorage.setItem('name',name)
                }}
            />
        </>}

        {!editing && <> 
            <span className = "savedName">{name}</span>
            <FiEdit className = "edit" size={28} color = "white" 
                onClick = {()=>setEditing(!editing)}
            />
        </>}
    </div>
}

export default NamePicker