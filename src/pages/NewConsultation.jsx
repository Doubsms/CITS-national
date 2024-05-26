import React, { useState } from "react";
import "../pages/page.css";
import {
  Stepper,
  Step,
  Button,
  Input,
  Textarea,
  List,
  ListItem,
  Typography
} from "@material-tailwind/react";

import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';
function NewConsultation() {

  let [active,setActive]=useState(0)
  let [symptomes,setSymptomes]=useState([
    {
      "titre":"Maux de tete",
      "description":"Violent"
    },
    {
      "titre":"Mal de ventre",
      "description":"Chronique"
    }
  ])
  let [examens,setExamens]=useState([
    {
      "titre":"Glycolyse",
      "description":"0.9 mml/L sang"
    },
    {
      "titre":"TDR",
      "description":"Paludisme detecté"
    }
  ])
  let navigate=useNavigate()

  return (
    <div className="bg-white p-3 rounded-lg shadow-lg min-h-96 translate-y-[20px]">
     <div className=" translate-y-2">
     <h1 className="text-xl font-semibold text-blue-800 my-4 underline text-center">
        Nouvelle consultation
      </h1>
      <Stepper activeStep={active} color="blue" className="mb-80x">
        <Step onClick={(e)=>setActive(0)} color="green" className="bg-green-600">1
        <div className="absolute -bottom-[2rem] -right-11 text-black font-normal w-screen">
          
        </div>
        </Step>
        <Step onClick={(e)=>setActive(1)}>2</Step>
        <Step onClick={(e)=>setActive(2)}>3</Step>
        <Step onClick={(e)=>setActive(3)}>4</Step>
      </Stepper>
      {
        active === 0 ? (
          <div className="flex justify-between px-3 my-3">
          <div className="w-[50%]">
            <span className="flex font-semibold text-lg gap-3 items-center">Titre: <Input label="Titre" color="indigo"></Input> <Button className=" bg-indigo-800 -translate-x-11" onClick={()=>setActive(1)} size="xl">Ok</Button></span>
          </div>
          <div className="text-[15px]"> 
            <div className=" text-gray-500 font-medium flex flex-col gap-2">
            <span>Hopital generale de maroua</span>
              <span>Date du jour: Lun 18 Avril 2024</span>
              <span>Medecin : Dr Edgard </span>
            </div>
          </div>
          </div>
        ): active === 1 ? (
          <div className="mx-4">
            <h3 className=" text-gray-500 mt-5 text-lg">Symptomes du patient</h3>
            <hr />
            <List className=" border rounded">
              {symptomes.map((e,k)=> <ListItem key={k} className="flex flex-col items-start">
                  <h4 className="font-bold">{e.titre}</h4>
                  <h6 className=" text-gray-400">{e.description}</h6>
              </ListItem>)}
            </List>
            <div className=" my-5 w-[50%] flex-col flex gap-2">
            <Input color="indigo" label="titre du symptome" className=""></Input>
            <Textarea label="Description du symptome" color="indigo"></Textarea>
            <div className="flex space-x-3">
            <Button className="" color="indigo">Ajouter le symptome</Button>
            <Button className="" color="red">Vider</Button>
            </div>
          </div>
          </div>
        ): active === 2 ? (
          <div className="mx-4">
            <h3 className=" text-gray-500 mt-5 text-lg">Examens du patient</h3>
            <hr />
            <List className=" border rounded">
              {examens.map((e,k)=> <ListItem key={k} className="flex flex-col items-start">
                  <h4 className="font-bold">{e.titre}</h4>
                  <h6 className=" text-gray-400">{e.description}</h6>
              </ListItem>)}
            </List>
            <div className=" my-5 w-[50%] flex-col flex gap-2">
            <Input color="indigo" label="Nom de l'examen" className=""></Input>
            <Textarea label="Resultat de l'examen" color="indigo"></Textarea>
            <div className="flex space-x-3">
            <Button className="" color="indigo">Valider l'examen</Button>
            <Button className="" color="red">Annuler</Button>
            </div>
          </div>
          </div>
        ): <div className="mx-4">
        <h3 className=" text-gray-500 mt-5 text-lg">Conclusion et prescription</h3>
        <hr className="mb-2" />
        <div className="grid gap-4 my-5">
        <Textarea label="Interpretations et Conclusion"  color="indigo"></Textarea>
        <Textarea label="Posologie des medicaments" color="indigo"></Textarea>
        <div className="flex space-x-3">
        <Button className="" color="green" onClick={()=>{
          toast.success("Consultation enregistrée avec succès")
          navigate("/consultation")
        }}>Terminer</Button>
        <Button className="" color="red" onClick={()=>{
          toast.error("Consultation annulée")
          navigate("/dashboard")

        }}>Annuler la consultation</Button>
        </div>
        </div>
      </div>
      }
     </div>
    </div>
  );
}

export default NewConsultation;
