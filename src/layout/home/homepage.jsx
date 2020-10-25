import React from 'react';
import './homepage.scss';
import Slider from '../../components/carousel/carousel';
import HeaderNav from '../../components/headernav/headernav';
import HomeIconGroup from '../../components/homeicongroup/homeicongroup';
import ServiceStack from '../../components/servicestack/servicesstack';
import Fullbutton from '../../components/fullbutton/fullbutton';

const HomePage = () => {


    return <div>
        <div>
            <HeaderNav />
        </div>
        <div>
            < HomeIconGroup />
        </div>
        <div>

            <Slider />
        </div>
        <div>
            <ServiceStack />
            <ServiceStack />
            <ServiceStack />
            <ServiceStack />
        </div>
        <div><Fullbutton/> </div>
    </div>
}


export default HomePage;