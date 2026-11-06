let dateOfWeek:string = "Monday";
if (dateOfWeek === "Monday"){
    console.log ("Thu 2");
} else if (dateOfWeek === "Tuesday"){
    console.log ("Thu 3");
} else if (dateOfWeek === "Wednesday"){
    console.log ("thu 4");
} else (dateOfWeek === "Sunday"){
console.log ("Chu nhat");
}

// type dateOfWeek2 = "Monday" |"Tuesday";
// let day:dateOfWeek2;
//  if (day === "Monday")

// let inputNumber:number = 5
// if (inputNumber % 2 !== 0)
// {
//     console.log ("so le");
// } else{
//     console.log ("so chan");
// }


// let paymentMethod:string[] = ["QT", "ND", "QR", "VietQR"];
// console.log(paymentMethod[0]);

// for (let i=0; i < paymentMethod.length; i++){  // i--: ngược với i++  , paymentMethod.length: lấy ra độ rộng ko fix cứng <3
//     console.log(paymentMethod[i]); // i < 3 thì dừng vòng lặp
// }

// for (let i=3; i < paymentMethod.length; i--){   // i đi từ 3 ngược lại
//     console.log(paymentMethod[i]); 
// }

// ///
// // for (let i = paymentmethod.length - 1; i >= 0; i--) {
// //     console.log(paymentmethod[i]);
// // }

// //

// type paymentMethod = ["QT", "ND", "QR", "VietQR"];


// for (let payment = paymentMethod.length - 1 ; payment >=0 ; payment--){  // 
 
//     console.log(paymentMethod[payment]); // 
// }



// map lấy danh sách mã giao dịch trong object transactions
//let transactionId = transactions.map(transaction=>transaction.transactionId);
//console.log("Danh sách giao dịch: " + transactionId);

//filter lấy các giao dịch SUCCESS

//let isHaveStatus = transactions.filter(transaction=>transaction.status === "SUCCESS");
//console.log(isHaveStatus);


// arrNumbers: number[] = [2,5,6,8,9,11];
// dungf for vaf if else ddeer in ra soos chawns, 

// let arrNumber:number[] = [2,5,6,8,9,11];
// for (let inputNumber= arrNumber.length - 1 ; inputNumber <=arrNumber.length ; inputNumber ++ ){
// if (inputNumber % 2 !== 0)
// {
//     console.log ("so le");
// } else{
//     console.log ("so chan");
// };


let arrNumber:number[] = [2,5,6,8,9,11];
for (let i = arrNumber.length - 1; i >= 0; i--) {
   console.log(arrNumber[i]);
}



switch (day) {
      case "Monday":
         console.log("Thu 2");
         break;
      case "Tuesday":
         console.log("Thu 3");
         break;
      case "Wednesday":
         console.log("Thu 4");
         break;
      case "Thursday":
         console.log("Thu 5");
         break;            
      case "Friday":
         console.log("Thu 6");
         break;
      case "Saturday":
         console.log("Thu 7");
         break;            
      case "Sunday":
         console.log("Chu nhat");
         break;   
}  

let gender:string=   "male";
gender === "male" ? console.log("Nam") : console.log("Nu");

type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
let day: DayOfWeek = "Monday";
if (day === "Monday") {
    console.log("Thu 2");
}  else{
   console.log("Khong phai thu 2");
}

// let number:number = 5;`