import Image from 'next/image';
const Cardsfour = () => {
  return (
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-6 items-stretch mt-20">
        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src="/images/Group 12 (1).png"
            alt="speaker"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded"
          />
        </div>
        {/* Text Box Section */}
        <div className="bg-[#f0eded] rounded flex justify-center items-center py-16 h-full">
          <div className="text-center">
            <h3 className="text-3xl font-bold">YX1 EARPHONES</h3>
            <button className="button px-5 py-3 mt-4">SEE PRODUCTS</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cardsfour;
