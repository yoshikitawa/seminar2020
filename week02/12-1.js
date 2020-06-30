function buttonAPressed() {
  ctx = document.getElementById('canvas1').getContext('2d');
  var x = Math.floor(Math.random() * 400);
  var y = Math.floor(Math.random() * 300);
  ctx.strokeStyle = 'blue';
  ctx.fillStyle = 'blue';

  ctx.beginPath();
  ctx.arc(x, y, 5, 0, Math.PI * 2);

  ctx.fill();
}
function buttonBPressed() {
  ctx.clearRect(0, 0, 400, 300);
}