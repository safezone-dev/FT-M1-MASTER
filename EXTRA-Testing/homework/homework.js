const layout = [
  [
    //A
    { type: "VIP", booked: false },
    { type: "VIP", booked: true },
    { type: "VIP", booked: true },
    { type: "VIP", booked: false },
  ],
  [
    //B
    { type: "NORMAL", booked: false },
    { type: "VIP", booked: true },
    { type: "VIP", booked: false },
    { type: "NORMAL", booked: false },
  ],
  [
    //C
    { type: "NORMAL", booked: false },
    { type: "NORMAL", booked: true },
    { type: "NORMAL", booked: true },
    { type: "NORMAL", booked: false },
  ],
  [
    //D
    { type: "ECONOMIC", booked: true },
    { type: "NORMAL", booked: true },
    { type: "NORMAL", booked: true },
    { type: "ECONOMIC", booked: false },
  ],
  [
    //E
    { type: "ECONOMIC", booked: false },
    { type: "ECONOMIC", booked: true },
    { type: "ECONOMIC", booked: false },
    { type: "ECONOMIC", booked: false },
  ],
];

function checkSeatStatus(row, num) {
  if (typeof row !== "string")
    throw new TypeError("First parameter is not a string");
  if (typeof num !== "number")
    throw new TypeError("Second parameter is not a number");
  const rowPosition = getRowNumber(row);
  const column = layout[rowPosition];
  const seat = column[num];
  return seat.booked; 
}

function getRowNumber(letter) {
  return letter.charCodeAt() - 65;
}

function book(row, num) {
  if (checkSeatStatus(row, num))
    // return "Seat in " + row + num + " is already booked";
    return `Seat in ${row}${num} is already booked`;
  const rowPosition = getRowNumber(row);
  const column = layout[rowPosition];
  const seat = column[num];
  seat.booked = true;
  return "Seat in " + row + num + " successfully booked";
}

module.exports = { checkSeatStatus, getRowNumber, book };
