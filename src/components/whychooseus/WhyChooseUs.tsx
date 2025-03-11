import securestorage from "../../assets/images/securestorage.png";
import insuranceprotection from "../../assets/images/insuranceprotection.png";
import personalizedaccess from "../../assets/images/personalizedaccess.png";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import "animate.css";

const WhyChooseUs = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="w-full py-10 space-y-10 bg-white-300 dark:bg-dark"
    >
      <div
        className={`wrapper text-center space-y-3 ${
          inView ? "animate__animated animate__bounce" : "opacity-0"
        } `}
      >
        <h1 className="font-semibold font-inter text-2xl md:text-[32px] lg:text-[39px] leading-[32px] md:leading-[40px] lg:leading-[47px] tracking-[-2%] text-dark dark:text-white">
          Your Most Reliable Crypto Exchange
        </h1>
        <p className="font-normal font-inter text-lg md:text-xl leading-6 md:leading-7 text-dark-200 dark:text-white">
          Here are some reasons why you should choose VeeWallet
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 wrapper">
        <div
          className={`w-full space-y-4 text-center ${
            inView ? "animate__animated animate__bounce" : "opacity-0"
          } `}
        >
          <div className="flex items-center justify-center">
            <img
              src={securestorage}
              alt="Secure Storage"
              className="max-w-[80px] md:max-w-[100px] lg:max-w-[120px]"
            />
          </div>
          <div className="space-y-[10px]">
            <h4 className="font-semibold text-lg md:text-xl text-dark dark:text-white">
              Secure Storage
            </h4>
            <p className="text-sm md:text-base text-dark-200 dark:text-white leading-6">
              We ensure your funds are protected with both centralized and
              decentralized methods.
            </p>
          </div>
        </div>
        <div
          className={`w-full space-y-4 text-center ${
            inView ? "animate__animated animate__bounce" : "opacity-0"
          } `}
        >
          <div className="flex items-center justify-center">
            <img
              src={insuranceprotection}
              alt="Insurance Protection"
              className="max-w-[80px] md:max-w-[100px] lg:max-w-[120px]"
            />
          </div>
          <div className="space-y-[10px]">
            <h4 className="font-semibold text-lg md:text-xl text-dark dark:text-white">
              Insurance Protection
            </h4>
            <p className="text-sm md:text-base text-dark-200 dark:text-white">
              All crypto cash and balances are maintained and insured by NIDC up
              to a maximum of $400,000.
            </p>
          </div>
        </div>
        <div
          className={`w-full space-y-4 text-center ${
            inView
              ? "animate__animated animate__bounce "
              : "opacity-0"
          } `}
        >
          <div className="flex items-center justify-center">
            <img
              src={personalizedaccess}
              alt="Personalized Access Control"
              className="max-w-[80px] md:max-w-[100px] lg:max-w-[120px]"
            />
          </div>
          <div className="space-y-[10px]">
            <h4 className="font-semibold text-lg md:text-xl text-dark dark:text-white">
              Personalized Access Control
            </h4>
            <p className="text-sm md:text-base text-dark-200  dark:text-white">
              Personalized access control allows you to restrict devices and
              addresses that can access your account, for greater ease of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
