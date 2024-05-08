let UserInput = document.getElementById("Date");
UserInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

function CalculateAge() {
    let BirthDate = new Date(UserInput.value);

    let y1 = BirthDate.getFullYear();
    let m1 = BirthDate.getMonth() + 1;
    let d1 = BirthDate.getDate();

    let Today = new Date();

    let y2 = Today.getFullYear();
    let m2 = Today.getMonth() + 1;
    let d2 = Today.getDate();

    let y3, m3, d3;

    y3 = y2 - y1;
    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }
    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }
    result.innerHTML = `Your are <span>${y3}</span> year <span>${m3}</span> month and <span>${d3}</span> days old `;
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
