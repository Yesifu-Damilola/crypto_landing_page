// Import Feature Images
import identityverification from "../../assets/images/identityverification.png";
import makeadeposit from "../../assets/images/makeadeposit.png";
import starttrading from "../../assets/images/starttrading.png";
import keeptrack from "../../assets/images/keeptrack.png";

// Import Crypto Images
import solana from "../../assets/images/solana.png";
import binance from "../../assets/images/binance.png";
import cosmos from "../../assets/images/cosmos.png";
import wanchain from "../../assets/images/wanchain.png";
import dash from "../../assets/images/dash.png";
import digibyte from "../../assets/images/digibyte.png";
import ontology from "../../assets/images/ontology.png";
import viacoin from "../../assets/images/viacoin.png";
import tether from "../../assets/images/tether.png";
import neo from "../../assets/images/neo.png";

// Import CryptoInfo Images
import btc from "../../assets/images/btc.png";
import btcchart from "../../assets/images/btcchart.png";
import eth from "../../assets/images/eth.png";
import ethchart from "../../assets/images/ethchart.png";
// import solana from "../../assets/images/solana.png";
import solanachart from "../../assets/images/solanachart.png";
// import binance from "../../assets/images/binance.png";
import binancechart from "../../assets/images/binancechart.png";
import ltc from "../../assets/images/ltc.png";
import ltcchart from "../../assets/images/ltcchart.png";

import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";
import youtube from "../../assets/images/youtube.png";
import whatsapp from "../../assets/images/whatsapp.png";
import linkedin from "../../assets/images/linkedin.png";
import discord from "../../assets/images/discord.png";
import github from "../../assets/images/github.png";
import telegram from "../../assets/images/telegram.png";

// Feature Interface
export interface Feature {
  img: string;
  title: string;
  text: string;
}
// Feature Data
export const featuresData: Feature[] = [
  {
    img: identityverification,
    title: "Identity Verification",
    text: "Secure your account and transactions by completing the identity verification process.",
  },
  {
    img: makeadeposit,
    title: "Make a Deposit",
    text: "Fund your crypto account to begin trading. A variety of payment methods are available for adding funds.",
  },
  {
    img: starttrading,
    title: "Start Trading",
    text: "Buy and sell popular digital currencies, keep track of them in one place.",
  },
  {
    img: keeptrack,
    title: "Keep Track of Your Portfolio",
    text: "Monitor your holdings and trade efficiently.",
  },
];

// Crypto Interface
export interface Crypto {
  name: string;
  ticker: string;
  rewards: string;
  img: string;
}
// Crypto Data
export const cryptoData: Crypto[] = [
  { name: "Solana", ticker: "SOL", rewards: "9 - 12%", img: solana },
  { name: "Binance", ticker: "BNB", rewards: "12 - 30%", img: binance },
  { name: "Cosmos", ticker: "ATOM", rewards: "8 - 14%", img: cosmos },
  { name: "Wanchain", ticker: "WAN", rewards: "6 - 10%", img: wanchain },
  { name: "DASH", ticker: "DASH", rewards: "5 - 12%", img: dash },
  { name: "DigiByte", ticker: "DBG", rewards: "15-25%", img: digibyte },
  { name: "Ontology", ticker: "ONT", rewards: "20-30%", img: ontology },
  { name: "Viacoin", ticker: "VIA", rewards: "9-14%", img: viacoin },
  { name: "Tether", ticker: "USDT", rewards: "10-20%", img: tether },
  { name: "Neo", ticker: "NEO", rewards: "8-12%", img: neo },
];

export interface CoinsData {
  id: number;
  icon: string;
  symbol: string;
  name: string;
  price: string;
  change: string;
  changeColor: string;
  chart: string;
}

export const CoinsData: CoinsData[] = [
  {
    id: 1,
    icon: btc,
    symbol: "BTC",
    name: "Bitcoin",
    price: "$16,834.56",
    change: "-3.23%",
    changeColor: "text-[#EC2121]",
    chart: btcchart,
  },
  {
    id: 2,
    icon: eth,
    symbol: "ETH",
    name: "Ethereum",
    price: "$1267.23",
    change: "+4.26%",
    changeColor: "text-primary",
    chart: ethchart,
  },
  {
    id: 3,
    icon: solana,
    symbol: "SOL",
    name: "Solana",
    price: "$204.67",
    change: "-2.45%",
    changeColor: "text-[#EC2121]",
    chart: solanachart,
  },
  {
    id: 4,
    icon: binance,
    symbol: "BNB",
    name: "Binance Coin",
    price: "$305.12",
    change: "+1.56%",
    changeColor: "text-primary",
    chart: binancechart,
  },
  {
    id: 5,
    icon: ltc,
    symbol: "LTC",
    name: "Litecoin",
    price: "$769.45",
    change: "-4.33%",
    changeColor: "text-[#EC2121]",
    chart: ltcchart,
  },
];

export interface TableHeader {
  id: number;
  label: string;
}

export const TableHeaders: TableHeader[] = [
  { id: 1, label: "Name" },
  { id: 2, label: "Last Price" },
  { id: 3, label: "24h Change" },
  { id: 4, label: "Chart" },
];

export interface SocialMedia {
  name: string;
  src: string;
}

export const socialMediaGroups: SocialMedia[][] = [
  [
    { name: "facebook", src: facebook },
    { name: "instagram", src: instagram },
    { name: "twitter", src: twitter },
  ],
  [
    { name: "youtube", src: youtube },
    { name: "whatsapp", src: whatsapp },
    { name: "linkedin", src: linkedin },
  ],
  [
    { name: "discord", src: discord },
    { name: "github", src: github },
    { name: "telegram", src: telegram },
  ],
];
