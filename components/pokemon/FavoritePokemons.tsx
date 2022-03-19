import {  Grid } from '@nextui-org/react'
import React, { FC } from 'react'
import { NextPage } from 'next';
import { FavoriteCardPokemon } from './FavoriteCardPokemon';


interface Props {
    pokemons:number[] 
}

export const FavoritePokemons:FC<Props>= ({pokemons}) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
    {pokemons.map(id=>(
     <FavoriteCardPokemon pokemonId={id} key={id}/>
    ))}

  </Grid.Container>
  )
}
