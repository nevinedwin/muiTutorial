import { DatePicker, DateTimePicker, TimePicker } from '@mui/lab'
import { Stack, TextField } from '@mui/material'
import { useState } from 'react'

// for datetime picker we have to use date library " npm i date-fns @date-io/date-fns"
// then wrap the app component with LocalizationProvider that imported from @mui/lab
// then give a parameter to LocalizationProvider as dateAdapter which is equal to "AdapterDateFns from '@mui/lab/AdapterDateFns'"

export const MuiDateTimePicker = () => {

    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedTime, setSelectedTime] = useState(null)
    const [selectedDateTime, setSelectedDateTime] = useState(null)
    console.log({ selectedDate })
    console.log({ selectedTime: selectedTime && selectedTime.toLocaleTimeString() })


    return (
        <Stack spacing={4} sx={{ width: '250px' }}>
            <DatePicker label='Date Picker' renderInput={(params) => <TextField {...params} />}
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
            />
            <TimePicker label='Time Picker' renderInput={(params) => <TextField {...params} />}
                value={selectedTime}
                onChange={(newValue) => setSelectedTime(newValue)}
            />
            <DateTimePicker label='Date Time Picker' renderInput={(params) => <TextField {...params} />}
                value={selectedDateTime}
                onChange={(newValue) => setSelectedDateTime(newValue)}
            />
        </Stack>
    )
}
