import React, { useState } from 'react'
import { Box, FormControlLabel, Checkbox, Typography, FormControl, FormLabel, FormGroup, FormHelperText } from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookMark from '@mui/icons-material/Bookmark'

const MuiCheckbox = () => {

    const [acceptTnC, setAcceptTnC] = useState(false)
    const [acceptBKM, setAcceptBKM] = useState(false)
    const [things, setThings] = useState<string[]>([])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnC(event.target.checked)

    }

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptBKM(event.target.checked)
    }

    const handleThingsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value
        things.includes(val) ? setThings(things.filter(thing => thing !== val)) : setThings([...things, val])
    }

    return (
        <Box>
            <Box>
                <Typography variant='h3' gutterBottom color={'success'}>
                    {acceptTnC ? 'Checked' : 'Not Checked'}
                </Typography>

            </Box>
            <Box>
                <FormControlLabel label='I accepts terms and conditions' control={<Checkbox color='secondary' checked={acceptTnC} onChange={handleChange} />} />
            </Box>
            <Typography variant='h3' gutterBottom>
                {acceptBKM ? 'Checked Book Mark' : 'Not Checked'}
            </Typography>
            <Box>
                <Checkbox color='error'
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookMark />}
                    checked={acceptBKM}
                    onChange={handleChange1}
                />
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>
                        Check the boxes if you want.
                    </FormLabel>
                    <FormGroup row >
                        <FormControlLabel label='Do you want Ice Cream' control={<Checkbox checked={things.includes('Ice Cream')} onChange={handleThingsChange} />} value={'Ice Cream'} />
                        <FormControlLabel label='Do you want Chocolate' control={<Checkbox checked={things.includes('Chocolate')} onChange={handleThingsChange} />} value={'Chocolate'} />
                        <FormControlLabel label='Do you want Milk Shake' control={<Checkbox checked={things.includes('Milk Shake')} onChange={handleThingsChange} />} value={'Milk Shake'} />
                    </FormGroup>
                    <FormHelperText >Cannot choose all 3</FormHelperText>
                </FormControl>
            </Box>
        </Box>
    )
}

export default MuiCheckbox