
import React, { useState } from 'react'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import { AppBar, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material'
import { AnchorOutlined, KeyboardArrowDown } from '@mui/icons-material'

const MuiNavbar = () => {


    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)


    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <CatchingPokemonIcon />
                </IconButton>
                <Typography variant='h6' component={'div'} sx={{ flexGrow: 1 }}>
                    POKEMONAPP
                </Typography>
                <Stack spacing={2} direction={'row'}>
                    <Button color="inherit">Features</Button>
                    <Button color="inherit">Pricing</Button>
                    <Button color="inherit">About</Button>
                    <Button
                        color="inherit"
                        id='resources-button'
                        onClick={handleClick}
                        aria-controls={open ? 'resources-menu' : undefined}
                        aria-haspopup='true'
                        aria-expanded={open ? 'true' : undefined}
                        endIcon={<KeyboardArrowDown />}
                    >Resources</Button>
                    <Button color="inherit">Login</Button>
                </Stack>
                <Menu
                    id='resources-menu'
                    anchorEl={anchorEl}
                    open={open}
                    MenuListProps={{
                        'aria-labelledby': 'resources-button'
                    }}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                >
                    <MenuItem onClick={handleClose}>Blog</MenuItem>
                    <MenuItem onClick={handleClose}>Podcast</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}

export default MuiNavbar