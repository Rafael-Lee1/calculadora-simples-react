import React, { useState } from 'react';

function Calculator() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState('');

  const calculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Erro');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite uma expressão"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={calculate}>=</button>
      <p>Resultado: {result}</p>
    </div>
  );
}

export default Calculator;
