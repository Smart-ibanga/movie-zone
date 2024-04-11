import React from 'react'
import './NavListItem.css'

const NavListitem = ({nav}) => {
  return (
    <li>
        <a href={nav.link} >{nav.name}</a>
    </li>
  )
}

export default NavListitem