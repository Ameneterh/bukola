// import styles from "./LandingPage.module.css";
import Interests from "../CommonResources/Interests";
import pharmacist from "../CommonResources/images/pharma.jpeg";
import tailor from "../CommonResources/images/tailor.jpeg";
import datanalyst from "../CommonResources/images/datanalyis.jpeg";
import Header from "../Navigation/Header";
import SocialMedia from "../CommonResources/SocialMedia";

export default function LandingPage(props) {
  return (
    <div className="w-screen h-fit sm:h-screen flex flex-col justify-start items-center bg-slate-600">
      <Header />
      <div className="w-full h-full flex flex-col p-0 sm:px-20 sm:flex-row sm:gap-5 justify-center items-center">
        <div className="w-full sm:w-4/6 p-4 sm:p-0 h-full flex flex-col justify-center items-left text-white">
          <h2 className="text-lg sm:text-2xl text-slate-200">
            Hello, Welcome to my page
          </h2>

          <p className="text-lg sm:text-2xl text-slate-200">
            Which of me would you like to meet?
          </p>
          <p className="text-lg sm:text-3xl font-bold text-slate-200">I am</p>

          <h1 className="text-lg sm:text-6xl font-bold text-white pb-5">
            ADEWUSI, Adedoyin Bukola
          </h1>
          <div className="w-full sm:w-full h-1/2 sm:h-60 flex flex-col sm:flex-row gap-4">
            <Interests image={pharmacist} interestTitle="The Pharmacist" />
            <Interests image={datanalyst} interestTitle="The Data Analyst" />
            <Interests image={tailor} interestTitle="The Tailor" />
          </div>
          <p className="text-sm sm:text-lg pt-5 text-slate-200">
            Let's connect on Social Media:
          </p>
          <div className="w-full flex flex-row gap-4 pt-2">
            <SocialMedia />
            <SocialMedia />
            <SocialMedia />
            <SocialMedia />
          </div>
        </div>
        <div className="w-96 sm:w-2/6 h-96 sm:h-2/3 bg-slate-100 rounded-full">
          <div></div>
        </div>
      </div>
    </div>
  );
}
