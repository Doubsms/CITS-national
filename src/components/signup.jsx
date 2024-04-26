import { Chip, Radio,Input,Textarea,Button } from "@material-tailwind/react";
import { useState } from "react";

function Signup({setSide}) {
  let [selectedValue, setSelectedValue] = useState("patient");

  function handleChange(newWords) {
    setSelectedValue(newWords);
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
            <Input label="nom d'utilisateur" required type="name" placeholder="Ex: Maurice Edgard" color="indigo"></Input>
            <Input label="Adrese email" type="email" required placeholder="Ex: ngoufackedgard1@gmail.com" color="indigo"></Input>
            <Input label="Date de naissance" required type="date" placeholder="Ex: 08/01/2006" color="indigo"></Input>
            <Input label="Lieu de residence actuel" required type="place" placeholder="Ex: Dtshang" color="indigo"></Input>
            <Input required label="Numero de telephone" type="number" placeholder="Ex: 652 82 56 35" color="indigo"></Input>
            <Input label="Numero de secours" type="number" placeholder="Ex: 695 90 32 41" color="indigo"></Input>
        </div>
<div className=" w-[90%] mt-2 ">
<Textarea label="bibiographie" type="text" placeholder="" className="h-[75px] w-full" color="indigo"></Textarea>

    </div>        </div>
      ) : selectedValue === "hopital" ? (
        <div>Hopital</div>
      ) : (
        <div>Personnel</div>
      )}
       <div className="w-full">
        <Button color="indigo" className="w-[90%]" onClick={()=>setSide("slide-left")}>S'enregistrer</Button>
        </div>
    </div>
  );
}

export default Signup;
