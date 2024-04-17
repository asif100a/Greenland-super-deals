import { HiOutlineMail } from "react-icons/hi";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div className="my-12">
            <h1 className="text-4xl font-semibold font-pt_serif text-center md:text-start">Contact us</h1>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[95%] md:w-auto mx-auto">
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                    <HiOutlineMail className="w-10 h-10 text-amber-400" />
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">Contact us with Email</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                    <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
                        greenlandsuperdeals1@gmail.com
                        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                        </svg>
                    </a>
                </div>

                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                    <PiWhatsappLogoLight className="w-10 h-10 text-green-500" />
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">Contact us with WhatsApp</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500">You can contact with us by WhatsApp contact. Send message or direct call in this app:</p>
                    <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
                        +880 1608-898811
                        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                        </svg>
                    </a>
                </div>

                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                    <FaFacebook className="w-10 h-10 text-blue-500" />
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">Contact us with Facebook</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                    <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline w-full md:w-[16rem] lg:w-[20rem] overflow-hidden">
                        https://www.facebook.com/greenlandsuperdeals?id=1058&id=ZbwL
                        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                        </svg>
                    </a>
                </div>

            </div>

            <div className="mt-6 w-[95%] md:w-auto mx-auto">
                <h3 className="text-2xl font-medium mb-3">Send direct message</h3>
                <textarea className="textarea textarea-accent" placeholder="Write your message"></textarea>
                <div>
                    <button className="btn btn-sm bg-green-500 font-bold">Send now</button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;