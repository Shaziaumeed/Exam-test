import Image from 'next/image';
const Cardstwo = () => {
  return (
      < div className='container  grid  lg:grid-cols-2 lg:text-start items-center   gap-10 bg-[#f0eded] w-[83%] rounded mt-16 '>
      {/* Text Section */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left py-16 ">
        <h3 className="text-4xl font-bold ">ZX7 SPEAKER</h3>
        <button className="button px-5 py-3 mt-4">SEE PRODUCTS</button>
      </div>
      {/* Image Section */}
      <div className="flex justify-center">
        <Image
          src="/images/Group 3.png"
          alt="speaker"
          width={400}
          height={400}
          className="w-full max-w-sm h-auto rounded"
        />
      </div>
    </div>
  );
};

 export default Cardstwo;
