import { Check } from '@mui/icons-material'
import { Alert, AlertTitle, Button, Stack } from '@mui/material'
import { fontSize } from '@mui/system'
import React from 'react'

const MuiAlert = () => {
    return (
        <Stack spacing={2}>
            <Alert severity='error' onClose={() => alert('close alert')}>This is an error alert.</Alert>
            <Alert severity='info'>This is an info alert.</Alert>
            <Alert severity='warning'>This is an warning alert.</Alert>
            <Alert severity='success'>This is an success alert.</Alert>

            <Alert severity='error' variant='filled'>This is an error alert.</Alert>
            <Alert severity='info' variant='filled'>This is an info alert.</Alert>
            <Alert severity='warning' variant='filled'>This is an warning alert.</Alert>
            <Alert severity='success' variant='filled'>This is an success alert.</Alert>

            <Alert severity='error' variant='outlined'>
                <AlertTitle>Error</AlertTitle>
                This is an error alert.</Alert>
            <Alert severity='info' variant='outlined'>
                <AlertTitle>Info</AlertTitle>
                This is an info alert.</Alert>
            <Alert severity='warning' variant='outlined'>
                <AlertTitle>Warning</AlertTitle>
                This is an warning alert.</Alert>
            <Alert severity='success' variant='outlined' icon={<Check fontSize={'inherit'} />}
                action={<Button color='inherit' size='small'>
                    UNDO
                </Button>}
            >
                <AlertTitle>Success</AlertTitle>
                This is an success alert.</Alert>
        </Stack >
    )
}

export default MuiAlert