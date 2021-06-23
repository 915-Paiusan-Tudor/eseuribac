let p=document.getElementsByTagName("P");

function toggleVis(){
  if(p[0].style.backgroundColor =="transparent")
  Array.from(p).forEach(element => element.style.backgroundColor ="");
  else
  Array.from(p).forEach(element => element.style.backgroundColor ="transparent");
}

toggleVis();
