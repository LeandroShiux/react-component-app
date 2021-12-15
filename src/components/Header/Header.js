import React from 'react'
import {Container} from './style'
import SearchBar from './../SearchBar/SearchBar';
import Brand from './../Brand/Brand';
import CartButton from '../CartButton/CartButton';

export default function Header() {
  return (
    <Container>
      <Brand/>
      <SearchBar/>
      <CartButton/>
    </Container>
  )
}
