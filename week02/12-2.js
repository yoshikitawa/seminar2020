function buttonAPressed() {
  var ctx = document.getElementById('canvas1').getContext('2d');
  var x = document.getElementById('input-x').value;
  x = Number(x);
  var y = document.getElementById('input-y').value;
  y = Number(y);
  ctx.clearRect(0, 0, 400, 300);
  ctx.fillStyle = 'white';
  ctx.fillRect(x, y, 70, 50);
  ctx.fillStyle = 'red';
  ctx.fillRect(x + 20, y + 20, 30, 10);
  ctx.fillRect(x + 30, y + 10, 10, 30);
}