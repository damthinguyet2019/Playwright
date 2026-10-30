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
//console.log("Danh sách giao dịch: " + transactionId);

//filter lấy các giao dịch SUCCESS

//let isHaveStatus = transactions.filter(transaction=>transaction.status === "SUCCESS");
//console.log(isHaveStatus);


// Sử dụng cả filter và map để lấy ID của các giao dịch SUCCESS và có currency === "VND" → ["TXN001", "TXN004"]
// let isHaveTransactionSuccess = transactions.filter(transaction=>transaction.status === "SUCCESS" && transaction.currency === "VND");
// let transactionIdVnd = isHaveTransactionSuccess.map(transaction=>transaction.transactionId);
// console.log(transactionIdVnd);

// let isHaveTransactionFail = transactions.filter(transaction=>transaction.status === "FAILED" && transaction.currency === "VND");
// console.log(isHaveTransactionFail[0]);
// cách gộp lấy ra success và VND
// let isHaveTransactionSuccess = transactions.filter(transaction=>transaction.status === "SUCCESS" && transaction.currency === "VND").map(transaction=>transaction.transactionId)


let transactionsDomestic = ["TXN001", "TXN006"];
transactionsDomestic.unshift("TXN005"); // Thêm  phần tử vào đầu mảng.
//transactionsDomestic.push("TXN008");// Push: Thêm  phần tử vào cuối mảng, có thể thêm nhiều
transactionsDomestic.splice(1,0,"test123")  // thêm  phần tử vào 1 vị trí bất kỳ được chỉ định
console.log(transactionsDomestic); //in ra [ 'TXN001', 'TXN006', 'TXN008' ]



// Cú pháp: arr.splice(startIndex, deleteCount, item);
//startIndex  , giá trị = 1 => 	Vị trí bắt đầu thao tác (index = 1 là phần tử thứ 2)
//deleteCount , 	0	=> Số phần tử cần xóa. 0 nghĩa là không xóa
// item	 , "TXN003"	 => Phần tử muốn thêm vào mảng

// splice() làm thay đổi trực tiếp mảng gốc.
// splice() trả về mảng chứa các phần tử đã xóa, không phải mảng sau khi thêm.
// Index bắt đầu từ 0, không phải 1.

// 1. Thêm phần tử tại index 1
transactionsDomestic.splice(1, 0, "TXN003");

// 2. Xóa 1 phần tử tại index 1
transactionsDomestic.splice(1, 1);

// 3. Thay thế phần tử tại index 1
transactionsDomestic.splice(1, 1, "TXN003");