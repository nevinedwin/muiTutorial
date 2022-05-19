import { Box, Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'


// card takes its parent size as card size
// - child of card - cardcontent contains the main content of the card
// - child of card - cardActions contains the footer action button/text etc..
// - child of card - cardMedia used to add images in card


const MuiCard = () => {
    return (
        <Stack direction={'row'} spacing={4}>
            <Box width="300px" >
                <Card sx={{ backgroundColor: 'wheat' }} >
                    <CardMedia
                        component={'img'}
                        height='240'
                        image="https://source.unsplash.com/random"
                        alt='Unsplash image'
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h5' component={'div'}>React</Typography>
                        <Typography gutterBottom variant='body2' component={'div'}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, nihil nisi. Ratione, impedit placeat nisi modi asperiores alias necessitatibus inventore provident, tempora vero explicabo quibusdam neque, nemo error officia totam?
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size='small'>Share</Button>
                        <Button size='small'>Learn More</Button>
                    </CardActions>
                </Card>
            </Box >
            <Box width="300px" >
                <Card sx={{ backgroundColor: 'wheat' }} >
                    <CardMedia
                        component={'img'}
                        height='240'
                        image="https://source.unsplash.com/random"
                        alt='Unsplash image'
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h5' component={'div'}>React</Typography>
                        <Typography gutterBottom variant='body2' component={'div'}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, nihil nisi. Ratione, impedit placeat nisi modi asperiores alias necessitatibus inventore provident, tempora vero explicabo quibusdam neque, nemo error officia totam?
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size='small'>Share</Button>
                        <Button size='small'>Learn More</Button>
                    </CardActions>
                </Card>
            </Box >
        </Stack>
    )
}

export default MuiCard