function start() {
  ctx = document.getElementById('canvas1').getContext('2d');
  a = Math.floor(Math.random() * 390) + 6;
  a1 = Math.floor(Math.random() * 390) + 6;
  b = Math.floor(Math.random() * 290) + 6;
  b1 = Math.floor(Math.random() * 290) + 6;

  ctx.beginPath();
  ctx.arc(a, b, 5, 0, Math.PI * 2)
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(a1, b1, 5, 0, Math.PI * 2)
  ctx.fill();
}
function buttonUpPressed() {
  var x = Math.floor(Math.random() * 4);

  /*if (b <= 310 && b >=-10) {*/
    b = b - 5;
    ctx.clearRect(0, 0, 400, 300);
    ctx.beginPath();
    ctx.arc(a, b, 5, 0, Math.PI * 2)
    ctx.stroke();
    if (x == 0 ) {
      a1 = a1 - 5;
      ctx.beginPath();
      ctx.arc(a1, b1, 5, 0, Math.PI * 2)
      ctx.fill();
    }
    if (x == 1 ) {
      a1 = a1 + 5;
      ctx.beginPath();
      ctx.arc(a1, b1, 5, 0, Math.PI * 2)
      ctx.fill();
    }
    if (x == 2) {
      b1 = b1 - 5
      ctx.beginPath();
      ctx.arc(a1, b1, 5, 0, Math.PI * 2)
      ctx.fill();
    }
    if (x == 3) {
      ctx.beginPath();
      b1 = b1 + 5
      ctx.arc(a1, b1, 5, 0, Math.PI * 2)
      ctx.fill();
    }
    /*else{
      ctx.beginPath();
      ctx.arc(a1,b1,5,0,Math.PI*2);
      ctx.fill();
    }*/
  }
/*}*/

function buttonLeftPressed() {
  var x = Math.floor(Math.random() * 4);

  /*if (a <= 310 && a >=-10) {*/
    a = a - 5;
    ctx.clearRect(0, 0, 400, 300);
    ctx.beginPath();
    ctx.arc(a, b, 5, 0, Math.PI * 2)
    ctx.stroke();
    if (x == 0) {
      a1 = a1 - 5;
      ctx.beginPath();
      ctx.arc(a1, b1, 5, 0, Math.PI * 2)
      ctx.fill();
    }
    if (x == 1) {
      a1 = a1 + 5;
      ctx.beginPath();
      ctx.arc(a1, b1, 5, 0, Math.PI * 2)
      ctx.fill();
    }
    if (x == 2) {
      b1 = b1 - 5
      ctx.beginPath();
      ctx.arc(a1, b1, 5, 0, Math.PI * 2)
      ctx.fill();
    }
    if (x == 3) {
      ctx.beginPath();
      b1 = b1 + 5
      ctx.arc(a1, b1, 5, 0, Math.PI * 2)
      ctx.fill();
    }
    /*else{
      ctx.beginPath();
      ctx.arc(a1,b1,5,0,Math.PI*2);
      ctx.fill();
    }*/
  }
/*}*/

function buttonRightPressed() {
  var x = Math.floor(Math.random() * 4);

  /*if (a <= 310 && a>=-10) {*/
    a = a + 5;
    ctx.clearRect(0, 0, 400, 300);
    ctx.beginPath();
    ctx.arc(a, b, 5, 0, Math.PI * 2)
    ctx.stroke();
    if (x == 0) {
      a1 = a1 - 5;
      ctx.beginPath();
      ctx.arc(a1, b1, 5, 0, Math.PI * 2)
      ctx.fill();
    }
    if (x == 1) {
      a1 = a1 + 5;
      ctx.beginPath();
      ctx.arc(a1, b1, 5, 0, Math.PI * 2)
      ctx.fill();
    }
    if (x == 2) {
      b1 = b1 - 5
      ctx.beginPath();
      ctx.arc(a1, b1, 5, 0, Math.PI * 2)
      ctx.fill();
    }
    if (x == 3) {
      ctx.beginPath();
      b1 = b1 + 5
      ctx.arc(a1, b1, 5, 0, Math.PI * 2)
      ctx.fill();
    }
    /*else{
      ctx.beginPath();
      ctx.arc(a1,b1,5,0,Math.PI*2);
      ctx.fill();
    }*/
  }
/*}*/

function buttonDownPressed() {
  var x = Math.floor(Math.random() * 4);

  /*if (b <= 310 && b >=-10) {*/
    b = b + 5;
    ctx.clearRect(0, 0, 400, 300);
    ctx.beginPath();
    ctx.arc(a, b, 5, 0, Math.PI * 2)
    ctx.stroke();
    if (x == 0) {
      a1 = a1 - 5;
      ctx.beginPath();
      ctx.arc(a1, b1, 5, 0, Math.PI * 2)
      ctx.fill();
    }
    if (x == 1) {
      a1 = a1 + 5;
      ctx.beginPath();
      ctx.arc(a1, b1, 5, 0, Math.PI * 2)
      ctx.fill();
    }
    if (x == 2) {
      b1 = b1 - 5
      ctx.beginPath();
      ctx.arc(a1, b1, 5, 0, Math.PI * 2)
      ctx.fill();
    }
    if (x == 3) {
      ctx.beginPath();
      b1 = b1 + 5
      ctx.arc(a1, b1, 5, 0, Math.PI * 2)
      ctx.fill();
    }
    /*else{
      ctx.beginPath();
      ctx.arc(a1,b1,5,0,Math.PI*2);
      ctx.fill();
    }*/
    if(a==a1&&(a==a1+1)&&b==b1){
      ctx.fillText('クリア',20,50,100);
    }
  }
  
/*}*/

