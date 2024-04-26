import Login from '../login'
import { useState } from "react";

function Connexion() {
  let [side, setSide] = useState("slide-left");
  return (
    <div className="h-screen relative w-full">
      <div className="h-full bg-gradient-to-br from-blue-100 to-indigo-200 flex justify-center items-center">
        <div className="w-2/3 h-[80vh] relative rounded-xl bg-white overflow-hidden shadow-2xl  flex">
          <div className="absolute top-0 left-0 right-0 h-9 bg-gradient-to-br from-blue-400 to-indigo-700 z-0"></div>
          <div className="w-[45%] z-[2] h-full bg-gradient-to-br p-3 text-white flex items-center from-blue-400 to-indigo-600 rounded-br-[40px]">
            {side === "slide-left" ? (
              <div>
                <h2 className="font-semibold text-center text-xl">
                  Nous sommes heureux de vous revoir
                </h2>
              </div>
            ) : (
              <div>
                <h2 className="font-semibold text-center text-xl">
                  Bienvenue sur HeathTech
                </h2>
              </div>
            )}
          </div>
          <div className="h-full z-[2] w-full relative overflow-hidden bg-white rounded-tl-[38px] p-3">
            <div className="flex flex-col items-center">
              <div className="border w-fit overflow-hidden relative border-gray-300 flex rounded-3xl">
                <div
                  className={`absolute top-0 transition-all duration-150 bottom-0 btn ${side}`}
                ></div>
                <button
                  className={`px-3 relative mx-1 py-2 ${
                    side === "slide-right" ? "" : "selected"
                  }`}
                  onClick={() => {
                    setSide("slide-left");
                  }}
                >
                  Se connecter
                </button>
                <button
                  className={`px-3 relative mx-1 py-2 ${
                    side === "slide-right" ? "selected" : ""
                  }`}
                  onClick={() => {
                    setSide("slide-right");
                  }}
                >
                  S'inscrire
                </button>
              </div>
              <div
                className={`mt-3 relative transition-all ease-linear duration-150 flex w-full ${
                  side === "slide-left" ? "left-0" : "-left-[100%]"
                }`}
              >
                <div className={`relative min-w-full mx-3`}>
                    <Login></Login>
                </div>
                <div className={`relative min-w-full mx-3`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connexion;
