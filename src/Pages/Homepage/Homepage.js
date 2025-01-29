import {Helmet} from "react-helmet-async";

import logo from '../../img/logo-rezilant.svg'
import hero from '../../img/hero-home.svg'
import whoweare from '../../img/img-why-us.svg'

import './style.css'
import {Testimonials} from "../../Components/Testimonials/Testimonials";

const Homepage = () => {

    // useEffect(() => {
    //     document.body.classList.add('rz-header-transparent')
    //     return () => {
    //         document.body.classList.remove('rz-header-transparent')
    //     }
    // }, [])

    return (
        <>
            <Helmet>
                <title>Rezilant</title>
                <meta name="description" content="Optimize operations seamlessly through RaaS and SaaS"/>
                <meta property="og:title" content="Rezilant" data-rh="true"/>
                <meta property="og:description" content="Optimize operations seamlessly through RaaS and SaaS"
                      data-rh="true"/>
                <meta property="og:image" content={logo} data-rh="true"/>
            </Helmet>

            <div className="rz-hero rz-hero-home py-80">
                <div className="container pb-4">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6">
                            <p className={'text-white pb-3'}><span
                                className={'bg-primary d-inline-block px-3 rounded-4'}>Where AI Meets Design</span></p>
                            <h1 className='h1_xxlarge mb-1'>Elevating Digital Excellence</h1>
                            <p className='text-xlarge mb-3 pe-lg-4'>
                                At Rezilant, we fuse creativity with AI to craft intuitive experiences, innovative designs, and intelligent solutions that transform your digital presence.
                            </p>
                            <a href="/" className='btn btn-primary btn-lg'>Get Started Today!</a>
                        </div>

                        <div className="col-lg-6">
                            <figure className={'mb-0'}><img className={'w-100'} src={hero} alt=""/></figure>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'py-80'}>
                <div className={'container'}>
                    <div className={'row align-items-center'}>
                        <div className={'col-lg-6'}>
                            <div className={'row'}>
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="rz-card h-100">
                                        <div className="rz-card-body h-100 d-flex flex-column justify-content-between">
                                            <div>
                                                <div className="rz-icon mb-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                         viewBox="0 0 512 512">
                                                        <path
                                                            d="M160 0c8.8 0 16 7.2 16 16l0 48 64 0 0-48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48 64 0 0-48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48 16 0c35.3 0 64 28.7 64 64l0 16 48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0 0 64 48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0 0 64 48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0 0 16c0 35.3-28.7 64-64 64l-16 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48-64 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48-64 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48-16 0c-35.3 0-64-28.7-64-64l0-16-48 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0 0-64-48 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0 0-64-48 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0 0-16c0-35.3 28.7-64 64-64l16 0 0-48c0-8.8 7.2-16 16-16zM128 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32L128 96zm94.7 89.6l56 128c3.5 8.1-.1 17.5-8.2 21.1s-17.5-.2-21.1-8.2L239.5 304l-63.1 0-9.8 22.4c-3.5 8.1-13 11.8-21.1 8.2s-11.8-13-8.2-21.1l56-128c2.5-5.8 8.3-9.6 14.7-9.6s12.1 3.8 14.7 9.6zM208 231.9L190.5 272l35.1 0L208 231.9zM352 192l0 128c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16s16 7.2 16 16z"/>
                                                    </svg>
                                                </div>
                                                <h4>AI Agents</h4>
                                                <a href="/" className={'link-text'}><span
                                                    className={'me-2'}>Read More</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                         viewBox="0 0 448 512">
                                                        <path
                                                            d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z"/>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="rz-card h-100">
                                        <div className="rz-card-body h-100 d-flex flex-column justify-content-between">
                                            <div>
                                                <div className="rz-icon mb-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                         viewBox="0 0 512 512">
                                                        <path
                                                            d="M480 258.3c-.1 14.1-13.8 29.7-38.1 29.7H344c-44.2 0-80 35.8-80 80c0 5.6 .6 11.2 1.7 16.6c2.9 13.8 8.9 27.3 13.2 37c.8 1.7 1.5 3.3 2.1 4.8c5 11.6 6.9 18.2 6.9 23.5c0 19.2-12.3 29.6-22.7 30c-3.1 .1-6.2 .2-9.3 .2C132.3 480 32 379.7 32 256S132.3 32 256 32s224 100.3 224 224c0 .8 0 1.6 0 2.3zm32 .3c0-.9 0-1.8 0-2.7C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512c3.5 0 7.1-.1 10.6-.2c31.8-1.3 53.4-30.1 53.4-62c0-14.5-6.1-28.3-12.1-42c-4.3-9.8-8.7-19.7-10.8-29.9c-.7-3.2-1-6.5-1-9.9c0-26.5 21.5-48 48-48h97.9c36.5 0 69.7-24.8 70.1-61.3zM152 256a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm8-72a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm120-56a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm72 56a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/>
                                                    </svg>
                                                </div>
                                                <h4>UI/UX Design</h4>
                                                <a href="/" className={'link-text'}><span
                                                    className={'me-2'}>Read More</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                         viewBox="0 0 448 512">
                                                        <path
                                                            d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z"/>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="rz-card h-100">
                                        <div className="rz-card-body h-100 d-flex flex-column justify-content-between">
                                            <div>
                                                <div className="rz-icon mb-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                         viewBox="0 0 640 512">
                                                        <path
                                                            d="M405.1 .8c-8.4-2.8-17.4 1.7-20.2 10.1l-160 480c-2.8 8.4 1.7 17.4 10.1 20.2s17.4-1.7 20.2-10.1l160-480c2.8-8.4-1.7-17.4-10.1-20.2zM172 117.4c-5.9-6.6-16-7.2-22.6-1.3l-144 128C2 247.1 0 251.4 0 256s2 8.9 5.4 12l144 128c6.6 5.9 16.7 5.3 22.6-1.3s5.3-16.7-1.3-22.6L40.1 256 170.6 140c6.6-5.9 7.2-16 1.3-22.6zm296.1 0c-5.9 6.6-5.3 16.7 1.3 22.6L599.9 256 469.4 372c-6.6 5.9-7.2 16-1.3 22.6s16 7.2 22.6 1.3l144-128c3.4-3 5.4-7.4 5.4-12s-2-8.9-5.4-12l-144-128c-6.6-5.9-16.7-5.3-22.6 1.3z"/>
                                                    </svg>
                                                </div>
                                                <h4>Web App Development</h4>
                                                <a href="/" className={'link-text'}><span
                                                    className={'me-2'}>Read More</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                         viewBox="0 0 448 512">
                                                        <path
                                                            d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z"/>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 mb-md-4">
                                    <div className="rz-card h-100">
                                        <div className="rz-card-body h-100 d-flex flex-column justify-content-between">
                                            <div>
                                                <div className="rz-icon mb-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                         viewBox="0 0 384 512">
                                                        <path
                                                            d="M96 32C78.3 32 64 46.3 64 64V448c0 17.7 14.3 32 32 32H288c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H96zM32 64C32 28.7 60.7 0 96 0H288c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V64zM160 400h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
                                                    </svg>
                                                </div>
                                                <h4>Mobile App Development</h4>
                                                <a href="/" className={'link-text'}><span
                                                    className={'me-2'}>Read More</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                         viewBox="0 0 448 512">
                                                        <path
                                                            d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z"/>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={'col-lg-6 ps-lg-5'}>
                            <div className={'ps-lg-5'}>
                                <p className={'text-white pb-3'}><span
                                    className={'bg-primary d-inline-block px-3 rounded-4'}>Our Services</span></p>
                                <h2 className={'pe-lg-5'}>Your Partner in Digital Excellence</h2>
                                <p className={'text-large mb-3 pe-lg-5'}>Comprehensive solutions combining AI, UI/UX, web, and mobile expertise to transform your business and unlock your digital potential.</p>

                                <a href="/" className={'btn btn-primary btn-with-arrow'}>
                                    More Services
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 448 512">
                                        <path
                                            d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'pb-80 mt-md-4'}>
                <div className={'container'}>
                    <div className={'row align-items-center'}>
                        <div className={'col-lg-6 pe-lg-5'}>
                            <div className={'pe-lg-5'}>
                                <p className={'text-white pb-3'}><span
                                    className={'bg-primary d-inline-block px-3 rounded-4'}>Who We Are</span></p>
                                <h2>Our Values</h2>
                                <p className={'text-large'}>We are chasing a goal to become the best of the best in The Global Online Economy by prioritising our clients and empowering them with continuous support 24x7x365</p>

                                <ul className={'check-ul-list check-ul-list-large'}>
                                    <li>
                                        <p className={'text-large pb-1'}><strong>Flawless Execution:</strong> We're
                                            meticulous about every detail, ensuring seamless user experiences.</p>
                                    </li>

                                    <li>
                                        <p className={'text-large pb-1'}><strong>Innovative Spirit:</strong> We stay
                                            ahead of the curve, embracing cutting-edge technologies and trends.</p>
                                    </li>

                                    <li>
                                        <p className={'text-large pb-1'}><strong>Authentic Partnerships:</strong> We
                                            foster transparent, honest, and respectful relationships with clients and
                                            team members.</p>
                                    </li>

                                    <li>
                                        <p className={'text-large pb-1'}><strong>Collaborative Excellence:</strong> We unite expertise and creativity to deliver exceptional results.</p>
                                    </li>
                                </ul>
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
                        <div className={'col-lg-10 col-md-8 text-center'}>
                            <p className={'text-white pb-3'}><span
                                className={'bg-primary d-inline-block px-3 rounded-4'}>Our Industries</span></p>
                            <h2>Digital Transformation Across Industries</h2>
                            <p className={'text-large mb-3 px-lg-5'}>Our expertise knows no bounds. We partner with clients from diverse industries, providing innovative solutions that drive digital growth, enhance online presence, and foster business success.</p>
                        </div>
                    </div>


                    <div className={'row'}>
                        <div className="col-lg-3 col-md-4 mb-md-4">
                            <div className="rz-card text-center h-100">
                                <div className="rz-card-body h-100 d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="rz-icon-md mb-4">
                                            <svg className={'icon-primary'} xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 640 512">
                                                <path
                                                    d="M160 64c0-35.3 28.7-64 64-64L416 0c35.3 0 64 28.7 64 64l0 32 96 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-160 0s0 0 0 0l-64 0-64 0-64 0s0 0 0 0L64 512c-35.3 0-64-28.7-64-64L0 160c0-35.3 28.7-64 64-64l96 0 0-32zM480 336l0 144 96 0c17.7 0 32-14.3 32-32l0-128-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-64-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-32c0-17.7-14.3-32-32-32l-96 0 0 208zM160 128l-96 0c-17.7 0-32 14.3-32 32l0 32 80 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-80 0 0 64 80 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-80 0 0 128c0 17.7 14.3 32 32 32l96 0 0-352zM448 336l0-272c0-17.7-14.3-32-32-32L224 32c-17.7 0-32 14.3-32 32l0 416 64 0 0-64c0-35.3 28.7-64 64-64s64 28.7 64 64l0 64 64 0 0-144zm-96 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64 64 0 0-64zM304 64l32 0c13.3 0 24 10.7 24 24l0 16 16 0c13.3 0 24 10.7 24 24l0 32c0 13.3-10.7 24-24 24l-16 0 0 16c0 13.3-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24l0-16-16 0c-13.3 0-24-10.7-24-24l0-32c0-13.3 10.7-24 24-24l16 0 0-16c0-13.3 10.7-24 24-24zm8 56c0 8.8-7.2 16-16 16l-24 0 0 16 24 0c8.8 0 16 7.2 16 16l0 24 16 0 0-24c0-8.8 7.2-16 16-16l24 0 0-16-24 0c-8.8 0-16-7.2-16-16l0-24-16 0 0 24z"/>
                                            </svg>
                                        </div>
                                        <h5 className={'pb-0'}>Healthcare</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 mb-md-4">
                            <div className="rz-card text-center h-100">
                                <div className="rz-card-body h-100 d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="rz-icon-md mb-4">
                                            <svg className={'icon-primary'} xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 640 512">
                                                <path
                                                    d="M16 16C7.2 16 0 23.2 0 32L0 176c0 26.5 21.5 48 48 48l16 0 0 256c0 8.8 7.2 16 16 16s16-7.2 16-16l0-256 16 0c26.5 0 48-21.5 48-48l0-144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 144c0 8.8-7.2 16-16 16l-16 0L96 32c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 160-16 0c-8.8 0-16-7.2-16-16L32 32c0-8.8-7.2-16-16-16zM498 78.9C455.3 39.8 398.4 16 336 16c-54 0-103.9 17.9-144 48l0 41.9C229.4 70 280.1 48 336 48c58.9 0 112 24.5 149.9 63.8c3.1-12 7.2-22.9 12.1-32.9zm24.5 269.4C488.5 416.9 417.7 464 336 464c-73.8 0-138.6-38.4-175.5-96.4c-8.5 6.5-18.3 11.3-29 14C173.7 450.2 249.5 496 336 496c98.4 0 183-59.2 220-144l-12 0c-7.6 0-14.8-1.3-21.5-3.7zM480 256a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-256 0a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zM608 54.4L608 288l-64 0 0-128c0-61.3 39.4-92.2 64-105.6zM640 288l0-251.1c0-11.5-9.3-20.9-20.9-20.9c-2.1 0-4.1 .3-6.1 1C596.2 23.2 512 59.2 512 160l0 128c0 17.7 14.3 32 32 32l64 0 0 160c0 8.8 7.2 16 16 16s16-7.2 16-16l0-160 0-16 0-16z"/>
                                            </svg>
                                        </div>
                                        <h5 className={'pb-0'}>Hospitality</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 mb-md-4">
                            <div className="rz-card text-center h-100">
                                <div className="rz-card-body h-100 d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="rz-icon-md mb-4">
                                            <svg className={'icon-primary'} xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 640 512">
                                                <path
                                                    d="M328.9 2.7c-5.4-3.6-12.4-3.6-17.8 0L171.2 96 64 96C28.7 96 0 124.7 0 160L0 448c0 35.3 28.7 64 64 64l192 0 32 0 64 0 32 0 192 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L468.8 96 328.9 2.7zM384 384c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 96L64 480c-17.7 0-32-14.3-32-32l0-288c0-17.7 14.3-32 32-32l112 0c3.2 0 6.2-.9 8.9-2.7L320 35.2l135.1 90.1c2.6 1.8 5.7 2.7 8.9 2.7l112 0c17.7 0 32 14.3 32 32l0 288c0 17.7-14.3 32-32 32l-192 0 0-96zm-32 96l-64 0 0-96c0-17.7 14.3-32 32-32s32 14.3 32 32l0 96zM96 192l0 64c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32zm64 0l0 64-32 0 0-64 32 0zm320-32c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-32 0zm0 32l32 0 0 64-32 0 0-64zM96 352l0 64c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32zm64 0l0 64-32 0 0-64 32 0zm320-32c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-32 0zm0 32l32 0 0 64-32 0 0-64zM320 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0 160a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm16-128c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l24 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-8 0 0-16z"/>
                                            </svg>
                                        </div>
                                        <h5 className={'pb-0'}>Education</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 mb-md-4">
                            <div className="rz-card text-center h-100">
                                <div className="rz-card-body h-100 d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="rz-icon-md mb-4">
                                            <svg className={'icon-primary'} xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 640 512">
                                                <path
                                                    d="M158.7 105.4c11.5-5.2 24.5-5.7 36.4-1.4L375 170c4.2 1.5 8.8 1.3 12.8-.8l88-45c15.8-8.1 33.3-12.3 51-12.3l61 0c12.7 0 21.1 13.1 15.8 24.6c-15.4 33.4-41.7 60.5-74.6 77L255.6 350.3c-2.2 1.1-4.7 1.7-7.2 1.7l-139.2 0c-4.2 0-8.3-1.7-11.3-4.7L34.1 283.5l23.7-13.6c4.4-2.5 9.8-2.8 14.4-.7l57.2 25.4c4.4 2 9.5 1.8 13.8-.4l115-58.8c5.1-2.6 8.5-7.8 8.7-13.6s-2.6-11.2-7.5-14.3L121.9 122.2l-6.6-14.6 6.6 14.6 36.9-16.8zM206.1 74c-19.7-7.2-41.5-6.4-60.6 2.3L108.6 93.1c-23.3 10.6-25.4 42.8-3.6 56.3l113.5 70.5-83 42.4L85.3 240l-6.1 13.7L85.3 240c-14-6.2-30-5.4-43.3 2.2L18.2 255.7c-18.3 10.5-21.7 35.5-6.8 50.4l63.8 63.8c9 9 21.2 14.1 33.9 14.1l139.2 0c7.5 0 14.8-1.7 21.5-5.1L543.3 242.2c39.4-19.7 70.9-52.2 89.3-92.2c15.1-32.7-8.8-70-44.8-70l-61 0c-22.8 0-45.2 5.4-65.5 15.8l-81.8 41.8L206.1 74zM16 480c-8.8 0-16 7.2-16 16s7.2 16 16 16l608 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L16 480z"/>
                                            </svg>
                                        </div>
                                        <h5 className={'pb-0'}>Travel</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 mb-md-4">
                            <div className="rz-card text-center h-100">
                                <div className="rz-card-body h-100 d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="rz-icon-md mb-4">
                                            <svg className={'icon-primary'} xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 640 512">
                                                <path
                                                    d="M320 32l256 0c17.7 0 32 14.3 32 32l0 384c0 17.7-14.3 32-32 32l-161.6 0c-2.4 11.8-7.4 22.7-14.4 32l176 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L320 0c-35.3 0-64 28.7-64 64l0 31.3 32 29.3L288 64c0-17.7 14.3-32 32-32zM496 208c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-32 0zm0 32l32 0 0 32-32 0 0-32zM464 368l0 32c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32zm64 0l0 32-32 0 0-32 32 0zM368 80c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-32 0zm0 32l32 0 0 32-32 0 0-32zm96 0l0 32c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32zm64 0l0 32-32 0 0-32 32 0zM32 284.2c0-9 3.8-17.5 10.4-23.6l128-117.3c12.2-11.2 31-11.2 43.2 0l128 117.3c6.6 6.1 10.4 14.6 10.4 23.6L352 448c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32l0-163.8zM0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-163.8c0-17.9-7.5-35.1-20.8-47.2l-128-117.3c-24.5-22.4-62-22.4-86.5 0L20.8 237C7.5 249.1 0 266.2 0 284.2L0 448zM224 288l0 64-64 0 0-64 64 0zm-64-32c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-64 0z"/>
                                            </svg>
                                        </div>
                                        <h5 className={'pb-0'}>Real Estate</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 mb-md-4">
                            <div className="rz-card text-center h-100">
                                <div className="rz-card-body h-100 d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="rz-icon-md mb-4">
                                            <svg className={'icon-primary'} xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 640 512">
                                                <path
                                                    d="M192 32c79 0 124.2 20.8 146.2 38.1c7 5.5 11.1 14.4 12.9 25.9L192 96 33 96c1.7-11.5 5.9-20.3 12.9-25.9C67.8 52.8 113 32 192 32zM32 224l0-96 144 0 0 96L32 224zm0 128l0-96 160 0 83.8 0 9.1-32L208 224l0-96 136.6 0c8.4-14.5 22.3-25.4 38.9-29.8C381.8 79.5 375.6 59 358 45C329.2 22.2 276.5 0 192 0S54.8 22.2 26 45C4.5 62.1 0 88.9 0 110.2L0 352c0 23.7 12.9 44.4 32 55.4L32 464c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 160 0 0-32L64 384c-17.7 0-32-14.3-32-32zm96-40a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM488 160c4.4 0 8 3.6 8 8l0 8-96 0 0-8c0-4.4 3.6-8 8-8l80 0zm-120 8l0 9.2c-23.3 4.5-42.6 21.8-49.3 45.2L297 298.1c-24.5 13.7-41 39.9-41 69.9l0 48 0 16 0 32 0 32c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32 320 0 0 32c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32 0-32 0-16 0-48c0-30-16.6-56.2-41-69.9l-21.6-75.7c-6.7-23.5-26-40.7-49.3-45.2l0-9.2c0-22.1-17.9-40-40-40l-80 0c-22.1 0-40 17.9-40 40zm16 40l128 0 3.8 0c14.3 0 26.8 9.5 30.8 23.2L562.8 288c-.9 0-1.9 0-2.8 0l-224 0c-.9 0-1.9 0-2.8 0l16.2-56.8c3.9-13.7 16.5-23.2 30.8-23.2l3.8 0zM608 432l-320 0 0-16 0-48c0-26.5 21.5-48 48-48l224 0c26.5 0 48 21.5 48 48l0 48 0 16zM360 376a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm200 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/>
                                            </svg>
                                        </div>
                                        <h5 className={'pb-0'}>Car & Taxi</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 mb-md-4">
                            <div className="rz-card text-center h-100">
                                <div className="rz-card-body h-100 d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="rz-icon-md mb-4">
                                            <svg className={'icon-primary'} xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 640 512">
                                                <path
                                                    d="M128 64l384 0c17.7 0 32 14.3 32 32l0 256 32 0 0-256c0-35.3-28.7-64-64-64L128 32C92.7 32 64 60.7 64 96l0 256 32 0L96 96c0-17.7 14.3-32 32-32zM33.9 416l572.3 0c-5.5 18.5-22.6 32-42.9 32L76.8 448c-20.3 0-37.4-13.5-42.9-32zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480l486.4 0c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2L19.2 384zM200 128c-22.1 0-40 17.9-40 40l0 32c0 22.1 17.9 40 40 40l16 0c22.1 0 40-17.9 40-40l0-32c0-22.1-17.9-40-40-40l-16 0zm-8 40c0-4.4 3.6-8 8-8l16 0c4.4 0 8 3.6 8 8l0 32c0 4.4-3.6 8-8 8l-16 0c-4.4 0-8-3.6-8-8l0-32zm112-40c-8.8 0-16 7.2-16 16s7.2 16 16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80c0-8.8-7.2-16-16-16l-16 0zm80 40l0 32c0 22.1 17.9 40 40 40l16 0c22.1 0 40-17.9 40-40l0-32c0-22.1-17.9-40-40-40l-16 0c-22.1 0-40 17.9-40 40zm40-8l16 0c4.4 0 8 3.6 8 8l0 32c0 4.4-3.6 8-8 8l-16 0c-4.4 0-8-3.6-8-8l0-32c0-4.4 3.6-8 8-8zM192 272c-8.8 0-16 7.2-16 16s7.2 16 16 16l0 48 32 0 0-64c0-8.8-7.2-16-16-16l-16 0zm256 16c0-8.8-7.2-16-16-16l-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l0 48 32 0 0-64zm-80 24c0-22.1-17.9-40-40-40l-16 0c-22.1 0-40 17.9-40 40l0 40 32 0 0-40c0-4.4 3.6-8 8-8l16 0c4.4 0 8 3.6 8 8l0 40 32 0 0-40z"/>
                                            </svg>
                                        </div>
                                        <h5 className={'pb-0'}>IT</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 mb-md-4">
                            <div className="rz-card text-center h-100">
                                <div className="rz-card-body h-100 d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="rz-icon-md mb-4">
                                            <svg className={'icon-primary'} xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 576 512">
                                                <path
                                                    d="M520.6 120.9s0 0 0 0c18.7 29.6 .3 66.6-29.2 70.6c-2.6 .3-5.2 .5-7.9 .5c-16.5 0-31.2-7.2-41.5-18.5c-6.1-6.7-14.7-10.5-23.7-10.5s-17.6 3.8-23.7 10.5c-10.2 11.2-24.8 18.4-41.4 18.4c-16.5 0-31.3-7.2-41.4-18.4c-6.1-6.7-14.7-10.5-23.7-10.5s-17.7 3.8-23.7 10.5C254 184.8 239.3 192 222.7 192c-16.5 0-31.3-7.2-41.4-18.4c-6.1-6.7-14.7-10.5-23.7-10.5s-17.7 3.8-23.7 10.5C123.6 184.8 109 192 92.4 192c-2.6 0-5.2-.2-7.9-.5c-29.3-4-47.7-41-29.1-70.6c0 0 0 0 0 0L111.6 32l352.8 0 56.2 88.9zM483.4 224c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4L490.3 13.1C485.2 5 476.1 0 466.4 0L109.6 0C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c19.6 0 37.5-6.4 52-17c4.8-3.5 9.2-7.6 13.2-11.9c4 4.4 8.4 8.4 13.2 11.9c14.5 10.6 32.4 17 52 17c19.6 0 37.5-6.4 52-17c4.8-3.5 9.2-7.6 13.2-12c4 4.4 8.4 8.4 13.2 11.9c14.5 10.6 32.4 17 52 17c19.8 0 37.8-6.5 52.3-17.3c4.7-3.5 9-7.4 12.9-11.7c3.9 4.3 8.3 8.3 13 11.8c14.5 10.7 32.5 17.2 52.2 17.2zM80 256c-8.8 0-16 7.2-16 16l0 80 0 16 0 16 0 64c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-64 0-16 0-16 0-80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 80L96 352l0-80c0-8.8-7.2-16-16-16zM96 384l384 0 0 64c0 17.7-14.3 32-32 32l-320 0c-17.7 0-32-14.3-32-32l0-64z"/>
                                            </svg>
                                        </div>
                                        <h5 className={'pb-0'}>eCommerce Store</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={'rz-testi py-80'}>
                <div className={'container'}>
                    <div className={'row justify-content-center'}>
                        <div className={'col-lg- col-md-8 text-center'}>
                            <p className={'text-white pb-3'}><span
                                className={'bg-primary d-inline-block px-3 rounded-4'}>Testimonials</span></p>
                            <h2>Customer feedback</h2>
                            <p className={'text-large mb-3'}>Our goal is to generate inventive design solutions and provide exceptional services that prioritize
                                customer satisfaction and enhance the value of your business.</p>
                        </div>
                    </div>

                    <div className='row justify-content-center'>
                        <div className={"col-lg-10 text-white"}>
                            <Testimonials/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homepage