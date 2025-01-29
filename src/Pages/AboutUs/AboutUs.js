import './style.css'
import hero from "../../img/hero-home.svg";
import whoweare from "../../img/img-why-us.svg";
import expertise from "../../img/1697625627_expertise-img1.svg";

export const AboutUs = () => {
    return (
        <>
            <div className="rz-hero rz-hero-home py-80">
                <div className="container pb-4">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6">
                            <h1 className='h1_xxlarge mb-1'>Empowering Innovation, Enhancing Experience</h1>
                            <p className='text-xlarge mb-3 pe-lg-5'>At Rezilant, we're passionate about harnessing the power of technology to create transformative experiences. Our team of experts specializes in building intelligent AI agents, crafting intuitive UI/UX designs, and developing seamless mobile and web applications.</p>
                            <a href="/" className='btn btn-primary btn-lg'>Get Started Today!</a>
                        </div>

                        <div className="col-lg-6">
                            <figure className={'mb-0'}><img className={'w-100'} src={hero} alt=""/></figure>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'container py-80'}>
                <div className={'row align-items-center flex-row-reverse'}>
                    <div className={'col-lg-4 ps-lg-5'}>
                        <p className={'text-white pb-3'}><span
                            className={'bg-primary d-inline-block px-3 rounded-4'}>Why Choose Us</span></p>
                        <h2>Perfect Blend of Technology and Creativity</h2>
                        <p className={'text-large pb-0 pe-lg-4'}>Pellentesque aliquam enim tellus, ut eleifend libero
                            blandit quis.</p>
                    </div>

                    <div className={'col-lg-8'}>
                        <div className={'row'}>
                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                <div className="rz-card h-100">
                                    <div className="rz-card-body h-100 d-flex flex-column justify-content-between">
                                        <div>
                                            <div className="rz-icon mb-4">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 576 512">
                                                    <path
                                                        d="M336 176c0 13.7-1.9 27-5.5 39.5c3.3 1 6.5 2.3 9.5 4l0-.9c0-17.8 10.2-35.6 28-43.3C367.6 78.4 289 0 192 0C94.8 0 16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c12.3 16.8 24.6 33.7 34.5 51.8c5.9 10.8 9.6 22.5 11.8 34.5l32.4 0c-2.5-16.6-7.3-33.7-16.2-49.9c-10.9-20-25.3-39.7-38-57.1c0 0 0 0 0 0c-4.9-6.7-9.5-13-13.6-19C57.5 234.8 48 206.6 48 176C48 96.5 112.5 32 192 32s144 64.5 144 144zM258.5 443c-5.1-8.8-9.3-17.8-12.8-27l-123 0c-5.9 0-10.7 4.8-10.7 10.7l0 5.3c0 44.2 35.8 80 80 80c35.2 0 65.1-22.8 75.8-54.4c-3.3-4.7-6.4-9.5-9.4-14.6zM192 96c8.8 0 16-7.2 16-16s-7.2-16-16-16C130.1 64 80 114.1 80 176c0 8.8 7.2 16 16 16s16-7.2 16-16c0-44.2 35.8-80 80-80zM146.7 448l90.5 0c-6.6 18.6-24.4 32-45.3 32s-38.7-13.4-45.3-32zM399.3 239.8l33.7 0c3 16.6 13.9 29.5 26.5 36.7c12.9 7.4 30 9.9 45.9 3.6l17.2 30.5c-12.8 11.4-18.5 27.7-18.5 42.4s5.7 31 18.5 42.4L505.3 426c-15.9-6.3-32.9-3.7-45.9 3.6c-12.6 7.2-23.5 20.2-26.5 36.7l-33.7 0c-3.1-16.6-14-29.5-26.6-36.7c-13-7.4-30-9.9-46-3.7l-17.2-30.5c12.8-11.4 18.5-27.7 18.5-42.4s-5.7-31-18.5-42.4l17.2-30.5c15.9 6.3 33 3.7 46-3.7c12.6-7.2 23.6-20.1 26.6-36.7zm43.5-32l-53.4 0c-11.7 0-21.3 9.5-21.3 21.3l0 1.4c0 7.6-4.6 14.4-11.3 18.2c-6.6 3.7-14.7 4.2-21.2 .3l-1.6-1c-10.7-6.3-24.4-2.6-30.5 8.2L277 303.1c-5.7 10.2-2.3 23.1 7.8 29c7.3 4.3 11.2 12.6 11.2 21s-3.9 16.7-11.2 21c-10 5.9-13.5 18.8-7.8 29L303.5 450c6.1 10.8 19.9 14.5 30.5 8.2l1.6-1c6.5-3.9 14.6-3.4 21.2 .3c6.6 3.8 11.3 10.6 11.3 18.2l0 1.4c0 11.7 9.5 21.3 21.3 21.3l53.4 0c11.8 0 21.4-9.6 21.4-21.4l0-1.6c0-7.5 4.6-14.2 11.1-18c6.5-3.7 14.5-4.2 21-.3l1.8 1c10.7 6.3 24.4 2.6 30.5-8.2L555 403.1c5.7-10.2 2.3-23-7.8-29c-7.3-4.3-11.2-12.6-11.2-21s3.9-16.7 11.2-21c10-5.9 13.5-18.8 7.8-29l-26.4-46.9c-6.1-10.8-19.9-14.5-30.5-8.2l-1.8 1c-6.5 3.8-14.5 3.4-21-.3c-6.5-3.7-11.1-10.4-11.1-18l0-1.6c0-11.8-9.6-21.4-21.4-21.4zM416.1 409.1a56 56 0 1 0 0-112 56 56 0 1 0 0 112zm-24-56a24 24 0 1 1 48.1 0 24 24 0 1 1 -48.1 0z"/>
                                                </svg>
                                            </div>
                                            <h4>We think strategy and creative</h4>
                                            <p className={'pb-0'}>The potentiality to think strategically and creatively
                                                adds value to your business.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                <div className="rz-card h-100">
                                    <div className="rz-card-body h-100 d-flex flex-column justify-content-between">
                                        <div>
                                            <div className="rz-icon mb-4">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 512 512">
                                                    <path
                                                        d="M32 256C32 132.3 132.3 32 256 32s224 100.3 224 224c0 108.4-76.9 198.8-179.2 219.5c-8.7 1.8-14.3 10.2-12.5 18.9s10.2 14.3 18.9 12.5C424 483.2 512 379.9 512 256C512 114.6 397.4 0 256 0S0 114.6 0 256c0 23.6 3.2 46.5 9.2 68.3c2.4 8.5 11.2 13.5 19.7 11.2s13.5-11.2 11.2-19.7c-5.2-19-8.1-39-8.1-59.7zm165.1 .8c-8.4-2.8-17.4 1.7-20.2 10.1s1.7 17.4 10.1 20.2l70.5 23.5L160 348.8l0-28.8c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 120c0 39.8 32.2 72 72 72l47.8 0c29.4 0 55.9-17.9 66.9-45.3l23.9-59.6 47-18.4c20.9-8.2 32.8-29.4 30.1-50.7c-2.3-18.7-15.1-34.7-33.3-40.8L197.1 256.8zM320 342.7c0 .4 0 .9 0 1.3c0 0 0 0 0 0c0 6.4-3.9 12.4-10.2 14.9l-53.5 20.9c-4.3 1.7-7.7 5.2-9.2 9.5c-.1 .2-.1 .4-.2 .6l-26 64.9C214.8 470 200.1 480 183.8 480L136 480c-22.1 0-40-17.9-40-40l0-120c0-8.8 7.2-16 16-16s16 7.2 16 16l0 52.2c0 5.3 2.6 10.2 7 13.2s9.9 3.6 14.9 1.7l148.3-58c8.2-3.2 17.5 .8 20.7 9.1c.6 1.5 .9 3 1.1 4.5zM200.4 192a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm136 40a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm-120-87.2l13.2 11.3c6.7 5.8 16.8 5 22.6-1.7s5-16.8-1.7-22.6l-13.2-11.3C206.4 94.1 162.3 90 127.1 110.1l-7.1 4c-7.7 4.4-10.3 14.2-6 21.8s14.2 10.3 21.8 6l7.1-4c23.5-13.4 52.9-10.6 73.4 7z"/>
                                                </svg>
                                            </div>
                                            <h4>We Think Technology</h4>
                                            <p className={'pb-0'}>Experts at WebTechnoMind are making it easy with
                                                modern technologies.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                <div className="rz-card h-100">
                                    <div className="rz-card-body h-100 d-flex flex-column justify-content-between">
                                        <div>
                                            <div className="rz-icon mb-4">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 640 512">
                                                    <path
                                                        d="M576 32L224 32c-17.7 0-32 14.3-32 32l0 36c-10.2-2.6-21-4-32-4l0-32c0-35.3 28.7-64 64-64L576 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-239.2 0c-5.3-11.4-11.8-22.2-19.5-32L576 384c17.7 0 32-14.3 32-32l0-288c0-17.7-14.3-32-32-32zM400 128c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-57.4L395.3 267.3c-6.2 6.2-16.4 6.2-22.6 0l-80-80c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L384 233.4 473.4 144 416 144c-8.8 0-16-7.2-16-16zM160 288a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm0-160a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM133.3 384c-54.2 0-98.4 42.5-101.2 96l255.7 0c-2.8-53.5-47-96-101.2-96l-53.3 0zm0-32l53.3 0C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7L26.7 512C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z"/>
                                                </svg>
                                            </div>
                                            <h4>We Think <br/> Traffic</h4>
                                            <p className={'pe-lg-4 pb-0'}>Generating traffic & leads for your business
                                                to establish you as a brand.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'py-80 mt-md-4'}>
                <div className={'container'}>
                    <div className={'row align-items-center'}>
                        <div className={'col-lg-6 pe-lg-5'}>
                            <div className={'pe-lg-5'}>
                                <p className={'text-white pb-3'}><span
                                    className={'bg-primary d-inline-block px-3 rounded-4'}>Who We Are</span></p>
                                <h2>Welcome to webtechnomind IT solutions Pvt Ltd</h2>
                                <p className={'text-large pe-lg-5'}>We provide a 360 degree approach in our web based
                                    services and go another extra mile for each of our projects. Client satisfaction
                                    matters to us, your smile is our motivation.</p>

                                <ul className={'check-ul-list mb-0'}>
                                    <li>On-Time Completion</li>
                                    <li>Worldwide Connections</li>
                                    <li>Licensed & Insured</li>
                                    <li>Safe & Secure Developments</li>
                                    <li>Active 24×7</li>
                                    <li>Guaranteed Customer Satisfaction</li>
                                </ul>
                            </div>
                        </div>

                        <div className={'col-lg-6'}>
                            <figure><img src={whoweare} alt="Who w are"/></figure>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'py-80 mt-md-4'}>
                <div className={'container'}>
                    <div className={'row flex-lg-row-reverse align-items-center'}>
                        <div className={'col-lg-6 ps-lg-5'}>
                            <p className={'text-white pb-3'}><span
                                className={'bg-primary d-inline-block px-3 rounded-4'}>Why Us</span></p>
                            <h2>The Road Ahead</h2>
                            <p className={'text-large mb-2 pe-lg-5'}>Our goal is to provide inventive web technology
                                solutions and provide exceptional services that prioritize customer satisfaction and
                                enhance the value of your business.</p>

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className={'rz-card mb-3'}>
                                        <div className={'rz-card-body'}>
                                            <h5>Our Mission</h5>
                                            <p className={'pb-0'}>At WebTechnoMind IT Solutions, our mission is to
                                                leverage our decade-long expertise and the collective brilliance of our
                                                team to deliver unparalleled web-based solutions and digital marketing
                                                services.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className={'rz-card'}>
                                        <div className={'rz-card-body'}>
                                            <h5>Our Vision</h5>
                                            <p className={'pb-0'}>At WebTechnoMind IT Solutions, our mission is to
                                                leverage our decade-long expertise and the collective brilliance of our
                                                team to deliver unparalleled web-based solutions and digital marketing
                                                services.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className={'col-lg-6'}>
                            <figure><img src={whoweare} alt="Who w are"/></figure>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'py-80'}>
                <div className={"container"}>
                    <div className={'row justify-content-center'}>
                        <div className={'col-lg- col-md-8 text-center'}>
                            <p className={'text-white pb-3'}><span
                                className={'bg-primary d-inline-block px-3 rounded-4'}>Our effective</span></p>
                            <h2>After-Development Support</h2>
                            <p className={'text-large mb-3'}>WeWe do not leave a project after completion only, we keep
                                the support and security rolling for our clients. Client satisfaction is our priority,
                                happy clients are our motivation.</p>
                        </div>
                    </div>


                    <div className={'row'}>
                        <div className="col-lg-4 col-md-6 mb-md-4">
                            <div className="rz-card text-center py-2 h-100">
                                <div className="rz-card-body h-100 d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="rz-icon-md mb-4">
                                            <svg className={'icon-primary'} xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 640 512">
                                                <path
                                                    d="M160 64c0-35.3 28.7-64 64-64L416 0c35.3 0 64 28.7 64 64l0 32 96 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-160 0s0 0 0 0l-64 0-64 0-64 0s0 0 0 0L64 512c-35.3 0-64-28.7-64-64L0 160c0-35.3 28.7-64 64-64l96 0 0-32zM480 336l0 144 96 0c17.7 0 32-14.3 32-32l0-128-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-64-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-32c0-17.7-14.3-32-32-32l-96 0 0 208zM160 128l-96 0c-17.7 0-32 14.3-32 32l0 32 80 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-80 0 0 64 80 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-80 0 0 128c0 17.7 14.3 32 32 32l96 0 0-352zM448 336l0-272c0-17.7-14.3-32-32-32L224 32c-17.7 0-32 14.3-32 32l0 416 64 0 0-64c0-35.3 28.7-64 64-64s64 28.7 64 64l0 64 64 0 0-144zm-96 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64 64 0 0-64zM304 64l32 0c13.3 0 24 10.7 24 24l0 16 16 0c13.3 0 24 10.7 24 24l0 32c0 13.3-10.7 24-24 24l-16 0 0 16c0 13.3-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24l0-16-16 0c-13.3 0-24-10.7-24-24l0-32c0-13.3 10.7-24 24-24l16 0 0-16c0-13.3 10.7-24 24-24zm8 56c0 8.8-7.2 16-16 16l-24 0 0 16 24 0c8.8 0 16 7.2 16 16l0 24 16 0 0-24c0-8.8 7.2-16 16-16l24 0 0-16-24 0c-8.8 0-16-7.2-16-16l0-24-16 0 0 24z"/>
                                            </svg>
                                        </div>
                                        <h5 className={'pb-0'}>One Month Free Bug Fixing</h5>
                                        <p className={'text-large pb-0'}>(Terms Applied)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-md-4">
                            <div className="rz-card text-center py-2 h-100">
                                <div className="rz-card-body h-100 d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="rz-icon-md mb-4">
                                            <svg className={'icon-primary'} xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 640 512">
                                                <path
                                                    d="M160 64c0-35.3 28.7-64 64-64L416 0c35.3 0 64 28.7 64 64l0 32 96 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-160 0s0 0 0 0l-64 0-64 0-64 0s0 0 0 0L64 512c-35.3 0-64-28.7-64-64L0 160c0-35.3 28.7-64 64-64l96 0 0-32zM480 336l0 144 96 0c17.7 0 32-14.3 32-32l0-128-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-64-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-32c0-17.7-14.3-32-32-32l-96 0 0 208zM160 128l-96 0c-17.7 0-32 14.3-32 32l0 32 80 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-80 0 0 64 80 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-80 0 0 128c0 17.7 14.3 32 32 32l96 0 0-352zM448 336l0-272c0-17.7-14.3-32-32-32L224 32c-17.7 0-32 14.3-32 32l0 416 64 0 0-64c0-35.3 28.7-64 64-64s64 28.7 64 64l0 64 64 0 0-144zm-96 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64 64 0 0-64zM304 64l32 0c13.3 0 24 10.7 24 24l0 16 16 0c13.3 0 24 10.7 24 24l0 32c0 13.3-10.7 24-24 24l-16 0 0 16c0 13.3-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24l0-16-16 0c-13.3 0-24-10.7-24-24l0-32c0-13.3 10.7-24 24-24l16 0 0-16c0-13.3 10.7-24 24-24zm8 56c0 8.8-7.2 16-16 16l-24 0 0 16 24 0c8.8 0 16 7.2 16 16l0 24 16 0 0-24c0-8.8 7.2-16 16-16l24 0 0-16-24 0c-8.8 0-16-7.2-16-16l0-24-16 0 0 24z"/>
                                            </svg>
                                        </div>
                                        <h5 className={'pb-0 px-lg-5'}>One Month Free Maintenance and Support</h5>
                                        <p className={'text-large pb-0'}>(Terms Applied)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-md-4">
                            <div className="rz-card text-center py-2 h-100">
                                <div className="rz-card-body h-100 d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="rz-icon-md mb-4">
                                            <svg className={'icon-primary'} xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 640 512">
                                                <path
                                                    d="M160 64c0-35.3 28.7-64 64-64L416 0c35.3 0 64 28.7 64 64l0 32 96 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-160 0s0 0 0 0l-64 0-64 0-64 0s0 0 0 0L64 512c-35.3 0-64-28.7-64-64L0 160c0-35.3 28.7-64 64-64l96 0 0-32zM480 336l0 144 96 0c17.7 0 32-14.3 32-32l0-128-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-64-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-32c0-17.7-14.3-32-32-32l-96 0 0 208zM160 128l-96 0c-17.7 0-32 14.3-32 32l0 32 80 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-80 0 0 64 80 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-80 0 0 128c0 17.7 14.3 32 32 32l96 0 0-352zM448 336l0-272c0-17.7-14.3-32-32-32L224 32c-17.7 0-32 14.3-32 32l0 416 64 0 0-64c0-35.3 28.7-64 64-64s64 28.7 64 64l0 64 64 0 0-144zm-96 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64 64 0 0-64zM304 64l32 0c13.3 0 24 10.7 24 24l0 16 16 0c13.3 0 24 10.7 24 24l0 32c0 13.3-10.7 24-24 24l-16 0 0 16c0 13.3-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24l0-16-16 0c-13.3 0-24-10.7-24-24l0-32c0-13.3 10.7-24 24-24l16 0 0-16c0-13.3 10.7-24 24-24zm8 56c0 8.8-7.2 16-16 16l-24 0 0 16 24 0c8.8 0 16 7.2 16 16l0 24 16 0 0-24c0-8.8 7.2-16 16-16l24 0 0-16-24 0c-8.8 0-16-7.2-16-16l0-24-16 0 0 24z"/>
                                            </svg>
                                        </div>
                                        <h5 className={'pb-0'}>Two Months Free File Backup</h5>
                                        <p className={'text-large pb-0'}>(Terms Applied)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'py-80 mt-md-4'}>
                <div className={'container'}>
                    <div className={'row align-items-center'}>
                        <div className={'col-lg-6 pe-lg-5'}>
                            <p className={'text-white pb-3'}><span
                                className={'bg-primary d-inline-block px-3 rounded-4'}>Our expertise on</span></p>
                            <h2>Software & Technologies</h2>
                            <p className={'text-large pe-lg-5'}>We thrive on the perfect fusion of creativity, ingenuity, and cutting-edge technology. Our approach is centered around crafting robust, secure, and functional projects that address the evolving needs of the global market.</p>
                            <p className={'text-large pe-lg-5'}>We specialize in leveraging the latest advancements in technology to ensure that our solutions remain at the forefront of innovation.</p>
                        </div>

                        <div className={'col-lg-6'}>
                            <figure><img src={expertise} alt="Who w are"/></figure>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
