import { useState } from "react";
import "./App.css";

const App = function () {
  const [result, setResult] = useState("");
  const handleClick = function (e) {
    e.preventDefault();
    setResult(result + e.target.name);
  };

  const finalAnswer = function (e) {
    e.preventDefault();
    setResult(eval(result));
  };

  const clear = function (e) {
    e.preventDefault();
    setResult(result.slice(0, -1).toString());
  };

  const atOnce = function (e) {
    e.preventDefault();
    setResult("");
  };

  return (
    <div className="App">
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input value={result} placeholder="Type a number" />

        <div className="clear/calc">
          <button name="9" onClick={clear}>
            C
          </button>
          <button name="%" onClick={handleClick}>
            %
          </button>
          <button name="+/-" onClick={handleClick}>
            +/-
          </button>
          <button name="/" onClick={handleClick}>
            /
          </button>
        </div>

        <div className="firstRow">
          <button name="7" onClick={handleClick}>
            9
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            7
          </button>
          <button name="*" onClick={handleClick}>
            &times;
          </button>
        </div>

        <div className="secondRow">
          <button name="4" onClick={handleClick}>
            6
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="7" onClick={handleClick}>
            4
          </button>

          <button name="-" onClick={handleClick}>
            &ndash;
          </button>
        </div>

        <div className="thirdRow">
          <button name="3" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="1" onClick={handleClick}>
            3
          </button>
          <button name="+" onClick={handleClick}>
            +
          </button>
        </div>

        <div className="lastPage">
          <button name="." onClick={handleClick}>
            .
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button name="<" onClick={clear}>
            less than
          </button>
          <button onClick={atOnce}>clearAll</button>
        </div>

        <button name="=" onClick={finalAnswer}>
          =
        </button>
      </form>
    </div>
  );
};

export default App;
