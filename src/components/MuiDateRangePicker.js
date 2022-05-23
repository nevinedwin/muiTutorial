import { TextFieldsRounded } from "@mui/icons-material"
import { DateRangePicker } from "@mui/lab"
import { Box, TextField } from "@mui/material"
import { useState } from "react"

export const MuiDateRangePicker = () => {

    const [value, setValue] = useState([null, null])
    console.log(value)

    return (
        <Box width='500px'>
            <DateRangePicker startText='check-in' endText='check-out' value={value} onChange={(newValue) => setValue(newValue)}
                renderInput={(startProps, endProps) => (
                    <>
                        <TextField {...startProps} />
                        <Box sx={{ mx: 2 }}>to</Box>
                        <TextField {...endProps} />
                    </>
                )}
            />
        </Box>
    )
}
