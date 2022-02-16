import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loadUsers} from '../actions'
import UsersTable from "../components/users-table";
import AddUserBtn from "../components/add-user-btn";
import {Grid} from "@mui/material";

const Index = () => {
    const users = useSelector(({users}) => {
        return users.list
    })
    const dispatch = useDispatch()
    useEffect(() => {
        if (!users.length) {
            dispatch(loadUsers())
        }
    }, [dispatch, users])

    return (
        <Grid container direction="row" justifyContent="flex-end">
            <AddUserBtn/>
            <UsersTable/>
        </Grid>
    )
}

export default Index
