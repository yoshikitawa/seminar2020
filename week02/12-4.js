function buttonAPressed() {
  var ctx = document.getElementById('canvas1').getContext('2d');
  var x = document.getElementById('input-count').value;
  ctx.clearRect(0,0,300,400);
  for (j = 1; j <= x; j++) {
    for (i = 1; i <= j; i++) {
      ctx.beginPath();
      ctx.arc(10*i, 10*j , 5, 0, Math.PI * 2);
      ctx.stroke();
    }
  }
  
}