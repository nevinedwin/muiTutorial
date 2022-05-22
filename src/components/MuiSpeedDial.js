import { Edit, FileCopyOutlined, Print, Share } from '@mui/icons-material'
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import React from 'react'

const MuiSpeedDial = () => {
    return (
        <SpeedDial ariaLabel='Navigation-speedDial'
            sx={{ position: 'absolute', bottom: 16, right: 16 }}
            icon={<SpeedDialIcon openIcon={<Edit />} />}
        >
            <SpeedDialAction icon={<FileCopyOutlined />} tooltipTitle={'Copy'} tooltipOpen />
            <SpeedDialAction icon={<Print />} tooltipTitle={'Print'} />
            <SpeedDialAction icon={<Share />} tooltipTitle={'Share'} />
        </SpeedDial>
    )
}

export default MuiSpeedDial