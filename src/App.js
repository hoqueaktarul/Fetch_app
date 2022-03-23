import "./styles.css";
import React, { useState, useEffect } from "react";
import Loading from "./Loading";

export default function App() {
  const [api, setapi] = useState();
  const [data, setdata] = useState();
  const [error, seterror] = useState();

  const [loading, setloading] = useState(false);

  return (
    <div className="App">
      <div className="main">
        <h1>Fetch Data</h1>
        <input
          placeholder="Enter the url"
          type="text"
          value={api}
          onChange={(e) => {
            setapi(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setdata();
            setloading(true);
            async function fatchingFn() {
              try {
                const res = await fetch(api);
                const json = await res.json();
                setdata(json);
              } catch (e) {
                seterror(e);
              } finally {
                setloading(false);
                // console.log(error);
              }
            }
            // fetch(api)
            //   .then((res) => res.json())
            //   .then((res) => {
            //     console.log(res);
            //     setdata(res);
            //     setloading(false);
            //   });
            fatchingFn();
          }}
        >
          Fetch
        </button>
      </div>
      <div className="result">
        {loading ? <Loading /> : <pre>{JSON.stringify(data, null, 4)}</pre>}
      </div>
      {/* <pre>{JSON.stringify(error)}</pre> */}
    </div>
  );
}
