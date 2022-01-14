/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import "./App.css";
import Pokemon from "./components/Pokemon";
import ImageDestaque from "./assets/images/sobreEmpresa.png";
import { IPokemon } from "./types/pokemonTypes";

import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState<Partial<IPokemon>>({});
  async function searchPokemonByName(name: string) {
    try {
      const { data } = await axios.get<IPokemon>(
        `https://pokeapi.co/api/v2/pokemon/${name.toLocaleLowerCase()}`
      );

      if (name === "") {
        return setPokemon({});
      } else {
        setPokemon(data);
        console.log({ msg: "teste pokemon", obj: data });
      }
    } catch (error) {
      setPokemon({});
    }
  }

  return (
    <div className="Container">
      <div className="info-bg">
        <div className="superinfo">
          <p>Seg / Sex - 08:00 ás 18:00</p>
          <p>+55 84 99644-8111</p>
          <p>Rua álvaro Rodrigues, 223</p>
        </div>
      </div>

      <header className="menu-bg">
        <div className="menu">
          <div className="menu-logo">
            <a href="#">
              POKÉMON <span> STORE </span>
            </a>
          </div>
          <nav className="menu-nav">
            <ul>
              <li>
                <a href="#Sobre">Sobre</a>
              </li>
              <li>
                <a href="#Pokemons">Pokemon</a>
              </li>

              <li>
                <a href="#Noticia">Notícias</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <h1 className="introducao">
        Nossos valores <br />E nossa história
      </h1>

      <section className="sobre" id="Sobre">
        <div className="sobre-info">
          <h1>Sobre a empresa</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            soluta quam pariatur rem ut sunt tempora? Quia quisquam, hic aliquid
            sequi, adipisci ex officia est fuga earum maxime animi commodi!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            soluta quam pariatur rem ut sunt tempora? Quia quisquam, hic aliquid
            sequi, adipisci ex officia est fuga earum maxime animi commodi!
          </p>
        </div>
        <div className="sobre-img">
          <img src={ImageDestaque} alt="Sobre a empresa" />
        </div>
      </section>

      <section className="produtos" id="Pokemons">
        <h1>Pokémon</h1>

        <div className="search">
          <input
            onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) =>
              searchPokemonByName((e.target as HTMLInputElement).value)
            }
            type="text"
            name="pesquisar"
            id="inputPesquisar"
            placeholder="Pesquisar pokémons disponíveis"
          />
        </div>

        <div className="produtos-container">
          {Object.keys(pokemon).length !== 0 && (
            <Pokemon key={pokemon.id} pokemon={pokemon} />
          )}
        </div>

        <div className="produtos-container">
          {Object.keys(pokemon).length === 0 && (
            <h2 style={{ margin: "0 auto" }}>Nenhum pokemon ainda aqui...</h2>
          )}
        </div>
      </section>

      <section className="noticia" id="Noticia">
        <div className="noticia-info">
          <h1>Notícias</h1>
          <p>Fique por dentro dos nossos novos pokémons</p>
        </div>
        <form action="" className="noticia-form">
          <input type="text" name="" id="" placeholder="Digite seu email" />
          <button>Enviar</button>
        </form>
      </section>

      <footer className="footer">
        <p>
          Desafio desenvolvido by
          <a rel="noreferrer" href="https://github.com/Doubty" target="_blank">
            Antônio Galvão (Doubty)
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
