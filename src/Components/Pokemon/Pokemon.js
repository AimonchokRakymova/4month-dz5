import React, {useEffect, useState} from 'react';
import styles from "./Pokemon.module.css"
import axios from "axios";


const Pokemon = ({pokemon}) => {

    const [pokemonData, setPokemonData] = useState({})


    const getPokemon = async () => {
        try {
            const {data} = await axios.get(pokemon.url)
            return setPokemonData(data)
        } catch (e) {
            console.log("error".e);
        } finally {
            console.log('final');
        }
    }
    useEffect(()=>{
        getPokemon()
    }, [])

    console.log(pokemonData)

    return (
        <li className={styles.pokemonCard}>
            <p>{pokemonData.name}</p>
            <img src={pokemonData.sprites?.other?.dream_world?.front_default} alt=""/>
        </li>
    )
}

export default Pokemon;