const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  if(document.body.classList.toggle("dark")){
    document.getElementById("cv").href="./docs/CVEnzodark.pdf";
    document.getElementById("cv_qrcode").src="./docs/cv_qrcode_sombre.png";


  }
  else if(document.body.classList.toggle!=("dark")){
    document.getElementById("cv").href="./docs/CVEnzo.pdf";
    document.getElementById("cv_qrcode").src="./docs/cv_qrcode.png";
  }
})



