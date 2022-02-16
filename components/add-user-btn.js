import Link from 'next/link'
import {Button} from "@mui/material";

const AddUserBtn = () => {
    return (
        <div>
            <Link href="/user/create">
                <Button sx={{m: 1}} variant="contained">Add new</Button>
            </Link>
        </div>
    )
}

export default AddUserBtn
