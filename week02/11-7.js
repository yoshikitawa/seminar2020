function buttonPressed() {
  var n = document.getElementById('input-number').value;
  var r1 = 0;
  var r2 = 0;
  var r3 = 0;
  var r4 = 0;
  var r5 = 0;
  var r6 = 0;
  for (var i = 1; i <= n; i++) {
    var r = Math.floor(Math.random() * 6)+1;
    if (r == 1) {
      r1 = r1 + 1;
    }
    else if (r == 2) {
      r2 = r2 + 1;
    }
    else if (r == 3) {
      r3 = r3 + 1;
    }
    else if (r == 4) {
      r4 = r4 + 1;
    }
    else if (r == 5) {
      r5 = r5 + 1;
    }
    else if (r == 6) {
      r6 = r6 + 1;
    }
  }
  document.getElementById('output-1').value=r1;
  document.getElementById('output-2').value=r2;
  document.getElementById('output-3').value=r3;
  document.getElementById('output-4').value=r4;
  document.getElementById('output-5').value=r5;
  document.getElementById('output-6').value=r6;

}