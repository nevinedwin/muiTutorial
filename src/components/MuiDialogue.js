// Dialogue is used for ask for decision or any important functionality. It will disable the app functionality until the user respond to dialogue

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { useState } from "react"

export const MuiDialogue = () => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <Button onClick={() => setOpen(true)}>Open Dialogue</Button>
            <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby='dialog-title' aria-describedby='dialog-description'>
                <DialogTitle id='dialog-title'>Submit the test?</DialogTitle>
                <DialogContent >
                    <DialogContentText id='dialog-description'>Are you sure you want to submit the test? You will not be able to edit after submitting</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button autoFocus onClick={() => setOpen(false)}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
