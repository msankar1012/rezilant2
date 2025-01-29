import dev1 from "../../img/dev-1.jpg";
import dev2 from "../../img/dev-2.jpg";
import hero from "../../img/hero-home.svg";

export const WebAppDevelopment = () => {
    return (
        <>
            <div className={'container py-80'}>
                <div className="row">
                    <div className="col-lg-5">
                        <h1 className={'h1_xxlarge'}>Web App Development</h1>
                    </div>

                    <div className="col-lg-7 ps-lg-5">
                        <div className="row">
                            <div className="col-lg-6">
                                <p>Every decision we make needs to answer the million-dollar question: how will this
                                    benefit our partner’s goal best? We work to develop solutions</p>
                            </div>

                            <div className="col-lg-6">
                                <p>Every decision we make needs to answer the million-dollar question: how will this
                                    benefit our partner’s goal best? We work to develop solutions</p>
                            </div>

                            <div className="col-lg-12 pb-2">
                                <hr/>
                            </div>

                            <div className="col-lg-6">
                                <ul className={'check-ul-list'}>
                                    <li>API Development</li>
                                    <li>Cloud Migration</li>
                                    <li>JavaScript</li>
                                </ul>
                            </div>

                            <div className="col-lg-6">
                                <ul className={'check-ul-list'}>
                                    <li>Fluter Framework</li>
                                    <li>Front End Development</li>
                                    <li>WordPress</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={'container pb-80'}>
                <div className="row">
                    <div className="col-lg-8">
                        <figure><img src={dev1} alt="Web App Development"/></figure>
                    </div>

                    <div className="col-lg-4">
                        <figure><img src={dev2} alt="Web App Development"/></figure>
                    </div>
                </div>
            </div>


            <div className="container pb-80">
                <div className="row">
                    <div className="col-lg-5">
                        <h2>We create unique digital experiences.</h2>
                    </div>

                    <div className="col-lg-7 pe-lg-5">
                        <p>Exploring diverse opportunities is key to unlocking lasting success. By stepping beyond
                            familiar paths and embracing new possibilities, you can uncover untapped potential and
                            create pathways for growth. Exploring diverse opportunities is key to unlocking lasting
                            success.</p>
                    </div>
                </div>
            </div>

            <div className="container pb-80">
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <p className={'text-black-50'}>01</p>
                        <h3 className={'font-weight-500'}>Research</h3>
                        <p>Brand identity design a the key to success whether branding.</p>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <p className={'text-black-50'}>02</p>
                        <h3 className={'font-weight-500'}>Monitoring</h3>
                        <p>Brand identity design a the key to success whether branding.</p>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <p className={'text-black-50'}>03</p>
                        <h3 className={'font-weight-500'}>Planning</h3>
                        <p>Brand identity design a the key to success whether branding.</p>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <p className={'text-black-50'}>04</p>
                        <h3 className={'font-weight-500'}>Support</h3>
                        <p>Brand identity design a the key to success whether branding.</p>
                    </div>
                </div>
            </div>


            <div className={'container pb-80'}>
                <div className="row flex-lg-row-reverse justify-content-between align-items-center">
                    <div className="col-lg-5">
                        <h2>We made things easier for your business</h2>
                        <p>Exploring diverse opportunities is key to unlocking lasting
                            success. By stepping beyond familiar paths and embracing
                            new possibilities, you can uncover untapped</p>

                        <ul className={'check-ul-list'}>
                            <li>Brand identity design a the key to</li>
                            <li>Exploring diverse opportunities</li>
                            <li>Stepping beyond familiar paths</li>
                            <li>Embracing new possibilities</li>
                        </ul>
                    </div>

                    <div className="col-lg-6">
                        <figure className={'mb-0'}><img className={'w-100'} src={hero} alt=""/></figure>
                    </div>
                </div>
            </div>
        </>
    )
}

