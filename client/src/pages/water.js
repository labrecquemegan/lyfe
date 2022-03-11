import React from "react";
import ReactDOM from 'react-dom';
import Calendar from 'react-github-contribution-calendar';

var values = {
  '2016-06-23': 1,
  '2016-06-26': 2,
  '2016-06-27': 3,
  '2016-06-28': 4,
  '2016-06-29': 4
}
var until = '2016-06-30';



// var elem = document.getElementById('app');
// ReactDOM.render(<Calendar values={values} until={until} />, elem);

const Water = () => {
  return (
    <>
    <div className='page'>
      <div className='container'>
      <div className='row'>
        <div >
        <p><Calendar values={values} until={until} /></p>
      
          <p>tehbhjewbicwe</p>
        </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Water;
