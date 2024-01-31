import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pokemon from '../../Components/Pokemon/Pokemon';
import styles from "./PokemonsPage.module.css"


const PokemonsPage = () => {

    const [pokemonList, setPokemonList] = useState([])

    const getPokemons = async () => {
        try {
            const { data} = await axios.get(' https://pokeapi.co/api/v2/pokemon')
            return setPokemonList(data.results)
        } catch(e) {
            console.log("error". e);
        } finally {
            console.log('final');
        }

    }
    useEffect(() => {
        getPokemons()
    }, []);
    console.log(pokemonList)
    return (
        <div className={styles.pokemonCards}>
            {pokemonList.map(pokemon => (
                <Pokemon pokemon={pokemon}/>
            ))}
        </div>
    );
};

export default PokemonsPage;