import React from "react";
import moment from "moment";
import "./calendar.scss";
import { ADD_WATER } from '../../utils/mutations';



const dayNames = {
  0: "S",
  1: "M",
  2: "T",
  3: "W",
  4: "R",
  5: "F",
  6: "S",
};


// changes color of cell based on workload
function Cell({ date, alpha }) {
 let style = {
        backgroundColor: `rgba(0, 256, 0, ${alpha})`
    }

  return <div className='timeline-cells-cell' style={style}></div>;
}

// will show the weeks that include the 7 weekday names
function WeekDay({ index }) {
  
  return <div className='timeline-weekdays-weekday'>{dayNames[index]}</div>;
}

function Timeline({ range, data }) {
  let days = Math.abs(range[0].diff(range[1], "days"));
  let cells = Array.from(new Array(days));
  let weekDays = Array.from(new Array(7));

  let min = Math.min(0, ...data.map((d) => data.value));
  let max = Math.max(...data.map((d) => data.value));

  let colorMultiplier = 1 / (max - min);

  let startDate = range[0];
  let dayFormat = "DDMMYYY";

  return (
    <div className='timeline'>
      <div className="timeline-body">
        <div className="timeline-weekdays">
          {weekDays.map((_, index) => (
            <WeekDay key={index} index={index} startDate={startDate} />
          ))}
        </div>

        <div className="timeline-cells">
          {cells.map((_, index) => {
            let date = moment(startDate).add(index, "day");
            let dataPoint = data.find(
              (d) =>
                moment(date).format(dayFormat) ===
                moment(d.date).format(dayFormat)
            );
            let alpha = colorMultiplier * dataPoint.value;

            return <Cell key={index} index={index} date={date} alpha={alpha} />;
          })}
        </div>
        </div>
      </div>
  );
}

function App() {
  // 1 month range
  let startDate = moment().add(-28, 'days');
  let dateRange = [startDate, moment()];

  let data = Array.from(new Array(28)).map((_, index) => {
    return {
      date: moment(startDate).add(index, "day"),
      value: Math.floor(Math.random() * 100),
    };
  });
  return <Timeline range={dateRange} data={data} />;
}

const Calendar = () => {
    return <App />;
};

export default Calendar;
