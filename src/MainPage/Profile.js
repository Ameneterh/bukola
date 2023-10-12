import React from "react";
import Header from "../Navigation/Header";
import SocialMedia from "../CommonResources/SocialMedia";

export default function Profile() {
  return (
    <div className="w-screen min-h-fit sm:min-h-screen flex flex-col justify-start items-center bg-slate-600">
      <Header />
      <div className="w-full min-h-full flex flex-col p-0 sm:px-20 sm:py-10 sm:flex-row sm:gap-5 justify-start items-start">
        <div className="w-96 sm:w-96 h-96 sm:h-96 hidden sm:flex bg-slate-100 rounded-full">
          <div></div>
        </div>
        <div className="w-full sm:w-4/6 p-4 sm:p-0 h-full flex flex-col justify-start items-left text-white">
          <p className="text-lg sm:text-3xl font-bold text-slate-200">I am</p>

          <h1 className="text-lg sm:text-6xl font-bold text-white pb-1 sm:pb-5">
            ADEWUSI, Adedoyin Bukola
          </h1>
          <p className="text-sm sm:text-xl font-bold text-slate-200 mb-4 sm:mb-6">
            B. Pharm (OOU, Nigeria);
          </p>
          <div className="w-full sm:w-full min-h-full py-5 sm:py-8 border-y-2 border-slate-300">
            <p className="text-sm sm:text-lg text-justify mb-4 sm:mb-6">
              A dedicated and highly skilled pharmacist with 8 years of
              experience in providing exceptional pharmaceutical care in
              healthcare industry in her country home- Nigeria, ‘Bukola is
              committed to ensuring patient safety and well-being through
              accurate dispensing of medications, patient education, and
              collaboration with healthcare teams. She has sought to leverage
              her expertise to contribute to the success of the healthcare
              facility and positively impact patient outcomes everywhere she has
              had opportunity to work. A graduate of Olabisi Onabanjo
              University, Nigeria, she has displayed self-discipline and
              integrity in her conduct in her few years of practicing. She has
              worked in different capacities as a pharmacist and this can only
              be consequential to her pragmatic and proactive disposition to
              duties.
            </p>
            <p className="text-sm sm:text-lg text-justify mb-4 sm:mb-6">
              As a clinical pharmacist, ’Bukola has collaborated with other
              professionals in healthcare to optimize patient therapy and
              address medication-related concerns. She has also participated in
              conducting many drug utilization reviews to prevent and resolve
              medication-related problems. She has provided patient counseling
              on medication usage, potential side effects, and proper
              administration techniques. As a Store-Pharmacist, she has managed
              inventory, ordering and procurement, restocking of pharmaceuticals
              to ensure adequate quality control techniques, drugs and devices
              availability and reduce wastage.
            </p>
            <p className="text-sm sm:text-lg text-justify mb-4 sm:mb-6">
              In quest for knowledge and capacity building, ‘Bukola has not
              relented in equipping herself with up-to-date pharmaceutical and
              leadership skills required for today’s administrators. She is a
              holder of ‘Leadership and Management in Health’ and ‘Project
              Management in Global Health’ certificates; two certifications from
              the University of Washington. There is no stopping of ‘Bukola as
              she plans to be on the board of directors of policy and
              decision-making ministries and directorates in Nigeria in the
              nearest future.{" "}
            </p>
            <p className="text-sm sm:text-lg text-justify mb-4 sm:mb-6">
              An indigene of Ogun state, ‘Bukola hails from Yewa-North Local
              Government Area of the state. She is a devout Christian with
              vibrant faith and trust in the saving power of her Lord and
              Savior, Jesus Christ. ‘Bukola is a lover of great, inspirational
              and edifying music. In fact, she is a great singer herself. From
              childhood, she has led the children choir from the young age of
              seven. She was also privileged to be the Music Director of
              RCF-OOUTH as an undergraduate. She is happily married and blessed.
            </p>
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
      </div>
    </div>
  );
}
