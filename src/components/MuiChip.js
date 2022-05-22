import { Face } from "@mui/icons-material"
import { Avatar, Chip, Stack } from "@mui/material"
import { useState } from "react"


const MuiChip = () => {

    const [chip, setChip] = useState(['chip 1', 'chip 2', 'chip 3'])

    const handleDlete = (chipToDelete) => {
        setChip(prev => prev.filter(item => item !== chipToDelete))
    }

    return (
        <Stack spacing={1} direction='row'>
            <Chip label={'chip'} />
            <Chip label={'chip'} color='primary' />
            <Chip label={'chip'} color='primary' size='small' />
            <Chip label={'chip outlined'} color='secondary' size='small' variant="outlined" />
            <Chip label={'chip outlined'} color='secondary' size='small' variant="outlined" avatar={<Avatar>V</Avatar>} />
            <Chip label={'chip outlined'} color='secondary' size='small' variant="outlined" icon={<Face />} />
            <Chip label='Click' color="success" onClick={() => alert('Clicked')} />
            <Chip label='Delete' color="error" onClick={() => alert('Clicked')} onDelete={() => alert('Delete Handler called')} />
            {
                chip.map(chi => {
                    return (
                        <Chip key={chi} label={chi} onDelete={() => handleDlete(chi)} />
                    )
                })
            }
        </Stack>

    )
}

export default MuiChip