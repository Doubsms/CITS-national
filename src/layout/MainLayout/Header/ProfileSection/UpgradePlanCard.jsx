// material-ui
import { styled } from "@mui/material/styles";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import {DownloadOutlined, DownloadRounded} from '@mui/icons-material';

// project imports
import AnimateButton from "../../../../ui-component/extended/AnimateButton";
import fileToDownload from '../../../../assets/images/logopng.png';

// styles
const CardStyle = styled(Card)(({ theme }) => ({
  background: theme.palette.warning.light,
  marginTop: "16px",
  marginBottom: "16px",
  overflow: "hidden",
  position: "relative",
  "&:after": {
    content: '""',
    position: "absolute",
    width: "200px",
    height: "200px",
    border: "19px solid ",
    borderColor: theme.palette.warning.main,
    borderRadius: "50%",
    top: "65px",
    right: "-150px",
  },
  "&:before": {
    content: '""',
    position: "absolute",
    width: "200px",
    height: "200px",
    border: "3px solid ",
    borderColor: theme.palette.warning.main,
    borderRadius: "50%",
    top: "145px",
    right: "-70px",
  },
}));

// ==============================|| PROFILE MENU - UPGRADE PLAN CARD ||============================== //

const UpgradePlanCard = () => {
  function handleClick() {
    let link=document.createElement("a")
    link.download="Code-QR.png"
    link.href=fileToDownload
    link.click()
  }
  return (
    <CardStyle>
      <CardContent>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Typography variant="h4">Informations rapide</Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle1"
              color="grey.900"
              sx={{ opacity: 0.85 }}
            >
              <span
                style={{
                  fontWeight: "bolder",
                }}
              >
                Email:
              </span>
              ngoufackedgard1@gmail.com <br />
              <span
                style={{
                  fontWeight: "bolder",
                }}
              >
                Contact :
              </span> 652 82 56 35 <br />
  
                          <span
                style={{
                  fontWeight: "bolder",
                }}
              >
                Numero de secours :
              </span> 698 70 36 70
              <br />
  
                          <span
                style={{
                  fontWeight: "bolder",
                }}
              >
                Localisation :
              </span> Maroua palar
              <br />
  
                          <span
                style={{
                  fontWeight: "bolder",
                }}
              >
                Age :
              </span> 21 ans
              <br />
  
                          <span
                style={{
                  fontWeight: "bolder",
                }}
              >
                Groupe sanguin :
              </span> O Rhesus+ (O+)
              <br />
  
                          <span
                style={{
                  fontWeight: "bolder",
                }}
              >
                Maladie la plus courante :
              </span> Asthme
              <br />
  
                          <span
                style={{
                  fontWeight: "bolder",
                }}
              >
                Allergies:
              </span> Polen
              <br />
  
                          <span
                style={{
                  fontWeight: "bolder",
                }}
              >
                Test d"Emmel (Genotype):
              </span> AS <br />
              <span
                style={{
                  fontWeight: "bolder",
                }}
              >
                Code QR:
              </span>
              <Button variant="text" color="secondary"  onClick={handleClick} endIcon={<DownloadRounded />} sx={{
                ml:"4px"
              }}>Telecharger</Button>
              
            </Typography>
          </Grid>
          <Grid item>
            <Stack direction="row">
              <AnimateButton>
                <Button
                  variant="contained"
                  color="warning"
                  sx={{ boxShadow: "none",
                  textTransform:"none"
                }}
                >
                  Plus d'informations
                </Button>
              </AnimateButton>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </CardStyle>
  );
}

export default UpgradePlanCard;
