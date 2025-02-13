import Image from 'next/image';
const Third = () => {
  return (
    <div className="container grid lg:grid-cols-2 lg:text-left text-center gap-16 mt-16">
      {/* Text Section */}
      <div className="mt-12">
        <h3 className="text-5xl font-bold">BRINGING YOU THE</h3>
        <h3 className="text-5xl font-bold">
          <span className="text-[#D87D4A]">BEST</span> AUDIO GEAR
        </h3>
        <p className="mt-6 text-gray-600">
          Located at the heart of {'New York, Audiophile'} is the premier store for {'high-end headphones, speakers,'} and audio {"accessories."}
          We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our {'products.'}
          Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio {'equipment.'}
        </p>
      </div>
      {/* Image Section */}
      <div className="flex justify-center lg:justify-end">
        <Image
          src="/images/Bitmap (2).png"
          alt="speaker"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};
export default Third;
