import React, { useState } from 'react'
import { Stack, Rating, Typography } from '@mui/material'
import FavouriteIcon from '@mui/icons-material/Favorite'
import FavouriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const MuiRating = () => {

  const [value, setValue] = useState<number | null>(null)

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue)
  }

  return (
    <Stack spacing={2}>
      <Typography variant='h4'>You give {value} Rating.</Typography>
      <Rating value={value} onChange={handleChange} precision={0.1} size='large'
        icon={<FavouriteIcon fontSize='inherit' color='error' />}
        emptyIcon={<FavouriteBorderIcon fontSize='inherit' color='error' />}
      />
    </Stack>
  )
}

export default MuiRating