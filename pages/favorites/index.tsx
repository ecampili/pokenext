import { Card, Container, Grid, Image, Text } from '@nextui-org/react'
import { NextPage } from 'next'
import React, { FC, useEffect, useState } from 'react'
import { Layout } from '../../components/layouts'
import { Nofavorites } from '../../components/ui'
import { FavoritePokemons } from '../../components/pokemon'
import { localfavorites } from '../../utils'


const FavoritesPage:NextPage = () => {

  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([])

  useEffect(() => {
   setfavoritePokemons(localfavorites.pokemons().sort((a,b)=>a-b))    
  }, [])

 

  return (
  <Layout title='Favorites Pokemons'>
    {
      favoritePokemons.length === 0
      ?<Nofavorites/>
      :<FavoritePokemons pokemons ={favoritePokemons}/>
    }
  </Layout>
  )
}

export default FavoritesPage
