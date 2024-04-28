import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Drawer,
  Fab,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
  Grid,
  IconButton,
  Slider,
  Tooltip,
  Typography
} from '@mui/material';
import { IconSettings } from '@tabler/icons-react';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import SubCard from '../../ui-component/cards/SubCard';
import { SET_BORDER_RADIUS, SET_FONT_FAMILY } from '../../store/actions';
import { gridSpacing } from '../../store/constant';
import AnimateButton from '../../ui-component/extended/AnimateButton';
import { Opacity } from '@mui/icons-material';


// concat 'px'
function valueText(value) {
  return `${value}px`;
}

// ==============================|| LIVE CUSTOMIZATION ||============================== //

const Customization = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const customization = useSelector((state) => state.customization);

  // drawer on/off
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  // state - border radius
  const [borderRadius, setBorderRadius] = useState(customization.borderRadius);
  const handleBorderRadius = (event, newValue) => {
    setBorderRadius(newValue);
  };

  useEffect(() => {
    dispatch({ type: SET_BORDER_RADIUS, borderRadius });
  }, [dispatch, borderRadius]);

  let initialFont;
  switch (customization.fontFamily) {
    case `'Inter', sans-serif`:
      initialFont = 'Inter';
      break;
    case `'Poppins', sans-serif`:
      initialFont = 'Poppins';
      break;
    case `'Roboto', sans-serif`:
    default:
      initialFont = 'Roboto';
      break;
  }

  // state - font family
  const [fontFamily, setFontFamily] = useState(initialFont);
  useEffect(() => {
    let newFont;
    switch (fontFamily) {
      case 'Inter':
        newFont = `'Inter', sans-serif`;
        break;
      case 'Poppins':
        newFont = `'Poppins', sans-serif`;
        break;
      case 'Roboto':
      default:
        newFont = `'Roboto', sans-serif`;
        break;
    }
    dispatch({ type: SET_FONT_FAMILY, fontFamily: newFont });
  }, [dispatch, fontFamily]);

  return (
    <>
      {/* toggle button */}
      <Tooltip title="Accès rapide">
        <Fab
          component="div"
          onClick={handleToggle}
          size="medium"
          variant="circular"
          color="secondary"
          sx={{
            borderRadius: 0,
            borderTopLeftRadius: '50%',
            borderBottomLeftRadius: '50%',
            borderTopRightRadius: '50%',
            borderBottomRightRadius: '4px',
            top: '25%',
            position: 'fixed',
            right: 10,
            zIndex: theme.zIndex.speedDial
          }}
        >
          <AnimateButton type="rotate">
            <IconButton color="inherit" size="large" disableRipple>
              <IconSettings />
            </IconButton>
          </AnimateButton>
        </Fab>
      </Tooltip>
      <Drawer
        anchor="right"
        onClose={handleToggle}
        open={open}
        PaperProps={{
          sx: {
            width: 280
          }
        }}
      >
        <PerfectScrollbar component="div">
          <Grid container spacing={gridSpacing} sx={{ p: 3 }}>
            <Grid item xs={12}>
              
              <SubCard title="Fonctionnalités rapides">
                  <List>
                    <ListItemButton sx={{ borderRadius: `${customization.borderRadius}px` }}>
                      <ListItemText primary={<Typography variant="p">Enregister un patient</Typography>} />
                    </ListItemButton>
                    <ListItemButton sx={{ borderRadius: `${customization.borderRadius}px` }}>
                      <ListItemText primary={<Typography variant="p">Nouvelle consultation</Typography>} />
                    </ListItemButton>
                    <ListItemButton sx={{ borderRadius: `${customization.borderRadius}px` }}>
                      <ListItemText primary={<Typography variant="p">Modification rapide patient</Typography>} />
                    </ListItemButton>
                    <ListItemButton sx={{ borderRadius: `${customization.borderRadius}px` }}>
                      <ListItemText primary={<Typography variant="p">Informations d'un patient</Typography>} />
                    </ListItemButton>
                    <ListItemButton sx={{ borderRadius: `${customization.borderRadius}px` }}>
                      <ListItemText primary={<Typography variant="p">Changer de compte</Typography>} />
                    </ListItemButton>
                    
                  </List>
              </SubCard>
            </Grid>
            <Grid item xs={12}>
              {/* border radius */}
              <SubCard title="Taille de la police">
                <Typography variant='body2' sx={{
                  opacity:0.7,
                  //fontSize:"13px"
                }}>
                  Pour les personnes myopes ou hypermetropes
                </Typography>
                <Grid item xs={12} container spacing={2} alignItems="center" sx={{ mt: 2.5 }}>
                  <Grid item>
                    <Typography variant="h6" color="secondary">
                      4px
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Slider
                      size="small"
                      value={borderRadius}
                      onChange={handleBorderRadius}
                      getAriaValueText={valueText}
                      valueLabelDisplay="on"
                      aria-labelledby="discrete-slider-small-steps"
                      marks
                      step={2}
                      min={4}
                      max={24}
                      color="secondary"
                      sx={{
                        '& .MuiSlider-valueLabel': {
                          color: 'secondary.light'
                        }
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" color="secondary">
                      24px
                    </Typography>
                  </Grid>
                </Grid>
              </SubCard>
            </Grid>
          </Grid>
        </PerfectScrollbar>
      </Drawer>
    </>
  );
};

export default Customization;
