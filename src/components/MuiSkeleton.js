// skeleton component is used to display placeholder preview of the content before the data gets loaded to reduce load time frustruation

import { Avatar, Box, Skeleton, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"


// default variant is text for skeleton component

export const MuiSkeleton = () => {

    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    return (
        <Box sx={{ width: '250px' }}>
            {
                loading ? (<Skeleton variant="rectangular" width={256} height={144} animation='wave' />) : (
                    <img src="https://source.unsplash.com/random/256x144" alt='skeleton' width={256} height={144} />
                )
            }
            <Stack direction={'row'} spacing={1} sx={{ width: '100%', marginTop: '12px' }}>
                {
                    loading ? (
                        <Skeleton variant="circular" animation='wave' width={40} height={40} />
                    ) : (
                        <Avatar>NE</Avatar>
                    )
                }
                <Stack sx={{ width: '80%' }}>
                    {
                        loading ? (
                            <>
                                <Typography variant="body1">
                                    <Skeleton variant='text' width={'100%'} animation='wave' />
                                </Typography>
                                <Typography variant="body2">
                                    <Skeleton variant='text' width={'100%'} animation='wave' />
                                </Typography>
                            </>
                        ) :
                            <>
                                <Typography variant="body1">React Mui Tutorial</Typography>
                            </>
                    }
                </Stack>
            </Stack>
        </Box>
        // <Stack spacing={1} width={'250px'}>
        //     <Skeleton />
        //     <Skeleton variant='text' />
        //     <Skeleton variant='circular' width={40} height={40} />
        //     <Skeleton variant='rectangular' width={250} height={125} animation='wave' />
        // </Stack>

    )
}
