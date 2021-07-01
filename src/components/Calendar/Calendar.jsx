// import DatePicker from 'react-date-picker';
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import { useState } from 'react';
import style from './calendar.scss';

const Calendar = (value, onChange) => {
  return (
    <div className="dateDiv">
      <DatePicker onChange={onChange} value={value} locale="en-EN" />
    </div>
  );
};

export default Calendar;
