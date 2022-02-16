import {useDispatch, useSelector} from 'react-redux'
import UserForm from "../../components/user-form";
import {createUser} from "../../actions";
import {useRouter} from "next/router";

const Create = () => {
    const router = useRouter();
    const nOfUsers = useSelector(({users}) => {
        return users.list.length;
    })
    const dispatch = useDispatch();
    return (
        <UserForm
            user={{id: nOfUsers + 1}}
            onSubmit={(user) => {
                dispatch(createUser(user));
                router.push('/');
            }}
        />
    )
}

export default Create
