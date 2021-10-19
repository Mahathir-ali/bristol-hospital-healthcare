import AvailableServices from '../../../hooks/AvailableServices';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
   const [services] = AvailableServices()
    return (
        <div className="mt-5 service">
            <h1>Our Services</h1>
            <div className="underline"></div>
            <div className="services">
                {
                    services.map(service => <Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;