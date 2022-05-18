import React, { useState } from 'react'
import { Box, TextField, MenuItem, Stack } from '@mui/material'
import { type } from 'os'

const MuiSelect = () => {
    const [countries, setCountries] = useState<string[]>([])
    const [country, setCountry] = useState('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setCountries(typeof value === 'string' ? value.split(',') : value)
    }

    const handleSingleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value)
    }
    return (
        <Box width='250px'>
            <Stack spacing={3}>

                {/* single select drop down */}
                <TextField label={'Select Country'} select value={country} onChange={handleSingleChange} fullWidth >
                    <MenuItem value='IN'>India</MenuItem>
                    <MenuItem value='US'>USA</MenuItem>
                    <MenuItem value='Uk'>UK</MenuItem>
                </TextField>
                {/* multiple select drop down */}
                {/* single select drop down */}
                <TextField
                    label={'Select Country'}
                    select
                    value={countries}
                    onChange={handleChange}
                    fullWidth
                    SelectProps={{
                        multiple: true
                    }}
                    size='medium'
                    color='secondary'
                    helperText='please select your country'
                >
                    <MenuItem value='IN'>India</MenuItem>
                    <MenuItem value='US'>USA</MenuItem>
                    <MenuItem value='Uk'>UK</MenuItem>
                </TextField>
            </Stack>
        </Box>
    )
}

export default MuiSelect