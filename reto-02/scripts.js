function countHours(year, holidays) {
  let totalHours = 0;

  holidays.forEach((item) => {
    const [month, day] = item.split("/");
    const date = new Date(year, month - 1, day);

    if (date.getDay() !== 0 && date.getDay() !== 6) {
      totalHours = totalHours + 2;
    }
  });

  return totalHours;
}

const year = 2022;
const holidays = ["01/06", "04/01", "12/25"]; // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

console.log(countHours(year, holidays)); // 2 días -> 4 horas extra en el año
