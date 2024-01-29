import React from 'react';


const Pokemon = ({pokemonList}) => {

    return (
        <div>
            {pokemonList.map(pokemon=>
                <div>
                    {pokemon.name}
                </div>
            )}
        </div>
    );
};

export default Pokemon;