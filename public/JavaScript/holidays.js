
async function main() {
  const dates = await fetchLastFiveMidsummerDays();
  renderMidsummerDates(dates);
}





function renderMidsummerDates(dates) {
  const listElements = dates.map(date => {
    const li = document.createElement('li');
    li.textContent = date;
    return li;
  })
  const ul = document.querySelector('ul');
  ul.append(...listElements);
 }

async function fetchLastFiveMidsummerDays() {
  const currentYear = new Date().getFullYear();

  const midsummerDates = [];
  for (let year = currentYear; year > currentYear - 5; year--) {
    const midsummerDate = await fetchMidsummerDay(year);
    midsummerDates.push(midsummerDate);
  }
  return midsummerDates;
}

async function fetchMidsummerDay(year) {
  const url = `https://sholiday.faboul.se/dagar/v2.1/${year}/06`;
  const response = await fetch(url);
  const result = await response.json();

  for (const day of result.dagar) {
    if (day.helgdag === "Midsommarafton") {
      return day.datum
    }
  }
}
