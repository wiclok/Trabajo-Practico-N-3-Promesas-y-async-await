const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

async function getPokemon(pokemonNameOrId) {
    try {
        const response = await fetch(`${API_URL}${pokemonNameOrId}`);
        if (!response.ok) {
            throw new Error(`Error al obtener el Pokémon: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error);
    }
}

function formatPokemonData(pokemonData) {
    if (!pokemonData) return 'No se encontraron datos del Pokémon.';
    
    const formattedData = {
        name: pokemonData.name,
        id: pokemonData.id,
        types: pokemonData.types.map(typeInfo => typeInfo.type.name).join(', ')
    };

    return `Nombre: ${formattedData.name}\nID: ${formattedData.id}\nTipos: ${formattedData.types}`;
}

async function showFormattedPokemonData(pokemonNameOrId) {
    const pokemonData = await getPokemon(pokemonNameOrId);
    const formattedData = formatPokemonData(pokemonData);
    console.log(formattedData);
}

showFormattedPokemonData('charmander');
