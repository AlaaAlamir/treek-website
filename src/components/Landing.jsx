import { Link } from "react-router-dom"
import services from './Service';
import { useState } from 'react';

const Landing = () => {

    const portfolioItems = [
        {
            id: 1,
            category: "زواجات",
            image: "assets/w.jpg"
        },
        {
            id: 2,
            category: "زواجات",
            image: "assets/w2.JPG"
        },
        {
            id: 3,
            category: "زواجات",
            image: "assets/w3.JPG"
        },
        {
            id: 4,
            category: "زواجات",
            image: "assets/w4.jpg"
        },
        {
            id: 5,
            category: "أطعمة",
            image: "assets/bakery.jpg"
        },
        {
            id: 6,
            category: "أطعمة",
            image: "assets/f5.webp"
        },
        {
            id: 7,
            category: "أطعمة",
            image: "assets/f2.JPG"
        },
        {
            id: 8,
            category: "أطعمة",
            image: "assets/f3.jpg"
        },
        {
            id: 9,
            category: "تغطيات",
            image: "assets/c.PNG"
        },
        {
            id: 10,
            category: "تغطيات",
            image: "assets/c2.JPG"
        },
        {
            id: 11,
            category: "تغطيات",
            image: "assets/c7.webp"
        },
        {
            id: 12,
            category: "تغطيات",
            image: "assets/c5.JPG"
        },
    ];

    const [selectedCategory, setSelectedCategory] = useState("الكل");

    const filteredItems =
        selectedCategory === "الكل"
            ? portfolioItems
            : portfolioItems.filter(item => item.category === selectedCategory);
    return (<>
        <main>
            <section className='welcome'>
                <div className='row mt-5 flex-column-reverse flex-lg-row align-items-center text-center text-lg-start d-flex justify-content-center'>
                    <div className='col-12 col-sm-6 col-md-4 col-lg-5 mb-4'>
                        <h1 className='hello text-center text-lg-end' dir="rtl">تريك .. <br /> نصوّر اللحظة، ونبني الهوية.
                        </h1>
                    </div>
                    <div className='col-12 col-sm-6 col-md-8 col-lg-7 mb-4'>
                        <img className='treek3d' src='treek3D.png'></img>
                    </div>
                </div>
            </section>
            <br />
            <section className='portfolio' id="portfolio">
                <div className='row mt-4 mb-4 text-center'>
                    <div className='col'>
                        <h1>أعمالنا</h1>
                        <p className="p mt-3" dir="rtl">
                            نفخر بتقديم أعمال إبداعية تعبّر عن رؤيتكم، وتوثّق لحظاتكم بأعلى معايير الجودة والاحترافية. في هذا القسم، نستعرض نماذج مختارة من مشاريعنا في<p></p>
                             التغطيات، تصوير الأطعمة للمطاعم والكوفيهات، وتغطية الزواجات التي تركت أثرًا ورضا لدى عملائنا.
                        </p>
                    </div>
                </div>
                <div className='row mt-4 flex-lg-row align-items-center justify-content-center text-center pr-2'>
                    {["زواجات", "أطعمة", "تغطيات", "الكل"].map(category => (
                        <div className="col-6 col-sm-3 mb-2" key={category}>
                            <button className={`button-select ${selectedCategory === category ? "active" : ""}`}
                                onClick={() => setSelectedCategory(category)}>
                                <span>{category}</span></button>
                        </div>
                    ))}
                    <div className="row justify-content-center text-center mt-4">
                        {filteredItems.map(item => (
                            <div className="col-6 col-md-4 col-lg-3 mb-4" key={item.id}>
                                <img
                                    src={item.image}
                                    alt={item.category}
                                    className="img-fluid"
                                    style={{ borderRadius: "10px", height: "180px", width: "80%", objectFit: "cover"}}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="services" id='services' dir='rtl'>
                <div className="row p-3 justify-content-space-between text-center">
                    <div className="col">
                        <h1>خدماتنا</h1>
                        <p className="p mt-3" dir="rtl">
                            في تريك، نقدم مجموعة متنوعة من الخدمات الإبداعية التي تبرز مشاريعكم بأعلى جودة.
                             سواء كنت تبحث عن تصوير مناسباتك الخاصة،<p></p> أو تغطية فعالية احترافية، أو تصميم هوية تعكس رؤيتك، نحن هنا لنصنع لك محتوى يعبّر عنك ويتحدث بلغتك.
                        </p>
                    </div>
                </div>
                <div className='row rr d-flex justify-content-center align-items-center text-center'>
                    {services.map((service, index) => (
                        <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-5 d-flex justify-content-center'>
                            <div className='card-ser h-100' key={index}>
                                <div className="card-details align-items-center text-center">
                                    <img src={service.photo} className='card-pic' alt={service.name}></img>
                                    <p className="text-title">{service.name}</p>
                                    <p className="text-body">{service.description}</p>
                                </div>
                                <button className="card-button">
                                    <Link to={`/info/${service.slug}`} className="link">للمزيد من المعلومات</Link>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    </>);
}

export default Landing;