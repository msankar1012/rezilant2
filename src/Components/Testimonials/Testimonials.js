import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'

import imgtesti from '../../img/img-testi.jpeg'


export const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="rz-card text-center pb-5 px-3 h-100">
            <div className="rz-card-body h-100 d-flex flex-column justify-content-between">
                <svg className="mb-3" height="4em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                    <path
                        d="M50.63 26.226c-.13-1.394-.031-5.182 3.598-10.45a1 1 0 0 0-.116-1.274c-1.48-1.48-2.396-2.413-3.038-3.066-.845-.862-1.23-1.254-1.795-1.766a1.002 1.002 0 0 0-1.328-.013c-6.326 5.504-13.351 16.877-12.334 30.81.595 8.182 6.563 14.121 14.19 14.121 7.825 0 14.192-6.366 14.192-14.192 0-7.55-5.925-13.742-13.37-14.17zm-.824 26.362c-6.549 0-11.677-5.158-12.195-12.265-1.144-15.672 8.172-25.85 10.986-28.546.274.271.588.59 1.05 1.06.556.566 1.318 1.342 2.47 2.498-4.405 6.787-3.574 11.623-3.21 12.316.173.33.528.551.9.551 6.723 0 12.192 5.47 12.192 12.194 0 6.722-5.47 12.192-12.193 12.192zM15.114 26.226c-.13-1.39-.035-5.175 3.598-10.45a1 1 0 0 0-.116-1.274c-1.477-1.477-2.392-2.41-3.033-3.062-.848-.864-1.235-1.257-1.799-1.77a1.004 1.004 0 0 0-1.328-.014C6.111 15.16-.916 26.531.099 40.468c.598 8.181 6.566 14.12 14.192 14.12 7.827 0 14.194-6.366 14.194-14.192 0-7.551-5.926-13.744-13.371-14.17zm-.823 26.362c-6.547 0-11.678-5.158-12.198-12.266v.001c-1.14-15.674 8.175-25.851 10.99-28.546.275.271.59.591 1.052 1.063.556.566 1.317 1.34 2.467 2.495-4.405 6.788-3.574 11.623-3.21 12.315.173.33.528.552.9.552 6.723 0 12.193 5.47 12.193 12.194 0 6.722-5.47 12.192-12.194 12.192z"
                        fill="#ffffff"></path>
                </svg>

                <Slider {...settings}>
                    <div>
                        <p className='mb-4 text-xlarge'><em>"
                            Fusce iaculis viverra erat, quis gravida nisl aliquet a. Aenean volutpat maximus neque
                            et
                            mollis. Nam pharetra mattis nibh tempor mollis. Mauris at ornare quam. Sed tincidunt ex
                            quis
                            feugiat auctor. Fusce a eros id purus congue molestie. Etiam ac nisl ac felis pulvinar
                            condimentum non ac lacus. Aenean pellentesque nibh nec massa condimentum, in consequat
                            neque
                            pulvinar."</em></p>

                        <div className="testi-by d-flex flex-row align-items-center justify-content-center">
                            <div className="img-author me-3">
                                <img src={imgtesti} alt="Testi"/>
                            </div>

                            <div className="txt pl-2 text-start">
                                <h5 className="text-white pb-0"><b>Bill Greenberg</b></h5>
                                <p className="pb-0">Artist, Boston</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='mb-4 text-xlarge'><em>"
                            Fusce iaculis viverra erat, quis gravida nisl aliquet a. Aenean volutpat maximus neque
                            et
                            mollis. Nam pharetra mattis nibh tempor mollis. Mauris at ornare quam. Sed tincidunt ex
                            quis
                            feugiat auctor. Fusce a eros id purus congue molestie. Etiam ac nisl ac felis pulvinar
                            condimentum non ac lacus. Aenean pellentesque nibh nec massa condimentum, in consequat
                            neque
                            pulvinar."</em></p>

                        <div className="testi-by d-flex flex-row align-items-center justify-content-center">
                            <div className="img-author me-3">
                                <img src={imgtesti} alt="Testi"/>
                            </div>

                            <div className="txt pl-2 text-start">
                                <h5 className="text-white pb-0"><b>Bill Greenberg</b></h5>
                                <p className="pb-0">Artist, Boston</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='mb-4 text-xlarge'><em>"
                            Fusce iaculis viverra erat, quis gravida nisl aliquet a. Aenean volutpat maximus neque
                            et
                            mollis. Nam pharetra mattis nibh tempor mollis. Mauris at ornare quam. Sed tincidunt ex
                            quis
                            feugiat auctor. Fusce a eros id purus congue molestie. Etiam ac nisl ac felis pulvinar
                            condimentum non ac lacus. Aenean pellentesque nibh nec massa condimentum, in consequat
                            neque
                            pulvinar."</em></p>

                        <div className="testi-by d-flex flex-row align-items-center justify-content-center">
                            <div className="img-author me-3">
                                <img src={imgtesti} alt="Testi"/>
                            </div>

                            <div className="txt pl-2 text-start">
                                <h5 className="pb-0 text-white"><b>Bill Greenberg</b></h5>
                                <p className="pb-0">Artist, Boston</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}
