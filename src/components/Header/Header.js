import React from "react";
import { Container } from "./styles";
// - No componente `Header` temos um array de 
// tipos de pokemon que está sendo mapeado e 
// retornando as opções dentro do dropdown de tipos.
const Header = (props) => {
  const pokemontypesArray = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Flying",
    "Fighting",
    "Poison",
    "Electric",
    "Ground",
    "Rock",
    "Psychic",
    "Ice",
    "Bug",
    "Ghost",
    "Steel",
    "Dragon",
    "Dark",
    "Fairy",
  ];

  const handleSearch = (e) => {  //função manipuladora
    props.setPesquisa(e.target.value);
  };

   const handleIdSearch = (e) => {
    props.setIdFilter(e.target.value);
  };

  return (
    <Container>
        <input
        type="number"
        placeholder="Buscar por id"
        onChange={handleIdSearch}
        value={props.idFilter}
      />
      <input
        type="text"
        placeholder="Buscar por nome"
        onChange={handleSearch}
        value={props.pesquisa}
      />
      <select value={props.ordenar} onChange={(e)=> {props.setOrdenar(e.target.value)}}>
        <option value="">Ordenar</option>
        <option value="crescente">Crescente</option>
        <option value="decrescente">Decrescente</option>
      </select>
      <select
        name="tipo"
        id="tipo"
        value={props.type} onChange={(e)=>{props.setType(e.target.value)}}
          >
        <option>Selecione um tipo</option>
        {pokemontypesArray.map((type) => { //para cada tipo eu tenho um type //mapeie cada item(type) desse array
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Header;
