// About.jsx
import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";
import Testimonials from "../components/Testimonials";
import { motion } from "framer-motion";
import VideoSlider from "./VideoSlider";
import Navbarold from "../components/Navbarold"; // Importing the old Navbar component

// Animation variant
const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

// const videoUrls = [
//   "https://www.youtube.com/embed/ypnfRxdTEIA?si=YbQl3_ybq0dMNRmI",
//   "https://www.youtube.com/embed/QrGLnLzDBr0?si=KMyHTI8iy0yMdmcQ",
//   "https://www.youtube.com/embed/yVu3elwRTrk?si=8NI4ieWMtlu8YVTY",
//   "https://www.youtube.com/embed/ypnfRxdTEIA?si=JQbvkSJPHJj1zpp_",
// ];

const features = [
  { icon: "🌿", title: "100% Organic", desc: "Pure, natural vermicompost made without any additives or chemicals." },
  { icon: "♻️", title: "Eco-Friendly", desc: "Safe for the environment and supports long-term soil health." },
  { icon: "💰", title: "Affordable", desc: "Premium quality compost at prices that suit every farmer and gardener." },
];

const reasons = [
  { title: "Quality Assurance", content: "From preparation to packaging, we maintain the highest standards to ensure every batch of vermicompost meets our promise of purity." },
  { title: "User-Friendly", content: "Whether you're a beginner or a pro gardener, our compost is easy to use and delivers visible results without hassle." },
  { title: "Dedicated Support", content: "We love helping our customers! From composting tips to plant advice, our team is here to guide you every step of the way." },
];

const teamMembers = [
  {
    name: "Partyaksh Sharma",
    photo: assets.PNMS,
    title: "Co-Founder & Managing Director",
    phone: "+91-9034344100",
    email: "gsdorganic@gmail.com"
  },
  {
    name: "Krishan Kant",
    photo: assets.kk,
    title: "Co-Founder & Chief Executive Officer",
    phone: "+91-9034344200",
    email: "gsdorganic@gmail.com"
  },
  {
    name: "Brij Bhushan",
    photo: assets.bhusan,
    title: "Head of Marketing",
    phone: "+91-9034354300",
    email: "gsdorganic@gmail.com"
  },
  {
    name: "Yudhister Sharma",
    photo: assets.yud,
    title: "Operations Manager",
    phone: "+91-9050174500",
    email: "gsdorganic@gmail.com"
  },
  {
    name: "Vishal Sharma",
    photo: assets.vishal,
    title: "Social Media Manager",
    phone: "+91-9050174100",
    email: "gsdorganic@gmail.com"
  },
];

const About = () => {
  return (
    <>
    <Navbarold />
    <div className="bg-white text-gray-700">
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">

      {/* Hero Image */}
      {/* <motion.div
        className="w-full overflow-hidden"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <img
          src={assets.about}
          alt="About GSD Organics"
          className="w-full h-auto md:h-[70vh] object-cover object-center rounded-b-3xl shadow-lg"
        />
      </motion.div> */}

      {/* Introduction */}
      <motion.section
        className="max-w-6xl mx-auto py-12 px-6 text-center"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-8">
          🌱 GSD Organics – Your Green Partner in Growth
        </h2>
        <p className="text-lg leading-relaxed mb-6 text-left max-w-4xl mx-auto text-gray-800">
          <strong>Established in the summer of 2020</strong>, GSD Organics has quickly become a
          <span className="text-green-600 font-semibold"> trusted leader</span> in premium organic vermicompost production.
          Our mission is simple yet powerful:
          <br />
          <span className="italic">To nurture your plants naturally.</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-green-50 rounded-2xl p-6 shadow-md hover:shadow-xl border border-green-200 transition duration-300"
            >
              <h4 className="font-bold text-green-800 text-lg mb-2">{item.icon} {item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* About Us Title */}
      <div className="text-2xl text-center pt-8 border-t border-gray-200">
        <Title text1="ABOUT" text2="US" />
      </div>

      {/* About Section */}
      <motion.section
        className="max-w-6xl mx-auto my-12 px-6 flex flex-col md:flex-row items-center gap-10"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <img
          className="w-full md:max-w-[450px] rounded-2xl shadow-xl object-cover"
          src={assets.gsd111}
          alt="About Section"
        />
        <div className="flex flex-col gap-6 text-gray-700 md:w-2/3 text-lg">
          <p>
            We are passionate about sustainable living and natural growth. Our vision is rooted in tradition and driven by innovation.
          </p>
          <p>
            Our vermicompost undergoes rigorous quality checks and is made using eco-conscious practices. From urban homes to rural fields, our customers trust us.
          </p>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">🌍 Our Mission</h3>
            <p>
              To promote chemical-free agriculture by providing affordable, effective, and premium-quality organic fertilizers.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <div className="text-xl py-8 border-t border-gray-200 text-center">
        <Title text1="WHY" text2="CHOOSE US" />
      </div>

      <motion.section
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 mb-20"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {reasons.map((card, idx) => (
          <div
            key={idx}
            className="border border-green-300 bg-green-50 px-8 py-10 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h4 className="text-lg font-bold mb-3 text-green-800">{card.title}</h4>
            <p>{card.content}</p>
          </div>
        ))}
      </motion.section>

      {/* Our Team */}
      <motion.section
        className="max-w-6xl mx-auto px-6 py-16 text-center"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-8">
          👨‍🌾 Meet Our Team
        </h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto text-lg">
          Our passionate team is dedicated to helping you grow naturally and sustainably.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="rounded overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
            >
          <div className="relative w-full bg-gray-200">
  <img
    src={member.photo}
    alt={member.name}
    className="w-full h-48 sm:h-48 object-cover transition-all duration-500 hover:bg-orange-200 img-adjust"
  />
</div>

              <div className="bg-white text-left p-4 flex flex-col justify-between h-full">
                <h3 className="text-md font-semibold text-green-800">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{member.title}</p>
                <div className="mt-auto">
                  <p className="text-sm text-gray-700 mb-1">
                    📞 <a href={`tel:${member.phone}`} className="text-blue-600 underline">{member.phone}</a>
                  </p>
                  <p className="text-sm text-gray-700">
                    📧 <a href={`mailto:${member.email}`} className="text-green-600 underline">{member.email}</a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <Testimonials />

      {/* 🎥 Videos Slider */}
    <VideoSlider />

      {/* Newsletter */}
      <NewsletterBox />
      </div>
    </div>
    </>
  );
};

export default About;
