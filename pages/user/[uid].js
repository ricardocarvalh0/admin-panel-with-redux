import {useDispatch, useSelector} from 'react-redux'
import UserForm from "../../components/user-form";
import {updateUser} from "../../actions";
import {useRouter} from "next/router";

const EditUser = () => {
    const { query, push } = useRouter();
    const user = useSelector(({users}) => {
        return users.list.find(u => u.id.toString() === query?.uid);
    })
    const dispatch = useDispatch();
    return (
        <UserForm
            user={user}
            onSubmit={(user) => {
                dispatch(updateUser(user));
                push('/');
            }}
        />
    )
}

export default EditUser
