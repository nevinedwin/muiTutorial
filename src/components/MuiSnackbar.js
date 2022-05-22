import { Alert, Button, Snackbar } from "@mui/material"
import { forwardRef, useState } from "react"


const SnackbarAlert = forwardRef(
    function SnackbarAlert(props, ref) {
        return (
            <Alert elevation={6} ref={ref} {...props} />
        )
    }
)

export const MuiSnackbar = () => {

    const [open, setOpen] = useState(false)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        } setOpen(false)
    }

    return (
        <>
            <Button onClick={() => setOpen(true)}>Submit</Button>

            {/* Normal Snackbar */}
            {/* <Snackbar
                message={'Form Submitted Successfully!'}
                autoHideDuration={4000}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            /> */}

            {/* Custom Snackbar */}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <SnackbarAlert onClose={handleClose} severity={'success'} variant={'filled'}>Form Submitted Successfully</SnackbarAlert>
            </Snackbar>
        </>
    )
}
