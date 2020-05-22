import { useState, useCallback, ChangeEvent, useRef } from "react";

export default function Home() {
  const [dimensions, setDimensions] = useState(8);
  const [input, setInput] = useState("");
  const counter = useRef(0);

  const onSubmitDimensions = useCallback(() => {
    const number = parseInt(input);
    if (number > 0) {
      setDimensions(number);
    }
  }, [input]);

  const onInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <div className="container">
      <div className="board">
        {[...Array(dimensions)].map((value, index) => {
          counter.current = counter.current + 1;
          return index % 2 !== 0 ? (
            <div key={counter.current} className="box-row">
              {[...Array(dimensions)].map((value, index) => {
                counter.current = counter.current + 1;
                return index % 2 !== 0 ? (
                  <div key={counter.current} className="black-box"></div>
                ) : (
                  <div key={counter.current} className="white-box"></div>
                );
              })}
            </div>
          ) : (
            <div key={counter.current} className="box-row">
              {[...Array(dimensions)].map((value, index) => {
                counter.current = counter.current + 1;
                return index % 2 === 0 ? (
                  <div key={counter.current} className="black-box"></div>
                ) : (
                  <div key={counter.current} className="white-box"></div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="input-container">
        <input
          placeholder="enter a number"
          className="input"
          onChange={onInput}
        ></input>
        <button className="button" onClick={onSubmitDimensions}>
          Submit
        </button>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-grow: 1;
          flex-direction: row;
          font-size: 40px;
        }
        .board {
          border: solid black 2px;
        }
        .box-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        }
        .box-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .white-box {
          height: 100px;
          width: 100px;
          display: flex;
          background: white;
          border: solid black 2px;
        }
        .black-box {
          height: 100px;
          width: 100px;
          display: flex;
          background: black;
          border: solid black 2x;
        }
        .input-container {
          padding: 20px;
          display: flex;
          flex-grow: 0.2;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: solid black 2x;
        }
        .input {
          margin-top: 20px;
          padding: 20px;
          height: 30px;
          display: flex;
          width: 10%
          border: solid black 2x;
          font-size: 40px;
          text-align: center;
        }
        .button {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          border: solid black 2x;
          font-size: 40px;
          background: black;
          color: white;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
