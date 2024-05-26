import React from "react";
import image from './edg.jpg';

function Consultation() {
  return (
    <div>
      <div className="bg-white rounded-xl">
        <h1 className="p-5 text-center font-bold text-xl">
          Info de la consultation
        </h1>
      </div>
      <div className="mt-3 mb-5 p-3 bg-white rounded-xl">
        <div className="flex justify-between mb-3">
          <div className=" flex gap-2 items-center">
            {" "}
            <h1 className=" text-[16px] font-semibold text-indigo-700 uppercase">
              Hopital :
            </h1>
            Hopital regional de maroua{" "}
          </div>
          <div>
            <div className="flex">
              <h2 className="text-[15px] font-semibold">Telephone : </h2>{" "}
              <span> 652 82 56 35</span>
            </div>
          </div>
        </div>
        <hr className="my-5" />
        <div>
            <h1 className=" text-center font-bold text-indigo-700 text-lg">Informations Basique</h1>
          <div className="flex flex-col space-y-2 ">
            <div className="flex">
              <h5 className=" font-bold mx-1">Identifiant: </h5>
              <span>21d0181ep</span>
            </div>
            <div className="flex">
              <h5 className=" font-bold mx-1">Titre: </h5>
              <span>Consultation de maux de tete</span>
            </div>
            <div className="flex">
              <h5 className=" font-bold mx-1">Medecin en charge: </h5>
              <span>Dr Maurice Edgard, Medecin generaliste</span>
            </div>
            <div className="flex">
              <h5 className=" font-bold mx-1">Date : </h5>
              <span>12 Mars 2024, 16h30min ,16s</span>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-blue-600 p-3 rounded-xl text-white">
        <h2 className=" text-center font-bold text-white text-lg">Symptomes du patient</h2>
        
        <div className="flex flex-col gap-3">
            <div>
                <span className="font-bold text-center">Maux de tete :</span> depuis 3 jours
            </div>
            <div>
                <span className="font-bold text-center">Fievre :</span> depuis 39.6 degré celsius
            </div>
            <div>
                <span className="font-bold text-center">Bourdonnement :</span> Oreilles
            </div>
            <div>
                <span className="font-bold text-center">Mal de ventre :</span> vers
            </div>
        </div>
      </div>
      <div className=" bg-white p-3 rounded-xl my-5">
        <h2 className=" text-center font-bold text-indigo-700 text-lg">Examens du patient et resultats</h2>
        
        <div className="flex flex-col gap-3">
            <div>
                <span className="font-bold text-center">TDR :</span> positif
            </div>
            <div>
                <span className="font-bold text-center">Hemmogramme :</span>negatif
            </div>
            <div>
                <span className="font-bold text-center">TROD</span>: Traitement immediat
            </div>
        </div>
      </div>
      <div className=" bg-white p-3 rounded-xl my-5">
        <h2 className=" text-center font-bold text-indigo-700 text-lg">Document annexe</h2>
        
        <div className="flex flex-col gap-3">
            <img src={image} alt="analyse" className=" rounded-xl mx-3 my-3" />
            <div className="text-[16px]">
                <span className="font-bold text-center">Test du paludisme :</span>Positif
            </div>
        </div>
      </div>
      <div className=" bg-white p-3 rounded-xl my-5">
        <h2 className=" text-center font-bold text-indigo-700 text-lg">Conclusion</h2>
        
        <div className="flex flex-col gap-3">
            <div>
                <span className="font-bold text-center">- Paludisme grave detecté</span>
            </div>
            <div>
                <span className="font-bold text-center">- Teste typhoide non concluant</span>
            </div>

            <div>
                <span className="font-bold text-center">- Mis sur traitement</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Consultation;
