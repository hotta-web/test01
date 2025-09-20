function e() {
  var body = document.getElementById('body');
  body.style.backgroundColor = 'rgba(230, 14, 230, 1)';
  body.style.fontSize = '4rem';

  // TODO: びっくりボタンを押したら、びっくりするようにする
  // 背景色をピンクにして、フォントサイズを大きくする
};
addEventListener('DOMContentLoaded',function(){
  var button = document.getElementById('bikkuriButton');
  button.addEventListener('click',e);

});
