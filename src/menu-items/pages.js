// assets
import { IconKey,IconUser } from '@tabler/icons-react';

// constant
const icons = {
  IconKey,
  IconUser
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Utilisateurs',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Authentification',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'login3',
          title: 'Connexion',
          type: 'item',
          url: '/connexion',
          target: true
        },
        {
          id: 'register3',
          title: 'Enregistrement',
          type: 'item',
          url: '/connexion',
          target: true
        }
      ]
    },
    {
      id: 'authentication',
      title: 'Informations',
      type: 'collapse',
      icon: icons.IconUser,

      children: [
        {
          id: 'login3',
          title: 'Information du profil',
          type: 'item',
          url: '/infoprofil',
          target: true
        },
        {
          id: 'register3',
          title: 'Editer le profil',
          type: 'item',
          url: '/editprofil',
          target: true
        }
      ]
    }
  ]
};

export default pages;
