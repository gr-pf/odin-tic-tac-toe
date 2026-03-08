export function askName() {
  const name = prompt("What is your name ?");
  return name;
}

export function askMark() {
  let mark;
  while (!!["X", "O"].includes(mark)) {
    mark = prompt("What mark do you choose ?");
  }
  return mark;
}
