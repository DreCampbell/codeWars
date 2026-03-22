/*
7 Kyu
Driing Licence

Task
The UK driving number is made up from the personal details of the driver. The individual letters and digits can be code using the below information
Rules
1–5: The first five characters of the surname (padded with 9s if less than 5 characters)

6: The decade digit from the year of birth (e.g. for 1987 it would be 8)

7–8: The month of birth (7th character incremented by 5 if driver is female i.e. 51–62 instead of 01–12)

9–10: The date within the month of birth

11: The year digit from the year of birth (e.g. for 1987 it would be 7)

12–13: The initial letter of the first name and middle name, padded with a 9 if no middle name

14: Arbitrary digit – usually 9, but decremented to differentiate drivers with the first 13 characters in common. We will always use 9

15–16: Two computer check digits. We will always use "AA"
Your task is to code a UK driving license number using an Array of data. The Array will look like

data = ["John","James","Smith","01-Jan-2000","M"];
Where the elements are as follows

0 = Forename
1 = Middle Name (if any)
2 = Surname
3 = Date of Birth (In the format Day Month Year, this could include the full Month name or just shorthand ie September or Sep)
4 = M-Male or F-Female
You will need to output the full 16 digit driving license number, in all UPPERCASE.

//PARAMETERS: an array of a person's details, name, dob, and sex

//RETURNS: their unique driver's licence number

//EXAMPLES: 
    let data = ["John", "James", "Smith", "01-Jan-2000", "M"];
    (driver(data), "SMITH001010JJ9AA");

    data = ["Johanna", "", "Gibbs", "13-Dec-1981", "F"];
    (driver(data), "GIBBS862131J99AA");

    data = ["Andrew", "Robert", "Lee", "02-September-1981", "M"];
    (driver(data), "LEE99809021AR9AA");

//PSEUDOCODE: 
*/

function driver(data) {
  let name = (data[2].slice(0, 5).toUpperCase() + "99999").slice(0, 5);
  let dob = new Date(data[3]);
  let decade =
    dob.getYear().toString().length == 2
      ? dob.getYear().toString()[0]
      : dob.getYear().toString()[1];
  let month =
    data[4] == "M"
      ? ("0" + (dob.getMonth() + 1).toString()).slice(-2)
      : dob.getMonth() + 51;
  let day = ("0" + dob.getDate().toString()).slice(-2);
  let yearDig = dob.getYear().toString().slice(-1);
  let inits = data[0][0] + (data[1] == "" ? "9" : data[1][0]);
  let arb1 = "9";
  let arb2 = "AA";
  return name + decade + month + day + yearDig + inits + arb1 + arb2;
}

let data = ["John", "James", "Smith", "01-Jan-2000", "M"];
console.log(driver(data), "SMITH001010JJ9AA");

data = ["Johanna", "", "Gibbs", "13-Dec-1981", "F"];
console.log(driver(data), "GIBBS862131J99AA");

data = ["Andrew", "Robert", "Lee", "02-September-1981", "M"];
console.log(driver(data), "LEE99809021AR9AA");
