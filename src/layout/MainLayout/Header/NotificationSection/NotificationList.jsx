// material-ui
import { useTheme, styled } from '@mui/material/styles';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Stack,
  Typography
} from '@mui/material';

// assets
import { IconBrandTelegram, IconBuildingStore, IconMailbox, IconPhoto } from '@tabler/icons-react';
import User1 from '../../../../assets/images/users/user-round.svg';

// styles
const ListItemWrapper = styled('div')(({ theme }) => ({
  cursor: 'pointer',
  padding: 16,
  '&:hover': {
    background: theme.palette.primary.light
  },
  '& .MuiListItem-root': {
    padding: 0
  }
}));

// ==============================|| NOTIFICATION LIST ITEM ||============================== //

const NotificationList = () => {
  const theme = useTheme();

  const chipSX = {
    height: 24,
    padding: '0 6px'
  };
  const chipErrorSX = {
    ...chipSX,
    color: theme.palette.orange.dark,
    backgroundColor: theme.palette.orange.light,
    marginRight: '5px'
  };

  const chipWarningSX = {
    ...chipSX,
    color: theme.palette.warning.dark,
    backgroundColor: theme.palette.warning.light
  };

  const chipSuccessSX = {
    ...chipSX,
    color: theme.palette.success.dark,
    backgroundColor: theme.palette.success.light,
    height: 28
  };

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 330,
        py: 0,
        borderRadius: '10px',
        [theme.breakpoints.down('md')]: {
          maxWidth: 300
        },
        '& .MuiListItemSecondaryAction-root': {
          top: 22
        },
        '& .MuiDivider-root': {
          my: 0
        },
        '& .list-container': {
          pl: 7
        }
      }}
    >
      <ListItemWrapper>
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar alt="Hopital de Maroua" >
              H
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Hopital generale Maroua" />
          <ListItemSecondaryAction>
            <Grid container justifyContent="flex-end">
              <Grid item xs={12}>
                <Typography variant="caption" display="block" gutterBottom>
                  Il y'a 5 jours
                </Typography>
              </Grid>
            </Grid>
          </ListItemSecondaryAction>
        </ListItem>
        <Grid container direction="column" className="list-container">
          <Grid item xs={12} sx={{ pb: 2 }}>
            <Typography variant="subtitle2">Nouvelle campagne de vaccination contre le cholera pour les enfants, et les femmes enceintes </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item>
                <Chip label="Lu" sx={chipErrorSX} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ListItemWrapper>
      <Divider />
      <ListItemWrapper>
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar
              sx={{
                color: theme.palette.success.dark,
                backgroundColor: theme.palette.success.light,
                border: 'none',
                borderColor: theme.palette.success.main
              }}
            >
              <IconBuildingStore stroke={1.5} size="1.3rem" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={<Typography variant="subtitle1">Nouvelle mis a jour</Typography>} />
          <ListItemSecondaryAction>
            <Grid container justifyContent="flex-end">
              <Grid item xs={12}>
                <Typography variant="caption" display="block" gutterBottom>
                 il y'a 2 heures
                </Typography>
              </Grid>
            </Grid>
          </ListItemSecondaryAction>
        </ListItem>
        <Grid container direction="column" className="list-container">
          <Grid item xs={12} sx={{ pb: 2 }}>
            <Typography variant="subtitle2">Desormais vous pouvez imprimer votre carnet medical sous forme physique en telehargeant le pdf</Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item>
                <Chip label="Lu" sx={chipErrorSX} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ListItemWrapper>
      <Divider />
      <ListItemWrapper>
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar
              sx={{
                color: theme.palette.primary.dark,
                backgroundColor: theme.palette.primary.light,
                border: 'none',
                borderColor: theme.palette.primary.main
              }}
            >
              <IconMailbox stroke={1.5} size="1.3rem" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={<Typography variant="subtitle1">Verification de compte.</Typography>} />
          <ListItemSecondaryAction>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Typography variant="caption" display="block" gutterBottom>
                  2 min ago
                </Typography>
              </Grid>
            </Grid>
          </ListItemSecondaryAction>
        </ListItem>
        <Grid container direction="column" className="list-container">
          <Grid item xs={12} sx={{ pb: 2 }}>
            <Typography variant="subtitle2">Inscription reussie, verifier votre boite email et valider le lien de confirmation</Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item>
                <Button variant="contained" disableElevation endIcon={<IconBrandTelegram stroke={1.5} size="1.3rem" />}>
                  Mail
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ListItemWrapper>
    </List>
  );
};

export default NotificationList;
