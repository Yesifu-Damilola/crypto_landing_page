import { ChevronRight } from "lucide-react";
import { cryptoData } from "../constant/Constant";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import "animate.css";

const Staking = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section 
    ref ={ref}
    className="w-full  space-y-10 bg-white-300 py-10 dark:bg-dark">
      <div className={`wrapper space-y-3 mx-auto ${
            inView ? "animate__animated animate__heartBeat" : "opacity-0"
          } `}>
        <h3 className="font-semibold font-inter text-xl leading-7 text-dark dark:text-white text-center">
          STAKING CRYPTO
        </h3>
        <h1 className="font-semibold font-inter md:text-[39px] text-2xl leading-[47px] tracking-[-2%] text-primary text-center">
          Earn Crypto Rewards
        </h1>
        <p className="font-normal font-inter text-base leading-6 text-dark-200 dark:text-white text-center">
          Earn up to 40% in reward yearly by staking your assets
        </p>
      </div>
      <div className="wrapper space-y-10 mx-auto">
        <div className={`w-full grid grid-cols-2 lg:grid-cols-5 gap-4 ${
            inView ? "animate__animated animate__pulse" : "opacity-0"
          } `} >
          {cryptoData.map((crypto, index) => (
            <div
              key={index}
              className="w-full max-w-[200px] mx-auto h-full rounded-lg space-y-2 p-6 bg-white shadow-xl shadow-black/15"
            >
              <img src={crypto.img} alt={crypto.name} className="mx-auto" />
              <div className="w-full text-center">
                <h2 className="font-semibold font-inter md:text-lg text-base leading-7 text-dark">
                  {crypto.name}
                  <span className="text-dark-100">({crypto.ticker})</span>
                </h2>
              </div>
              <p className="font-semibold font-inter text-sm leading-[17px] text-dark text-center">
                Annual rewards
              </p>
              <p className="font-normal font-inter text-base leading-6 text-primary text-center">
                {crypto.rewards}
              </p>
            </div>
          ))}
        </div>
        <div className={`w-[162px] h-12 flex items-center justify-center mx-auto ${
            inView ? "animate__animated animate__bounce" : "opacity-0"
          } `}>
          <button className="text-white-200  gap-2 bg-primary font-semibold text-base leading-6 py-3 px-[18px] font-inter rounded-lg cursor-pointer">
            Start Earning <ChevronRight className="w-4 h-4 inline" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Staking;
