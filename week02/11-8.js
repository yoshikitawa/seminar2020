function buttonPressed(){
  var a = document.getElementById('input-8').value;
  var a1 = a*2*2*2;
  var b = document.getElementById('input-4').value;
  var b1 = b*2*2;
  var c = document.getElementById('input-2').value;
  var c1 = c*2;
  var d = document.getElementById('input-1').value;
  var d1 = d*1;
  var sum = a1+b1+c1+d1;
  document.getElementById('output').value=sum;
}