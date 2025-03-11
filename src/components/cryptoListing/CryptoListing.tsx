import { ChevronRight } from "lucide-react";
import { CoinsData, TableHeaders } from "../constant/Constant";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import "animate.css";

const CryptoListing = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-36 space-y-9 bg-white-200 dark:bg-dark"
    >
      <div className="wrapper">
        <h1
          className={`font-inter text-center md:text-left font-semibold text-3xl sm:text-[39px] leading-[47px] tracking-[-2%] text-dark dark:text-white ${
            inView ? "animate__animated animate__flash" : "opacity-0"
          } `}
        >
          Popular Markets
        </h1>
      </div>

      <div className="wrapper space-y-6">
        <div
          className={`flex gap-4 sm:gap-9 justify-center md:justify-start ${
            inView
              ? "animate__animated animate__bouncet"
              : "opacity-0"
          } `}
        >
          <h4 className="font-semibold font-inter text-xl leading-7 text-dark dark:text-white cursor-pointer">
            Hot
          </h4>
          <h4 className="font-semibold font-inter text-xl leading-7 text-dark-100 dark:text-white cursor-pointer">
            New Coins
          </h4>
          <h4 className="font-semibold font-inter text-xl leading-7 text-dark-100  dark:text-white cursor-pointer">
            Top Gainers
          </h4>
        </div>
        <div
          className={`w-full grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-8  ${
            inView ? "animate__animated animate__bounce" : "opacity-0"
          } `}
        >
          {TableHeaders.map((header) => (
            <h5
              key={header.id}
              className="font-normal font-inter text-sm leading-[17px] text-dark-100 dark:text-white"
            >
              {header.label}
            </h5>
          ))}
        </div>

        <div className="w-full space-y-4">
          {CoinsData.map((coin) => (
            <div
              key={coin.id}
              className={`w-full grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-8 ${
                inView ? "animate__animated animate__bounce" : "opacity-0"
              } `}
            >
              <div className="flex gap-2 items-center">
                <img src={coin.icon} alt={coin.name} className="w-6 h-6" />
                <p className="font-normal font-inter text-sm leading-[17px] text-dark dark:text-white">
                  {coin.symbol}
                </p>
                <p className="font-normal font-inter text-sm leading-[17px] text-dark-100 dark:text-white">
                  {coin.name}
                </p>
              </div>
              <p className="font-normal font-inter text-sm leading-[17px] text-dark dark:text-white">
                {coin.price}
              </p>
              <p
                className={`font-normal font-inter text-sm leading-[17px] ${coin.changeColor}`}
              >
                {coin.change}
              </p>
              <img
                src={coin.chart}
                alt={`${coin.name} chart`}
                className="w-20"
              />
              <div>
                <button className="text-white-200 bg-primary-100 font-semibold text-sm leading-[17px] py-2 px-4 font-inter rounded-lg cursor-pointer">
                  Trade
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`w-[143px] h-12 rounded-sm mx-auto  ${
          inView ? "animate__animated animate__fadeInBottomRight" : "opacity-0"
        } `}
      >
        <a
          href="#"
          className="text-primary-100 font-semibold font-inter text-base leading-6 py-3 px-[18px] flex gap-2 items-center justify-center"
        >
          View More <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default CryptoListing;
