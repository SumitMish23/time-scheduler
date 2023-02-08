const moment = require("moment");

const events = [
  {
    start: "Wed, 03 Mar 2021 04:00:15 GMT",
    end: "Wed, 03 Mar 2021 05:00:15 GMT",
  },
  {
    start: "Wed, 03 Mar 2021 06:00:15 GMT",
    end: "Wed, 03 Mar 2021 06:30:15 GMT",
  },
  {
    start: "Wed, 03 Mar 2021 08:30:15 GMT",
    end: "Wed, 03 Mar 2021 09:30:15 GMT",
  },
  {
    start: "Wed, 03 Mar 2021 09:30:15 GMT",
    end: "Wed, 03 Mar 2021 09:50:15 GMT",
  },
  {
    start: "Wed, 03 Mar 2021 12:50:15 GMT",
    end: "Wed, 03 Mar 2021 13:10:15 GMT",
  },
  {
    start: "Wed, 03 Mar 2021 11:30:15 GMT",
    end: "Wed, 03 Mar 2021 12:15:15 GMT",
  },
  {
    start: "Wed, 03 Mar 2021 13:30:15 GMT",
    end: "Wed, 03 Mar 2021 14:00:15 GMT",
  },
  {
    start: "Wed, 03 Mar 2021 15:00:15 GMT",
    end: "Wed, 03 Mar 2021 15:30:15 GMT",
  },
];
const start = moment("Wed, 03 Mar 2021 05:00:15 GMT");
const end = moment("Wed, 03 Mar 2021 05:30:15 GMT");

//Function to find available slot within the given time ranges.
function findAvailableTimes(start, end, events) {
  let availableSlotsArray = [];
  for (let i = 0; i < events.length; i++) {
    if (events.start !== start && events[i + 1] !== undefined) {
      //Logic to get available time intervals between 2 scheduled time
      availableSlotsArray.push({
        start: events[i].end,
        end: events[i + 1].start,
      });
    }
  }
  return availableSlotsArray;
}
console.log("Available time slots within the scheduled time are :-");
console.log(findAvailableTimes(start, end, events));
