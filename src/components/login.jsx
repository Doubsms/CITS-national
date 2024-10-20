import { Chip, Radio, Input, Button } from "@material-tailwind/react";
import google from "../assets/images/auth/google.png";
import facebook from "../assets/images/auth/facebook.png";
import whatstapp from "../assets/images/auth/what.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {toast} from 'react-toastify';
import {useDispatch,useSelector} from 'react-redux';
import { SET_USER_ID } from '../store/actions';
import axios from 'axios';
import datajson from "../db/data.json";

function Login({ setSide }) {
  let navigate = useNavigate();
  let dispatch=useDispatch()

  let [selected,setSelected]=useState("Patient")
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  let [hopital,setHopital]=useState({
    "matricule":"",
    "password":""
  })

  let [personnel,setPersonnel]=useState({
    "email":"",
    "password":""
  })
  let host="http://localhost:8000/patient/sign-in/"

  function handleClick() {
    if (selected === "Patient") {
      if (username !== "" && password !== "") {
        let tempData={username,password}
        datajson.forEach((element)=>{
          if (element.type == "patient") {
            console.log(element)
            if (element.id.toString() !== "-1" && element.password === tempData.password && element.username == tempData.username) {
              toast.success("Bievenue vous etes desormais conecté en tant que patient")
              dispatch({ type: SET_USER_ID, userID: element.id,userType:"patient" })
              navigate("/");
            } else {
              toast.error("Mot de passe ou  nom d'utilisateur erroné")
            }
          }
        })
      } else {
        toast.warning("Il faut au moins remplir les champs obligatoires")
      }
    } else if (selected === "Hopital") {
      if (hopital.matricule !== "" && hopital.password !== "") {
        datajson.forEach((element)=>{
          if (element.type == "hopital") {
            console.log(element)
            if (element.id.toString() !== "-1" && element.password === hopital.password && element.matricule == hopital.matricule) {
              toast.success("Bievenue vous etes desormais conecté au compte Hopital de santé")
              dispatch({ type: SET_USER_ID, userID: element.id,userType:"hopital" })
              navigate("/");
            } else {
              toast.error("Mot de passe ou  nom matricule (identifiant unique) erroné")
            }
          }
        })
      } else {
        toast.error("Svp veuillez renseigner votre matricule et votre mot de passe")
      }
      
    } else {
      if (personnel.email !== "" && personnel.password !== "") {
        datajson.forEach((element)=>{
          if (element.type == "personnel") {
            console.log(element)
            if (element.id.toString() !== "-1" && element.password === personnel.password && personnel.email == element.email) {
              toast.success("Bievenue vous etes desormais conecté a votre compte medecin")
              dispatch({ type: SET_USER_ID, userID: element.id,userType:"personnel" })
              navigate("/");
            } else {
              toast.error("Mot de passe ou adresse email erronée")
            }
          }
        })
        
      } else {
        toast.error("s'il vous plait veuillez renseigner votre adresse email et votre mot de passe")
      }
    }
    
  }
  return (
    <div>
      <div className="flex items-center my-3 justify-center">
        <p className="mr-2 font-medium">Vous etes un : </p>
        <div className="flex">
          <Chip
            color="indigo"
            variant="ghost"
            value="Patient"
            className="mx-2 capitalize"
            icon={
              <Radio
                name="type"
                color="indigo"
                className="w-4 h-4 -translate-x-2 -translate-y-2"
                iconProps={{
                  className: "-mt-2 scale-90 -translate-x-[15px]",
                }}
                onChange={(e) => {
                  setSelected(e.target.value)
                }}
                value="Patient"
                checked={selected === "Patient"}
                
              />
            }
          ></Chip>
          <Chip
            color="deep-purple"
            variant="ghost"
            value="Hopital"
            className="mx-2 capitalize"
            icon={
              <Radio
                name="type"
                color="deep-purple"
                value="Hopital"
                className="w-4 h-4 -translate-x-2 -translate-y-2"
                onChange={(e) => {
                  setSelected(e.target.value)
                }}
                checked={selected === "Hopital"}
                iconProps={{
                  className: "-mt-2 scale-90 -translate-x-[15px]",
                }}
              />
            }
          ></Chip>
          <Chip
            color="green"
            variant="ghost"
            value="Personnel Medical"
            className="mx-2 capitalize"
            icon={
              <Radio
                name="type"
                color="green"
                className="w-4 h-4 -translate-x-2 -translate-y-2"
                iconProps={{
                  className: "-mt-2 scale-90 -translate-x-[15px]",
                }}
                value="Personnel Medical"
                onChange={(e) => {
                  setSelected(e.target.value)
                }}
                checked={selected === "Personnel Medical"}
              />
            }
          ></Chip>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center my-5">
        <h3 className="text-center mt-6 text-lg">Entrer vos informations</h3>
        <div className="w-[75%] flex flex-col space-y-5 pr-4 py-3">
          {
            selected === "Patient" ? <>
            <Input
            label="Nom d'utilisateur ou adresse email"
            type="name"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            color="indigo"
          ></Input>
          <Input
            label="Mot de passe"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            color="indigo"
          ></Input>
            </> : selected === "Hopital" ? <>
            <Input
            label="Indentifiant unique de l'hopital"
            placeholder="Matricule"
            type="name"
            value={hopital.matricule}
            onChange={(e) => {
              setHopital({...hopital, matricule:e.target.value});
            }}
            color="indigo"
          />
          <Input
            label="Mot de passe"
            type="password"
            value={hopital.password}
            onChange={(e) => {
              setHopital({...hopital, password:e.target.value});
            }}
            color="indigo"
          />
            
            </> :  <>
          <Input
            label="Adresse email du medecin"
            type="text"
            placeholder="docteuremail@gmail.com"
            value={personnel.email}
            onChange={(e) => {
              setPersonnel({...personnel, email:e.target.value});
            }}
            color="indigo"
          />
          <Input
            label="Mot de passe"
            type="password"
            placeholder="*******"
            value={personnel.password}
            onChange={(e) => {
              setPersonnel({...personnel, password:e.target.value});
            }}
            color="indigo"
          />
        </>}
          <Button
            color="indigo"
            onClick={handleClick}
          >
            Envoyer
          </Button>
        </div>
      </div>
      <div className="text-center my-5">
        <span className="mb-2">Ou en utilisant :</span>
        <div className="flex space-x-5 mt-2 justify-center">
          <img
            src={facebook}
            alt="google logo"
            className="w-[40px] h-[40px] rounded-full duration-100 hover:cursor-pointer hover:scale-90"
          />
          <img
            src={whatstapp}
            alt="what logo"
            className="w-[40px] h-[40px] rounded-full duration-100 hover:cursor-pointer hover:scale-90"
          />
          <img
            src={google}
            alt="what logo"
            className="w-[40px] h-[40px] rounded-full duration-100 hover:cursor-pointer hover:scale-90"
          />
        </div>
      </div>
      <div className="w-full mx-auto text-center">
        <span>
          Si vous n'avez pas encore de compte cliquer sur{" "}
          <button
            className=" font-medium underline text-blue-600 cursor-pointer"
            onClick={() => {
              setSide("slide-right");
            }}
          >
            s'inscrire
          </button>{" "}
        </span>
      </div>
    </div>
  );
}

export default Login;
