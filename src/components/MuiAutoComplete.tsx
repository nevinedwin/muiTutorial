import React, { useState } from 'react'
import { Stack, Autocomplete, TextField } from '@mui/material'

const MuiAutoComplete = () => {

    type skill = {
        id: number,
        label: string
    }

    const skills = ['HTML', 'CSS', 'Javascript', 'TypeScript', 'React']
    const skillOptions = skills.map((skill, index) => {
        return ({
            id: index + 1,
            label: skill
        })
    })


    const [value, setValue] = useState<string | null>(null)
    const [valueNew, setValueNew] = useState<skill | null>(null)


    return (
        <Stack width={'250px'} spacing={2} >
            <Autocomplete
                options={skills}
                renderInput={(params) => <TextField {...params}
                    label='Skills'
                />}
                value={value}
                onChange={(event: any, newValue: string | null) => setValue(newValue)}
                freeSolo
            />
            <Autocomplete
                options={skillOptions}
                renderInput={(params) => <TextField {...params} label='Skills' />}
                value={valueNew}
                onChange={(event: any, newValue: skill | null) => setValueNew(newValue)}
            />
        </Stack>
    )
}

export default MuiAutoComplete