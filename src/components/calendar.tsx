import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Box } from '@mui/material';
import dayjs from 'dayjs';

export default function CustomStyledCalendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          // This targets the calendar container
          '& .MuiDayPicker-root': {
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            background: 'var(--sidebar-color)',
            borderRadius: '12px',
            maxHeight: '250px',
            width: '400px',
          },
          // This targets the selected day button
          '& .Mui-selected': {
            backgroundColor: '#658CFF',
            color: 'white',
          },
          // This targets the today button
          '& .MuiPickersDay-today': {
            border: '1px solid #658CFF',
          },
        }}
      >
        <DateCalendar />
      </Box>
    </LocalizationProvider>
  );
}
