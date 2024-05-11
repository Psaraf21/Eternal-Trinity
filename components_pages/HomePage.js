import React from "react";
// import { Link } from 'react-router-dom';
import "../css/HomePage.css";
import Header from "./Header";
import ramMandir from "../images/temples/Rammandir.jpeg"
import AmarnathTemple from "../images/temples/Amarnath.jpeg"
import BadrinathTemple from "../images/temples/BadrinathTemple1.jpg"
import JagannathPuri from "../images/temples/Jagannath_puri.jpg"
import SunTemple from "../images/temples/Sun-Temple-Konark-Odisha.jpg"
import BrihadeeswaraTemple from '../images/temples/Brihadeeswara-Temple.jpg';
import SomnathTemple from '../images/temples/Somnath-Temple.jpg';
import KedarnathTemple from '../images/temples/Kedarnath-Uttarakhand.jpg';
import SanchiStupa from '../images/temples/Sanchi-Stupa.jpg';
import RamanathaswamyTemple from '../images/temples/Sri-Ranganathaswamy-Temple-Karnataka.jpg';
import VaishnoDeviTemple from '../images/temples/Vaishno-Devi-Mandir.jpg';
import SiddhivinayakTemple from '../images/temples/Siddhivinayak-Temple.jpg';
import GangotriTemple from '../images/temples/Gangotri-Temple-1.jpg';
import GoldenTemple from '../images/temples/Golden-Temple.jpg';
import KashiVishwanathTemple from '../images/temples/Kashi-Vishwanath-Temple.jpg';
import ShriJagannathTemple from '../images/temples/Jagannath_puri.jpg';
import YamunotriTemple from '../images/temples/Yamunotri-Temple.jpg';
import MeenakshiTemple from '../images/temples/Meenakshi-Temple.jpg';
// import LingarajaTemple from '../images/temples/Lingaraja-Temple.jpg';
import TirupatiBalajiTemple from '../images/temples/Tirupati-Balaji.jpg';
import KanchipuramTemples from '../images/temples/Kanchipuram-Temples.jpg';
import KhajurahoTemple from '../images/temples/Khajuraho-Temple.jpg';
import VirupakshaTemple from '../images/temples/Virupaksha-Temple.jpg';
import AkshardhamTemple from '../images/temples/Akshardham-Temple.jpg';
import ShriDigambarJainLalMandir from '../images/temples/Shri-Digambar-Jain-Lal-Mandir.jpg';
import GomateshwaraTemple from '../images/temples/Gomateshwara-Temple.jpg';
import RanakpurTemple from '../images/temples/Ranakpur-Temple.jpg';
import ShirdiSaiBabaTemple from '../images/temples/Shirdi-Sai-Baba-Temple.jpg';
import ShriPadmanabhaswamyTemple from '../images/temples/Sree-Padmanabhaswamy-Temple.jpg';
import DwarkadhishTemple from '../images/temples/Dwarkadhish-Temple.jpg';
import LaxminarayanTemple from '../images/temples/Laxminarayan-Temple.jpg';
import IskconTemple from '../images/temples/Iskcon-Temple-Vrindavan-Mathura.jpg';
import MahabodhiTemple from '../images/temples/Mahabodhi-Temple.jpg';
import KamakhyaTemple from '../images/temples/Kamakhya-Temple-Assam.jpg';
import NeelkanthMahadevTemple from '../images/temples/Neelkanth-Mahadev-Temple-Uttarakhand.jpg';
import MukteswaraTemple from '../images/temples/Mukteswara-Temple-Odisha.jpg';
import SriRanganathaswamyTemple from '../images/temples/Sri-Ranganathaswamy-Temple-Karnataka.jpg';


// import HeroSection from "./Hero";
import ImageSlider from "./ImageSlider";
// import flowerImg from "../images/images/flower.jpg";
// import lighthouseImg from "../images/images/lighthouse.jpg";
// import dandelion from "../images/images/dandelion.jpg";
import { Link } from 'react-router-dom';

