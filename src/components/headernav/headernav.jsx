import React from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import Bathroom1 from '../../assests/Bathroom1.png';
import './headernav.scss';
import { FaBars, FaRegTimesCircle } from "react-icons/fa";

const HeaderNav = () => {

return <Navbar className = "lavendel" bg="primary" variant="dark" size = {20}n >
<FaBars fill='white' size = {20}  />
        <NavbarBrand href="#home">Lavendel</NavbarBrand>
    </Navbar>
}
export default HeaderNav;
