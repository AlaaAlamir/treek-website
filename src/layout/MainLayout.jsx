import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MainLayout = () => {
    const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

    return (<>
        <div className="layout-wrapper">
            <header className='header'>
                <nav className="navbar">
                    <div className="container-fluid justify-content flex-column flex-lg-row align-items-center justify-content-between text-center text-lg-start">
                        <div className="accounts">
                            <ul className="list-inline">
                                <li className="list-inline-item p-2 text-white"><Link to={'https://www.instagram.com/treek.sa1?igsh=eng3bTE5M2RjZDR5'} className="link"><i class="bi bi-instagram"></i></Link></li>
                                <li className="list-inline-item p-2 text-white"><Link to={'https://www.tiktok.com/@treek_?_t=ZS-8x4gTERCQNz&_r=1'} className="link"><i class="bi bi-tiktok"></i></Link></li>
                                <li className="list-inline-item p-2 text-white"><Link to={'http://wa.me/966500766516'} className="link"><i class="bi bi-whatsapp"></i></Link></li>
                            </ul>
                        </div>
                        <div className='sections'>
                            <ul className="list-inline">
                                <li className="list-inline-item p-2"><Link to={'/#services'} className="link">خدماتنا</Link></li>
                                <li className="list-inline-item p-2"><Link to={'/#portfolio'} className="link">أعمالنا</Link></li>
                                <li className="list-inline-item p-2"><Link to={'about'} className="link">من نحن؟</Link></li>
                                <li className="list-inline-item p-2"><Link to={'/'} className="link">الرئيسية</Link></li>
                            </ul>
                        </div>
                        <div className='treek'>
                            <ul className="list-inline">
                                <li className="list-inline-item p-1 treek"><Link to={'/'} className="link"><img src="/treek.png" height={50} alt="TreekLogo"></img></Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main style={{ flex: 1 }}>
                <Outlet />
            </main>
            <footer>
                <div className="footer" dir="rtl">
                    <section className="footer-section">
                        <div className="row fo flex-column flex-lg-row align-items-center justify-content-between text-center text-lg-start">
                            <div className="col-12 col-lg-4 mb-3 mb-lg-0">
                                <p className="newsletter text-center">سجّل في نشرتنا الأسبوعية لتصلك أحدث خدماتنا وأعمالنا مباشرة إلى بريدك الإلكتروني</p>
                            </div>
                            <div className="col-12 col-lg-4 mb-3 mb-lg-0">
                                <form className="form">
                                    <input type="email" required="" className="form-control newsletter"
                                    name="email" placeholder="أدخل بريدك الإلكتروني"></input>
                                </form>
                            </div>
                            <div className="col-12 col-lg-3  text-center">
                                <button className="btn btn-light bt">أشترك</button>
                            </div>
                        </div>
                    </section>
                    <hr />
                    <section className="footer-contact">
                        <div className="row contacts flex-column flex-lg-row">
                            <div className="col">
                                <h5>تريك</h5>
                                <p className="p">رحلتك الإبداعية تبدأ من هنا. نرافقك لتوثيق أجمل لحظاتك بأعلى جودة وبأسلوب يعكس هويتك</p>
                            </div>
                            <div className="col">
                                <h5>مجالاتنا</h5>
                                <p className="p">تصوير مناسبات، كوفيهات ومطاعم، تغطيات إعلامية، تصميم هوية بصرية والمزيد</p>
                            </div>
                            <div className="col">
                                <h5>للتواصل</h5>
                                <span>
                                    <ul className="list-inline">
                                        <li className="list-inline-item p-1 text-white"><Link to={'https://www.instagram.com/treek.sa1?igsh=eng3bTE5M2RjZDR5'} className="link"><i class="bi bi-instagram">  instagram</i></Link></li>
                                        <li className="list-inline-item p-2 text-white"><Link to={'https://www.tiktok.com/@treek_?_t=ZS-8x4gTERCQNz&_r=1'} className="link"><i class="bi bi-tiktok">  tiktok</i></Link></li>
                                        <li className="list-inline-item p-2 text-white"><Link to={'http://wa.me/966500766516'} className="link"><i class="bi bi-whatsapp">  whatsapp</i></Link></li>
                                    </ul>
                                </span>
                            </div>
                        </div>
                    </section>
                    <hr />
                    <div className='text-center p-1' dir="rtl">
                        © 2025 جميع الحقوق محفوظة : تريك
                    </div>
                </div>
            </footer>
        </div>
    </>);
}

export default MainLayout;