import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import {fetchUsers} from "../store/action-creators/user";
// import {useActions} from "../hooks/useActions";
const UserList: React.FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.user)
    // const dispatch = useDispatch()
    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])

    if(loading) {
        return <h1>Идет загрузка...</h1>
    }

    if(error){
        return <h1>{error}</h1>
    }
    return (
        <div>
            fasdkfhsdj
            {users.map((user) => 
                <div key={user.id}>{user.name}</div>
            )}
        </div>
    )
}

export default UserList