const checkbox = document.querySelector(".chk_85"); // Sélectionnez la case à cocher

// Fonction pour basculer entre les modes clair et sombre
function toggleDarkMode() {
  if (document.body.classList.toggle("dark")) {
    document.getElementById("cv").href = "./monCV_sombre.html";
    document.getElementById("cv_qrcode").src = "./docs/cv_qrcode_sombre.png";
    document.getElementById("hero").style.backgroundImage = "url('assets/img/hero-bg-light-test.jpg')";
  } else {
    document.getElementById("cv").href = "./monCV.html";
    document.getElementById("cv_qrcode").src = "./docs/cv_qrcode.png";
    document.getElementById("hero").style.backgroundImage = "url('assets/img/hero-bg.jpg')";
  }
}

// Ajouter un écouteur d'événement à la case à cocher
checkbox.addEventListener("change", toggleDarkMode);

// Changement en fonction de l'heure
var myDate = new Date();
var hours = myDate.getHours();

if (hours > 18 || hours < 8) {
  toggleDarkMode(); // Passer au mode sombre
}
