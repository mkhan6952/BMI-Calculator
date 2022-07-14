import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");

  const fresult = Number(result);
  // console.log(typeof fresult);

  function bmiCalc(w, h) {
    return (w / (h * h)) * 10000;
  }

  const handleSubmit = () => {
    if (weight === "" && height === "") {
      alert("Enter Weight and Height First");
    } else {
      setResult(bmiCalc(weight, height));
    }
  };

  return (
    <div className="App">
      <div className="main">
        <div className="inner">
          <h2>BMI Calculator</h2>
          <div>
            <label for="weight">Weight (kgs)</label>
            <br></br>
            <input
              type="text"
              name="weight"
              id="weight"
              placeholder="0"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label for="height">Height (cm)</label>
            <br></br>
            <input
              type="text"
              name="height"
              id="height"
              placeholder="0"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <button class="button-40" role="button" onClick={handleSubmit}>
            Calculate BMI
          </button>
          <div className="result">
            <span>Your BMI: {fresult.toFixed(2)} </span>
            <span style={{ fontSize: "1.2rem" }}>
              Your weight is :
              {fresult < 18
                ? "Under-Weight"
                : fresult > 19 && fresult < 25
                ? "Fit-Weight"
                : fresult > 25
                ? "Over-Weight"
                : "0"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
