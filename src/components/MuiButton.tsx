import React, { useState } from 'react'
import { Stack, Button, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';


const MuiButton = () => {

    const [formats, setFormats] = useState<string | null>(null)
    console.log(formats)

    const handleFormatChange = (event: React.MouseEvent<HTMLElement>, updatedFormats: string | null) => {
        setFormats(updatedFormats)
    }

    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <Button variant='text'>Text</Button>
                <Button variant='contained'>contained</Button>
                <Button variant='outlined'>outlined</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='contained' color='primary'>Primary</Button>
                <Button variant='contained' color='error'>Error</Button>
                <Button variant='contained' color='info'>Info</Button>
                <Button variant='contained' color='warning'>Warning</Button>
                <Button variant='contained' color='success'>Success</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='text' color='primary'>Primary</Button>
                <Button variant='text' color='error'>Error</Button>
                <Button variant='text' color='info'>Info</Button>
                <Button variant='text' color='warning'>Warning</Button>
                <Button variant='text' color='success'>Success</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='outlined' color='primary'>Primary</Button>
                <Button variant='outlined' color='error'>Error</Button>
                <Button variant='outlined' color='info'>Info</Button>
                <Button variant='outlined' color='warning'>Warning</Button>
                <Button variant='outlined' color='success'>Success</Button>
            </Stack>
            <Stack spacing={2} display='block' direction={'row'}>
                <Button variant='contained' size='small'>Small</Button>
                <Button variant='contained' size='medium'>Medium</Button>
                <Button variant='contained' size='large'>Large</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='contained' startIcon={<SendIcon />} disableRipple>Send</Button>
                <Button variant='contained' endIcon={<SendIcon />} disableElevation>Send</Button>
                <IconButton aria-label='send' color='success' size='small' onClick={() => alert("Icon Button Cicked!")}>
                    <SendIcon />
                </IconButton>
            </Stack>
            <Stack spacing={20} direction='row'>
                <Stack direction={'row'}>
                    <ButtonGroup
                        variant='contained'
                        orientation='vertical'
                        size='small'
                        color='secondary'
                        aria-label="The Button Group"
                    >
                        <Button onClick={() => alert("Left Clicked")}>Left</Button>
                        <Button onClick={() => alert("Center Clicked")}>center</Button>
                        <Button onClick={() => alert("Right Clicked")}>Right</Button>
                    </ButtonGroup>
                </Stack>
                <Stack direction={'row'}>
                    <ButtonGroup variant='outlined'>
                        <Button >Left</Button>
                        <Button >center</Button>
                        <Button >Right</Button>
                    </ButtonGroup>
                </Stack>
                <Stack direction={'row'}>
                    <ButtonGroup variant='text' orientation='vertical'>
                        <Button >Left</Button>
                        <Button >center</Button>
                        <Button >Right</Button>
                    </ButtonGroup>
                </Stack>

            </Stack>
            {/* toggleButton */}
            <Stack direction={'row'}>
                <ToggleButtonGroup aria-label='text formating' value={formats} onChange={handleFormatChange}
                    size={'small'}
                    orientation={'vertical'}
                    color={'success'}
                // exclusive
                >
                    <ToggleButton value={'bold'} aria-label='bold'>
                        <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton value={'italic'} aria-label='italic'>
                        <FormatItalicIcon />
                    </ToggleButton>
                    <ToggleButton value={'underlined'} aria-label='underlined'>
                        <FormatUnderlinedIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
}

export default MuiButton