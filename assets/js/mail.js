const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'portfolio_bts';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Votre message à bien été eenvoyé');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});