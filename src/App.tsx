import React from 'react';
import './App.css';
import { MuiAccordion, MuiAlert, MuiAutoComplete, MuiAvatar, MuiBadge, MuiBottomNavigation, MuiBreadCrumbs, MuiButton, MuiCard, MuiCheckbox, MuiChip, MuiCustomiseTheme, MuiDateRangePicker, MuiDateTimePicker, MuiDialogue, MuiDrawer, MuiImageList, MuiLayout, MuiLink, MuiList, MuiLoadingButton, MuiNavbar, MuiProgress, MuiRadio, MuiRating, MuiResponsiveness, MuiSelect, MuiSkeleton, MuiSnackbar, MuiSpeedDial, MuiSwitch, MuiTable, MuiToolTip, MuiTypography, MultiText } from './components';
import { LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { colors, createTheme, ThemeProvider } from '@mui/material';



const theme = createTheme({
  palette: {
    secondary: {
      main: colors.orange[500],
    }
  }
})


function App() {
  return (
    // LocalizationProvider wrapper used for dateTime Picker refer MuiDateTimePicker.js for more
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="App">
          {/* <MultiText /> */}
          {/* <MuiSelect /> */}
          {/* <MuiTypography/> */}
          {/* <MuiButton/> */}
          {/* <MuiRadio /> */}
          {/* <MuiCheckbox /> */}
          {/* <MuiSwitch /> */}
          {/* <MuiRating /> */}
          {/* <MuiAutoComplete /> */}
          {/* <MuiLayout /> */}
          {/* <MuiCard /> */}
          {/* <MuiAccordion /> */}
          {/* <MuiImageList /> */}
          {/* <MuiNavbar /> */}
          {/* <MuiLink /> */}
          {/* <MuiBreadCrumbs /> */}
          {/* <MuiDrawer /> */}
          {/* <MuiSpeedDial /> */}
          {/* <MuiBottomNavigation /> */}
          {/* <MuiAvatar /> */}
          {/* <MuiBadge /> */}
          {/* <MuiList /> */}
          {/* <MuiChip /> */}
          {/* <MuiToolTip /> */}
          {/* <MuiTable /> */}
          {/* <MuiAlert /> */}
          {/* <MuiSnackbar /> */}
          {/* <MuiDialogue /> */}
          {/* <MuiProgress /> */}
          {/* <MuiSkeleton /> */}
          {/* <MuiLoadingButton /> */}
          {/* <MuiDateTimePicker /> */}
          {/* <MuiDateRangePicker /> */}
          <MuiResponsiveness />
          <MuiCustomiseTheme />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
