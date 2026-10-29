TypeScript, Object, Array

Thực hành:

- Open project
- Tạo 1 file đặt tên [example.ts](http://example.ts) trong thư mục tests

file có đuôi .ts: là những file typescript xử lý logic, if else, cộng trừ nhân chia

file .spec: chứa logic test, step

- Cách chạy file: chạy bằng node , chạy trực tiếp file .ts

Mở terminal và gõ lệnh: node .\\tests\\example.ts

tests: tên thư mục

[example.ts](http://example.ts): tên file ts

ví dụ:

```
let name:string = "John Doe";
let age:number = 30;
let name2:string = "Jane Smith";
let age2:number = 25;
console.log(`Name: ${name}, Age: ${age}`);
console.log(`Name: ${name2}, Age: ${age2}`);
=> Mỗi lần viết script sẽ rất dài, cần gom nhóm lại thành chung 1 kiểu dữ liệu, object, tối ưu hơn => để khi log ra chỉ cần dùng 1 câu lệnh có thể in toàn bộ thông tin ra mà không phải log nhiều lần
let: từ khóa khai báo biến, có thể thay đổi dữ liệu
Khi khai báo biến: luôn khai báo kiểu dữ liệu đi cùng biến
Object: dạng đối tượng kiểu key value, có nhiều đối tượng, có nhiều thuộc tính thì phải dùng kiểu này
object: không khai báo kiểu dữ liệu bên trong và phải định nghĩa kiểu dữ liệu cho nó
Kiểu dữ liệu: dùng từ khóa type, đặt tên kiểu dữ liệu thì tên viết hoa chữ cái đầu (Person), định nghĩa 1 kiểu dữ liệu dùng chung
Ví dụ: có nhiều transaction: trans1, trans2 => cần gom nhóm lại để gọi thì khi đó dùng object
ví dụ: ở đoạn mã bên dưới Person là type của person1
các dữ liệu của person1 phải truyền đúng dữ liệu của type đã định nghĩa. type có address: string thì trong let adress không được truyền dữ liệu kiểu number
type Person = {
 name: string;
 age: number;
 address: string;
};
let person1:Person = {
name: "Alice Johnson",
age: 28,
address: "ha noi",
```

//gom hết thông tin vào trong 1 object, thay vì khai báo nhiều biến riêng lẻ.

```
};
console.log(`Name: ${person1.name}, Age: ${person1.age}, Address: ${person1.address}`);
```

Lưu ý:

- Cách copy code vào ô chat hoặc file cmd: gõ 3 dấu huyền cạnh số 1.
- Tên biến phải viết rõ ràng, dễ hiểu, minh bạch nhìn vào dễ hiểu. không viết kiểu Id -> mà đặt = transID
- format: sau mỗi đoạn code thì nên cách ra 1 dòng để giúp nhận biết hết câu lệnh, không bị rối

```
Console.log:
```

- Dùng dấu chấm để lấy thông tin cần lấy ra chứ không lấy toàn bộ object
- Cú pháp: [object.bi](http://object.bi)ến
- khi thực hiện gõ code chỉ cần gõ tên object.(payment1.) thì sẽ tự động gợi ý các trường thông tin cần lấy cho chọn

```
console.log("Giao dich: " + payment1.transactionId + ", Amount: " + payment1.amount + ", Currency: " + payment1.currency + ", Status: " + payment1.status);
```

Kiểu dữ liệu :Type, interface

```
type: thường được sử dụng hơn,
```

interface: kiểu dữ liệu trong API

```
// định nghĩa gender trong type hoặc interface
```

// type chỉ cho phép gender là male hoặc female, interface cho phép gender là male, female hoặc other

```
type Gender = "male" | "female";
```

// chỉ cho người dùng chọn 1 trong 2 giá trị male hoặc female

```
let gender: Gender = "male";
```

// Báo lỗi nếu tạo trùng kiểu dữ liệu Person2, vì type không cho phép trùng tên

```
type Person2 = {
    name: string;
    age: number;
```

```
};
type Person2 = {
       adress: string;
};
```

//interfacce: cho phép khai báo trùng tên, nhưng sẽ gộp các thuộc tính lại với nhau

```
interface Person3 {
    name: string;
    age: number;
```

```
};
interface Person3 {
    gender: string;
}
//interface Person3: bắt phải điền đầy đủ thông tin name, age, gender, nếu thiếu sẽ báo lỗi
const person3: Person3 = {
    name: "John Doe",
    age: 30,
    gender: "male"
};
```

Dấu ? : cho phép dữ liệu optional giống các trường không bắt required trên giao diện, có thể bỏ trống.

không có dấu ? là bắt buộc phải có

```
type Person2 = {
    name: string;
    age: number;
    address?: string; // dấu ? cho phép address là optional, có thể không điền nên person2 có thể không có address, nhưng nếu có thì phải là string
```

```
};
const person2: Person2 = {
    name: "John Doe",
    age: 30,
};
const person5: Person2 = {
    name: "John Doe",
    age: 30,
    address: "123 Main St"
};
Array
```

Mảng: chứa nhiều chuỗi, object, các giá trị cùng loại,

viết trong ngoặc vuông \[\]

```
Index bắt đầu từ 0
```

- Lưu nhiều giá trị vào cùng 1 biến

ví dụ mảng:

```
let meeting:string[] = ["Leader", "Member", "Guest"];
// mảng có cùng kiểu dữ liệu string, có thể truy cập bằng index, index bắt đầu từ 0
```

//nếu truyền dữ liệu khác kiểu string vào mảng sẽ báo lỗi, ví dụ: 123 sẽ báo lỗi

```
bài tập để hiểu
//ví dụ về mảng chứa nhiều object cùng kiểu Transaction, có thể truy cập bằng index, index bắt đầu từ 0
```

//khai báo list transaction gồm 2 transaction, mỗi transaction có nhiều thông tin

//list transaction phải có type

```
//log ra list transaction
```

Cách 1: Tách ra rồi cho từng dữ liệu vào

object có dạng key-value (transId: "123456",)

```
type Transaction = {
 transId: string;
amount: number;
createDate: string;
 transRef: string;
contractType: string;
};
// mang co the chua object
let multipleTransactions: Transaction[] = [
 {
  transId: "123456",
  amount: 100.50,
  createDate: "20/06/2026",
  transRef: "ABC123",
  contractType: "3B",
 },
 {
  transId: "789012",
  amount: 250.75,
  createDate: "25/06/2026",
  transRef: "XYZ789",
  contractType: "3B",
 }
];
console.log(multipleTransactions);
```

Cách 2: Cho thẳng vào array, cho phép khai báo biến transaction1, transaction2, sau đó gán vào mảng multiTransaction2

```
type Transaction = {
 transId: string;
amount: number;
createDate: string;
 transRef: string;
contractType: string;
};
let  transaction1 = {
transId: "123456",
  amount: 100.50,
  createDate: "20/06/2026",
  transRef: "ABC123",
  contractType: "3B",
};
let transaction2 = {
  transId: "789012",
  amount: 250.75,
  createDate: "25/06/2026",
  transRef: "XYZ789",
  contractType: "3B",
};
let multiTransaction2:Transaction[] = [transaction1, transaction2];
Index
```

Lấy 1 biến , thay vì lấy cả mảng biến

```
mảng luôn đánh từ vị trí 0
ví dụ mảng đơn
let meeting:string[] = ["Leader", "Member", "Guest"];
// mảng có cùng kiểu dữ liệu string, có thể truy cập bằng index, index bắt đầu từ 0
```

//nếu truyền dữ liệu khác kiểu string vào mảng sẽ báo lỗi, ví dụ: 123 sẽ báo lỗi

```
console.log(meeting[0]); // in ra "Leader" // biến + vị trí index muốn lấy ra, index bắt đầu từ 0
console.log(meeting[1]); // in ra "Member"
console.log(meeting[2]); // in ra "Guest"
```

ví dụ mảng object

```
let multipleTransactions: Transaction[] = [
 {
  transId: "123456",
  currency: ["VND","USD"],
  createDate: "20/06/2026",
  transRef: "ABC123",
  contractType: "3B",
 },
];
console.log(multipleTransactions[0].currency); // đi từ mảng ra object, in ra currency của transaction đầu tiên
Filter
```

Muốn check xem trong 1 mảng dữ liệu trả về có dữ liệu cần tìm hay không

```
filter dùng để lọc, tìm mảng và nó se trả về 1 mảng mới, nếu không có phần tử nào thỏa mãn điều kiện thì sẽ trả về mảng rỗng
```

ví dụ

//filter lấy các giao dịch SUCCESS

```
let isHaveStatus = transactions.filter(transaction=>transaction.status === "SUCCESS");
console.log(isHaveStatus);
Map: biến đổi data , đổi từ chữ hoa thành chữ thường hoặc ngược lại, đối giá trị trong mảng
```

- Dùng trong trường hợp muốn so sánh dữ liệu trong DB là key với giá trị hiển thị trên UI

ví dụ

```
let meeting3:string[] = ["Leader", "Member", "Guest"];
let newArray = meeting.map(name=>name.toUpperCase()); // map dùng để biến đổi mảng, nó sẽ trả về 1 mảng mới với các phần tử đã được biến đổi, ví dụ ở đây là biến đổi tất cả các phần tử trong mảng meeting thành chữ hoa
console.log(newArray); // in ra ["LEADER", "MEMBER", "GUEST"]
kiểu dữ liệu any: kiểu dữ liệu gì cũng được.
```

Không nên sử dụng

const a:number = 5; // khai báo hằng số a có kiểu number và giá trị là 10

let b:string = "5"; // khai báo biến b có kiểu string và giá trị là "20"

```
let sum:any =0; // khai báo biến sum có kiểu any và giá trị là 0, any cho phép sum có thể nhận bất kỳ kiểu dữ liệu nào, nhưng sẽ mất đi tính an toàn của TypeScript
sum = a + b;
```

console.log(\`Tổng của a và b là: \${sum}\`);

```
//để b là string thì khi cộng vào sẽ in ra kết quả là "55" (nối chuỗi), còn nếu b là number thì sẽ in ra kết quả là 10 (cộng số).
// để sum là any thì khi cộng vào sẽ không báo lỗi,  vì sum có thể nhận bất kỳ kiểu dữ liệu nào, nên khi cộng vào sẽ không biết được kết quả là gì.
//nếu để b là number mà truyền chuối thì sẽ báo lỗi giúp trace lỗi nhanh hơn
Consolog
Kiểu backtick  (dấu ` cạnh số 1) : trong dấu ` vừa truyền được text, vừa truyền được biến`
console.log(`Amount: ${amount} - Status: ${status}`);
```

Kiểu log thông thường thủ công: chuỗi + chuỗi ra chuỗi

console.log("Giao dịch" + ":" + amount + " " + currency + " - " + statusTransaction);

Bài tập ví dụ:

// Bài 1: Khai báo biến có kiểu (Dễ)

// Khai báo các biến cho một giao dịch, ghi rõ kiểu:

```
// ts
// const transactionId: string = ...
// const amount: number = ...
// const currency: string = ...
// const status: string = ...
```

// Giá trị: TXN001, 500000, VND, SUCCESS.

// In ra: "Giao dịch TXN001: 500000 VND - SUCCESS".

// Thử thêm: gán amount = "500000" (là chuỗi) và xem TypeScript báo lỗi gì

```
 const transactionId: string = "TXN001";
 const amount: number = 600000;
 const currency: string = "VND";
 const statusTransaction: string = "SUCCESS";
```

console.log(\`Giao dịch \${transactionId}: \${amount} \${currency} + test\${statusTransaction}\`);

// Bài 2: Khai báo type và object (Dễ)

// Khai báo type PaymentData gồm 4 field như trên

// Tạo object payment1: PaymentData với dữ liệu của Bài 1

// Lấy dữ liệu ra bằng dấu chấm: in payment1.transactionId, payment1.amount

// In câu giống Bài 1, nhưng lấy dữ liệu từ object

```
// Thử thêm: bỏ field status khỏi object, hoặc thêm field lạ như fee: 1000. Xem TypeScript báo lỗi gì. làm gì để hết lỗi
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
```

console.log(\`Giao dịch \${payment1.transactionId}: \${payment1.amount}\`);

```
console.log("Giao dich: " + payment1.transactionId + ", Amount: " + payment1.amount + ", Currency: " + payment1.currency + ", Status: " + payment1.status);
```