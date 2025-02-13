import Image from 'next/image';
import { FaAngleRight } from 'react-icons/fa';
const Second = () => {
  return (
    <>
    <div className='bg-white'>
    <div className='container grid lg:grid-cols-3 gap-12 '>
    <div className='flex flex-col items-center'>
        <div className='w-24 h-24 z-10'>
            <Image
             src="/images/imge 7.png"
            alt="speaker"
            width={120}
            height={120}
            className="object-contain w-full h-full mt-12" />
        </div>
        <div className='bg-gray-200 py-12 px-24 rounded shadow-md hover:shadow-lg  flex flex-col items-center pb-8 pt-16'>
        <h3 className='text-lg font-semibold text-gray-800'>HEADPHONES</h3>
        <div className='flex gap-2'>
        <a href='#' className='text-gray-500 font-bold text-sm mt-2'>SHOP</a>
        <span className='text-orange-500 font-bold mt-2'><FaAngleRight /></span>
        </div>
        </div>
        </div>
        <div className='flex flex-col items-center'>
        <div className='w-24 h-24 z-10'>
            <Image
             src="/images/img 6.png"
            alt="speaker"
            width={120}
            height={120}
            className="object-contain w-full h-full mt-12" />
        </div>
        <div className='bg-gray-200 py-12 px-24 rounded shadow-md hover:shadow-lg  flex flex-col items-center pb-8 pt-16'>
       <h3 className='text-lg font-semibold text-gray-800'>SPEAKERS</h3>
        <div className='flex gap-2'>
        <a href='#' className='text-gray-500 font-bold text-sm mt-2'>SHOP</a>
        <span className=' font-bold mt-2'><FaAngleRight /></span>
       </div>
      </div>
    </div>  
    <div className='flex flex-col items-center'>
        <div className='w-24 h-24 z-10'>
            <Image
             src="/images/Group 5.png"
            alt="speaker"
            width={120}
            height={120}
            className="object-contain w-full h-full mt-12" />
        </div>
      <div className='bg-gray-200 py-12 px-24 rounded shadow-md hover:shadow-lg  flex flex-col items-center pb-8 pt-16'>
    <h3 className='text-lg font-semibold text-gray-800'>EARPHONES</h3>
    <div className='flex gap-2'>
        <a href='#' className='text-gray-500 font-bold text-sm mt-2'>SHOP</a>
        <span className=' font-bold mt-2'><FaAngleRight /></span>
    </div>
    </div>
    </div>
    </div>
      </div>
    </>
  )
}
export default Second;
