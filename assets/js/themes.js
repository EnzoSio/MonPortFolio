// Passage au mode sombre
const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  if(document.body.classList.toggle("dark")){
    //Pour voir le pdf sombre
    document.getElementById("cv").href="./docs/CV_Sombre.pdf";
    //Pour voir le QRCode rouge
    document.getElementById("cv_qrcode").src="./docs/CV_Sombre.png";
    // Background Clair
    document.getElementById("hero").style.backgroundImage = "url('assets/img/hero-bg-light.jpg')";


  }
  else if(document.body.classList.toggle!=("dark")){
    //Pour voir le pdf rouge
    document.getElementById("cv").href="./docs/CV.pdf";
    //Pour voir le QRCode rouge
    document.getElementById("cv_qrcode").src="./docs/CV.png";
    // Background Sombre
    document.getElementById("hero").style.backgroundImage = "url('assets/img/hero-bg.jpg')";
  }
})

// Changement en fonction de l'heure 
var myDate = new Date();
var hours = myDate.getHours();

if (hours > 18 || hours < 8 ) // entre 8h et 18 heures
{
  document.getElementById("checkbox")
  document.body.classList.toggle("dark")
   //Pour voir le pdf sombre
   document.getElementById("cv").href="./docs/CV_Sombre.pdf";
   //Pour voir le QRCode rouge
   document.getElementById("cv_qrcode").src="./docs/CV_Sombre.png";
   // Background Clair
   document.getElementById("hero").style.backgroundImage = "url('assets/img/hero-bg-light.jpg')";
}
else {
  document.getElementById("checkbox")
  document.body.classList.toggle!=("dark")
   //Pour voir le pdf rouge
   document.getElementById("cv").href="./docs/CV.pdf";
   //Pour voir le QRCode rouge
   document.getElementById("cv_qrcode").src="./docs/CV.png";
   // Background Sombre
   document.getElementById("hero").style.backgroundImage = "url('assets/img/hero-bg.jpg')";
}