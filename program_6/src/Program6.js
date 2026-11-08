import React, { useState } from "react";

function Program6() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState("");

  const handleCalculate = (op) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Please enter valid numbers");
      return;
    }

    let res = 0;
    switch (op) {
      case "+":
        res = n1 + n2;
        break;
      case "-":
        res = n1 - n2;
        break;
      case "*":
        res = n1 * n2;
        break;
      case "/":
        res = n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
        break;
      default:
        res = 0;
    }
    setOperation(op);
    setResult(res);
  };

  return (
    <div style={{ border: "2px solid blue", padding: "20px", margin: "20px", width: "fit-content", fontFamily: "Arial" }}>
      <h2>React Calculator Component (Program 6)</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <input
          type="number"
          placeholder="Number 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          style={{ padding: "8px", fontSize: "16px", width: "120px" }}
        />
        <input
          type="number"
          placeholder="Number 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          style={{ padding: "8px", fontSize: "16px", width: "120px" }}
        />
      </div>

      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <button onClick={() => handleCalculate("+")} style={{ padding: "8px 16px", fontSize: "16px", cursor: "pointer" }}>+</button>
        <button onClick={() => handleCalculate("-")} style={{ padding: "8px 16px", fontSize: "16px", cursor: "pointer" }}>-</button>
        <button onClick={() => handleCalculate("*")} style={{ padding: "8px 16px", fontSize: "16px", cursor: "pointer" }}>*</button>
        <button onClick={() => handleCalculate("/")} style={{ padding: "8px 16px", fontSize: "16px", cursor: "pointer" }}>/</button>
      </div>

      {result !== null && (
        <div style={{ fontSize: "18px", fontWeight: "bold", marginTop: "10px" }}>
          Result ({operation}): <span style={{ color: "blue" }}>{result}</span>
        </div>
      )}
    </div>
  );
}

export default Program6;
