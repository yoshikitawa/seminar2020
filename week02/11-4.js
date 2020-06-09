function buttonPressed(){
  var html ="";
  for (var i=1;i<=9;i++){
      html = html+'<table border="1">';
      html =html+'<tr>';
      for (var j=1;j<=9;j++){
      html =html+'<td width ="20">'+(i*j)+'</td>';
      }
      html =html+'</tr>';
      document.getElementById('table').innerHTML=html;   
  }
}