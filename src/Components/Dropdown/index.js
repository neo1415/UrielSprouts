import React, { useState } from 'react';
import { MenuItems } from './MenuItems'
import './Dropdown.css'
import { DropdownItem, DropdownLink } from './DropdownElements';

const Dropdown = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

  return (
    <>
        <ul onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            {MenuItems.map((item, index) => {
                return (
                    <DropdownItem key={index}>
                        <DropdownLink className={item.cName} to={item.path} onClick={()=>setClick(true)}>
                            {item.title}
                        </DropdownLink>
                    </DropdownItem>
                )
            })}
        </ul>
    </>
  )
}

export default Dropdown