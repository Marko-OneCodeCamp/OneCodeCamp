function task1() {
    const dateOfBirth = prompt("Enter your date of birth (MM/DD/YYYY):");
    const [birthMonth, birthDate, birthYear] = dateOfBirth.split('/').map(Number);
    const p = document.querySelector('#showAge');
    const isValidMonth = birthMonth >= 1 && birthMonth <= 12;
    const isValidDay = birthDate >= 1 && birthDate <= 31;
    if (!isValidMonth || !isValidDay) {
        console.log("Invalid month or day.");
        return;
    }
    const daysInMonth = new Date(birthYear, birthMonth, 0).getDate();
    if (birthDate > daysInMonth) {
        console.log("Invalid day for the given month.");
        return;
    }
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthYear - (currentDate.getMonth() + 1 < birthMonth || (currentDate.getMonth() + 1 === birthMonth && currentDate.getDate() < birthDate) ? 1 : 0);
    console.log("Your age is: " + age);
    p.innerText = `Your age is: ${age} `;
    if (currentDate.getMonth() + 1 === birthMonth && currentDate.getDate() === birthDate) {
        console.log("Happy Birthday!");
        p.innerText += " - Happy Birthday!";
    }
    const isLeapYear = (birthYear % 4 === 0 && birthYear % 100 !== 0) || (birthYear % 400 === 0);
    if (isLeapYear) {
        console.log("Leap year! Happy Birthday-though you celebrate your birthday on the 28th😂");
        p.innerText += " Leap year! Happy Birthday-though you celebrate your birthday on the 28th😂";
        const leapYearAge = age + 1;
        console.log("Your real age (considering leap year) is: " + leapYearAge);
        p.innerText += ` Your real age (considering leap year) is: ${leapYearAge}`;
    }
}
