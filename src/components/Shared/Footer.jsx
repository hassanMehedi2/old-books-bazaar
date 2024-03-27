import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <div>
            <div className="px-14 py-20 bg-[#282828] w-full flex">
                <div className="w-1/2 flex">
                    <div className="space-y-3 w-1/2">
                        <p className="text-2xl text-white font-bold"><span className="text-3xl text-orange-400">O</span>ld Book Bazaar</p>
                        <p className="text-[#999999] font-medium text-base">Shukrabad, Dhanmondi <br />Dhaka 1205</p>
                        <p className="text-gray-50 font-medium text-base underline">view on map</p>
                        <div className="text-[#999999] font-bold text-base   flex gap-5">
                            <FaFacebook className="hover:text-orange-300"></FaFacebook>
                            <FaTwitter className="hover:text-orange-300"></FaTwitter>
                            <FaLinkedin className="hover:text-orange-300"></FaLinkedin>
                        </div>
                    </div>
                    <div>
                        <div className="space-y-3">
                            <p className="text-lg text-white font-bold">Need Help</p>
                            <p className="text-3xl text-orange-500 font-bold">+(84) -1800 - 4635</p>
                            <p className="text-[#999999] font-medium text-base">Monday - Friday: 9:00 -20:00 <br />Saturday: 11:00 -15:00 <br /></p>

                        </div>
                    </div>
                </div>
                <div className="w-1/2 grid grid-cols-3 px-5">
                    <div>
                        <p className="text-lg text-white font-bold">Explore</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;