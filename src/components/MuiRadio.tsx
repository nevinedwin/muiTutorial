import React, { useState } from 'react'
import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, Typography, FormHelperText } from '@mui/material'

const MuiRadio = () => {

    const [value, setValue] = useState('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <Box>
            {value !== '' && <Typography variant='h4' gutterBottom>
                Year of Experience : {value}
            </Typography>}
            <FormControl >
                <FormLabel id='job-experience-group-label'>
                    Years of Experience
                </FormLabel>
                <RadioGroup
                    name="job-experience-group"
                    aria-label='job-experience-group-label'
                    value={value}
                    onChange={handleChange}
                    row
                >
                    <FormControlLabel control={<Radio color='error' size='medium' />} label='0-2' value='0-2' />
                    <FormControlLabel control={<Radio />} label='2-5' value='2-5' />
                    <FormControlLabel control={<Radio />} label='5-8' value='5-8' />
                </RadioGroup>
                <FormHelperText>Invalid selection</FormHelperText>
            </FormControl>
        </Box>
    )
}

export default MuiRadio