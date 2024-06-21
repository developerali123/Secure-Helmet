import Image from "next/image";

export default function HomeSection() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-12 justify-center items-center">
        <div data-aos="fade-right" className=" text-[#253D55] col-span-6">
          <div className="text-6xl font-bold">
            <h1>SECURE <span className=" text-transparent bg-clip-text text-[#EE8D6E]">
                Life
              </span></h1>
          </div>
          <p className="mt-4 text-lg">
            <span>Stay Protected with</span> Secure - <span>The Ultimate</span>{" "}
            Accident Detection <span>Device for</span> Bikers
          </p>
          <div className="mt-4 flex">
            <button className="bg-[#EE8D6E] hover:bg-[#EE8D6E] text-white font-bold py-2 px-4 rounded mr-2">
              View Items
            </button>
            <button className="bg-[#EE8D6E] hover:bg-[#EE8D6E] text-white font-bold py-2 px-4 rounded">
              Shop Now
            </button>
          </div>
        </div>
        <div className="col-span-6" data-aos="fade-left">
          <Image src="/Assets/helmet.png" className="w-full" alt="" width={400} height={400} />
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Image src="/Assets/vector-2.svg" alt="" width={50} height={50} className="mx-4" />
        <h2 className="text-2xl font-bold text-gray-800 mt-2">OUR JOURNEY</h2>
      </div>
    </div>
  );
}