const HomePage = ({ isLoggedIn, onLogout }) => {
  const cardData = [
    {
      id: 1,
      imageUrl: ramMandir,
      title: "Ram Mandir",
      description: "The Ram Mandir, also known as the Ram Janmabhoomi Temple, is a Hindu temple dedicated to Lord Rama located in Ayodhya, Uttar Pradesh, India. It is believed to be the birthplace of Lord Rama."
    },
    {
      id: 2,
      imageUrl: AmarnathTemple,
      title: "Amarnath Temple",
      description: "The Amarnath Temple is a Hindu shrine located in Jammu and Kashmir, India. It is dedicated to Lord Shiva and is one of the holiest shrines for Hindus. The temple is situated in a cave at an altitude of 3,888 meters."
    },
    {
      id: 3,
      imageUrl: BadrinathTemple,
      title: "Badrinath Temple",
      description: "The Badrinath Temple is a Hindu temple dedicated to Lord Vishnu, located in the town of Badrinath in Uttarakhand, India. It is one of the Char Dham pilgrimage sites and is considered one of the holiest temples in Hinduism."
    },
    {
      id: 4,
      imageUrl: JagannathPuri,
      title: "Jagannath Puri",
      description: "The Jagannath Temple in Puri is a famous Hindu temple dedicated to Lord Jagannath, a form of Lord Vishnu, located in the coastal town of Puri in the state of Odisha, India. It is one of the Char Dham pilgrimage sites."
    },
    {
      id: 5,
      imageUrl: SunTemple,
      title: "Konark Sun Temple",
      description: "The Konark Sun Temple is a 13th-century Hindu temple dedicated to the sun god Surya, located in Konark, Odisha, India. It is designed in the form of a colossal chariot with twelve pairs of wheels drawn by seven horses."
    },
    {
      id: 6,
      imageUrl: BrihadeeswaraTemple,
      title: "Brihadeeswara Temple",
      description: "The Brihadeeswara Temple, also known as the Big Temple, is a Hindu temple dedicated to Lord Shiva located in Thanjavur, Tamil Nadu, India. It is one of the largest temples in India and is known for its architectural grandeur."
    },
    {
      id: 7,
      imageUrl: SomnathTemple,
      title: "Somnath Temple",
      description: "The Somnath Temple is an ancient Hindu temple dedicated to Lord Shiva, located in the Prabhas Kshetra near Veraval in Gujarat, India. It is one of the twelve Jyotirlinga shrines and is considered one of the holiest temples in Hinduism."
    },
    {
      id: 8,
      imageUrl: KedarnathTemple,
      title: "Kedarnath Temple",
      description: "The Kedarnath Temple is a Hindu temple dedicated to Lord Shiva, located in the Garhwal Himalayan range near the Mandakini river in Uttarakhand, India. It is one of the Char Dham pilgrimage sites and is considered one of the holiest temples in Hinduism."
    },
    {
      id: 9,
      imageUrl: SanchiStupa,
      title: "Great Stupa of Sanchi",
      description: "The Great Stupa of Sanchi is a Buddhist stupa located in Sanchi, Madhya Pradesh, India. It is one of the oldest stone structures in India and is an important pilgrimage site for Buddhists."
    },
    {
      id: 10,
      imageUrl: RamanathaswamyTemple,
      title: "Ramanathaswamy Temple",
      description: "The Ramanathaswamy Temple is a Hindu temple dedicated to Lord Shiva, located on Rameswaram Island in Tamil Nadu, India. It is one of the twelve Jyotirlinga shrines and is known for its architectural beauty and sacredness."
    },
    {
      id: 11,
      imageUrl: VaishnoDeviTemple,
      title: "Vaishno Devi Temple",
      description: "The Vaishno Devi Temple is a Hindu temple dedicated to the goddess Vaishno Devi, located in the Trikuta Mountains in Jammu and Kashmir, India. It is one of the most visited pilgrimage sites in India."
    },
    {
      id: 12,
      imageUrl: SiddhivinayakTemple,
      title: "Siddhivinayak Temple",
      description: "The Siddhivinayak Temple is a Hindu temple dedicated to Lord Ganesh, located in Mumbai, Maharashtra, India. It is one of the richest temples in Mumbai and is visited by thousands of devotees every day."
    },
    {
      id: 13,
      imageUrl: GangotriTemple,
      title: "Gangotri Temple",
      description: "The Gangotri Temple is a Hindu temple dedicated to Goddess Ganga, located in the town of Gangotri in Uttarakhand, India. It is one of the Char Dham pilgrimage sites and is situated on the banks of the Bhagirathi river."
    },
    {
      id: 14,
      imageUrl: GoldenTemple,
      title: "Golden Temple",
      description: "The Golden Temple, also known as Sri Harmandir Sahib, is a Sikh gurdwara located in Amritsar, Punjab, India. It is one of the holiest shrines in Sikhism and is known for its golden dome and stunning architecture."
    },
    {
      id: 15,
      imageUrl: KashiVishwanathTemple,
      title: "Kashi Vishwanath Temple",
      description: "The Kashi Vishwanath Temple is a Hindu temple dedicated to Lord Shiva, located in Varanasi, Uttar Pradesh, India. It is one of the holiest temples in Hinduism and is visited by millions of devotees every year."
    },
    {
      id: 16,
      imageUrl: ShriJagannathTemple,
      title: "Shri Jagannath Temple",
      description: "The Shri Jagannath Temple is a Hindu temple dedicated to Lord Jagannath, located in Puri, Odisha, India. It is one of the Char Dham pilgrimage sites and is famous for the annual Rath Yatra festival."
    },
    {
      id: 17,
      imageUrl: YamunotriTemple,
      title: "Yamunotri Temple",
      description: "The Yamunotri Temple is a Hindu temple dedicated to the goddess Yamuna, located in the Garhwal Himalayas in Uttarakhand, India. It is one of the Char Dham pilgrimage sites and is situated at an altitude of 3,293 meters."
    },
    {
      id: 18,
      imageUrl: MeenakshiTemple,
      title: "Meenakshi Temple",
      description: "The Meenakshi Temple is a historic Hindu temple dedicated to Goddess Parvati."
    },
    {
      id: 20,
      imageUrl: TirupatiBalajiTemple,
      title: "Tirupati Balaji Temple",
      description: "The Tirupati Balaji Temple, also known as the Sri Venkateswara Temple, is a Hindu temple dedicated to Lord Venkateswara, located in Tirumala, Andhra Pradesh, India. It is one of the richest and most visited temples in the world."
    },
    {
      id: 21,
      imageUrl: KanchipuramTemples,
      title: "Kanchipuram Temples",
      description: "Kanchipuram, also known as Kanchi, is a city in Tamil Nadu, India, known for its numerous temples. The city is one of the seven Moksha-puris according to Hinduism and is famous for its Vishnu and Shiva temples."
    },
    {
      id: 22,
      imageUrl: KhajurahoTemple,
      title: "Khajuraho Temple",
      description: "The Khajuraho Group of Monuments is a UNESCO World Heritage Site located in Madhya Pradesh, India. The temples are famous for their intricate and stunningly detailed erotic sculptures and are considered masterpieces of Indian art."
    },
    {
      id: 23,
      imageUrl: VirupakshaTemple,
      title: "Virupaksha Temple",
      description: "The Virupaksha Temple is a Hindu temple dedicated to Lord Shiva, located in Hampi, Karnataka, India. It is one of the oldest functioning temples in India and is considered a UNESCO World Heritage Site."
    },
    {
      id: 24,
      imageUrl: AkshardhamTemple,
      title: "Akshardham Temple",
      description: "The Akshardham Temple, also known as the Swaminarayan Akshardham Temple, is a Hindu temple complex located in Delhi, India. It is one of the largest and most magnificent temples in India, known for its stunning architecture and cultural exhibitions."
    },
    {
      id: 25,
      imageUrl: ShriDigambarJainLalMandir,
      title: "Shri Digambar Jain Lal Mandir",
      description: "The Shri Digambar Jain Lal Mandir is the oldest and best-known Jain temple in Delhi, India. It is dedicated to Lord Parshvanath, the 23rd Tirthankara of Jainism, and is known for its red sandstone architecture."
    },
    {
      id: 26,
      imageUrl: GomateshwaraTemple,
      title: "Gomateshwara Temple",
      description: "The Gomateshwara Temple, also known as the Bahubali Temple, is a Jain temple dedicated to Lord Bahubali, located in Shravanabelagola, Karnataka, India. It is famous for its colossal monolithic statue of Lord Bahubali."
    },
    {
      id: 27,
      imageUrl: RanakpurTemple,
      title: "Ranakpur Temple",
      description: "The Ranakpur Temple is a Jain temple dedicated to Lord Adinath, located in Ranakpur, Rajasthan, India. It is known for its intricate marble carvings and architectural beauty and is considered one of the most important Jain temples in India."
    },
    {
      id: 28,
      imageUrl: ShirdiSaiBabaTemple,
      title: "Shirdi Sai Baba Temple",
      description: "The Shirdi Sai Baba Temple is a Hindu temple dedicated to the revered saint Sai Baba, located in Shirdi, Maharashtra, India. It is one of the most visited pilgrimage sites in India and is known for its spiritual significance."
    },
    {
      id: 29,
      imageUrl: ShriPadmanabhaswamyTemple,
      title: "Shri Padmanabhaswamy Temple",
      description: "The Shri Padmanabhaswamy Temple is a Hindu temple dedicated to Lord Vishnu, located in Thiruvananthapuram, Kerala, India. It is known for its architectural beauty and is one of the wealthiest temples in India."
    },
    {
      id: 30,
      imageUrl: DwarkadhishTemple,
      title: "Dwarkadhish Temple",
      description: "The Dwarkadhish Temple, also known as the Jagat Mandir, is a Hindu temple dedicated to Lord Krishna, located in Dwarka, Gujarat, India. It is one of the Char Dham pilgrimage sites and is considered one of the holiest temples in Hinduism."
    },
    {
      id: 31,
      imageUrl: LaxminarayanTemple,
      title: "Laxminarayan Temple",
      description: "The Laxminarayan Temple, also known as the Birla Mandir, is a Hindu temple dedicated to Lord Vishnu and Goddess Lakshmi, located in Delhi, India. It is known for its exquisite architecture and beautiful sculptures."
    },
    {
      id: 32,
      imageUrl: IskconTemple,
      title: "Iskcon Temple",
      description: "The Iskcon Temple, also known as the Sri Sri Radha Krishna Temple, is a Hindu temple dedicated to Lord Krishna and Radha, located in Bengaluru, Karnataka, India. It is a prominent temple of the International Society for Krishna Consciousness (ISKCON)."
    },
    {
      id: 33,
      imageUrl: MahabodhiTemple,
      title: "Mahabodhi Temple",
      description: "The Mahabodhi Temple is a Buddhist temple located in Bodh Gaya, Bihar, India. It is one of the most sacred sites in Buddhism, as it is believed to be the place where Gautama Buddha attained enlightenment."
    },
    {
      id: 34,
      imageUrl: KamakhyaTemple,
      title: "Kamakhya Temple",
      description: "The Kamakhya Temple is a Hindu temple dedicated to the goddess Kamakhya, located in Guwahati, Assam, India. It is one of the oldest and most revered Shakti Peethas and is known for its unique architecture and annual Ambubachi Mela."
    },
    {
      id: 35,
      imageUrl: NeelkanthMahadevTemple,
      title: "Neelkanth Mahadev Temple",
      description: "The Neelkanth Mahadev Temple is a Hindu temple dedicated to Lord Shiva, located near Rishikesh, Uttarakhand, India. It is situated amidst the picturesque mountains of the Garhwal Himalayas."
    },
    {
      id: 36,
      imageUrl: MukteswaraTemple,
      title: "Mukteswara Temple",
      description: "The Mukteswara Temple is a Hindu temple dedicated to Lord Shiva, located in Bhubaneswar, Odisha, India. It is known for its exquisite architecture and intricate carvings and is considered one of the gems of Odisha's temple architecture."
    },
    {
      id: 37,
      imageUrl: SriRanganathaswamyTemple,
      title: "Sri Ranganathaswamy Temple",
      description: "The Sri Ranganathaswamy Temple is a Hindu temple dedicated to Lord Ranganatha, a form of Lord Vishnu, located in Srirangam, Tamil Nadu, India. It is one of the largest temples in India and is renowned for its Dravidian style architecture."
    }    
  ];

  const images = [
    ramMandir,
    AmarnathTemple,
    BadrinathTemple,
    JagannathPuri,
    SunTemple,
    BrihadeeswaraTemple,
    SomnathTemple,
    KedarnathTemple,
    SanchiStupa,
    RamanathaswamyTemple,
    VaishnoDeviTemple,
    SiddhivinayakTemple,
    GangotriTemple,
    GoldenTemple,
    KashiVishwanathTemple,
    ShriJagannathTemple,
    YamunotriTemple,
    MeenakshiTemple,
    TirupatiBalajiTemple,
    KanchipuramTemples,
    KhajurahoTemple,
    VirupakshaTemple,
    AkshardhamTemple,
    ShriDigambarJainLalMandir,
    GomateshwaraTemple,
    RanakpurTemple,
    ShirdiSaiBabaTemple,
    ShriPadmanabhaswamyTemple,
    DwarkadhishTemple,
    LaxminarayanTemple,
    IskconTemple,
    MahabodhiTemple,
    KamakhyaTemple,
    NeelkanthMahadevTemple,
    MukteswaraTemple,
    SriRanganathaswamyTemple
  ];
  return (
    <div>
      <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
      {/* <HeroSection/> */}
  
      <div style={{padding: "10px"}}>
        <ImageSlider images={images} />
      </div>
      <div className="sectionn">
        <h2>Temples</h2>
      </div>
      <section className="card-slider">
        {cardData.map((card) => (
          <div key={card.id} className="card">
            <img src={card.imageUrl} alt="" />
            <div className="card-info">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </section>

      <footer className="footer">
      <div className="container2">
        <p className="copyright">© {new Date().getFullYear()} Temple Name. All Rights Reserved.</p>
        <nav>
          {/* <a href="#" className="PrivacyPolicy">Privacy Policy</a>
          <a href="#" className="PrivacyPolicy">Terms & Conditions</a> */}
          <Link to="/privacy-policy" className="PrivacyPolicy">Privacy Policy</Link>
        <Link to="/terms-and-conditions" className="PrivacyPolicy">Terms & Conditions</Link>
        </nav>
      </div>
    </footer>
      
    </div>
  );
};

export default HomePage;
