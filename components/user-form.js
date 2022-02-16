import React, {useCallback} from 'react';
import Link from 'next/link'
import {
    Card,
    CardActions,
    CardContent,
    FormControl,
    FormHelperText,
    TextField,
    Typography,
} from "@mui/material";
import Button from "@mui/material/Button";

const UserForm = ({user, onSubmit}) => {
    const [name, setName] = React.useState(user?.name || '');
    const [nameError, setNameError] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [email, setEmail] = React.useState(user?.email || '');
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = useCallback(() => {
        setNameError(name ? '' : 'Name is required');
        setEmailError(email ? '' : 'Email is required');

        if (name && email) {
            onSubmit({ id: user.id, name, email })
        }
    }, [user?.id, name, email]);

    return (
        <div style={{textAlign: 'center'}}>
            <Card sx={{maxWidth: 275}}>
                <CardContent>
                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                        {user?.name ? 'Edit' : 'Create'} user
                    </Typography>
                    <FormControl sx={{justifyContent: 'center'}}>
                        <TextField
                            sx={{m: 1}}
                            id="user-id"
                            label="name"
                            value={name}
                            onChange={handleNameChange}
                            error={!!nameError}
                            required
                        />
                        <TextField
                            required
                            sx={{m: 1}}
                            id="user-email"
                            label="email"
                            value={email}
                            onChange={handleEmailChange}
                            error={!!emailError}
                        />
                        <FormHelperText>{nameError || emailError}</FormHelperText>
                    </FormControl>
                </CardContent>
                <CardActions sx={{justifyContent: 'flex-end'}}>
                    <Link href="/">
                        <Button size="small" color="error">Cancel</Button>
                    </Link>
                    <Button size="small" onClick={handleSubmit}>Submit</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default UserForm
