function random(){
  var html ='';
  for(var i=1;i<=10;i++){
    var a =Math.floor(Math.random()*7);
    html =html +'<li>'+(a+1)+'</li>';
  }
  document.getElementById('suuji').innerHTML =html  
}