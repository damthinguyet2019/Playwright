# Tổng quan

Giảm efforft

## FW Playwright

### Ưu điểm

- dễ sử dụng, dễ maintain
- Microsoft phát triển, có update các tính năng mới
- Cộng đồng sử dụng nhỏ hơn Selenium
- support multi browser
- support multi language
- Có auto wait ( ví dụ chờ khi button hiện ra mới click, selenium thì fix cứng = sleep để wait)
- support nhiều plugin: screenshot, video,.. ( các fw khác thì phải cài đặt)

## Thực hành các bước tạo project playwright

### Cài đặt

1. tạo 1 thư mục Playwright
2. mở cửa sổ command line trong folder Playwright
3. Gõ lệnh cài đặt playwright:

   ```bash
   npm init playwright@latest   (latest: cài đặt version mới nhất của playwright)
   ```

4. cài thư viện nodejs nên sẽ gợi ý 2 ngôn ngữ: typescript, javascript
5. Chọn Type Script
6. Chọn folder chứa file test: chọn để mặc định tests
7. Add file github: chọn true
8. cài đặt browser cho playwright
9. Chờ cài đặt xong thì mở project

### Project

#### Cấu trúc thư mục trong project

- `github\workflows`: sử dụng trong cấu hình CI/CD
- `node_modules`: chứa toàn bộ thư viện cần cài trong playwright, cài thư viện mới sẽ chứa trong thư mục này
- `tests`: file spec.ts chỉ nhận diện được những file để ở thư mục này,
- `gitignore`: file không đẩy lên git, thường để những file biến môi trường để ở local, file không muốn public, không đẩy lên github
- `package lock.json` và `package.json`: log ra những thư viện và version cài đặt
- `playwrightconfig.ts`: file quan trong trong playwright, dùng để cấu hình

#### Cấu hình

- `testDir`: để đường dẫn thư mục tests
- `fullParallel`: chạy song song
- `retries`: số lần chạy tối đa. ví dụ set = 2 , chạy fail 1 lần thì sẽ tự động chạy lại, tối đa 2 lần
- `worker`: muốn chạy song song bao nhiêu luồng, ví dụ muốn chạy song song 3 luồng, set =3
- `reporter`: file report dạng html
- `project`: định nghĩa project phát triển trên browser nào: ff, chrome, IE

### Cài đặt Extension

- Playwright for Test: khi cài đặt thành công sẽ hiển thị icon để chạy test nhanh trên giao diện
- Có thể cấu hình chạy project theo trình duyệt nào bằng cách Click chọn extensions, chọn project: tick chọn các option : chromium, firefox, webkit
- Show browser: option tick chọn thì khi chạy test sẽ mở browser

### Ví dụ: Example.spec.ts

Tất cả file spec.ts nằm trong thư mục test

1. Click icon Run test
2. chạy xong sẽ sinh ra báo cáo

### Cách xem Report

Mở folder vật lý trong thư mục: `playwright-report` => mở file `index.html` để xem báo cáo

Trong báo cáo sẽ có mô tả các steps chạy, kết quả

### Cách gen ra 1 testcase nhanh dùng tool

Vào phần bên dưới playwright sau khi cài đặt extension:

- **Record new** ( viết file mới hoàn toàn) : click vào option tùy chọn để mở ra trang mới, truyền thông tin url và làm các action như thực hiên manual => trên playwright sẽ tự động ghi nhận các thông tin
- **Record at cursor** ( viết tiếp phần đang record):  trỏ chuột vào vị trí muốn thực hiện code tiếp

Trong file config mà cấu hình đủ 3 loại trình duyệt thì khi chạy sẽ chạy đủ cả 3 loại trình duyệt

## Bài 2: TypeScript- Biến, Kiểu dữ liệu & Toán tử

### Khai báo biến

Biến: dùng để lưu trữ giá trị, khi có thay đổi hoặc chỉnh sửa giúp ta chỉ sửa từ một chỗ mà không phải sửa nhiều nơi

Từ khóa khai báo biến: `const`, `var`, `let`

=> nên sử dụng `const`, `let`

- `const`: hằng số không thay đổi: ví dụ không cho phép gán thay đổi url
- `let`: ngược lại với const, cho phép gán lại biến

#### ví dụ 1

```typescript
let a = 5
a=6
```

=> cho phép gán lại a  = 6

```typescript
const a = 5
a=6
```

=> không cho phép gán lại a  = 6, báo lỗi

#### ví dụ 2

```typescript
const person7: Person3 = {
    name: "John Doe",
    age: 30,
    gender: "male"
};
 person7 =
```

=> Không cho phép gán lại thuộc tính của person7

> Cannot assign to 'person7' because it is a constant.

#### ví dụ 3

```typescript
let person7: Person3 = {
    name: "John Doe",
    age: 30,
    gender: "male"
};
 person7 =
```

=> sẽ báo yêu cầu khai báo đủ thông tin name, age, gender

=> Tóm lại coi person 7 là 1 cái hộp và không được thay đổi cái hộp, chỉ thay đổi thuộc tính bên trong cái hộp

### Cách khai báo biến kiểu let, function

Viết = dạng camelCase, function thì bắt đầu bằng 1 động từ

### Khai báo biến kiểu const

Tất cả viết hoa

### Kiểu dữ liệu

Định nghĩa các dữ liệu được nhận những kiểu dữ liệu như thế nào

- boolean: chỉ nhận true, false

### Toán tử

Các phép toán tử: +,-,*,/,..

#### Toán tử so sánh

=, !=, <,>,<=,>=

#### Sự khác biệt giữa == và ===

- `==` không check kiểu dữ liệu, chỉ quan tâm value bên trong mà không quan tâm kiểu dữ liệu

  Ví dụ:

  ```typescript
  let a= 5
  let b= “5”
  ```

  `==` chỉ quan tâm so sánh value bên trong là 5 là không quan tâm type dữ liệu là gì

- `===` so sánh cả data type, chỉ số so sánh với số, chữ so sánh với chữ

#### Toán tử chia lấy dư(%)

Xác định số bản ghi cuối cùng của bảng dữ liệu phân trang, kiểm tra tính chẵn lẻ của một phần tử trong danh sách

Ví dụ:

```typescript
let a = 53
let b = 10
let chiaNguyen = a/b;  - - lấy phần nguyên của kết quả phép chia là 5
let chiaDu = a%b;  – chia ra lấy ra 3 là phần dư
console.log (chiaNguyen, chiaDu)
```

#### Toán tử Logic - Kết hợp điều kiện

- AND (&&) : dùng để gộp các điều kiên tiền đề trước khi thực hiện hành động chính trong testcase, tất cả các điều kiện đều phải đúng
- OR: (||): kiểm tra điều kiện rẽ nhánh, chỉ cần một điều kiện đúng
- NOT (!): phủ định trạng thái, đảo ngược boolean
