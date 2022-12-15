let currentMonth = 0;

function displayCalendar() {
    const calendarDisplay = document.querySelector(".calendarDisplay");
    const monthDisplay = document.querySelector(".monthDisplay");
    const weekArray = ["måndag", "tisdag", "Onsdag", "torsdag", "fredag", "lördag", "söndag"];

    const date = new Date();

    if ( currentMonth !== 0 ) {
        date.setMonth( new Date().getMonth() + currentMonth );
    }

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date( year, month + 1, 0).getDate();

    monthDisplay.textContent = `${date.toLocaleString("sv-SE", { month: "long", year: "numeric"})}`;

    const dateString = firstDayOfMonth.toLocaleDateString("sv-SE", {
        weekday: "long",
        year: "numeric",
        month: "numeric",
        day: "numeric",
    });

    const emptyCalendarSpace = weekArray.indexOf(dateString.split(", ")[0]);

    calendarDisplay.innerHTML = "";

    for ( let i = 1; i <= emptyCalendarSpace + daysInMonth; i++) {
        const calendarDay = document.createElement("div");
        calendarDay.classList.add("calendarDay");

        if ( i > emptyCalendarSpace ) {
            calendarDay.innerText = i - emptyCalendarSpace;

            calendarDay.addEventListener("click", () => {

            })
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