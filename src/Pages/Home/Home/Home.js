import React, { useEffect, useState } from 'react';
import AvailableServices from '../../../hooks/AvailableServices';
import LastSection from '../../LastSection/LastSection';
import Banner from '../Banner/Banner';
import Education from '../Education/Education';
import FirstSection from '../FirstSection/FirstSection';
import Services from '../Services/Services';

const Home = () => {
    const [services] = AvailableServices();
    const [details, setDetails] = useState([]);
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setDetails(data))
    },[]);
    return (
        <div>
            <Banner></Banner>
            ,<div className="mt-5">
            <h1 >Our Services</h1>
            <div className="underline"></div>
            </div>
            <div className="services">
            {
                services.map(service => <FirstSection
                    key={service.id}
                    service={service}
                ></FirstSection>)
            }
            </div>
            <Education></Education>

            <h1>More from i-Care Health</h1>
            <div className="underline"></div>
            <div className="services">
                {
                    details.map(detail => <LastSection
                        key={detail.id}
                        detail={detail}
                    ></LastSection>)
                }
            </div>
        </div>
    );
};

export default Home;