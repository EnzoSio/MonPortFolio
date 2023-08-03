// Passage au mode sombre
const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  if(document.body.classList.toggle("dark")){
    document.getElementById("cv").href="./monCV_sombre.html";
    document.getElementById("cv_qrcode").src="./docs/cv_qrcode_sombre.png";
  }
  else if(document.body.classList.toggle!=("dark")){
    document.getElementById("cv").href="./monCV.html";
    document.getElementById("cv_qrcode").src="./docs/cv_qrcode.png";
    
  }
})

// Changement en fonction de l'heure 
var myDate = new Date();
var hours = myDate.getHours();

if (hours > 18 || hours < 8 ) // entre 8h et 18 heures
{
  document.getElementById("checkbox")
  document.body.classList.toggle("dark")
  document.getElementById("cv_qrcode").src="./docs/cv_qrcode_sombre.png";
  document.getElementById("cv").href="./monCV_sombre.html";
  document.getElementById("hero").style.backgroundImage = "url('assets/img/hero-bg-light-test.jpg')";
}
else {
  document.getElementById("checkbox")
  document.body.classList.toggle!=("dark")
  document.getElementById("cv_qrcode").src="./docs/cv_qrcode.png";
  document.getElementById("cv").href="./monCV.html";
  document.getElementById("hero").style.backgroundImage = "url('assets/img/hero-bg.jpg')";
}