import { useEffect, useState } from "react";
import "./starwar.css";
export function Starwar() {
  const [setting, setSetting] = useState(false);
  const [img, setImg] = useState(null);
  const [num, setNum] = useState(null);
  const [name, setName] = useState("Charactor Name");
  const [height, setHeight] = useState(null);
  const [home, setHome] = useState([]);
  const [aff, setAff] = useState([]);

  async function fetchData() {
    const rdm = Math.round(Math.random() * 88);
    const url = `https://akabab.github.io/starwars-api/api/id/${rdm}.json`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setNum(rdm);
      setImg(data.image);
      setName(data.name);
      setHeight(data.height);
      setHome(data.homeworld);
      setAff(data.affiliations);
      console.log(data);
    } catch (error) {
      console.error("There was a problem fetching the data:", error);
    }
  }
  function getChar() {
    setSetting(true);
    fetchData();
  }
  const affs = aff.map((e, index) => {
    return (
      <li key={index}>
        <a href={e}>{index + 1}</a>
      </li>
    );
  });
  return (
    <div>
      <p>This is a star war</p>
      {setting ? (
        <div>
          <img src={img} className="pic"></img>
          <h1>
            No.{num}: {name}
          </h1>
          <p>{height} m</p>
          <p>
            Homeworld:
            <a href={home} target="blank">
              links
            </a>
          </p>
          <p>Affiliations list:</p>
          <ul>{affs}</ul>
        </div>
      ) : (
        <div>
          <h1>Please click the random button to start!</h1>
        </div>
      )}

      <button onClick={() => getChar()} className="btn">
        Random
      </button>
      <div></div>
    </div>
  );
}
