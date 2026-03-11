export function askName() {
  const name = prompt("What is your name ?");
  return name;
}

export function askMark() {
  let mark;
  while (!["X", "O"].includes(mark)) {
    mark = prompt("What mark do you choose ?");
  }
  return mark;
}

export function askMove() {
  let row;
  let column;
  while (!["0", "1", "2"].includes(row)) {
    row = prompt("What row do you choose ?");
  }
  while (!["0", "1", "2"].includes(column)) {
    column = prompt("What column do you choose ?");
  }
  return [row, column];
}
