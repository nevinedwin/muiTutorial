// Drawer component can be used to create sidebar which can be used for number of things which completely depend on your application.

import { Menu } from "@mui/icons-material"
import { Box, Drawer, IconButton, Typography } from "@mui/material"
import { useState } from "react"

// anchor - control in which direction the sidebar open

const MuiDrawer = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return (
        <>
            <IconButton size="large" edge='start' color="inherit" aria-label="logo" onClick={() => setIsDrawerOpen(true)}>
                <Menu />
            </IconButton>
            <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <Box p={2} textAlign='center' role='presentation' width='250px'>
                    <Typography variant='h6' component='div'>Side Panel</Typography>
                </Box>
            </Drawer>
        </>
    )
}

export default MuiDrawer