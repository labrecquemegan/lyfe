import React from "react";
import moment from "moment";
import ReactDOM from "react-dom";

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
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    height: '20px',
    width: '20px',
    border: '1px solid rgba(0,0,0,0.1)',
    margin: '2px',
    borderRadius: '50px',
    backgroundColor: `rgba(0, 256, 0, ${alpha})`,
  };

  return <div className="timeline-cells-fill" style={style}></div>;
}

// reads the months
function Month({ startDate, index }) {
  let date = moment(startDate.add(index * 5, "day"));
  let monthName = date.format("MMM");

  let style = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: '#{(15 + 2) * 8}px',
  }
  return (
    <div className='timeline-months-month' style={style}>{monthName}</div>
  );
}

// will show the weeks that include the 3 weekday names
function WeekDay({ index }) {
    let style = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: '#{(15 + 2) * 8}px',
        margin: '1%',
        justifyContent: 'space-evenly',
        width: '20px'
      }

  return <div className="timeline-weekdays-weekday" style={style}>{dayNames[index]}</div>;
}

function Timeline({ range, data }) {
  let days = Math.abs(range[0].diff(range[1], "days"));
  let cells = Array.from(new Array(days));
  let weekDays = Array.from(new Array(7));
  let months = Array.from(new Array(Math.floor(days/7)));

  let min = Math.min(0, ...data.map((d) => d.value));
  let max = Math.max(...data.map((d) => d.value));

  let colorMultiplier = 1 / (max - min);

  let startDate = range[0];
  let dayFormat = "DDMMYYY";

  let style = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
    height: 'height: #{(15 + 2) * 8}px',
    maxWidth: '175px'
  }

  let timelineStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    // marginTop: '100px'
  }

  return (
    <div className="timeline" style={timelineStyle}>
      {/* <div className="timeline-months">
        {months.map((_, index) => (
          <Month key={index} index={index + 1} startDate={startDate} />
        ))}
      </div> */}

      <div className="timeline-body">
        <div className="timeline-weekDays" style={style}>
          {weekDays.map((_, index) => (
            <WeekDay key={index} index={index} startDate={startDate} />
          ))}
        </div>

        <div className="timeline-cells" style={style}>
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
  // 1 year range
  let startDate = moment().add(-30, 'days');
  let dateRange = [startDate, moment()];

  let data = Array.from(new Array(30)).map((_, index) => {
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
