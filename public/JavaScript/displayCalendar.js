let currentMonth = 0;

async function fetchholidays(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const url = `https://sholiday.faboul.se/dagar/v2.1/${year}/${month}`;
  const response = await fetch(url);
  const result = await response.json();

  return result;
}

async function displayCalendar() {
  const calendarDisplay = document.querySelector(".calendarDisplay");
  const monthDisplay = document.querySelector(".monthDisplay");
  const weekArray = [
    "måndag",
    "tisdag",
    "onsdag",
    "torsdag",
    "fredag",
    "lördag",
    "söndag",
  ];

  const date = new Date();

  if (currentMonth !== 0) {
    date.setMonth(new Date().getMonth() + currentMonth);
  }
  const holidays = await fetchholidays(date);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  monthDisplay.textContent = `${date.toLocaleString("sv-SE", {
    month: "long",
    year: "numeric",
  })}`;

  const dateString = firstDayOfMonth.toLocaleDateString("sv-SE", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const emptyCalendarSpace = weekArray.indexOf(dateString.split(", ")[0]);

  calendarDisplay.textContent = "";

  for (let i = 1; i <= emptyCalendarSpace + daysInMonth; i++) {
    const calendarDay = document.createElement("div");
    calendarDay.classList.add("calendarDay");
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    const sameDay = `${year}-${month + 1}-${i - emptyCalendarSpace}`;

    if (i > emptyCalendarSpace) {
      if (holidays["dagar"][i - 1 - emptyCalendarSpace]["röd dag"] == "Ja") {
        calendarDay.style.color = "red";
      }

      calendarDay.innerText = i - emptyCalendarSpace;
      let eventCounter = 0;

      const eventDayDiv = document.createElement("div");

      eventDayDiv.classList.add("eventsInDay");

      storedTasks.forEach(task => {
        if (task.date === sameDay) {
          eventCounter++;
        }
      });

      if (eventCounter <= 0) {
        eventDayDiv.style.display = "none";
      }

      eventDayDiv.textContent = eventCounter;

      calendarDay.append(eventDayDiv);

      calendarDay.addEventListener("click", () => {});

      if (holidays["dagar"][i - 1 - emptyCalendarSpace]["helgdag"] != null) {
        t = document.createElement("p");
        calendarDay.appendChild(t);
        t.innerHTML = holidays["dagar"][i - 1 - emptyCalendarSpace]["helgdag"];
        calendarDay.style.color = "red";
      }
    } else {
      calendarDay.classList.add("emptyCalendarSpace");
    }

    calendarDisplay.appendChild(calendarDay);
  }
}

function changeMonthView() {
  document.querySelector(".fa-angle-left").addEventListener("click", () => {
    currentMonth--;
    displayCalendar();
  });
  document.querySelector(".fa-angle-right").addEventListener("click", () => {
    currentMonth++;
    displayCalendar();
  });
}
