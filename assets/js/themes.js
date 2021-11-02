const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  if(document.body.classList.toggle("dark") != null){
    document.getElementById("cv").href="docs/CVEnzodark.pdf";

  }
  else if(document.body.classList.toggle("dark")==false){
    document.getElementById("cv").href="docs/CVEnzo.pdf";
  }
})