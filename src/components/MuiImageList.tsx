import { Box, ImageList, ImageListItem, ImageListItemBar, Stack } from '@mui/material'
import React from 'react'


const MuiImageList = () => {
    return (
        <Stack spacing={4} direction='row'>
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                {
                    itemData.map(item => {
                        return (
                            <ImageListItem key={item.img}>
                                <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy' />
                                <ImageListItemBar title={item.title} />
                            </ImageListItem>
                        )
                    })
                }
            </ImageList>
            {/* woven variant */}
            <ImageList
                sx={{ width: 500, height: 450 }}
                cols={3}
                gap={8}
                variant='woven'
            >
                {
                    itemData.map(item => {
                        return (
                            <ImageListItem key={item.img}>
                                <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy' />
                                <ImageListItemBar title={item.title} />
                            </ImageListItem>
                        )
                    })
                }
            </ImageList>
            {/* masonry variant*/}
            <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
                <ImageList variant='masonry' gap={8} cols={3} rowHeight={164}>
                    {
                        itemData.map(item => {
                            return (
                                <ImageListItem key={item.img}>
                                    <img src={`${item.img}?w=248&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy' />
                                    <ImageListItemBar title={item.title} />
                                </ImageListItem>
                            )
                        })
                    }
                </ImageList>
            </Box>
        </Stack>
    )
}

export default MuiImageList

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
        title: 'Bed',
    },
    {
        img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        title: 'Kitchen',
    },
    {
        img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        title: 'Sink',
    },
    {
        img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
        title: 'Books',
    },
    {
        img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
        title: 'Chairs',
    },
    {
        img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
        title: 'Candle',
    },
    {
        img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
        title: 'Laptop',
    },
    {
        img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
        title: 'Doors',
    },
    {
        img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
        title: 'Storage',
    },
    {
        img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
        title: 'Coffee table',
    },
    {
        img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
        title: 'Blinds',
    },
];
