

type Hours = {
  id: string,
  day: string,
  open: string,
  close: string
}

const hMonday: Hours = {
  id: '1',
  day: "Monday",
  open: "9:00AM",
  close: " - 6:00PM"
}

const hTuesday: Hours = {
  id: '2',
  day: "Tuesday",
  open: "9:00AM",
  close: " - 6:00PM"
}
const hWednesday: Hours = {
  id: '3',
  day: "Wednesday",
  open: "9:00AM",
  close: " - 6:00PM"
}
const hThursday: Hours = {
  id: '4',
  day: "Thursday",
  open: "9:00AM",
  close: " - 6:00PM"
}
const hFriday: Hours = {
  id: '5',
  day: "Friday",
  open: "9:00AM",
  close: " - 6:00PM"
}
const hSaturday: Hours = {
  id: '6',
  day: "Saturday",
  open: "9:00AM",
  close: " - 2:00PM"
}
const hSunday: Hours = {
  id: '7',
  day: "Sunday",
  open: "CLOSED",
  close: ""
}


export function useHours() {

  const hoursOfOperation: Hours[] = [];
  hoursOfOperation.push(hMonday);
  hoursOfOperation.push(hTuesday);
  hoursOfOperation.push(hWednesday);
  hoursOfOperation.push(hThursday);
  hoursOfOperation.push(hFriday);
  hoursOfOperation.push(hSaturday);
  hoursOfOperation.push(hSunday);


  return { hoursOfOperation }
};