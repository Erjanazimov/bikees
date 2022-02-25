import React, {useState} from 'react';
import {DateRangePickerDay, LocalizationProvider, StaticDateRangePicker} from "@mui/lab";
import {Box, TextField} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const DateBike = () => {
    const [value, setValue] = useState([null, null]);

    const renderWeekPickerDay = (date, dateRangePickerDayProps) => {
        return <DateRangePickerDay {...dateRangePickerDayProps} />;
    };

    return (
        <div className="modal fade" id="exampleModalDate" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered md">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Свободные даты для бронирования </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <StaticDateRangePicker
                                displayStaticWrapperAs="desktop"
                                label="date range"
                                value={value}
                                onChange={(newValue) => setValue(newValue)}
                                renderDay={renderWeekPickerDay}
                                renderInput={(startProps, endProps) => (
                                    <React.Fragment>
                                        <TextField {...startProps} />
                                        <Box sx={{ mx: 2 }}> to </Box>
                                        <TextField {...endProps} />
                                    </React.Fragment>
                                )}
                            />
                        </LocalizationProvider>
                        <div className="btn_date">
                            <button type="button" className="btn btn-primary">Применить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DateBike;