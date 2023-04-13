import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const [name, setName] = useState("Vidipt");
  const navigate = useNavigate();

  const buttonClick = () => {
    console.log("Button Clicked");
    navigate("/calendar", { state: { name: name } });
  };

  return (
    <div className="App w-screen h-screen flex justify-center items-center">
      <div className="w-full h-full bg-teal rounded-2xl flex justify-center items-center">
        <div className=" w-1/2 h-1/2 bg-white rounded-3xl flex flex-col justify-center items-center">
          <div className="text-3xl p-10 font-dyana">
            {" "}
            Please Enter your Name...
          </div>
          <input
            type="text"
            placeholder="Vidipt"
            className="p-5 border-2 border-teal border-solid rounded-3xl w-4/10 transition duration-500 ease-in-out focus:outline-none"
            onChange={(e) =>
              e.target.value == "" ? setName("Vidipt") : setName(e.target.value)
            }
          />
          <button
            className=" m-8 bg-teal p-4 rounded-3xl"
            onClick={() => buttonClick()}
          >
            Go To Calendar
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
