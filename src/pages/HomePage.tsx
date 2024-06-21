import AboutSection from "@/components/AboutSection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HomeSection from "@/components/HomeSection";
import Protection from "@/components/Protection";
import SecureNavbar from "@/components/SecureNavbar";
import Testimonials from "@/components/Testinominal";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <>
      <SecureNavbar name="home" />
      <HomeSection />
      <AboutSection
        text="According to the 2014 World Health Organization report, 2.69% of Pakistanis die due to road accidents every year. Do you know that in Punjab only, there were over 360,000 road accidents affecting nearly 400,000 people in 2021? These accidents took the lives of over 4,000 people."
        img="/Assets/about1.png"
        i="1"
      />
      <AboutSection
        text="Riding a motorcycle can be an adrenaline rush, but accidents can happen anytime, anywhere. So, to keep you and your loved ones protected, we came up with Secure - the ultimate accident detection device for bikers."
        img="/Assets/about2.png"
        i="2"
      />
      <Features />
      <div>
        <h2 className="text-2xl font-bold text-center">How It Secures</h2>
      </div>
      <AboutSection
        text="Designed to attach to your helmet, Secure uses cutting-edge technology to detect an accident and immediately send a signal to your designated contacts along with your exact location. With Secure, you can ride with peace of mind, knowing that in the event of an emergency, help will be on the way."
        img="/Assets/about3.png"
        i="2"
      />
      <div className="container mx-auto px-4">
        <div className="bg-white p-6">
          <p className="text-[#253D55] font-semibold">
            Don't compromise on safety while riding your motorcycle.
          </p>
          <p className="text-[#253D55]">
            <span className="font-bold text-[#EE8D6E]">Get Secure today</span>{" "}
            and enjoy peace of mind while you explore the open roads.
          </p>
          <p className="text-[#253D55] italic">
            Order now and enjoy a secure ride!
          </p>
          <div className="flex justify-between items-center mt-4">
            <button className="bg-[#EE8D6E] hover:bg-[#EE8D6E] text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
            <div className="flex justify-center items-center">
              <Image
                src="/Assets/playstore.png"
                alt=""
                className="w-32 h-auto"
                width={100}
                height={100}
              />
              <Image
                src="/Assets/appstore.png"
                alt=""
                className="w-32 h-auto"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-6">
          <Protection
            img="/Assets/protection.png"
            text="Before"
            para="Let your emergency contacts know you're heading out for a ride and, if you choose, to follow your ride in real-time."
          />
          <Protection
            img="/Assets/protection.png"
            text="During"
            para="If Secure detects potentially dangerous forces to the head, it will sound an alarm on your phone and start a countdown on your screen."
          />
          <Protection
            img="/Assets/protection.png"
            text="After"
            para="If you're unable to cancel the countdown, your emergency contacts will receive a text with your crash location."
          />
        </div>
      </div>
      <div>
        <h2 className="mission">
          Our <span>M</span>ission
        </h2>
      </div>
      <AboutSection
        img="/Assets/mission.png"
        text="Designed to attach to your helmet, Secure uses cutting-edge technology to detect an accident and immediately send a signal to your designated contacts along with your exact location. With Secure, you can ride with peace of mind, knowing that in the event of an emergency, help will be on the way."
        i="2"
      />
      <div className="mt-4">
        <div className="box4">
          <Image
            src="/Assets/product.png"
            alt=""
            className="w-32 h-auto"
            width={100}
            height={100}
          />
          <button className="bg-[#EE8D6E] hover:bg-[EE8D6E] text-white font-bold py-2 px-4 rounded">
            Try Now
          </button>
        </div>
      </div>
      <Testimonials />
      <div className="container mx-auto px-4">
        <div className="box1">
          <div>
            <button className="py-2 px-4 mr-2 border border-[#EE8D6E] text-[#EE8D6E] rounded hover:bg-[#EE8D6E] hover:text-white transition duration-300">
              Buy Now
            </button>
            <button className="py-2 px-4 bg-[#EE8D6E] text-white rounded hover:bg-[#EE8D6E] transition duration-300">
              Signup
            </button>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/Assets/playstore.png"
              alt=""
              className="w-32 h-auto"
              width={100}
              height={100}
            />
            <Image
              src="/Assets/appstore.png"
              alt=""
              className="w-32 h-auto"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
