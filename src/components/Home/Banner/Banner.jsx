

const Banner = () => {
    return (
        <div>
            {/* <div className="carousel w-full h-[30vh] md:h-[80vh]">


<div id="slide1" className="carousel-item relative w-full">
    <div className="hero " style={{ backgroundImage: 'url(https://i.ibb.co/pbh93jL/bookshop.jpg)' }}>
        <div className="hero-overlay bg-black bg-opacity-20"></div>
        <div className="hero-content  text-start w-full text-white flex justify-start max-w-xs md:max-w-xl lg:max-w-5xl ">
            <div     data-aos="fade-up" className=" ">
            <p className="mb-1 md:mb-5 text-sm md:text-lg font-medium"></p>
                    <h1 className="mb-3 md:mb-5 text-2xl md:text-4xl lg:text-5xl font-bold">Buy / Sell Your <span className="text-yellow-200">Old Books</span> <br />through Bidding!.</h1>
                <button className="px-2  md:px-6 py-2 md:py-3 text-xs md:text-lg rounded-md md:rounded-lg border-0 bg-orange-500 text-white">Find Books </button>
            </div>
        </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 md:left-5 md:right-5 top-1/2">
        <a href="#slide2" className="bg-white flex justify-center items-center w-8 h-8 md:w-12 md:h-12  rounded-full">❮</a>
        <a href="#slide2" className="bg-white flex justify-center items-center w-8 h-8 md:w-12 md:h-12  rounded-full">❯</a>
    </div>
</div>

</div> */}
            <div className="h-screen">
                <div className="carousel w-full h-3/4">
                    <div id="item1" className="carousel-item w-full h-full">
                        <div className="w-full h-full">
                            <div className="hero h-full" style={{ backgroundImage: 'url(https://i.ibb.co/pbh93jL/bookshop.jpg)' }}>
                                <div className="hero-overlay bg-black bg-opacity-20"></div>
                                <div className="hero-content  text-center w-full text-white flex justify-center max-w-xs md:max-w-xl lg:max-w-5xl ">
                                    <div data-aos="fade-up" className=" ">
                                        <p className="mb-1 md:mb-5 text-sm md:text-lg font-medium"></p>
                                        <h1 className="mb-3 md:mb-5 text-2xl md:text-4xl lg:text-5xl font-bold">Buy / Sell Your Old Books <br />through Bidding!.</h1>
                                        <button className="px-2  md:px-6 py-2 md:py-3 text-xs md:text-lg rounded-md md:rounded-lg border-0 bg-orange-500 text-white">Find Books </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div id="item2" className="carousel-item w-full">
                            <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                        </div>
                    </div>
                    <div className="flex justify-center w-full py-2 gap-2">
                        <a href="#item1" className="btn btn-xs">1</a>
                        <a href="#item2" className="btn btn-xs">2</a>

                    </div>
                </div>

            </div>
            );
};

            export default Banner;