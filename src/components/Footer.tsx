import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#263e56] text-white pt-12 mt-12">
      <div className="grid grid-cols-12 gap-6 container mx-auto px-4">
        <div className="md:col-span-4 col-span-8">
          <div className="flex items-center mb-4">
            <Image src="/Assets/secure logo.png" alt="" width={50} height={50} />
            <div className="ml-4">
              <h4 className="text-xl font-bold">Secure Setup Ltd</h4>
              <p>Helmet custom designer</p>
            </div>
          </div>
          <p className="mb-4">
            Secure Setup Ltd, The Pakistan Helmet Factory, We Are Good With Helmet Manufacturing
          </p>
          <div>
            <div className="flex items-center mb-2">
              <i className="fa-solid fa-location-dot"></i>
              <p className="ml-4">
                PMAS arid agriculture university Rawalpind , Punjab , Pakistan
              </p>
            </div>
            <div className="flex items-center mb-2">
              <i className="fa-solid fa-envelope"></i>
              <p className="ml-4">SecureStartup@gmail.com</p>
            </div>
            <div className="flex items-center mb-2">
              <i className="fa-solid fa-phone"></i>
              <p className="ml-4">+92-123-4567890</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 col-span-4">
          <h2 className="text-xl font-bold mb-2">Category</h2>
          <div className="w-1/2 h-1 bg-red-600 mb-4"></div>
          <ul>
            <li className="mt-5">Home</li>
            <li className="mt-5">Career</li>
            <li className="mt-5">About</li>
            <li className="mt-5">Contact</li>
            <li className="mt-5">Testinominal</li>
          </ul>
        </div>
        <div className="md:col-span-2 col-span-4">
          <h2 className="text-xl font-bold mb-2">Products</h2>
          <div className="w-1/2 h-1 bg-red-600 mb-4"></div>
          <ul>
            <li className="mt-5">Bicycle Helmet</li>
            <li className="mt-5">Climbing helmet</li>
            <li className="mt-5">Helmet Accessories</li>
            <li className="mt-5">Ski Helmet</li>
            <li className="mt-5">Skate Helmet</li>
          </ul>
        </div>
        <div className="md:col-span-4 col-span-8">
          <h2 className="text-xl font-bold mb-2">Contact</h2>
          <div className="w-1/2 h-1 bg-red-600 mb-4"></div>
          <p className="mb-4">
            Secure Setup Ltd, The Pakistan Helmet Factory, We Are Good With Helmet Manufacturing
          </p>
          <div className="flex flex-col pr-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-2 outline-none text-white mt-5 rounded-full"
            />
            <input
              type="submit"
              value="Subscribe to Newsletter"
              className="p-2 bg-red-600 text-white text-lg font-bold mt-5 rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#142e49] mt-12 py-5 text-center">
        <span className="text-red-600 font-semibold mx-2">Secure Startup Ltd</span>
        |
        <span className="text-blue-600 font-semibold mx-2">PMAS arid Agriculture</span>
        <span>Copyright© 2023 - 2030</span>
      </div>
    </div>
  );
}
