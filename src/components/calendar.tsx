import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Box } from '@mui/material';
import styles from './calendar.module.css';

export default function CustomStyledCalendar() {
  return (
    <div className={styles.calendar}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <DateCalendar
            sx={{
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              backgroundColor: 'var(--sidebar-color)',
              borderRadius: '12px',
              maxWidth: '350px',
              maxHeight: '300px',
            }}
            slotProps={{
              day: {
                sx: {
                  color: 'var(--text-color)',
                  '&.Mui-selected': {
                    backgroundColor: '#658CFF',
                    color: 'white',
                  },
                  '&.MuiPickersDay-today': {
                    border: '1px solid #658CFF',
                    color: '#658CFF',
                    fontWeight: 'bold',
                  },
                },
              },
              calendarHeader: {
                sx: {
                  color: 'var(--text-color-2)',
                  '& .MuiPickersCalendarHeader-label': {
                    color: 'var(--text-color-2)',
                  },
                  '& .MuiPickersArrowSwitcher-button': {
                    color: 'var(--text-color-2)',
                  },
                },
              },
            }}
          />
        </Box>
      </LocalizationProvider>
    </div>
  );
}
