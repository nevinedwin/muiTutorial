import React from 'react'
import { Typography } from '@mui/material'

const MuiTypography = () => {
    return (
        <div>
            {/* heading text variants*/}
            <Typography variant='h1'>h1 Heading</Typography>
            <Typography variant='h2'>h2 Heading</Typography>
            <Typography variant='h3'>h3 Heading</Typography>
            {/* component attributes helps to name the tag */}
            {/* gutterBottom gives the bottom maring to that element. default the gutterBottom is false  */}
            <Typography variant='h4' component={'h1'} gutterBottom>h4 Heading</Typography>
            <Typography variant='h5'>h5 Heading</Typography>
            <Typography variant='h6'>h6 Heading</Typography>

            {/* subtitle text variants */}
            <Typography variant='subtitle1'>subtitle 1</Typography>
            <Typography variant='subtitle2'>subtitle 2</Typography>

            {/* paragraph variants */}
            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odit hic impedit quas eveniet commodi temporibus. Dicta ad, quia, eum voluptatum omnis minus iure recusandae nemo possimus facilis nostrum sunt.</Typography>
            <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore veritatis quia ipsam dolorem magni? Inventore soluta eum ex, voluptatibus praesentium eius modi iure fugit nihil. Voluptatem porro dicta qui autem.</Typography>

        </div>
    )
}

export default MuiTypography