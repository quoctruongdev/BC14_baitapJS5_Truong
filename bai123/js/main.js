// Bài tập 1

console.log(
  " Bài tập 1 : Tìm số nguyên dương nhỏ nhất sao cho: 1 + 2 + … + n > 10000 "
);

// Dùng while;
var n = 0;
var s = 0;
var result = document.getElementById("result");
while (n >= 0) {
  s += n;
  if (s > 10000) {
    result.style.display = "block";
    result.innerHTML = "Số nguyên dương nhỏ nhất :" + n;

    break;
  }
  n += 1;
}

// Dùng for
var sum = 0;
for (var i = 1; (sum += i); i++) {
  if (sum > 10000) {
    console.log("số nguyên dương nhỏ nhất: ", i);
    break;
  }
}

// Bài tập 2 Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2 + x^3 + … + x^n (Sử dụng vòng lặp và hàm)

function tinhTong() {
  var numX = +document.getElementById("soX").value;
  var numY = +document.getElementById("soY").value;
  var ketQua = document.getElementById("ketQua");
  var spanEL = document.createElement("p");
  ketQua.innerHTML = "";
  ketQua.appendChild(spanEL);
  ketQua.style.display = "block";

  var tong = 0;
  for (var c = 1; c <= +numY; c += 1) {
    tong += Math.pow(+numX, c);
  }
  spanEL.innerHTML = tong;
}

//Bài tập 3: Nhập vào n. Tính giai thừa 1*2*...n

function tinhGT() {
  var numZ = +document.getElementById("soHang").value;
  var ketQua2 = document.getElementById("ketQua2");
  var spanEL2 = document.createElement("p");
  ketQua2.innerHTML = "";
  ketQua2.appendChild(spanEL2);
  ketQua2.style.display = "block";

  var giaiThua = 1;
  for (d = 1; d <= numZ; d += 1) {
    giaiThua *= d;
  }
  spanEL2.innerHTML = giaiThua;
}

// function SNT(x){
//     if (x<2){
//         return false;
//     }

//     for ( var y = 2; y <= Math.sqrt(x); y+=1){

//         if(x % y === 0 ){
//         return false
//         }
//     }
//     return true
// }
// function printSNT(x){
//     if (x >= 2){
//         console.log("snt:",2);
//         for (var y = 3; y <= x; y+=2){
//             if(SNT(y)){
//                 console.log("snt:",y);
//             }

//         }
//     }
// }
// printSNT(12)
