// let val = prompt("Enter the number");
// for(let i=1; i<=val;i++){
//     if(i%2 === 0){
//         console.log(`${i} is Even`);
//     }
//     else{
//         console.log(`${i} is Odd`);
//     }
// }

// function anu(v1,v2){
//     console.log(v1 + v2);
// }

// anu(1,2);
// anu(2 , 9);

// Highe order function 

// function abc(){
//     return function(){
//         console.log("Anuraj");
//     };
// }

// abc()();

// Simple Booking Form Handler
document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const car = document.getElementById("car").value;
    const pickup = document.getElementById("pickup").value;
    const dropoff = document.getElementById("dropoff").value;
    if (car && pickup && dropoff && pickup <= dropoff) {
        document.getElementById("confirmation").textContent = `Success! You have reserved a ${ car } from ${ pickup } to ${ dropoff }.`;
        this.reset();
    } else {
        document.getElementById("confirmation").textContent =
            "Please fill all fields correctly.";
    }
});