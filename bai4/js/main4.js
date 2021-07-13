function taoDiv() {
  var ketQua = document.getElementById("ketQua");
  var div10 = document.getElementsByTagName("div");
  var span = document.createElement("span");
  for (var i = 0; i < div10.length; i++) {
    if ((i + 1) % 2 == 0) {
      div10[i].style.background = "blue";
    } else {
      div10[i].style.background = "red";
    }
    ketQua.style.display = "block";
  }
}
function clearDiv() {
  ketQua.style.display = "none";
}
