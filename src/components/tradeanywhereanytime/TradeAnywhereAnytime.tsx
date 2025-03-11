import trading from "../../assets/images/trading.png";
import ios from "../../assets/images/ios.png";
import andriod from "../../assets/images/andriod.png";
import appstore from "../../assets/images/appstore.png";
import linux from "../../assets/images/linux.png";
import windows from "../../assets/images/windows.png";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import "animate.css";

const TradeAnywhereAnytime = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section ref={ref} className="w-full py-12 bg-white-200 dark:bg-dark">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 wrapper">
        <div className={`w-full md:w-[50%] ${
            inView ? "animate__animated animate__tada" : "opacity-0"
          } `}>
          <img src={trading} alt="Trading" className="w-full h-auto" />
        </div>
        <div className="w-full md:w-[50%] space-y-6">
          <div className={`space-y-3 ${
            inView ? "animate__animated animate__tada" : "opacity-0"
          } `}>
            <h2 className="font-semibold font-inter text-2xl md:text-[33px] leading-9 md:leading-10 tracking-[-2%] text-dark dark:text-white">
              Trade Anywhere, Anytime
            </h2>
            <p className="text-base font-inter md:text-lg leading-6 md:leading-[22px] text-dark-200 dark:text-white">
              Stay in touch across multiple devices and never miss out on
              opportunities.
            </p>
          </div>
          <div className={`grid grid-cols-2 sm:grid-cols-3 gap-6 ${
            inView ? "animate__animated animate__bounce" : "opacity-0"
          } `}>
            <div className="flex flex-col items-center">
              <img src={ios} alt="iOS" className="w-12 h-12 dark:bg-white" />
              <p className="text-base font-inter text-dark dark:text-white">iOS App</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={andriod} alt="Android" className="w-12 h-12  dark:bg-white" />
              <p className="text-base font-inter text-dark dark:text-white">Android</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={appstore} alt="App Store" className="w-12 h-12  dark:bg-white" />
              <p className="text-base font-inter text-dark dark:text-white">App Store</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={linux} alt="Linux" className="w-12 h-12  dark:bg-white" />
              <p className="text-base font-inter text-dark dark:text-white">Linux</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={windows} alt="Windows" className="w-12 h-12  dark:bg-white" />
              <p className="text-base font-inter text-dark dark:text-white">Windows</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeAnywhereAnytime;
