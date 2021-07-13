function taoDiv() {
  var ketQua = document.getElementById("ketQua");
  var div10 = document.getElementsByTagName("div");

  for (var i = 1; i < div10.length; i++) {
    if (i % 2 == 0) {
      div10[i].style.background = "red";
    } else {
      div10[i].style.background = "blue";
    }
    ketQua.style.display = "block";
  }
}
function clearDiv() {
  ketQua.style.display = "none";
}
