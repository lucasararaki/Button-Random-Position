var screenW = screen.width - 150;
var screenH = screen.height -50;

var button = document.getElementById("btn");

button.onclick = function() {
  minH = 0;
  maxH = screenH;

  var newTop = Math.floor(Math.random() * (maxH - minH + 1)) + minH;

  minW = 0;
  maxW = screenW;

  var newLeft = Math.floor(Math.random() * (maxW - minW + 1)) + minW;

  document.querySelector('.newPosition').innerHTML = newLeft + ' x ' + newTop;

  button.style.top = newTop + 'px';
  button.style.left = newLeft + 'px';

};
