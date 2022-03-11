import React from 'react';
import moment from 'moment';


const dayNames = {
    1: 'S',
    2: 'M',
    3: 'T',
    4: 'W',
    5: 'R',
    6: 'F',
    7: 'S'
}

// changes color of cell based on workload
function Fill({ date, alpha }) {
    let style = {
        backgroundColor: `rgba(0, 256, 0, ${alpha})`
    };

    return (
        <div className='timeline-cells-fill' style={style}></div>
    )
}

// reads the months
function Month({ startDate, index }) {
    let date = moment(startDate.add(index * 7, 'day'));
    let monthName = date.format('MMM');

    return (
        <div className={`timeline-months-month $monthName`}>
            {monthName}
        </div>
    )
}

// will show the weeks that include the 3 weekday names
function WeekDay({ index }) {
    return (
        <div className='timeline-weekdays-weekday'>
        {dayNames[index]}
        </div>
    )
}




function Timeline({ range,data }) {
    
    let days = Math.abs(range[0].diff(range[1], 'days'));
    let cells = Array.from(new Array(days));
    let weekDays = Array.from(new(7));
    let months = Array.from(new Array(Math.floor(days / 7)));

    let min = Math.min(0, ...data.map(d => d.value));
    let max = Math.max(...data.map(d => d.value));

    let colorMultiplier = 1 / (max-min);

    let startDate = range[0];
    let dayFormat = 'DDMMYYY'

    return (
        <div className='timeline'>

            <div className='timeline-months'>
                {months.map(( _, index ) => <Month key={index} index={index} startDate={startDate} />)}
            </div>   

            <div className='timeline-body'>

                <div className='timeline-weekDays'>
                    {weekDays.map(( _, index) => <WeekDay key={index} index={index} startDate={startDate} />)}
                </div>    

                <div className='timeline-cells'>
                    {cells.map(( _, index) => {
                        let date = moment(startDate).add(index, 'day');
                        let dataPoint = data.find(d => moment(date).format(dayFormat) === moment(d.date).format(dayFormat));
                        let alpha = colorMultiplier * dataPoint.value;

                        return (
                            <Fill
                                key={index}
                                index={index}
                                date={date}
                                alpha={alpha}
                            />
                        );
                        }
                    )}
                </div>
            </div>
        </div>
    )}



export default Calendar;