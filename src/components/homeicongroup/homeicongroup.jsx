import React from 'react';
import { FaBars, FaRegTimesCircle } from "react-icons/fa";
import './homeicongroup.scss';

const HomeIconGroup = () =>{
    return <div className="icongrid">
        <h4>Explore by Catagory</h4>
<div className = "icongroup1">
<div><div className = "icongroup" ><FaRegTimesCircle/></div> <div className="icon_name" >Plumbing</div></div>
<div><div className = "icongroup"><FaBars/></div><div className="icon_name" >Cleaing</div></div>
<div><div className = "icongroup"><FaRegTimesCircle/></div><div className="icon_name" >Painting</div></div>
<div><div className = "icongroup"><FaBars/></div><div className="icon_name" >Painting</div></div>
</div>
      </div>
    
}
export default HomeIconGroup;