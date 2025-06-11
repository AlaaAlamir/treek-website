import { useParams } from 'react-router-dom'
import services from './Service';
import { Link } from "react-router-dom"

const Moreinfo = () => {

    const { slug } = useParams();
    const service = services.find(s => s.slug === slug);

    if (!service) {
    return <h3 className="text-center mt-5">الخدمة غير موجودة</h3>;
}

    return ( 
    <div className="container text-center mt-5 mb-5">
        <div className='row justify-content-center text-center mb-4'>
            <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
                <div className='card-ser mb-3 h-100 info'>
                    <div className='card-header'>
                        <h2>تفاصيل الخدمة: {service.name}</h2>
                    </div>
                    <div className='card-body'>
                        <img src={`/${service.photo}`} className='card-pic mb-3' />
                        <h3>{services.name}</h3>
                        <span className='text-muted' dir="rtl">{service.extra_description}</span>
                    </div>
                    <button className="card-button">
                        <Link to={'reservation'} className="link">حجز الخدمة</Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
);
}

export default Moreinfo;