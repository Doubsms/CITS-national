// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill ,IconEdit,IconRegistered,IconPencil, IconBook} from '@tabler/icons-react';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
  IconEdit,
  IconRegistered,
  IconPencil,
  IconBook
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Actions',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'Nouvelle consultation',
      type: 'item',
      url: '/utils/util-typography',
      icon: icons.IconEdit,
      breadcrumbs: false
    },
    {
      id: 'util-color',
      title: 'Enregistrer un patient',
      type: 'item',
      url: '/utils/util-color',
      icon: icons.IconRegistered,
      breadcrumbs: false
    },
    {
      id: 'util-shadow',
      title: 'Modifier un carnet',
      type: 'item',
      url: '/utils/util-shadow',
      icon: icons.IconPencil,
      breadcrumbs: false
    },
    {
      id: 'icons',
      title: 'Voir mon carnet',
      type: 'collapse',
      icon: icons.IconBook,
      children: [
        {
          id: 'tabler-icons',
          title: 'Tout le carnet',
          type: 'item',
          url: '/carnet',
          breadcrumbs: false
        },
        {
          id: 'material-icons',
          title: 'Telecharger le carnet',
          type: 'item',
          url: '/download',
          breadcrumbs: false
        }
      ] 
    }
  ]
};

export default utilities;
