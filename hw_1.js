// //Task 1
// let userName = prompt("Enter your name");
// alert(`Hello, ${userName}!`);

// //Task 2
// let yearOfBirth = Number(prompt("Enter your year of birth"));
// const year = 2025
// alert(`You are ${year - yearOfBirth} years old!`);

// //Task 3
// let sideLength = Number(prompt("Enter length of a square side"))
// alert(`Perimeter = ${sideLength * 4}`)

// //Task 4
// let radius = Number(prompt("Enter radius of circle"))
// alert(`Area of circle = ${radius ** 2 * 3.14} cm`)

// //Task 5
// let distance = Number(prompt("Ender distance between cities"))
// let hours = Number(prompt("How many hours do you plan to get there?"))
// alert(`You need to go ${distance / hours} km/h`)

// //Task 6
// const euroExchangeRate = 1.05
// let usd = Number(prompt("Enter amount in USD"))
// alert(`You will get ${(usd / euroExchangeRate).toFixed(2)} euro`)

// //Task 7
// let fileSize = 820
// let flashDriveCapacity = Number(prompt("Enter flash drive capacity in GB:"));
// alert(`You can save ${(flashDriveCapacity * 1024 / fileSize).toFixed(0)} files with size of 820MB`)

// //Task 8
// const walletAmount = Number(prompt("Enter your wallet amount:"));
// const chocolatePrice = Number(prompt("Enter chocolate price:"));
//
// let chocolates = 0;
// let remainingAmount = walletAmount;
//
// while (remainingAmount >= chocolatePrice) {
//     chocolates++;
//     remainingAmount -= chocolatePrice;
// }
//
// alert(`You can buy ${chocolates} chocolates. Remaining amount will be ${remainingAmount.toFixed(2)}.`);

// //Task 9
// let number = parseInt(prompt("Enter 3 digits number"));
//
// let lastDigit = number % 10;
// let middleNumber = (number % 100 - lastDigit) / 10;
// let firstDigit = (number - number % 100) / 100;
// let reversedNumber = lastDigit * 100 + middleNumber * 10 + firstDigit;
//
// alert("Reversed number: " + reversedNumber);

// // Task 10
// let number = Number(prompt("Enter your number:"));
//
// alert(number % 2 === 0 && "Even number" || "Odd number");

