class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Case {
    constructor(title, years, months, days, minAge = 18, maxAge = 75) {
        this.title = title;
        this.years = years;
        this.months = months;
        this.days = days;
        this.minAge = minAge;
        this.maxAge = maxAge;
    }
    computeReleaseDate() {
        const currentDate = new Date();
        const futureDate = new Date(
            currentDate.getFullYear() + this.years,
            currentDate.getMonth() + this.months,
            currentDate.getDate() + this.days
        );
        return futureDate;
    }
}
class Defendant extends Person {
    constructor(name, age) {
        super(name, age);
        this.legalCase = null;
    }
    receiveCase(courtCase) {
        this.legalCase = courtCase;
    }
}
class Prosecutor extends Person {
    prosecute(defendant, courtCase) {
        defendant.receiveCase(courtCase);
    }
}

class TrialCourt {
    initiateTrial(defendant, prosecutor) {
        console.log(`Name: ${defendant.name}`);
        console.log(`Age: ${defendant.age} years old`);
        console.log(`Case Title: ${defendant.legalCase.title}`);
        console.log(`Filed by: ${prosecutor.name}`);
        if (defendant.age < defendant.legalCase.minAge || defendant.age > defendant.legalCase.maxAge) {
            console.log(`Verdict: NOT GUILTY`);
        } else {
            console.log(`Verdict: GUILTY`);
            const releaseDate = defendant.legalCase.computeReleaseDate();
            console.log(`Release date: ${releaseDate.toDateString()}`);
        }
    }
}

// Case 1====
const prosecutor = new Prosecutor("John", 30);
const defendant1 = new Defendant("Mitch", 5);
const case1 = new Case("Malicious Mischief", 5, 3, 2, 18, 75);
//case 2====
const prosecutor2 = new Prosecutor("Andrew", 30);
const defendant2 = new Defendant("Mathew", 25);
const case2 = new Case("Murder", 10, 3, 2);

prosecutor.prosecute(defendant1, case1);
prosecutor2.prosecute(defendant2, case2);

const trialCourt = new TrialCourt();
trialCourt.initiateTrial(defendant1, prosecutor);
console.log("\n");
trialCourt.initiateTrial(defendant2, prosecutor2);