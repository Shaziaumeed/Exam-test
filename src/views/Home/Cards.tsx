import Image from 'next/image';
const Cards = () => {
  return (
    <>
     <div className='container grid  lg:grid-cols-2 lg:text-start text-center   bg-[#D87D4A] w-[83%] rounded mt-20   '>
        <div className=' flex max-lg:justify-center'>
         <Image
        src="/images/image-removebg-preview(38) (1).png"
        alt="speaker"
        width={400}
        height={400}/>
        </div>
        <div className='text-white pt-12   '>
            <h3 className='text-5xl font-bold'>
            ZX9 
            </h3>
            <h3 className='text-5xl font-bold'>SPEAKER</h3>
            <p className='pt-5'>
            Upgrade to premium speakers that are
            phenomenally built to deliver truly remarkable</p>
            <p>{'sound.'}</p>
            <button className='px-5 py-2  bg-[#464242] mt-8 mb-5'>See products</button>
            </div>
        </div>
    </>
  )
}
export default Cards
