import React from 'react'
import { Link } from 'react-router-dom'
import Navba from './Navba';
import Announcement from './Announcement';
export const ProductRings = () => {
  return (
    <div>
      <Announcement />
      <Navba />

      <Link to="/productRings">ProductRings</Link>

      <h1>ring1</h1>
      <h1>ring2</h1>
    </div>
  );
}
