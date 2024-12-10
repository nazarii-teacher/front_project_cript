import React, { useState } from "react";
import { Autorithation } from "./Autorithation";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { userDataAC } from "../../Redux/personReduser";


const ContainerAutorithation = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');
    const dispatch = useDispatch();
    const handlerLogin = async () => {
        if (username !== '' && password !== '') {
            try {
                const response = await axios.post('http://localhost:5000/user/login', { username, password })
                setLogin(response.data)
                dispatch(userDataAC({ username, password, response:response.data.token }))
                setPassword('')
                setUserName('')

            } catch (error) {
                setLogin('Error' + error)

            }
            return 0;
        }
        alert('Заповніть усі дані коректно!!!')
    }
    return (
        <Autorithation
            handlerLogin={handlerLogin}
            username={username}
            setUserName={setUserName}
            password={password}
            setPassword={setPassword}
        />
    )
}

export { ContainerAutorithation }

