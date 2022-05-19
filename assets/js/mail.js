const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();


   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'portfolio_bts';
   let yes;
   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      document.getElementById("send").style.display = "block";
    }, (err) => {
      document.getElementById("erreur").style.display = "block";
    })
  }); 
