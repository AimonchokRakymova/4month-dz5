import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pokemon from '../../components/Pokemon/Pokemon';


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

    return (
        <div className='App'>
            <Pokemon pokemonList={pokemonList}/>
        </div>
    );
};

export default PokemonsPage;