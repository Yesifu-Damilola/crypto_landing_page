import useScrollAnimation from "../../hooks/useScrollAnimation";
import "animate.css";


const Numbers = () => {
  const { ref, inView } = useScrollAnimation(0.35);

  return (
    <section ref={ref} className="w-full py-12 md:py-16  bg-primary-300 dark:bg-dark">
      <div className="wrapper grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
        <div
          className={`space-y-2 ${
            inView
              ? "animate__animated animate__zoomInDown animate__slow"
              : "opacity-0"
          } `}
        >
          <h2 className="font-inter font-semibold text-xl md:text-[39px] leading-[1.2] text-primary">
            $2.05 billion
          </h2>
          <p className="font-inter font-normal text-sm md:text-lg text-dark-200 dark:text-white">
            24h Trading Volume
          </p>
        </div>
        <div className={`space-y-2  ${
            inView
              ? "animate__animated animate__bounceInRight animate__slow"
              : "opacity-0"
          } `}>
          <h2 className="font-inter font-semibold text-xl md:text-[39px] leading-[1.2] text-primary">
            1200+
          </h2>
          <p className="font-inter font-normal text-sm md:text-lg text-dark-200 dark:text-white">
            Cryptocurrencies Listed
          </p>
        </div>
        <div className={`space-y-2  ${
            inView
              ? "animate__animated animate__bounceInDown animate__slow"
              : "opacity-0"
          } `}>
          <h2 className="font-inter font-semibold text-xl md:text-[39px] leading-[1.2] text-primary">
            5+ million
          </h2>
          <p className="font-inter font-normal text-sm md:text-lg text-dark-200 dark:text-white">
            Registered Users
          </p>
        </div>
        <div className={`space-y-2 ${
            inView
              ? "animate__animated animate__heartBeat animate__slow"
              : "opacity-0"
          } `}>
          <h2 className="font-inter font-semibold text-xl md:text-[39px] leading-[1.2] text-primary">
            0%
          </h2>
          <p className="font-inter font-normal text-sm md:text-lg text-dark-200 dark:text-white">
            Lowest Trading Fees
          </p>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
