import React, { useEffect, useState } from 'react';
import LastSection from '../../LastSection/LastSection';
import Banner from '../Banner/Banner';
import Education from '../Education/Education';
import Services from '../Services/Services';

const Home = () => {
    const [details, setDetails] = useState([]);
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setDetails(data))
    },[]);
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Education></Education>

            <h1>More from Bristol Health</h1>
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