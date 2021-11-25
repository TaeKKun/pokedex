import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const PokéComp = () => {
  const [num, updateNum] = useState();
  const [name, updateName] = useState();
  const [updateThis, setUpdateThis] = useState();
  const [id, updateId] = useState();
  const [type, updateType] = useState();
  const [height, updateHeight] = useState();
  const [weight, updateWeight] = useState();
  const [abilty, updateAbilty] = useState();
  const [baseExp, updateBaseExp] = useState();
  const [moves, updateMoves] = useState();
  const [sprites, updateSprites] = useState();

  function updateChange(event) {
    setUpdateThis(event.target.value);
  }

  useEffect(() => {
    async function getData() {
      if (num === "") {
        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${0}`);
        // console.log(resp.data);
        let pokeBility = "";
        for (let i = 0; i < resp.data.abilities.length; i++) {
          if (i === resp.data.abilities.length - 1) {
            pokeBility += resp.data.abilities[i].ability.name + " ";
          } else {
            pokeBility += resp.data.abilities[i].ability.name + " ,";
          }
        }

        let pokeType = "";
        for (let i = 0; i < resp.data.types.length; i++) {
          if (i === resp.data.types.length - 1) {
            pokeType += resp.data.types[i].type.name + " ";
          } else {
            pokeType += resp.data.types[i].type.name + ", ";
          }
        }

        let pokeMoves = "";
        for (let i = 0; i < 4; i++) {
          pokeMoves += resp.data.moves[i].move.name + " ";
        }

        let pokeId = resp.data.id;
        let pokeName = resp.data.name;
        let pokeHeight = resp.data.height * 10 + " cm";
        let pokeWeight = resp.data.weight / 10 + " kg";
        let pokeExp = resp.data.base_experience + " lv.";
        let pokeSprites = resp.data.sprites.other.dream_world.front_default;

        updateName(pokeName);
        updateId(pokeId);
        updateType(pokeType);
        updateHeight(pokeHeight);
        updateWeight(pokeWeight);
        updateAbilty(pokeBility);
        updateBaseExp(pokeExp);
        updateMoves(pokeMoves);
        updateSprites(pokeSprites);
      } else {
        const resp = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${num}`
        );
        // console.log(resp.data);
        let pokeBility = "";
        for (let i = 0; i < resp.data.abilities.length; i++) {
          if (i === resp.data.abilities.length - 1) {
            pokeBility += resp.data.abilities[i].ability.name + " ";
          } else {
            pokeBility += resp.data.abilities[i].ability.name + ", ";
          }
        }

        let pokeType = "";
        for (let i = 0; i < resp.data.types.length; i++) {
          if (i === resp.data.types.length - 1) {
            pokeType += resp.data.types[i].type.name + " ";
          } else {
            pokeType += resp.data.types[i].type.name + ", ";
          }
        }

        let pokeMoves = "";
        for (let i = 0; i < 4; i++) {
          if (i === 3) {
            pokeMoves += resp.data.moves[i].move.name + " ";
          } else {
            pokeMoves += resp.data.moves[i].move.name + ", ";
          }
        }

        let pokeId = resp.data.id;
        let pokeName = resp.data.name;
        let pokeHeight = resp.data.height * 10 + " cm";
        let pokeWeight = resp.data.weight / 10 + " kg";
        let pokeExp = resp.data.base_experience + " lv.";
        let pokeSprites = resp.data.sprites.other.dream_world.front_default;

        updateName(pokeName);
        updateId(pokeId);
        updateType(pokeType);
        updateHeight(pokeHeight);
        updateWeight(pokeWeight);
        updateAbilty(pokeBility);
        updateBaseExp(pokeExp);
        updateMoves(pokeMoves);
        updateSprites(pokeSprites);
      }
    }

    getData();
  });

  return (
    <>
      <div className="container">
        <div className="main_div">
          <h1>
            You have chosen <b> {name} </b>
          </h1>
          <div className="img_div">
            <img src={sprites} alt="" />
            <div className="input_div">
              <input
                value={updateThis}
                placeholder="Enter ID no. or Name ( in lowercase )"
                onChange={updateChange}
              />
              <button
                type="button"
                className="poke_search_btn"
                onClick={() => updateNum(updateThis)}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="main_div2">
          <div className="poke_div">
            <div className="poke_infos">
              <h2 id="text_cap">
                <strong>Name :</strong> {name}
              </h2>
              <h2>
                <strong>No. :</strong> {id}
              </h2>
              <h2 id="text_cap">
                <strong>Type :</strong> {type}
              </h2>
              <h2>
                <strong>Height :</strong> {height}
              </h2>
              <h2>
                <strong>Weight :</strong> {weight}
              </h2>
            </div>
            <div className="poke_infos2">
              <h2>
                <strong>Base experience :</strong> {baseExp}
              </h2>
              <h2 id="text_cap">
                <strong>Ability :</strong> {abilty}
              </h2>
              <h2 id="text_cap">
                <strong>Moves :</strong> {moves}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokéComp;
