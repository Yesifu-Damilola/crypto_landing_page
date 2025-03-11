import Vector from "../../assets/images/Vector.jpg";
import faq from "../../assets/images/faq.png";
import community from "../../assets/images/community.png";
import { ChevronRight } from "lucide-react";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import "animate.css";

const WeAreAlwaysHere = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-white-200 space-y-12 md:space-y-16 dark:bg-dark">
      <h1 className="wrapper font-semibold font-inter text-[32px] sm:text-[36px] lg:text-[39px] leading-[47px] tracking-[-2%] text-dark dark:text-white md:text-left text-center">
        We Are Always Here
      </h1>

      <div className="w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-9 wrapper py-4">
        <div
          className={`space-y-4 text-center sm:text-left ${
            inView ? "animate__animated animate__flash" : "opacity-0"
          } `}
        >
          <img
            src={Vector}
            alt="Customer Service"
            className="w-12 h-12 mx-auto sm:mx-0"
          />
          <h3 className="font-semibold font-inter text-xl text-dark dark:text-white">
            24/7 Customer Service
          </h3>
          <p className="font-inter text-base text-dark-200 dark:text-white">
            If you have any questions, please do not hesitate to contact
            VeeWallet's customer support.
          </p>
          <a
            href="#"
            className="text-primary-100 font-inter text-sm flex items-center justify-center sm:justify-start gap-2"
          >
            Chat Now <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className={`space-y-4 text-center sm:text-left ${
            inView ? "animate__animated animate__flash" : "opacity-0"
          } `}>
          <img src={faq} alt="FAQ" className="w-12 h-12 mx-auto sm:mx-0" />
          <h3 className="font-semibold font-inter text-xl text-dark dark:text-white">FAQ</h3>
          <p className="text-base font-inter text-dark-200 dark:text-white">
            For detailed instructions on specific features, please refer to the
            FAQs.
          </p>
          <a
            href="#"
            className="text-primary-100 font-inter text-sm flex items-center justify-center sm:justify-start gap-2"
          >
            Learn More <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className={`space-y-4 text-center sm:text-left ${
            inView ? "animate__animated animate__flash" : "opacity-0"
          } `}>
          <img
            src={community}
            alt="Community"
            className="w-12 h-12 mx-auto sm:mx-0"
          />
          <h3 className="font-semibold font-inter text-xl text-dark dark:text-white">
            Community
          </h3>
          <p className="text-base font-inter text-dark-200 dark:text-white">
            With over 15 languages supported, the VeeWallet Global Community is
            home to millions of users from 20+ countries.
          </p>
          <a
            href="#"
            className="text-primary-100 font-inter text-sm flex items-center justify-center sm:justify-start gap-2"
          >
            Learn More <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WeAreAlwaysHere;
