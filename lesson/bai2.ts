type ArrayTransaction = {
    transactionId: string;
    amount: number;
    currency: string;
    status?: string;
}

let transactions: ArrayTransaction[] = [
    {
        transactionId: "TXN001",
        amount: 500000,
        currency: "VND",
        status: "SUCCESS"
    },

    {
        transactionId: "TXN002",
        amount: 1500000,
        currency: "VND",
        status: "PENDING"
    },

     {
        transactionId: "TXN003",
        amount: 50000,
        currency: "VND",
        status: "FAILED"
    },

     {
        transactionId: "TXN004",
        amount: 2500000,
        currency: "VND",
        status: "SUCCESS"
    },
     {
        transactionId: "TXN005",
        amount: 0,
        currency: "USD",
        status: "SUCCESS"
    },
];

//Bai3
//Số lượng giao dịch
//console.log("Tổng số lượng giao dịch: " + transactions.length);
//Giao dịch đầu tiên
//console.log("Giao dịch đầu tiên là: " + transactions[0].transactionId + "  " + transactions[0].amount + " " + transactions[0].currency + "  " + transactions[0].status);
//Mã giao dịch thứ 3
//console.log("Mã giao dịch thứ 3 là: " + transactions[2].transactionId);
//Trạng thái của giao dịch cuối
//console.log("Trạng thái của giao dịch cuối là: " + transactions[4].status);
//Tổng tiền của giao dịch 1 và giao dịch 2
//console.log("Tổng tiền của giao dịch 1 và giao dịch 2 là: " + (transactions[0].amount + transactions[1].amount));

//Bai4

// map lấy danh sách mã giao dịch trong object transactions
//let transactionId = transactions.map(transaction=>transaction.transactionId);
//console.log("Danh sách giao dịch: " + transactionIds);

//filter lấy các giao dịch SUCCESS

//let isHaveStatus = transactions.filter(transaction=>transaction.status === "SUCCESS");
//console.log(isHaveStatus);


// Sử dụng cả filter và map để lấy ID của các giao dịch SUCCESS và có currency === "VND" → ["TXN001", "TXN004"]
// let isHaveTransactionSuccess = transactions.filter(transaction=>transaction.status === "SUCCESS" && transaction.currency === "VND");
// let transactionIdVnd = isHaveTransactionSuccess.map(transaction=>transaction.transactionId);
// console.log(transactionIdVnd);

let isHaveTransactionFail = transactions.filter(transaction=>transaction.status === "FAILED" && transaction.currency === "VND");
console.log(isHaveTransactionFail[0]);