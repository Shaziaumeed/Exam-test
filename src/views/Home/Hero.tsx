import Image from 'next/image';
const Hero = () => {
  return (
    <>
  <div className='bg-[#101010]'>
      <div className="container">
        <div className="text-white  ">
          <div className="grid lg:grid-cols-2 w-full items-center">
            <div>
              <div className="flex gap-8 text-[11px] ">
                <ul className=' flex gap-3'>
                  <li>N</li>
                  <li>E</li>
                  <li>W</li>
                </ul>
                <ul className=' flex gap-3'>
                  <li>P</li>
                  <li>R</li>
                  <li>O</li>
                  <li>D</li>
                  <li>U</li>
                  <li>C</li>
                  <li>T</li>
                  <li>S</li>
                </ul>
              </div>
              <h1 className='md:text-6xl text-5xl  py-4 font-bold'>XX99 MARK II
              HEADPHONES</h1>
              <p className='text-[16px] text-balance py-4'>Experience {'natural, lifelike'} audio and exceptional
              bulid quality made for the passionate music
            {'  enthusiast.'} </p>
              <button className='px-5 py-2 bg-[#D87D4A] mt-4'>See products</button>
              </div>
              <div>
              <Image
                src="/images/Bitmap.png"
                alt="Bitmap.png"
                className=""
                width={700}
                 height={300}
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Hero;
