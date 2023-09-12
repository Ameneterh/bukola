import styles from "./LandingPage.module.css";
import Interests from "../CommonResources/Interests";
import pharmacist from "../CommonResources/images/pharma.jpeg";
import tailor from "../CommonResources/images/tailor.jpeg";
import datanalyst from "../CommonResources/images/datanalyis.jpeg";

export default function LandingPage(props) {
  return (
    <div className={styles.landingBody}>
      <div className={styles.aboutBukola}>
        <h2>Hello, Welcome to my page</h2>
        <h1>I am ADEWUSI, Adedoyin Bukola</h1>
        <p>Which of me would you like to meet?</p>
        <h3>Meet Bukola A. Adewusi,</h3>
        <div className={styles.myinterests}>
          <Interests image={pharmacist} interestTitle="The Pharmacist" />
          <Interests image={datanalyst} interestTitle="The Data Analyst" />
          <Interests image={tailor} interestTitle="The Tailor" />
        </div>
      </div>
      <div className={styles.halfCycle}>
        <div className={styles.faceCard}></div>
      </div>
    </div>
  );
}
