console.log(new Date());
let startDate = new Date("11/06/2000");
let dateValue= new Date();
let careerLength = Math.ceil(Math.abs(dateValue - startDate) / (1000 * 60 * 60 * 24)); 
document.querySelector("#startDate").innerHTML += startDate.toDateString();
document.querySelector("#dateStamp").innerHTML += dateValue.toDateString();
document.querySelector("#careerLength").innerHTML += careerLength + " days";
console.log(careerLength);