import React from 'react'
import './calsstats.scss'

export default function CalStats() {
  return (
    <section className="calstats-container">
      <div className="row">
        <h2>Your Calorie Counter</h2>
        <div className="todays-cals">
            <h2>
                Today's Total Calories
            </h2>
           <input type="text" /> 
        </div>
        <div className="remaining-cals">
            <h2>
                Remaining Calories For The Day
            </h2>
           <span>346 Calories</span>
        </div>
        </div>
    </section>
  )
}
