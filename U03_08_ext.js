function changeColor(size , color)
{
  var oDiv=document.getElementById('div1');
  oDiv.style.width = size + 'px';
  oDiv.style.height= size + 'px';
  oDiv.style.background=color;
}