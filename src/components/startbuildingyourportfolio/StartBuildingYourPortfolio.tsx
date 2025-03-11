import cryptobalance from "../../assets/images/cryptobalance.png";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { featuresData } from "../constant/Constant";
import "animate.css";

const StartBuildingYourPortfolio = () => {
  const { ref, inView } = useScrollAnimation(0.35);

  return (
    <section ref={ref} className="py-10 dark:bg-dark">
      <section className="wrapper space-y-10">
        <div
          className={`space-y-2 ${
            inView
              ? "animate__animated animate__flash"
              : "opacity-0"
          } `}
        >
          <h1 className="font-semibold font-inter md:text-[39px] text-2xl text-center leading-[47px] tracking-[-2%] text-dark dark:text-white md:text-left ">
            Start Building Your Crypto Portifolio
          </h1>
          <p className="font-normal font-inter lg:text-xl text-[15px] text-center md:leading-7  text-dark-200 dark:text-white md:text-left">
            Follow these simple steps to start your first trade.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between mx-auto ">
          <div
            className={`w-full max-w-[524px] space-y-6 md:space-y-12 ${
              inView ? "animate__animated animate__pulse" : "opacity-0"
            } `}
          >
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-9"
              >
                <div className="bg-white w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-xl shadow-black/25 flex items-center justify-center">
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-12 sm:w-[56px]"
                  />
                </div>
                <div className="text-center sm:text-left w-full max-w-[400px] space-y-2">
                  <h4 className="font-semibold font-inter text-lg sm:text-[23px] leading-7 text-dark dark:text-white">
                    {feature.title}
                  </h4> 
                  <p className="text-sm sm:text-base leading-6 text-dark-200 dark:text-white">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div
            className={`w-full max-w-[450px] mt-8 lg:mt-0 ${
              inView ? "animate__animated animate__bounce" : "opacity-0"
            } `}
          >
            <img
              src={cryptobalance}
              alt="Crypto Balance"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="items-center justify-center flex md:items-start md:justify-start">
          <button className="text-white-200 gap-2 bg-primary font-semibold text-base leading-6 py-3 px-[18px] font-inter rounded-lg cursor-pointer">
            Start Your Journey
          </button>
        </div>
      </section>
    </section>
  );
};

export default StartBuildingYourPortfolio;
