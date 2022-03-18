/**
 * Resume/CV template created with Bootstrap 5 by @vmoratog and @jdnichollsc
 */
const resume = {
  prenom: 'ENZO AIME',
  deuxPrenom: 'Raphael',
  jobTitle: 'Etudiant en BTS SIO',
  photo: 'assets/img/moi_circle.jpg',
  city: 'Evry',
  postalCode: '',
  country: 'France',
  phone: '06 ** ** ** ** **',
  email: 'enzo.aimebtssio1@gmail.com',
  education: [
    {
      school: 'Lycée Parc Des Loges',
      degree: 'BTS SIO',
      graduationDate: '2022',
      description: 'Développeur Web'
    },
    {
      school: 'Lycée François Truffaut',
      degree: 'BAC ES',
      graduationDate: '2020',
      description: 'Filière Générale'
    },
  ],
  links: [
    {
      label: 'GitHub',
      link: 'https://github.com/EnzoSio'
    },
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/enzo-aime-291ba11b9'
    },
    {
      label: 'CodePen',
      link: 'https://codepen.io/enzo-aime91'
    }
  ],
  skills: [
    'HTML',
    'CSS',
    'Javascript',
    'SQL',
    'PHP',
    'Python',
    'Java',
    'Bootstrap',
    'NodeJS'
  ],
  langues: ['Français', 'Anglais', 'Espagnol'],

  portfolio: ['https://enzosio.github.io/MonPortFolio/'],


  profilPersonnel: `Je suis diplomé d'un BAC ES (Économique et Social), 
  je suis actuellement en BTS SIO, dans l'option SLAM (Solutions Logicielles et Applications Métiers). Mon projet professionnel est de devenir Webmaster / Web développeur, après mes 2 ans d'études en BTS SIO, je compte ensuite faire une licence professionnelle.`,

  employmentHistory: [
    {
      jobTitle: 'Thalès',
      startDate: 'Janvier 2022',
      endDate: 'Février 2022',
      city: '2 av Gay Lussac, 78990 ELANCOURT',
      achievements: [
        'Développement d\'une application Android, permettant la gestion de stock'
      ]
    },
    {
      jobTitle: 'Thalès',
      startDate: 'Mai 2021',
      endDate: 'Juin 2021',
      city: '2 av Gay Lussac, 78990 ELANCOURT',
      achievements: [
        'Découverte du monde du travail dans l\'industrie des équipements militaire et particulièrement autour de l’electronique embarquée.'
      ]
    },
    {
      jobTitle: 'Musée Du Louvre',
      startDate: 'Déc 2016',
      endDate: 'Jan 2017',
      city: 'Rue de Rivoli, 75001 Paris',
      achievements: [
        'Stage d\'observation de 3ème',
        '• Domaine de l’architecture ',
        '• Domaine de l’électricité',
        '• Domaine de la plomberie',
        '• Domaine de la sécurité des portes coupe-feu'
      ]
    },
  ],
  loisirs: [
    {
      jobTitle: 'Musée Du Louvre',
      startDate: 'Déc 2016',
      endDate: 'Jan 2017',
      city: 'Rue de Rivoli, 75001 Paris',
      liste: [
        '• La musique ',
        '• Les objets connectés',
        '• L\'informatique',
        '• Montage Photo et vidéo',
        '• Les Mangas'
      ]
    },
  ]
}




const formatResume = (r) => ({
  ...r,
  address: [
    r.country,
    r.city,
    r.postalCode
  ].filter(Boolean).join(', ')
})

new Vue({
  el: "#app",
  data: formatResume(resume)
});

/**
 * Wait for animatable-component to be loaded (Only for VanillaJS)
 **/
function animatableLoaded() {
  document.querySelector('body').classList.remove('d-none');
}
if (customElements) {
  customElements.whenDefined('animatable-component').then(animatableLoaded);
} else animatableLoaded()