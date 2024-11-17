import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function previewHandler() {
    if (step > 1) setStep((s) => s - 1);
  }

  function nextHandler() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      <button
        className="close"
        onClick={() => {
          setIsOpen((is) => !is);
        }}
      >
        x
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>
          <div className="message">
            step {step}: {messages[step - 1]}
          </div>
          <div className="buttons">
            <button
              style={{ color: "white", backgroundColor: "#7950f2" }}
              onClick={previewHandler}
            >
              Previous
            </button>
            <button
              style={{ color: "white", backgroundColor: "#7950f2" }}
              onClick={nextHandler}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
