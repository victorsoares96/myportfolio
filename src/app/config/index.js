export const config = {
  /* Aqui você deve colocar o seu nome */
  name: 'GitHub User',

  /* Aqui você deve colocar sua "profissão" */
  programmer: 'A Web & Mobile Front-End Developer',
  
  /* Link do botão Contate-me */
  contactMe: 'https://linkedin.com/in/my_user',
  
  /* Aqui ficam as informações do bloco sobre */
  about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
  culpa qui officia deserunt mollit anim id est laborum.`,

  /* Aqui você deve colocar seu usuário do github */
  githubUser: 'github',
  
  /* Aqui você deve colocar os seus principais repositórios */
  pinnedRepos: ['.github', 'albino', 'argo-ml'],
  
  /* Aqui ficam as informações do bloco Contato */
  contact: {
    location: 'San Francisco, CA',
    locationLink: '',
    email: 'my_email@hotmail.com',
    emailLink: 'my_email@hotmail.com',
    githubLink: 'github.com/my_user'
  },

  /* Aqui ficam as informações do bloco Educação */
  education: [
    /* Adicione ou retire algumas formações acadêmicas (minimo de 1) */
    { local: 'University Lorem', graduation: 'Computer Science' },
    { local: 'Course Ipsum', graduation: 'Front End Development' },
  ],

  /* Aqui ficam as informações do bloco Linguas */
  languages: [
    /* Adicione ou retire linguas (minimo de 1) */
    { name: 'English', skill: 'Advanced', progress: 95 },
    { name: 'Portuguese', skill: 'Intermediate', progress: 55 }
  ],

  /* 
    Aqui você deve indicar todas as suas redes sociais,
    como linkedin, instagram e etc. Indique também um 
    icone que pode ser obtido em: https://fontawesome.com/icons
  */
  socialMedias: [
    /* Adicione ou retire ao seu gosto (minimo de 1 rede social) */
    { link: 'https://twitter.com/my_user', socialIcon: 'fab fa-twitter', name: '@My_User' },
    { link: 'https://linkedin.com/in/my_user', socialIcon: 'fab fa-linkedin', name: 'linkedin.com/in/My_User' },
    { link: 'https://github.com/my_user', socialIcon: 'fab fa-github', name: 'github.com/my_user' },
    { link: 'https://fb.com/my_user', socialIcon: 'fab fa-facebook', name: 'fb.com/my_user' },
    { link: 'http://instagram.com/my_user', socialIcon: 'fab fa-instagram', name: 'my_user' },
    { link: 'https://api.whatsapp.com/send?phone={MY_PHONE_NUMBER}&text=HI!%2C%20I Would%20talk%20with you!', socialIcon: 'fab fa-whatsapp', name: '{MY_PHONE_NUMBER}' }
  ],
  /* 
    Aqui você deve indicar suas skills como programador, como também
    linguagens que você domina. Indique também um icone que pode ser 
    obtido em: https://fontawesome.com/icons
  */
  skills: [
    /* Adicione ou retire ao seu gosto (minimo de 1 habilidade) */
    { name: 'React.js & React Native', icon: 'fab fa-react', progress: 75 },
    { name: 'Javascript', icon: 'fab fa-js-square', progress: 70 },
    { name: 'Node.js', icon: 'fab fa-node-js', progress: 65 },
    { name: 'Html & CSS', icon: 'fab fa-html5', progress: 65 },
    { name: 'Angular8+', icon: 'fab fa-angular', progress: 40 },
    { name: 'Java', icon: 'fab fa-java', progress: 35 }
  ]
};