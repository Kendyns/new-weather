import React from "react";

import "./Search.css";


export default function Search(){
    return(
        <div>
            <form id="location-serach">
                <input type="search" placeholder="Search for location" autoFocus="off" autoCapitalize="off" />
                <input type="submit" value="Serach" />
                <input type="submit" value="Current" />
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary degree cel" id="cel">
                        °C
                    </button>
                    <button type="button" className="btn btn-secondary degree far" id="far">
                        °F
                    </button>
                </div>
            </form>
            <div className="mainweather">
                <div className="row">
                    <div class="col-4">
                        <h2>Calgary</h2>
                        <h4>Wednesday</h4>
                        <h4> 5:24 pm</h4>
                    </div>
                    <div class="col-4">
                        <h2>6°C </h2>
                        <h3>Overcast</h3>
                        <h6> Wind: 4 km/hr</h6>
                    </div>
                    <div class="col-4">
                        <i className="fas fa-cloud"></i>
                    </div>
                </div>
            </div>
            <div className="forecast">
               <div className="row">
      <div className="col">
        <p className="day1">Thursday</p>
        <span className="futWea">
          <i className="fas fa-cloud"></i>
        </span>
        <h4 className="future temp1">
          <span className="curr1">4</span>°C
        </h4>
      </div>
      <div className="col">
        <p className="day2">Friday</p>
        <span className="futWea">
          <i className="far fa-snowflake"></i>
        </span>
        <h4 className="future temp2">
          <span className="curr2">-8</span>°C
        </h4>
      </div>
      <div className="col">
        <p className="day3">Saturday</p>
        <span className="futWea">
          <i className="fas fa-sun"></i>
        </span>
        <h4 className="future temp3">
          <span className="curr3">5</span>°C
        </h4>
      </div>
      <div className="col">
        <p className="day4">Sunday</p>
        <span className="futWea">
          <i className="fas fa-cloud-sun"></i>
        </span>
        <h4 className="future temp4">
          <span className="curr4">3</span>°C
        </h4>
      </div>
      <div className="col">
        <p className="day5">Monday</p>
        <span className="futWea">
          <i className="far fa-snowflake"></i>
        </span>
        <h4 className="future temp5">
          <span className="curr5">-18</span>°C
        </h4>
      </div>
    </div> 
            </div>
        </div>
    );
}