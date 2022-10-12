// Changement en fonction de l'heure
var myDate = new Date();
var hours = myDate.getHours();

if (hours > 18 || hours < 7) {
  // entre 8h et 18 heures
  document.getElementById("checkbox");
  document.body.classList.toggle("dark");
  //Pour voir le pdf sombre
  document.getElementById("cv").href = "./docs/CV_Sombre.pdf";
  //Pour voir le QRCode rouge
  document.getElementById("cv_qrcode").src = "./docs/CV_Sombre.png";
  // Background Clair
  document.getElementById("hero").style.backgroundImage =
    "url('assets/img/hero-bg-light.jpg')";
} else {
  document.getElementById("checkbox");
  document.body.classList.toggle != "dark";
  //Pour voir le pdf rouge
  document.getElementById("cv").href = "./docs/CV.pdf";
  //Pour voir le QRCode rouge
  document.getElementById("cv_qrcode").src = "./docs/CV.png";
  // Background Sombre
  document.getElementById("hero").style.backgroundImage =
    "url('assets/img/hero-bg.jpg')";
}

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-dark") {
    document.body.classList.toggle != "dark";
    //Pour voir le pdf rouge
    document.getElementById("cv").href = "./docs/CV.pdf";
    //Pour voir le QRCode rouge
    document.getElementById("cv_qrcode").src = "./docs/CV.png";
    // Background Sombre
    document.getElementById("hero").style.backgroundImage =
      "url('assets/img/hero-bg.jpg')";
  } else {
    document.body.classList.toggle("dark");
    //Pour voir le pdf sombre
    document.getElementById("cv").href = "./docs/CV_Sombre.pdf";
    //Pour voir le QRCode rouge
    document.getElementById("cv_qrcode").src = "./docs/CV_Sombre.png";
    // Background Clair
    document.getElementById("hero").style.backgroundImage =
      "url('assets/img/hero-bg-light.jpg')";
  }
}

// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark");
    document.getElementById("slider").checked = false;
  } else {
    setTheme("theme-light");
    document.getElementById("slider").checked = true;
  }
})();
