import { PEOPLE_URL } from '@/constants'
import Image from 'next/image'

interface CampProps {
  backgroundImage: string
  title: string
  subtitle: string
  peopleJoined: string
}

const Campsite =({backgroundImage, title, subtitle, peopleJoined}:CampProps) => {
  return(
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage}  bg-cover bg-no-repeat lg:rounded-5xl 2xl:rounded-5xl `}>
        <div className="flex h-full flex-col items-start justify-between p-6 lg:ps-20 lg:py-10">
            <div className="flexCenter gap-4">
              <div className="rounded-full bg-green-50 p-4">
                <Image src='/folded-map.svg' alt='folded-map' width={24} height={24} />
              </div>

              <div className="flex flex-col gap-1">
                <h4 className='bold-18 text-white'>{title}</h4>
                <p className='regular-14 text-white'>{subtitle}</p>
              </div>

            </div>

            <div className='flexCenter gap-6'>
              <span className='flex -space-x-4 overflow-hidden'>
                {PEOPLE_URL.map((url)=>(
                  <Image 
                  src={url}
                  alt='persons'
                  key={url}
                  width={52}
                  height={52}
                  className='inline-block rounded-full h-10 w-10'
                  />
                ))}
              </span>
              <p className='bold-16 md:bold-20 text-white'>{peopleJoined}</p>
            </div>
        </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className='2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px] ">
      <Campsite backgroundImage='bg-bg-img-1' title='Karpiz Camping Site' subtitle='Forestview Road' peopleJoined='98+ Joined' />
      <Campsite backgroundImage='bg-bg-img-2' title='Emerald Haven Campsite' subtitle='Tranquil Pines Campground' peopleJoined='46+ Joined'  />
      </div>

      <div className='flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6'>
        <div className='bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl'>
          <h2 className='regular-24 md:regular-32 2xl:regular-64 capitalize text-white '>
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className='regular-14 xl:regular-16 mt-5 text-white'>It's time to embark on an unforgettable journey to Karpiz Camping Site, where the tranquil embrace of nature awaits. Immerse yourself in the serenity of our riverside haven and let the wilderness rekindle your spirit
          </p>
          <Image src='/quote.svg' alt='quote' width={186} height={219} className='camp-quote' />
        </div>
      </div>
    </section>
  )
}

export default Camp