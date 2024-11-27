import footerLogo from '../../img/logo-rezilant-white.svg'
import './style.css'

export const Footer = () => {
    return (
        <footer className="rz-footer pt-5">
            <div className="container">
                <div className="rz-footer-top w-100 d-inline-block my-3 pb-4">
                    <aside>
                        <div className="footer-logo mb-4 pb-3"><img src={footerLogo} alt="Rezilant"/></div>

                        <p>Your all-in-one solution for digital growth: dynamic websites, SEO, and ads—handled by
                            experts. Contact us today to see your business grow sustainably and effortlessly.</p>
                    </aside>

                    <aside>
                        <h5>Company</h5>
                        <ul>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Services</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">Contact</a></li>
                            <li><a href="/">Careers</a></li>
                        </ul>
                    </aside>

                    <aside>
                        <h5>Services</h5>
                        <ul>
                            <li><a href="/">Digital marketing</a></li>
                            <li><a href="/">Mobile app development</a></li>
                            <li><a href="/">Website development</a></li>
                            <li><a href="/">Graphic design</a></li>
                        </ul>
                    </aside>

                    <aside>
                        <h5>Contact</h5>
                        <ul className={'pb-lg-5'}>
                            <li>
                                <svg className="icon-primary me-3" height="1em" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 512 512">
                                    <path
                                        d="M411.3 4.7l96 96c6.2 6.2 6.2 16.4 0 22.6l-96 96c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L457.4 128H304c-8.8 0-16-7.2-16-16s7.2-16 16-16H457.4L388.7 27.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0zM329 286.7c11.3-13.8 30.3-18.5 46.7-11.4l112 48c17.6 7.5 27.4 26.5 23.4 45.1l-24 112c-4 18.4-20.3 31.6-39.1 31.6l0 0c-6.1 0-12.2-.1-18.3-.4l-.1 0h0c-4.6-.2-9.1-.4-13.7-.8C183.5 494.5 0 300.7 0 64v0C0 45.1 13.2 28.8 31.6 24.9l112-24c18.7-4 37.6 5.8 45.1 23.4l48 112c7 16.4 2.4 35.4-11.4 46.7l-40.6 33.2c26.7 46 65.1 84.4 111.1 111.1L329 286.7zM448 480c3.8 0 7-2.6 7.8-6.3l24-112c.8-3.7-1.2-7.5-4.7-9l-112-48c-3.3-1.4-7.1-.5-9.3 2.3l-33.2 40.6c-9.9 12.1-27.2 15.3-40.8 7.4c-50.9-29.5-93.3-71.9-122.7-122.7c-7.9-13.6-4.7-30.9 7.4-40.8l40.6-33.2c2.8-2.3 3.7-6.1 2.3-9.3l-48-112c-1.5-3.5-5.3-5.5-9-4.7l-112 24C34.6 57 32 60.2 32 64v0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0c0 229.6 186.1 415.8 415.7 416l.3 0z"/>
                                </svg>
                                <a href="/">contact@rezilant.com</a>
                            </li>
                            <li>
                                <svg className="icon-primary me-3" height="1em" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 512 512">
                                    <path
                                        d="M64 96c-17.7 0-32 14.3-32 32v39.9L227.6 311.3c16.9 12.4 39.9 12.4 56.8 0L480 167.9V128c0-17.7-14.3-32-32-32H64zM32 207.6V384c0 17.7 14.3 32 32 32H448c17.7 0 32-14.3 32-32V207.6L303.3 337.1c-28.2 20.6-66.5 20.6-94.6 0L32 207.6zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/>
                                </svg>
                                <a href="/">+1 123-456-789</a>
                            </li>
                            {/*<li className="d-flex align-items-start">*/}
                            {/*    <svg className="icon-primary me-3" height="2.1em" xmlns="http://www.w3.org/2000/svg"*/}
                            {/*         viewBox="0 0 384 512">*/}
                            {/*        <path*/}
                            {/*            d="M352 192c0-88.4-71.6-160-160-160S32 103.6 32 192c0 15.6 5.4 37 16.6 63.4c10.9 25.9 26.2 54 43.6 82.1c34.1 55.3 74.4 108.2 99.9 140c25.4-31.8 65.8-84.7 99.9-140c17.3-28.1 32.7-56.3 43.6-82.1C346.6 229 352 207.6 352 192zm32 0c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192zm-240 0a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm48 80a80 80 0 1 1 0-160 80 80 0 1 1 0 160z"/>*/}
                            {/*    </svg>*/}
                            {/*    <span>878 Tandra Route, Hartmannfort, UT 69707-5230</span>*/}
                            {/*</li>*/}
                        </ul>

                        <ul className="rz-social-links mb-lg-0">
                            <li>
                                <a href="https://www.facebook.com/" target="_blank">
                                    <svg height={'1.25em'} className={'icon-primary'} xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 320 512">
                                        <path
                                            d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com" target="_blank">
                                    <svg height={'1.3em'} className={'icon-primary'} xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 512 512">
                                        <path
                                            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a href="https://www.youtube.com/" target="_blank">
                                    <svg height={'1.3em'} className={'icon-primary'} xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 448 512">
                                        <path
                                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a href="https://www.youtube.com/" target="_blank">
                                    <svg height={'1.4em'} className={'icon-primary'} xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 448 512">
                                        <path
                                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </aside>
                </div>
            </div>

            <div className={'copyrights border-top border-dark py-4'}>
                <div
                    className="container d-flex flex-column-reverse flex-md-row justify-content-center justify-content-md-between py-2">
                    <p className='pb-0'>&copy; {new Date().getFullYear()},&nbsp; Rezilant Inc. All rights reserved</p>
                    <p className={'pb-0'}>
                        <a href="/">Terms of Use</a>
                        <span className={'mx-3'}>|</span>
                        <a href="/"> Privacy Policy</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
