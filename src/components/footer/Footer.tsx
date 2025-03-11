import FooterItems from "./FooterItems";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import "animate.css";
import { socialMediaGroups } from "../constant/Constant";

const Footer = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <footer ref={ref} className="w-ful py-16  bg-[#FAFAFB] dark:bg-dark">
      <div className="flex gap-5 wrapper lg:flex-row flex-col">
        <div
          className={`w-[192px]  space-y-10 ${
            inView ? "animate__animated animate__bounce" : "opacity-0"
          } `}
        >
          <h1 className=" font-glory font-bold text-[32px] leading-10 tracking-[-2%] text-primary">
            VeeWallet
          </h1>

          <div className="flex flex-col gap-6">
            {socialMediaGroups.map((group, index) => (
              <div key={index} className="flex gap-6">
                {group.map((social) => (
                  <img
                    key={social.name}
                    src={social.src}
                    alt={social.name}
                    className="dark:bg-white"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 lg:flex gap-10 justify-evenly grid grid-cols-2">
          <FooterItems title="About Us" lists={aboutUs} />
          <FooterItems title="Products" lists={products} />
          <FooterItems title="Services" lists={services} />
          <FooterItems title="Support" lists={support} />
          <FooterItems title="Learn" lists={learn} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
const aboutUs = [
  " About",
  "Careers",
  "Community",
  "Blog",
  "Terms",
  "Privacy",
  "About",
  "Announcements",
  "News",
  "Sitemap",
  "Cookie Preferences",
];
const products = [
  "Exchange",
  "Academy",
  "NFT",
  "Spot Trading",
  "Margin Trading",
  "Crypto Lending",
  "Trading Bot",
  "Launch Pad",
  "Trust Wallet",
  "Gift Card",
];
const services = [
  "Downloads",
  "Referral",
  "P2P",
  "Identity Identification",
  "Technical Support",
  "VIP",
  "Affilate Program",
  "Submit a request",
  "Verification Search",
];

const support = [
  "Technical Support",
  "User Feedback",
  "Trading Rules",
  "APIs",
  "Fees",
  "Account Access",
  "Payment Methods",
];
const learn = [
  "Crypto Guide",
  "Videos",
  "Podcast",
  "How to Buy Bitcoin",
  "How to Buy Cardano",
  "How to Buy Ripple",
  "How to Buy Ethereum",
  "How to Buy Tradable Altcoins",
];
