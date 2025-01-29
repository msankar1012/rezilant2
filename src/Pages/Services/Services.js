import hero from "../../img/hero-home.svg";

export const Services = () => {
    return (
        <>
            <div className="rz-hero rz-hero-home py-80">
                <div className="container pb-4">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6">
                            <h1 className='h1_xxlarge mb-1'>About Us</h1>
                            <p className='text-xlarge mb-3 pe-lg-5'>Welcome to Webtechnomind IT Solutions, the leading
                                Website Design and Development Company in India, offering comprehensive web development,
                                mobile app development and also digital marketing services to a global clientele.</p>
                            <a href="/" className='btn btn-primary btn-lg'>Get Started Today!</a>
                        </div>

                        <div className="col-lg-6">
                            <figure className={'mb-0'}><img className={'w-100'} src={hero} alt=""/></figure>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
