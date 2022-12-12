function getCompleted(part, total) {
  const getSeconds = (time) => {
    const [hours, minutes, seconds] = time.split(":");
    return Number(hours * 3600) + Number(minutes * 60) + Number(seconds);
  };

  const mcd = (div, subs) => (subs === 0 ? div : mcd(subs, div % subs));

  const taskPartDuration = getSeconds(part);
  const taskTotalDuration = getSeconds(total);
  const mcdTime = mcd(taskTotalDuration, taskPartDuration);

  return `${taskPartDuration / mcdTime}/${taskTotalDuration / mcdTime}`;
}

console.log("01:00:00", "03:00:00", getCompleted("01:00:00", "03:00:00")); // '1/3'
console.log("02:00:00", "04:00:00", getCompleted("02:00:00", "04:00:00")); // '1/2'
console.log("01:00:00", "01:00:00", getCompleted("01:00:00", "01:00:00")); // '1/1'
console.log("00:10:00", "01:00:00", getCompleted("00:10:00", "01:00:00")); // '1/6'
console.log("01:10:10", "03:30:30", getCompleted("01:10:10", "03:30:30")); // '1/3'
console.log("03:30:30", "05:50:50", getCompleted("03:30:30", "05:50:50")); // '3/5
