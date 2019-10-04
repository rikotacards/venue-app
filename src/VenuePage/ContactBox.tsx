import React from 'react'; 
import { Paper } from '@material-ui/core'

interface ContactBoxProps {
    email: string; 
    phone: number
}

export const ContactBox: React.FunctionComponent<ContactBoxProps> = (props) => {
    const {email, phone} = props; 

    return (
        <Paper>
            {phone}
            {email}
        </Paper>
    )
}