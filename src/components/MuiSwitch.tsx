import React, { useState } from 'react'
import { Box, FormControlLabel, Switch } from '@mui/material'

const MuiSwitch = () => {


    const [checked, setChecked] = useState(false)


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
    }

    return (
        <Box>
            <FormControlLabel label='Drak Mode' control={<Switch checked={checked} onChange={handleChange} size='small' color='success' />} />
        </Box>
    )
}

export default MuiSwitch