import React from 'react';
import Bathroom1 from '../../assests/Bathroom1.png';
import './servicestack.scss';

const ServiceStack = () =>{
    
    return  <div className="servicestack">
    <div className="serviceimg"><img src= {Bathroom1}/> </div>
    <div className="servicedesc"> 
    <h5>Bathroom Cleaning</h5>
    <div className='price-box'>
       <div>$4444</div>
       <div>%50</div>
    </div>
    <div className="hour-box">
       <div>ss</div>
       <div>hhh</div>
       <div>kkkkk</div>
    </div>
  </div>

  
  </div>
    
}
export default ServiceStack;