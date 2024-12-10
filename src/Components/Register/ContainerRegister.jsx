import React, { useState } from "react";
import { Register } from "./Register";
import axios from 'axios';  


const ContainerRegister = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
        tel: "",
        name: "",
        lastname: ""
    });
    const changeInputRegister = (action, data) => {
        switch (action) {
            case 'username':
                setUser({ ...user, username:data})
                break;
            case 'password':
                setUser({ ...user, password: data })
                break;
            case 'tel':
                setUser({ ...user, tel: data })
                break;
            case 'name':
                setUser({ ...user, name: data })
                break;
            case 'lastname':
                setUser({ ...user, lastname: data })
                break;
            default:
                break;
        }
    }
    const handleSubmit = async () => {
        if (user.username && user.password && user.tel && user.name && user.lastname) {
            try {
                const response = await axios.post('http://localhost:5000/user/register', { ...user })
                setUser({
                    username: "",
                    password: "",
                    tel: "",
                    name: "",
                    lastname: ""
                })
            } catch (error) {
                    console.log(error)
            } 
            return 0;
        } 
        alert('Заповніть усі дані коректно!!!')
        
    }
    return (
        <Register
            user={user}
            setUser={setUser}
            changeInputRegister={changeInputRegister}
            handleSubmit={handleSubmit}
        />
    )
}

export { ContainerRegister }

