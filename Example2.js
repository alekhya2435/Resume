function calculateFare(distance) {
    let fare = 0;
    if (distance <= 4) {
      fare = 30;
    } else if (distance <= 9) {
       fare = 30 + (distance - 4) * 10;
    } else if (distance <= 19) {
      fare = 30 + (5 * 10) + (distance - 9) * 15;
    } else {
        fare = 30 + (5 * 10) + (10 * 15) + (distance - 19) * 20;
    }
    return fare;
}
let distance = 19.5;
console.log("Fare for " + distance + " km = Rs." + calculateFare(distance));




//while loop 

//let i=0;
//while(i<3){
  //  console.log(i);
  //  i++;
//}


//i=1;
//num=5
//while(i<=10){
//    console.log(num +"*"+ i+ "="+ num * i)
  //  i++;
//}

let i=0;
do{
   console.log(i);
    i++;
}while(i<3);














