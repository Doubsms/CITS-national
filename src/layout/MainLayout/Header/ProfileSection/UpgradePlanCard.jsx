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
import {useEffect,useState} from 'react'
import axios from 'axios';

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

const UpgradePlanCard = ({userData}) => {
  
  function handleClick() {
    let link=document.createElement("a")
    link.download="Code-QR.png"
    axios.get("http://localhost:8000/patient/user/"+userData.user.id+"/qrcode/").then((result) => {
    link.href=`data:application/octet-stream;base64,${result.data.image}`;
    link.click()
    }).catch((err) => {
      console.log(err);
    });
    
    console.log(userData)
  }

  let [fastdata,setFastdata]=useState(null)
  useEffect(()=>{
    axios.post("http://localhost:8000/medecin/1/basicInfornmations/",{
      id:userData.user.id
    }).then((result) => {
      console.log(result.data)
      setFastdata(result.data)
    }).catch((err) => {
      console.log(err);
    });
  },[]);


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
              </span> {userData && userData.user.addresse_email} <br />
              <span
                style={{
                  fontWeight: "bolder",
                }}
              >
                Contact :
              </span>{userData && userData.user.numero} <br />

                          <span
                style={{
                  fontWeight: "bolder",
                }}
              >
                Numero de secours :
              </span> {userData && userData.user.numero}
              <br />
  
                          <span
                style={{
                  fontWeight: "bolder",
                }}
              >
                Localisation :{userData && userData.ville.name+" "+ userData.quartier.name}
              </span> 
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
              </span> {fastdata && fastdata.groupe_sanguin} Rhesus{fastdata && fastdata.rhesus} ({fastdata && fastdata.groupe_sanguin}{fastdata && fastdata.rhesus})
              <br />
  
                          <span
                style={{
                  fontWeight: "bolder",
                }}
              >
                Maladie la plus courante :
              </span> {fastdata && fastdata.maladies}
              <br />
  
                          <span
                style={{
                  fontWeight: "bolder",
                }}
              >
                Allergies:
              </span> {fastdata && fastdata.allergies}
              <br />
  
                          <span
                style={{
                  fontWeight: "bolder",
                }}
              >
                Test d"Emmel (Genotype):
              </span> {fastdata && fastdata.drepanocythose} <br />
              <span
                style={{
                  fontWeight: "bolder",
                }}
              >
                Traitement actuel:
              </span> {fastdata && fastdata.traitement_actuels.split(",")[1]} <br />
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
