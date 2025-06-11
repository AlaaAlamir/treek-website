const About = () => {
    return (<>
        <div className="container text-center d-flex justify-content-center p-2">
            <div className="row mt-5 mb-5 flex-column flex-lg-row text-center text-lg-start d-flex justify-content-center">
                <div className="col-12">
                    <div className="card-aboutus">
                        <div className="card-header">
                            <div className="d-flex align-items-center justify-content-center gap-3">
                                <img src="/treek4people.png" className="about-logo " />
                                <span className="card__title">تريك ؟</span>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className="card__content" style={{ textAlign: 'right' }} dir="rtl">"تريك" ليست مجرد عدسة تلتقط، بل رؤية تبني وتُبرز.
                                نحن نؤمن أن كل مشروع — سواء كان مطعمًا، متجرًا، أو مؤسسة — يستحق أن يُروى بطريقة تُلهم وتُقنع.
                                نحن نصور، نعم... لكننا نُصمم لك هوية، ونخلق انطباعًا، ونبني جسورًا بينك وبين جمهورك.
                                في "تريك"، نُمزج بين الإبداع البصري والفكر التسويقي لنُقدّم لك محتوى لا يُنسى، وهوية تتحدث عنك حتى في صمتها.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default About;