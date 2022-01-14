import { IPokemon } from "../../types/pokemonTypes";
import "./style.css";

const Pokemon = ({ pokemon }: { pokemon: Partial<IPokemon> }) => {
  return (
    <div className="produtos-item black">
      <h2>{pokemon.name?.toUpperCase()}</h2>
      <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
      <hr />
      <h3>Habilidades</h3>
      <ul>
        {pokemon.abilities?.map((hability) => (
          <li>{hability.ability.name}</li>
        ))}
      </ul>

      {pokemon.held_items?.length !== 0 && (
        <div className="list">
          <hr />
          <h3>Itens de ajuda</h3>
          <ul>
            {pokemon.held_items?.map((item) => (
              <li>{item.item.name}</li>
            ))}
          </ul>
        </div>
      )}
      {pokemon.types?.length !== 0 && (
        <div className="list">
          <hr />
          <h3>Características</h3>
          <ul>
            {pokemon.types?.map((type) => (
              <li>{type.type.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Pokemon;
