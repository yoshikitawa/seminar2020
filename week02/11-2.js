function calc(){
  var n = document.getElementById('list').value;
  n=Number(n);
  var html ="";
  var a=1;
  for (var i = 1;i<=n; i++){
    a=i*a;
    html = html +'<li>'+i+'の階乗は'+a+'です'+'</li>';
    document.getElementById('list1').innerHTML =html;    
    /*document.getElementById('list').value =''; */
  }
}