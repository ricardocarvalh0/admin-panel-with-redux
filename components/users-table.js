import {useSelector} from "react-redux";
import {DataGrid} from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import {useRouter} from "next/router";
import DeleteUserBtn from "./delete-user-btn";

const PAGE_SIZE = 5;

const UsersTable = () => {
    const router = useRouter();
    const loading = useSelector(({users}) => {
        return users.loading;
    })
    const users = useSelector(({users}) => {
        return users.list.map(u => ({
            id: u.id,
            name: u.name,
            username: u.username,
            city: u.address?.city,
            email: u.email,
            edit: u.id,
            delete: u.id,
        }))
    })

    const rows = users.map(u => ({
        ...u,
        edit: u.id,
        delete: u.id,
    }));

    const columns = [
        {field: 'id', headerName: 'ID', width: 90},
        {
            field: 'name',
            headerName: 'Name',
            width: 150,
            editable: true,
        },
        {
            field: 'username',
            headerName: 'Username',
            width: 150,
            editable: true,
        },
        {
            field: 'city',
            headerName: 'City',
            width: 110,
            editable: true,
        },
        {
            field: 'email',
            headerName: 'Email',
            sortable: false,
            width: 160
        },
        {
            field: 'edit',
            headerName: '',
            sortable: false,
            width: 160,
            renderCell: (u) => (
                <Button onClick={() => {
                    router.push(`/user/${u.value}`)
                }}>
                    edit
                </Button>
            )
        },
        {
            field: 'delete',
            headerName: '',
            sortable: false,
            width: 160,
            renderCell: (u) => (
                <DeleteUserBtn id={u.value} />
            )
        },
    ];

    return (
        <div style={{height: '40vh', width: '100%'}}>
            <DataGrid
                loading={loading}
                rows={rows}
                columns={columns}
                pageSize={PAGE_SIZE}
                rowsPerPageOptions={[PAGE_SIZE]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default UsersTable
