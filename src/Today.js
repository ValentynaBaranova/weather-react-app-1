export default function Today() {
  let dateGen = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dateGen.getDay()];
  let hour = dateGen.getHours();
  if (hour <= 9) {
    hour = "0" + hour;
  }
  let min = dateGen.getMinutes();
  if (min <= 9) {
    min = "0" + min;
  }

  return (
    <li>
      {" "}
      {day}, {hour}:{min}
    </li>
  );
}
