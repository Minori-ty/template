import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useToken from '../../store'

export default function Index() {
    const navigate = useNavigate()
    const setToken = useToken((state) => state.setToken)
    function onSubmit() {
        setToken('ABC')
        navigate('/')
    }
    useEffect(() => {
        axios.get('http://127.0.0.1:5000/user')
    }, [])
    return (
        <div>
            <label htmlFor="账号">账号</label>
            <input type="text" name="账号" id="账号" />
            <label htmlFor="密码">密码</label>
            <input type="text" name="密码" id="密码" />
            <input type="submit" value="提交" onClick={onSubmit} />
        </div>
    )
}
