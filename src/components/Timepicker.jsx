import React from "react";
import "./Timepicker.css";
const Timepicker = () => {
  return (
    <div className="main">
      <div className="heading">Find a free time</div>
      <div className="scheduler">
        <div className="date">
          <label for="date">Date</label>
          <input type="date" required />
        </div>

        <div className="time">
          <label for="time">Start Time</label>
          <input type="time" required />
        </div>

        <div className="duration">
          <label for="date">Duration</label>
          <input type="date" required />
        </div>
      </div>

      <div className="submit-button">
        <button>Find</button>
      </div>

      <div className="time-slots">
        <div className="rectangles">
            <p className="slot-one">9:30 AM</p>
            <p className="slot-two">10:30 AM</p>
            <p className="slot-three">11:30 AM</p>
        </div>
      </div>

      <div className="status">
        <div className="busy-block"></div> 
        <p>Busy</p>
        <div className="free-block"></div> 
        <p>Free</p>
      </div>
    </div>
  );
};

export default Timepicker;
