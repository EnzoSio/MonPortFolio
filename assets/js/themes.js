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

var myDate = new Date();
var hours = myDate.getHours();

if (hours > 18 || hours < 8 ) // entre 8h et 18 heures
{
  document.getElementById("checkbox")
  document.body.classList.toggle("dark")
  document.getElementById("cv").href="./docs/CVEnzodark.pdf";
  document.getElementById("cv_qrcode").src="./docs/cv_qrcode_sombre.png";
}
else {
  document.getElementById("checkbox")
  document.body.classList.toggle!=("dark")
  document.getElementById("cv").href="./docs/CVEnzo.pdf";
  document.getElementById("cv_qrcode").src="./docs/cv_qrcode.png";
}