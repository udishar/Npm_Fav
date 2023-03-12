import React, { useEffect, useState } from "react";
import Button from "../../atoms/Buttons/button";
import Input from "../../atoms/InputField/inputField";
import style from "./addFavs.module.css";
import { useNavigate } from "react-router-dom";

export default function AddFavs() {
  const [interest, setInterest] = useState([]);
  const [inputText, setInputText] = useState("");
  const [search, setSearch] = useState("reactjs");
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.npms.io/v2/search?q=${search ? search : "react"}`)
      .then((res) => res.json())
      .then((data) => setInterest(data.results));
  }, [search]);

  function HandleClick() {
    let newInterest = {
      value,
      inputText,
    };
    const alreadyExisting = JSON.parse(localStorage.getItem("interests")) || [];
    let newItems = [...alreadyExisting, newInterest];
    localStorage.setItem("interests", JSON.stringify(newItems));
    setValue("");
    setInputText("");
    navigate("/hasfavs");
  }

  return (
    <div className={style.mainContainer}>
      <div className={style.div1}>
        <p>Search for NPM Packages</p>
        <Input
          placeholder="Search"
          className={style.input}
          onChange={(input) => setSearch(input)}
        />
      </div>
      <div>
        <p className={style.head}>Results</p>
        <div className={style.scrollDiv}>
          {interest.map((item) => (
            <div className={style.div} key={item.package.date}>
              <Input
                type="radio"
                onChange={(inputValue) => setValue(inputValue)}
                value={item.package.name}
              />
              <p>{item.package.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={style.div2}>
        <p className={style.paragraph}>Why is this your Fav?</p>
        <textarea
          className={style.text}
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
        />
      </div>
      <div className={style.btn}>
        <Button Value="Submit" className={style.button} onClick={HandleClick} />
      </div>
    </div>
  );
}
