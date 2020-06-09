function buttonPressed(){
  var html ='';
  for (var i=1;i<=20;i++){
    html = html+'<table border="1">';
    html = html+'<tr>';
    html = html+'<td width ="20">'+i+'</td>';
    if (i%3==0 && i%5!=0){
      html = html+'<td width ="40">fizz</td>';
    }
    else if(i%5==0 && i%3!=0){
      html = html+'<td width ="40">buzz</td>';
    }
    else if(i%3==0 && i%5==0){
      html = html+'<td width ="40">fizz buzz</td>';
    }
    else {
      html = html+'<td width ="40"></td>';
    }
    html =html+'</tr>';
    document.getElementById('list').innerHTML =html;
  }
}