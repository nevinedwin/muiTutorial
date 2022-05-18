import React, { useState } from 'react'
import { Stack, TextField, InputAdornment } from '@mui/material'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const MultiText = () => {
    const [enableEye, setEnableEye] = useState(true)
    const [value, setValue] = useState('')
    return (
        <Stack spacing={4}>
            <Stack direction={'row'} spacing={2}>
                <TextField label={'Name'} variant={'outlined'} />
                <TextField label={'Name'} variant={'filled'} />
                <TextField label={'Name'} variant={'standard'} />
            </Stack>
            <Stack direction={'row'} spacing={2}>
                <TextField label={'small secondary'} color='secondary' size='small' />
                <TextField label={'medium success'} color='success' size='medium' />
                {/* <TextField label={'large'} color='secondary' size='large' /> */}


            </Stack>
            <Stack direction={'row'} spacing={2}>
                <TextField label={'Form Input'} required />
                <TextField label={'Password'}
                    required
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    error={!value}
                    helperText={!value ? "Required" : 'Do not share your password with anyone.'}
                    type={enableEye ? 'password' : "text"}
                    InputProps={{
                        endAdornment: <InputAdornment style={{ cursor: 'pointer' }} position={'end'} onClick={() => setEnableEye(prev => !prev)}>{enableEye ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}</InputAdornment>
                    }} />
                <TextField label={'Read Only'} InputProps={{ readOnly: true }} />
            </Stack>
            {/* input adornment acts like prefixes and suffixes*/}
            <Stack direction={'row'} spacing={2}>
                <TextField label='amount' InputProps={{
                    startAdornment: <InputAdornment position='start'>$</InputAdornment>
                }} />
                <TextField label='weight' InputProps={{
                    endAdornment: <InputAdornment position='end'>kg</InputAdornment>
                }} />
            </Stack>
        </Stack >
    )
}

export default MultiText