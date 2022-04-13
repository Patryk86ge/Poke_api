import React, { useEffect, useState } from 'react';
import CardPokemon from "../asets/CardPokemon";
import PaginationBtn from "../asets/PaginationBtn";
import axios from "axios";
import { getPokemon } from "../asets/helpers";
import logo from "../asets/img/pokemon-logo.png"

const URL_API = 'https://pokeapi.co/api/v2/pokemon?limit=6&offset=0'

const Pokemon = ({ headingText }) => {
    const [pokeData, setPokeDada] = useState([]);
    const [currentPageUrl, setCurrentPageUrl] = useState(URL_API);
    const [nextPage, setNexPage] = useState();
    const [prevPage, setPevPage] = useState();

    const pokeGenerator = async (url) => {
      axios.get(url)
        .then(async (res) => {
          setNexPage(res.data.next);
          setPevPage(res.data.previous);
          await loadPoke(res.data.results);
        })
        .catch(error => console.error('Error:', error));
    }
    const loadPoke = async (data) => {
      let _pokemonData = await Promise.all(data.map(async pokemon => {
        return await getPokemon(pokemon.url)
      }))
      setPokeDada(_pokemonData)
      console.log(_pokemonData);
    }

    useEffect(() => {
      pokeGenerator(currentPageUrl);
    }, [currentPageUrl]);

    const getNexPage = () => {
      setCurrentPageUrl(nextPage);
    }
    const getPrevPage = () => {
      setCurrentPageUrl(prevPage);
    }

    return (
      <>
        <header className={'header__pokemon'}>
          <div className="logo">
            <img src={logo} alt={"logo_pokemon"}/>
          </div>
          <h1>Hi {headingText}</h1>
        </header>
        <section className={"section__pokemon"}>
          <PaginationBtn
            getNexPage={nextPage ? getNexPage : null}
            getPrevPage={prevPage ? getPrevPage : null}
          />
          <CardPokemon pokemon={pokeData}/>
        </section>
      </>
    );
  }
;

export default Pokemon;