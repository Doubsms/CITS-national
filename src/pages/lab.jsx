import React, { useState } from 'react';
import {
  Button,
  Typography,
  Snackbar,
  Container,
  Paper,
  LinearProgress,
  Grid,
  List,
  ListItem,
  ListItemText,
  Alert,
  CssBaseline
} from '@mui/material';
import { MdCloudUpload, MdAnalytics } from 'react-icons/md';
import { BsFileEarmarkText } from 'react-icons/bs';
import { FaRegCheckCircle, FaDownload } from 'react-icons/fa';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { jsPDF } from "jspdf"; // Import de jsPDF
import QRCode from "qrcode";
import LaboratoryImage from './laboratory-image.jpg'; // Remplacez par le chemin de votre image

const theme = createTheme({
  palette: {
    primary: {
      main: '#90caf9', // Bleu clair
    },
    secondary: {
      main: '#64b5f6', // Bleu plus foncé
    },
    background: {
      default: '#f0f4f8',
    },
  },
});

const DataUpload = () => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadMessage, setUploadMessage] = useState('');
  const [finished, setFinished] = useState(false);
  const [selectedOption, setSelectedOption] = useState('stroke'); // Option par défaut

  const diseaseCategories = [
    {
      category: 'maladies neurologiques',
      diseases: [
        { id: 'stroke', label: "Détection d'AVC" },
        { id: 'epilepsy', label: 'Épilepsie' },
      ],
    },
    {
      category: 'maladies chroniques',
      diseases: [
        { id: 'diabetes', label: 'Diabète' },
        { id: 'hypertension', label: 'Hypertension' },
        { id: 'heartDisease', label: 'Maladies Cardiaques' },
      ],
    },
    {
      category: 'maladies respiratoires',
      diseases: [
        { id: 'asthma', label: 'Asthme' },
        { id: 'covid-19', label: 'COVID-19' },
      ],
    },
    {
      category: 'maladies mentales',
      diseases: [
        { id: 'depression', label: 'Dépression' },
        { id: 'anxiety', label: 'Anxiété' },
      ],
    },
  ];

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Veuillez sélectionner un fichier à télécharger.');
      setOpenSnackbar(true);
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    setUploading(true);
    setUploadProgress(0);
    setFinished(false);
    setResponse(null); // Réinitialiser la réponse avant le nouvel envoi

    // Simuler le traitement du fichier avec des étapes
    const steps = [
      'Préparation du fichier...',
      'Analyse des données EEG...',
      'Extraction des caractéristiques...',
      'Évaluation des résultats...',
      'Génération de la réponse...',
    ];

    for (let step = 0; step < steps.length; step++) {
      await new Promise((resolve) => {
        setTimeout(() => {
          const percentCompleted = ((step + 1) / steps.length) * 100;
          setUploadProgress(percentCompleted);
          setUploadMessage(`${steps[step]} (${percentCompleted.toFixed(0)}%)`);
          resolve();
        }, 2000); // Délai de 2 secondes pour chaque étape
      });
    }

    // Envoyer les données au serveur
    try {
      const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi des données');
      }

      const data = await response.json();
      setResponse(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
      setFinished(true);
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  
  const handleDownload = async () => {
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [200, 200], // Dimensions du PDF en pixels
      putOnlyUsedFonts: true,
      floatPrecision: 16,
    });
  
    // Dessiner un rectangle pour la bordure
    pdf.setDrawColor(0, 0, 0); // Couleur de la bordure (Noir)
    pdf.setLineWidth(1); // Réduire l'épaisseur de la bordure
    pdf.rect(5, 5, 190, 190); // Dessiner la bordure
  
    // Ajouter un titre en gras
    pdf.setFont("Helvetica", "bold");
    pdf.setFontSize(12);
    pdf.text("Résultats d'Examen d'AVC", 100, 30, { align: "center" });
  
    if (response) {
      const { risk, isAtRisk } = response;
      const riskMessage = isAtRisk
        ? `Résultat : Positif (Risque d'AVC : ${risk}%).`
        : `Résultat : Négatif (Risque faible : ${risk}%).`;
  
      pdf.setFont("Helvetica", "normal");
      pdf.setFontSize(10);
      pdf.text(riskMessage, 100, 60, { align: "center" });
      pdf.text("Conseils :", 100, 90, { align: "center" });
      pdf.text("1. Consultez un médecin régulièrement.", 100, 110, { align: "center" });
      pdf.text("2. Suivez une alimentation saine.", 100, 125, { align: "center" });
      pdf.text("3. Faites de l'exercice régulièrement.", 100, 140, { align: "center" });
      pdf.text("4. Évitez le stress.", 100, 155, { align: "center" });
  
      // Générer un code QR
      const qrData = `Résultat : ${isAtRisk ? 'Positif' : 'Négatif'}, Risque : ${risk}%`;
      const qrCodeUrl = await QRCode.toDataURL(qrData);
  
      // Ajouter le code QR au PDF
      const img = new Image();
      img.src = qrCodeUrl;
      img.onload = () => {
        pdf.addImage(img, 'PNG', 152, 152, 40, 40); // Positionner le QR code en bas à droite
        pdf.save("resultats_analyse.pdf");
      };
    } else {
      pdf.save("resultats_analyse.pdf");
    }
  };
  const renderPredictionResult = () => {
    if (!response) return null;

    const { risk, isAtRisk, frequence_alpha, frequence_beta, amplitude_delta, amplitude_theta } = response;
    const riskMessage = isAtRisk
      ? `Le patient a de fortes chances d'avoir un AVC avec un risque de ${risk}%.`
      : `Le risque d'AVC est faible, avec un taux de ${risk}%.`;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Résultat de la Prédiction
        </Typography>
        <Typography variant="body1" align="center">
          {riskMessage}
        </Typography>
        <Typography variant="body2" align="center">
          Fréquence Alpha : {frequence_alpha} Hz<br />
          Fréquence Beta : {frequence_beta} Hz<br />
          Amplitude Delta : {amplitude_delta} µV<br />
          Amplitude Theta : {amplitude_theta} µV
        </Typography>
      </div>
    );
  };

  const renderCompletionMessage = () => (
    <Typography
      variant="h6"
      align="center"
      style={{ marginTop: '20px', color: '#4caf50', fontWeight: 'bold' }}
    >
      <FaRegCheckCircle style={{ marginRight: '8px' }} /> Traitement terminé avec succès ! 🎉
    </Typography>
  );

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setFile(null);
    setResponse(null);
    setError(null);
    setUploadProgress(0);
    setUploadMessage('');
    setFinished(false);
  };

  const renderDiseaseCategories = () => (
    <List>
      {diseaseCategories.map((category) => (
        <div key={category.category}>
          <Typography 
            variant="h6" 
            align="left" // Alignement à gauche
            style={{ 
              margin: '10px 0', 
              fontSize: '0.75rem', // Taille de police plus petite
              color: '#333', // Couleur plus foncée
              fontWeight: 'bold', // Texte en gras
              textTransform: 'lowercase', // Texte en minuscules
            }}
          >
            {category.category}
          </Typography>
          {category.diseases.map((disease) => (
            <ListItem
              button
              key={disease.id}
              onClick={() => handleOptionClick(disease.id)}
              style={{
                border: '1px solid rgba(64, 158, 255, 0.6)',
                borderRadius: '5px',
                marginBottom: '10px',
                backgroundColor: selectedOption === disease.id ? '#e3f2fd' : 'transparent',
              }}
            >
              <ListItemText primary={disease.label} />
            </ListItem>
          ))}
          <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid #ccc' }} />
        </div>
      ))}
    </List>
  );

  const renderContent = () => {
    if (selectedOption === 'stroke') {
      return (
        <div>
          <Typography variant="h4" align="center" gutterBottom>
            <BsFileEarmarkText color="#1976d2" /> Upload Patient Data
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <input
                type="file"
                accept=".csv"
                onChange={handleFileChange}
                style={{ display: 'none' }}
                id="file-upload"
                aria-label="Upload file"
              />
              <label htmlFor="file-upload">
                <Button
                  variant="contained"
                  color="primary"
                  component="span"
                  startIcon={<MdCloudUpload style={{ color: '#fff' }} />}
                  style={{
                    width: '100%',
                    marginBottom: '10px',
                    background: 'linear-gradient(45deg, #64b5f6 30%, #1976d2 90%)',
                    borderRadius: '20px',
                    transition: 'background 0.3s, transform 0.2s',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  Choisir un Fichier
                </Button>
              </label>
            </Grid>

            {file && (
              <Grid item xs={12}>
                <Typography variant="body1" align="center" style={{ fontWeight: 'bold' }}>
                  Fichier sélectionné : {file.name}
                </Typography>
              </Grid>
            )}

            <Grid item xs={12}>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleUpload}
                style={{
                  marginTop: '20px',
                  width: '100%',
                  borderRadius: '20px',
                  border: '2px dashed #64b5f6', // Bordure en pointillé
                  backgroundColor: 'rgba(100, 181, 246, 0.1)', // Fond léger
                  color: '#1976d2', // Couleur du texte
                  transition: 'background 0.3s, transform 0.2s, box-shadow 0.3s',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Ombre
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(100, 181, 246, 0.2)'; // Changement de couleur au survol
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)'; // Ombre plus forte
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(100, 181, 246, 0.1)'; // Rétablissement de la couleur
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // Rétablissement de l'ombre
                }}
              >
                <MdAnalytics style={{ color: '#1976d2' }} /> Analyser les données du patient
              </Button>
            </Grid>

            {uploading && (
              <Grid item xs={12}>
                <div style={{ position: 'relative', height: '50px' }}>
                  <LinearProgress
                    variant="determinate"
                    value={uploadProgress}
                    style={{
                      height: '100%',
                      backgroundColor: '#e0e0e0', // Couleur de fond
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      height: '100%',
                      width: `${uploadProgress}%`,
                      background: `linear-gradient(135deg, #64b5f6 25%, #ffffff 25%, #ffffff 50%, #64b5f6 50%, #64b5f6 75%, #ffffff 75%, #ffffff)`,
                      backgroundSize: '1rem 1rem',
                      transition: 'width 0.2s ease-in-out',
                    }}
                  />
                </div>
                <Typography variant="body2" align="center" style={{ marginTop: '10px' }}>
                  {uploadMessage}
                </Typography>
              </Grid>
            )}

            <Grid item xs={12} style={{ marginTop: '20px' }}>
              <Paper elevation={3} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {finished ? (
                  <>
                    {renderPredictionResult()}
                    {renderCompletionMessage()}
                    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={handleDownload}
                        startIcon={<FaDownload />}
                        style={{
                          borderRadius: '20px',
                          width: '200px',
                          height: '50px',
                        }}
                      >
                        Télécharger les Résultats
                      </Button>
                    </div>
                  </>
                ) : (
                  <Typography variant="body2" align="center">
                    Les résultats seront affichés ici après le traitement.
                  </Typography>
                )}
              </Paper>
            </Grid>

            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
              {error ? (
                <Alert onClose={handleCloseSnackbar} severity="error">
                  {error}
                </Alert>
              ) : (
                <Alert onClose={handleCloseSnackbar} severity="success">
                  Fichier téléchargé avec succès !
                </Alert>
              )}
            </Snackbar>
          </Grid>
        </div>
      );
    }
    return null; // Aucun contenu à afficher pour les autres options
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          display: 'flex',
          height: '100vh',
          backgroundImage: `url(${LaboratoryImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          style={{
            width: '260px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: '20px',
            boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
            height: '100%',
            overflow: 'auto',
          }}
        >
          <Typography variant="h6" align="center" gutterBottom>
            Maladies
          </Typography>
          {renderDiseaseCategories()}
        </div>

        <CssBaseline /> {/* CssBaseline placé ici */} 
        
        <Container
          component="main"
          maxWidth="sm"
          style={{
            backgroundColor: 'rgba(245, 245, 245, 0.822)',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
            margin: '20px',
            marginLeft: '22%',
          }}
        >
          {renderContent()}
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default DataUpload;