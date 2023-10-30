import Image from "next/image"


const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className=" padding-container max-container w-full pb-24">
        <Image src='/camp.svg' alt='camp' width={50} height={50} />
        <p className="regular-18 -mt-1 mb-3 text-green-50">WE ARE HERE FOR YOU!</p>
          <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
            <h2 className="bold-40 lg:bold-64 xl:max-w-[390px] "> Guide You to Easy Path </h2>
            <p className="regular-16 text-gray-30 xl:max-w-[520px]">Nestled amidst nature's splendor, our campsite is designed to ease the complexities of camping, allowing you to focus on what truly matters: the serenity of the wilderness. With well-maintained facilities, spacious campsites, and a helpful staff, we lead you to an effortless journey through the great outdoors, where relaxation and nature go hand in hand.</p>
          </div>  
      </div>

      <div className="flexCenter max-container relative w-full ">
        <Image src='/boat.png' alt='boat' width={1440} height={580} className='w-full object-cover object-center 2xl:rounded-5xl' />
          <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20 ">
            <Image src='/meter.svg' alt='meter' height={158} width={16} className="h-full w-auto" />
            <div className="flexBetween flex-col  "> 
              <div className=" flex w-full flex-col ">
                  <div className="flexBetween w-full">
                    <p className="regular-16 text-gray-20 ">Destination</p>
                    <p className="bold-16 text-green-50 ">34 min</p>
                  </div>

                  <p className=" bold-20 mt-2">Forestview Road</p>
              </div>
              
              <div className=" flex w-full flex-col ">
                    <p className="regular-16 text-gray-20 ">Start Route</p>
                    <h4 className=" bold-20 mt-2 whitespace-nowrap  ">Tranquil Pines Campground</h4>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Guide