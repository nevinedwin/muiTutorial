import { Favorite, Home, Person } from '@mui/icons-material'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import React, { useState } from 'react'

const MuiBottomNavigation = () => {

    const [value, setValue] = useState(0)

    return (
        <BottomNavigation value={value} showLabels onChange={(event, newValue) => setValue(newValue)} sx={{ width: '100%', position: "absolute", bottom: 0 }}>
            <BottomNavigationAction label={'Home'} icon={<Home />} />
            <BottomNavigationAction label={'Favorite'} icon={<Favorite />} />
            <BottomNavigationAction label={'Person'} icon={<Person />} />
        </BottomNavigation>
    )
}

export default MuiBottomNavigation