type PaymentData = { 

 transactionId:string; 

 amount:number; 

 currency:string; 

 status?:string; 

 contractType?:string; 

}; 

let payment1:PaymentData={ 

 transactionId: "TXN001", 

 amount: 600000, 

 currency: "VND", 

 contractType: "3B" 

}; 

type ArrayTransaction = {

}