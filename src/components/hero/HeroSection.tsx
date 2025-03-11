import { Mail } from "lucide-react";
import heroimg from "../../assets/images/heroimg.png";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import "animate.css";

const HeroSection: React.FC = () => {
  const { ref, inView } = useScrollAnimation(0.35);

  return (
    <section ref={ref} className="w-full bg-[#F4F5F7] dark:bg-dark">
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between py-10 md:py-20   gap-10 wrapper">
        <div className="w-full lg:w-[652px] space-y-6 text-center lg:text-left">
          <h1
            className={`font-semibold font-[inter] text-4xl md:text-6xl leading-snug tracking-[-4%] text-dark dark:text-white ${
              inView ? "animate__animated  animate__fadeInTopLeft" : "opacity-0"
            }`}
          >
            Buy, Trade and <span className="text-primary-100">Hodl</span> your
            Favourite Cryptocurrencies
          </h1>

          <p className={`text-lg md:text-xl text-dark  dark:text-white ${inView ? "animate__animated animate__backInDown" : "opacity-0"} `}>
            Trade Over 1200 Cryptocurrencies Safely, Quickly, and Easily
          </p>
          <div
            className={`flex flex-col md:flex-row gap-4 md:items-center md:justify-center lg:items-start lg:justify-start ${
              inView ? "animate__animated animate__backInUp " : "opacity-0"
            } `}
          >
            <div className="relative flex w-full md:w-[300px] rounded-lg px-3 bg-white">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full py-3 font-[inter] text-lg text-[#C3C6D2] focus:outline-none"
              />
              <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#C3C6D2] dark:text-white w-5 h-5" />
            </div>

            <button className="w-full md:w-auto bg-primary-100 text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary transition duration-300">
              Get Started
            </button>
          </div>

          <p className="text-[#90949E] dark:text-white text-base">
            Sign Up Now and Get 0 fees on Trading
          </p>
        </div>
        <div
          className={` ${
            inView ? "animate__animated animate__fadeInTopRight" : "opacity-0"
          }`}
        >
          <img src={heroimg} alt="Hero Image" />
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
