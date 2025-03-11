import CryptoListing from "./components/cryptoListing/CryptoListing";
import Footer from "./components/footer/Footer";
import HeroSection from "./components/hero/HeroSection";
import Navbar from "./components/navbar/Navbar";
import Numbers from "./components/numbers/Numbers";
import Staking from "./components/staking/Staking";
import StartBuildingYourPortfolio from "./components/startbuildingyourportfolio/StartBuildingYourPortfolio";
import StartYourCryptoJourney from "./components/startyourcryptojourney/StartYourCryptoJourney";
import TradeAnywhereAnytime from "./components/tradeanywhereanytime/TradeAnywhereAnytime";
import WeAreAlwaysHere from "./components/wearealwayshere/WeAreAlwaysHere";
import WhyChooseUs from "./components/whychooseus/WhyChooseUs";
import CopyRight from "./components/footer/copyright/CopyRight";


function App() {


  return (
    <>
      <Navbar />
      <HeroSection />
      <Numbers />
      <CryptoListing />
      <StartBuildingYourPortfolio />
      <Staking />
      <WhyChooseUs />
      <TradeAnywhereAnytime />
      <WeAreAlwaysHere />
      <StartYourCryptoJourney />
      <Footer />
      <CopyRight />
      
    </>
  );
}

export default App;
