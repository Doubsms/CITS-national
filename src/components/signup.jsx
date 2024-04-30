import {
  Chip,
  Radio,
  Input,
  Select,
  Option,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

function Signup({ setSide }) {
  let [selectedValue, setSelectedValue] = useState("patient");
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmpassword, setconfirmPassword] = useState("");
  let [villeQuartier, setVilleQuartier] = useState("");
  let [date, setDate] = useState(null);
  let [numero, setNumero] = useState(null);
  let [numerosecour, setNumeroSecour] = useState(null);
  let [sexe, setSexe] = useState("M");
  let [status, setStatus] = useState("celibataire");

  let [hopital, setHopital] = useState({
    name: "",
    ville: "",
    quartier: "",
    ddn: null,
    contacts: null,
    confirmPasword: "",
    password: "",
    directeur: "",
  });
  let [personnel, setPersonnel] = useState({
    name: "",
    email:"",
    post:"",
    ddn: null,
    confirmPassword:"",
    password: "",
    specialite: "",
    hopital_name:"",
    experience:null
  });

  function handleChange(newWords) {
    setSelectedValue(newWords);
  }

  function handleClick() {
    if (selectedValue === "patient") {
      let data = {
        name: username.split(" ")[0],
        surname: username.split(" ")[1],
        username: username,
        password: password,
        numero: numero,
        numero_urgence: numerosecour,
        addresse_email: email,
        sexe: sexe,
        ddn: date,
        nationalite: "Camerounais",
        ville: villeQuartier.split(" ")[0],
        quartier: villeQuartier.split(" ")[1],
        celibataire: status === "celibataire",
      };
      let host = "http://localhost:8000/patient/sign-up/";
      axios.post(host, data).then(
        (res) => {
          let tempData = res.data;
          console.log(tempData);
          if (confirmpassword == password) {
            if (tempData.response) {
              setSide("slide-left");
              toast.success("Compte crée avec succès", {
                position: "top-center",
              });
              setUsername("");
              setEmail("");
              setNumero(null);
              setNumeroSecour(null);
              setPassword("");
              setconfirmPassword("");
              setVilleQuartier("");
              setSexe("");
              setStatus("");
            }
          } else {
            toast.error(
              "Une erreur a survenue:les deux mots de passe doivent etre identique",
              {
                position: "top-center",
              }
            );
          }
        },
        (err) => {
          console.log(err);
          toast.error("Une erreur a survenue", {
            position: "top-center",
          });
        }
      );
    } else if (selectedValue === "hopital" && hopital.confirmPasword === hopital.password){
      let temp={
        nom:hopital.name,
        lieux:hopital.ville + hopital.quartier,
        date:hopital.ddn,
        password:hopital.password,
        directeur:hopital.directeur,
        contact:hopital.contacts
      }
      console.log(temp);
      axios.post("http://localhost:8000/hopital/sign-up/",temp).then((result) => {
        if (result.data.response) {
          toast.success("Hopital enregistré avec succès")
          setSide("slide-left");
        }
        setHopital({
          name:"",
          ville:"",
          quartier:"",
          ddn:"",
          directeur:"",
          contacts:null,
          confirmpassword:"",
          password:""
        })
      }).catch((err) => {
        console.log(err);
      });
      console.log(hopital);
    } else {
      if (personnel.password === personnel.confirmPassword) {
        let temp={
          name:personnel.name.split(" ")[0],
          surname:personnel.name.split(" ")[1],
          addresse_email:personnel.email,
          post:personnel.post,
          experiences:personnel.experience,
          specialite:personnel.specialite,
          hospital:personnel.hopital_name,
          password:personnel.password,
          year:personnel.ddn.split("-")[0],
          month:personnel.ddn.split("-")[1],
          day:personnel.ddn.split("-")[2],
        }
        console.log(temp);
        axios.post("http://localhost:8000/medecin/sign-up/",temp).then((result) => {
          console.log(result.data)
          if (result.data.response) {
            toast.success("Personnel enregistré avec succès")
            setSide("slide-left");
            setPersonnel({
              name:"",
              email:"",
              ddn:null,
              post:'',
              experience:"",
              specialite:"",
              confirmPassword:"",
              hopital_name:"",
              password:""
            })
          }
          
        }).catch((err) => {
          console.log(err);
        });
      }
      
    }
  }
  return (
    <div>
      <div className="flex items-center justify-center my-3">
        <p className="mr-2 font-medium">Type de compte : </p>
        <div className="flex">
          <Chip
            color="indigo"
            variant="ghost"
            value="patient"
            className="mx-2 capitalize"
            icon={
              <Radio
                name="type"
                color="indigo"
                value="patient"
                onChange={(e) => handleChange(e.target.value)}
                checked={selectedValue === "patient"}
                className="w-4 h-4 -translate-x-2 -translate-y-2"
                iconProps={{
                  className: "-mt-2 scale-90 -translate-x-[15px]",
                }}
              />
            }
          ></Chip>
          <Chip
            color="blue"
            variant="ghost"
            value="hopital"
            className="mx-2 capitalize"
            icon={
              <Radio
                onChange={(e) => handleChange(e.target.value)}
                name="type"
                checked={selectedValue === "hopital"}
                value="hopital"
                color="blue"
                className="w-4 h-4 -translate-x-2 -translate-y-2"
                iconProps={{
                  className: "-mt-2 scale-90 -translate-x-[15px]",
                }}
              />
            }
          ></Chip>
          <Chip
            color="green"
            variant="ghost"
            value="personnel medical"
            className="mx-2 capitalize"
            icon={
              <Radio
                name="type"
                onChange={(e) => handleChange(e.target.value)}
                value="personnel"
                checked={selectedValue === "personnel"}
                color="green"
                className="w-4 h-4 -translate-x-2 -translate-y-2"
                iconProps={{
                  className: "-mt-2 scale-90 -translate-x-[15px]",
                }}
              />
            }
          ></Chip>
        </div>
      </div>
      <h1 className="text-center font-medium my-2 text-[17px] bg-gradient-to-br from-blue-400 to-indigo-600 text-transparent bg-clip-text">
        Entrer vos informations
      </h1>
      {selectedValue === "patient" ? (
        <div>
          <div className="w-[90%] py-2 grid gap-6 grid-cols-2">
            <Input
              label="nom d'utilisateur"
              required
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              placeholder="Ex: Maurice Edgard"
              color="indigo"
            ></Input>
            <Input
              label="Adrese email"
              type="email"
              required
              placeholder="Ex: ngoufackedgard1@gmail.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              color="indigo"
            ></Input>
            <Input
              label="Date de naissance"
              required
              type="date"
              placeholder="Ex: 08/01/2006"
              color="indigo"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            ></Input>
            <Input
              label="Lieu de residence actuel"
              required
              type="place"
              value={villeQuartier}
              onChange={(e) => {
                setVilleQuartier(e.target.value);
              }}
              placeholder="Ex: Dschang"
              color="indigo"
            ></Input>
            <Input
              required
              label="Numero de telephone"
              type="number"
              placeholder="Ex: 652 82 56 35"
              color="indigo"
              value={numero}
              onChange={(e) => {
                setNumero(e.target.value);
              }}
            ></Input>
            <Input
              label="Numero de secours"
              type="number"
              placeholder="Ex: 695 90 32 41"
              color="indigo"
              value={numerosecour}
              onChange={(e) => {
                setNumeroSecour(e.target.value);
              }}
            ></Input>
            <Select
              label="Etat civil"
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
              }}
            >
              <Option>Celibataire</Option>
              <Option>Marié</Option>
            </Select>
            <Select
              label="Sexe"
              value={sexe}
              onChange={(e) => {
                setSexe(e.target.value);
              }}
            >
              <Option>F</Option>
              <Option>M</Option>
            </Select>
            <Input
              label="Mot de passe"
              type="password"
              placeholder=""
              className="h-[75px] w-full"
              color="indigo"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Input
              label="Confirmer le mot de passe"
              type="password"
              placeholder=""
              className="h-[75px] w-full"
              color="indigo"
              value={confirmpassword}
              onChange={(e) => {
                setconfirmPassword(e.target.value);
              }}
            />
          </div>
          <div className=" w-[90%] mt-2 "></div>{" "}
        </div>
      ) : selectedValue === "hopital" ? (
        <div className="mb-3 w-[90%] grid gap-3">
          <Input
            label="Nom de l'hopital"
            placeholder="Hopital General de Maroua"
            type="text"
            value={hopital.name}
            onChange={(e) => {
              setHopital({ ...hopital, name: e.target.value });
            }}
            color="indigo"
          />
          <div className="grid grid-cols-2 gap-2">
            <Input
              label="Ville"
              type="text"
              placeholder="Maroua"
              value={hopital.ville}
              onChange={(e) => {
                setHopital({ ...hopital, ville: e.target.value });
              }}
              color="indigo"
            />
            <Input
              label="Quartier"
              placeholder="Baoliol"
              type="text"
              value={hopital.quartier}
              onChange={(e) => {
                setHopital({ ...hopital, quartier: e.target.value });
              }}
              color="indigo"
            />
          </div>
          <Input
            label="Date de creation"
            type="date"
            value={hopital.ddn}
            onChange={(e) => {
              setHopital({ ...hopital, ddn: e.target.value });
            }}
            color="indigo"
          />
          <Input
            label="Contacts"
            type="number"
            placeholder="652825635"
            value={hopital.contacts}
            onChange={(e) => {
              setHopital({ ...hopital, contacts: e.target.value });
            }}
            color="indigo"
          />
          <Input
            label="Identifiant unique"
            type="text"
            placeholder="0584E15EOS"
            value={hopital.directeur}
            onChange={(e) => {
              setHopital({ ...hopital, directeur: e.target.value });
            }}
            color="indigo"
          />
          <div className="grid grid-cols-2 gap-2">
            <Input
              label="Mot de passe"
              type="password"
              placeholder="*******"
              value={hopital.password}
              onChange={(e) => {
                setHopital({ ...hopital, password: e.target.value });
              }}
              color="indigo"
            />
            <Input
              label="Confirmer le mot de passe"
              type="password"
              placeholder="********"
              value={hopital.confirmPasword}
              onChange={(e) => {
                setHopital({ ...hopital, confirmPasword: e.target.value });
              }}
              color="indigo"
            />
          </div>
        </div>
      ) : (
        <div>
          <div className="w-[90%] py-2 grid gap-6 grid-cols-2">
            <Input
              label="nom du personnel"
              required
              type="text"
              value={personnel.name}
              onChange={(e) => {
                setPersonnel({...personnel, name:e.target.value});
              }}
              placeholder="Ex: Dr Maurice"
              color="indigo"
            ></Input>
            <Input
              label="Adrese email"
              type="email"
              required
              placeholder="Ex: docteuremail4@gmail.com"
              value={personnel.email}
              onChange={(e) => {
                setPersonnel({...personnel, email:e.target.value});
              }}
              color="indigo"
            ></Input>
            <Input
              label="Date de debut de fonction"
              required
              type="date"
              placeholder="Ex: 18/05/2000"
              color="indigo"
              value={personnel.ddn}
              onChange={(e) => {
                setPersonnel({...personnel, ddn:e.target.value});
              }}
            ></Input>
            <Input
              label="Specialite"
              required
              type="text"
              value={personnel.specialite}
              onChange={(e) => {
                setPersonnel({...personnel, specialite:e.target.value});
              }}
              placeholder="Ex: Neurologiste"
              color="indigo"
            ></Input>
            <Input
              required
              label="Hopital de service"
              type="text"
              placeholder="Ex: hopital general maroua"
              color="indigo"
              value={personnel.hopital_name}
              onChange={(e) => {
                setPersonnel({...personnel, hopital_name:e.target.value});
              }}
            ></Input>
            <Input
              required
              label="Fonction dans cet hopital"
              type="text"
              placeholder="Ex: Consultant"
              color="indigo"
              value={personnel.post}
              onChange={(e) => {
                setPersonnel({...personnel, post:e.target.value});
              }}
            ></Input>
            <Input
              label="Annee d'experience"
              type="number"
              placeholder="Ex: 4 ans"
              color="indigo"
              value={personnel.experience}
              onChange={(e) => {
                setPersonnel({...personnel, experience:e.target.value});
              }}
            ></Input>
            <Input
              label="Mot de passe"
              type="password"
              placeholder=""
              className="h-[75px] w-full"
              color="indigo"
              value={personnel.password}
              onChange={(e) => {
                setPersonnel({...personnel, password:e.target.value});
              }}
            />
            <Input
              label="Confirmer le mot de passe"
              type="password"
              placeholder=""
              className="h-[75px] w-full"
              color="indigo"
              value={personnel.confirmPassword}
              onChange={(e) => {
                setPersonnel({...personnel, confirmPassword:e.target.value});
              }}
            />
          </div>
          <div className=" w-[90%] mt-2 "></div>{" "}
        </div>
      )}
      <div className="w-full">
        <Button color="indigo" className="w-[90%]" onClick={handleClick}>
          S'enregistrer
        </Button>
      </div>
    </div>
  );
}

export default Signup;
