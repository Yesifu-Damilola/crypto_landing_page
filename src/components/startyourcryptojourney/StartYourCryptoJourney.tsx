import useScrollAnimation from "../../hooks/useScrollAnimation";
import "animate.css";

const StartYourCryptoJourney = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-white-300 dark:bg-dark ">
      <section
        className={`wrapper py-12   space-y-8 md:space-y-16 text-center ${
          inView ? "animate__animated animate__tada" : "opacity-0"
        } `}
      >
        <h1 className="font-semibold font-inter text-3xl md:text-5xl tracking-[-4%] text-dark dark:text-white mx-auto ">
          Begin Your Crypto Journey Today!
        </h1>
        <div className="w-full flex justify-center">
          <button className="text-white-200 bg-primary-100 font-semibold text-base md:text-lg leading-[22px] py-3 px-6 md:px-5 font-inter rounded-lg cursor-pointer">
            Sign Up Now
          </button>
        </div>
      </section>
    </section>
  );
};

export default StartYourCryptoJourney;
