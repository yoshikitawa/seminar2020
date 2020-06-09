function buttonPressed(){
  var a = document.getElementById('input-base').value;
    a = Number(a);
  var b = document.getElementById('input-interest').value;
      b = Number(b);
  var html ="";
  html = html+'<table border="1">';
  html = html+'<tr>';
  html = html+'<td>年後</td>'+'<td> 元利合計</td>';
  html = html+'</tr>';
  for (var i =1;i<=10;i++){
    var a =a+a*b*0.01;
    var c = Math.round(a);
    html = html+'<tr>';
    html = html+'<td>'+i+'</td>'+'<td>'+c+'</td>';
    html = html+'</tr>';
  }
  
  document.getElementById('table').innerHTML=html; 
}
