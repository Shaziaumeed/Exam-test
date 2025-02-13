import Footer from '@/Component/Layout/Footer';
import Navbar from '@/Component/Layout/Navbar';
import Image from 'next/image';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#101010] py-16">
        <div className="container mx-auto text-white text-center">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h2 className="md:text-5xl text-4xl font-bold mb-6">About Us</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                We are passionate about delivering the highest quality audio experiences. 
                Our products are designed with precision and crafted for music enthusiasts 
                who demand the best in sound and style.
              </p>
              <p className="text-lg text-gray-300 mt-4">
                With years of <span>&quot;expertise, we continue&quot;</span> to innovate and redefine how people 
                experience <span>&quot;music, ensuring&quot;</span> every beat is heard with clarity and depth.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/Bitmap (2).png"
                alt="About Us Image"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
