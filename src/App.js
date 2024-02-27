import logo from './logo.svg';
import './App.css';
import './Responsive.css';
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

function App() {
  const content = "CHEMICALS & PROCESS | POWER | WATER & WASTE WATER | OILS & GAS PHARMA SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL & MINING | FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL";

  const coloredContent = Array.from(content).map((char) => {
    // Check if the character is '|', if yes, apply red color
    if (char === '|') {
      return <span style={{ color: 'red' }}>{char}</span>;
    } 
    else {
      return <span>{char}</span>;
    }
  });

  return (
    <div className="App">
      <header>
        <div className="header-logo">
          <img src="../asserts/logo.png" alt="CRI" />
        </div>
      </header>

      <main>
        <div className="award">
          <div className="award-img">
            <img src="../asserts/1.png" alt="GoI-award"/>
          </div>
          <div className="award-content">
            <h3>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
            <ul>
              <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
              <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
            </ul>
            <img src="../asserts/2.png" alt="award-cermony"/>
            <p>Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
          </div>
        </div>
        <div className="about">
          <p className='para1'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
          <div className="about-img">
            <img src="../asserts/3.png" alt="pumpsets" />
          </div>
          <p className='para2'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
        </div>
        <div class="red-container">
          <div className="red-line"></div>
        </div>
        <div className="about-statement">
          <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
          <p>{coloredContent}</p>
        </div>
      </main>

      <footer>
        <div className="footer-container">
          <div className="call">
            <FaPhoneSquareAlt />
            <a href="tel:+911800200234">Toll free 1800 200 1234</a>
          </div>
          <div className="facebook">
            <FaFacebook />
            <a href="https://www.facebook.com/cripumps" target='blank'>www.facebook.com/cripumps</a>
          </div>
          <div className="website">
            <FaGlobe />
            <a href="https://www.crigroups.com" target='blank'>www.crigroups.com</a>
          </div>          
        </div>
      </footer>
    </div>
  );  
}

export default App;
