import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Leaf, ShieldCheck, Users, Lightbulb, CheckCircle, Mail, Linkedin } from 'lucide-react';
import Marquee from 'react-fast-marquee';

import PurvaImg from '../Images/Purva.jpg';
import SohamImg from '../Images/Soham.jpg';
import KhushalImg from '../Images/Khushal.jpg';
import ShreyaImg from '../Images/Shreya.jpg';
import YashikaImg from '../Images/Yashika.jpg';

const teamMembers = [
  {
    name: "Purva Khandelwal",
    role: "Backend Developer",
    image: PurvaImg,
    desc: "Purva expertly structures the server-side logic, ensuring smooth database interactions and API integrations.",
    linkedin: "https://www.linkedin.com/in/purva-khandelwal-6a21872b4/",
    email: "mailto:khandelwalps_2@rknec.edu"
  },
  {
    name: "Yashika Rathi",
    role: "Data Analyst",
    image: YashikaImg,
    desc: "Yashika transforms complex agricultural data into actionable insights, guiding our features and improvements.",
    linkedin: "https://linkedin.com/in/yashika-rathi-1594112b8/",
    email: "mailto:rathiyp_2@rknec.edu"
  },
  {
    name: "Shreya Rathi",
    role: "Frontend Developer",
    image: ShreyaImg,
    desc: "Shreya brings our UI to life with clean, intuitive layouts and responsive design elements for all devices.",
    linkedin: "https://www.linkedin.com/in/shreya-rathi-89554a330/",
    email: "mailto:rathisg_2@rknec.edu"
  },
  {
    name: "Khushal Taori",
    role: "UI/UX Designer",
    image: KhushalImg,
    desc: "Khushal focuses on crafting engaging, user-friendly interfaces that make navigation seamless and enjoyable.",
    linkedin: "https://www.linkedin.com/in/khushal-rajesh-taori-267105331/",
    email: "mailto:khushal@example.com"
  },
  {
    name: "Soham Darak",
    role: "Full Stack Developer",
    image: SohamImg,
    desc: "Soham ensures seamless coordination between frontend and backend, creating robust and scalable systems.",
    linkedin: "https://www.linkedin.com/in/soham-darak/",
    email: "mailto:darakss@rknec.edu"
  }
];

const testimonials = [
  { name: "Ramesh Pawar", feedback: "AgriMed helped me find the best fertilizer for my crop. Saved time and money!", role: "Farmer, Maharashtra" },
  { name: "Lata Shinde", feedback: "Easy to use and super helpful. I trust AgriMed for my farming needs.", role: "Farmer, Madhya Pradesh" },
  { name: "Govind Verma", feedback: "The best part is how clearly everything is explained. Love it!", role: "Farmer, Uttar Pradesh" },
  { name: "Sarita Yadav", feedback: "AgriMed’s support for my local language helped a lot.", role: "Farmer, Rajasthan" },
  { name: "Dinesh Bhati", feedback: "Thanks to AgriMed, I could compare different treatments quickly and choose the most affordable one.", role: "Farmer, Haryana" },
  { name: "Kavita Deshmukh", feedback: "I showed this site to my farmer group — everyone found it very useful and easy to understand.", role: "Farmer, Maharashtra" },
  { name: "Vinod Patil", feedback: "Finally, a tool that helps small farmers like me make informed decisions.", role: "Farmer, Gujarat" },
  { name: "Anita Rawat", feedback: "Clear, simple, and so effective. AgriMed has changed how I plan my crop care.", role: "Farmer, Uttarakhand" },
  { name: "Bharat Meena", feedback: "Highly recommend it to all my fellow farmers. Accurate and quick information!", role: "Farmer, Chhattisgarh" }
];

const features = [
  { icon: Leaf, title: "Crop Disease Detection", desc: "Identify diseases quickly with accurate visuals and detailed descriptions." },
  { icon: BadgeCheck, title: "Fertilizer Comparison", desc: "Compare fertilizers by price, efficiency, and effectiveness." },
  { icon: ShieldCheck, title: "Reliable Information", desc: "Sourced from agricultural experts and validated databases." },
  { icon: Users, title: "Farmer-Centric Design", desc: "Built with input from real farmers to ensure usability." }
];

const stats = [
  { label: "Farmers Helped", value: "10,000+" },
  { label: "Diseases Covered", value: "120+" },
  { label: "Fertilizers Compared", value: "200+" }
];

const AboutUs = () => {
  return (
    <div className="relative z-10 overflow-hidden">
      {/* Darker Background Gradient and SVG */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-200 via-white to-green-100 bg-fixed"></div>
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <svg width="100%" height="100%">
          <circle cx="20%" cy="20%" r="100" fill="#6ee7b7" opacity="0.3" />
          <circle cx="80%" cy="80%" r="150" fill="#34d399" opacity="0.25" />
          <circle cx="30%" cy="75%" r="80" fill="#10b981" opacity="0.2" />
        </svg>
      </div>

      <div className="p-4 sm:p-8 max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-green-700 mb-4">About AgriMed</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AgriMed is an innovative platform helping farmers compare and choose the best fertilizers and medicines
            for their crops based on disease types, efficiency, and pricing. Designed with multilingual support, it
            ensures accessibility and accuracy for users across India.
          </p>
        </motion.div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 transition-all duration-300"
            >
              <feature.icon className="text-green-600 w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-green-800">{feature.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-16"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/60 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-xl border border-green-200 transition-all duration-300"
            >
              <p className="text-3xl font-extrabold text-green-800 mb-1">{stat.value}</p>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.section>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-bold text-center text-green-700 mb-8"
        >
          Meet the Developers
        </motion.h2>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-16">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-green-300">
                <img
                  src={member.image}
                  alt={`Photo of ${member.name}`}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <h4 className="text-xl font-semibold text-green-700">{member.name}</h4>
              <p className="text-sm text-gray-500 mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm mb-2 leading-relaxed">{member.desc}</p>
              <div className="flex justify-center gap-4 mt-2">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700">
                  <Linkedin />
                </a>
                <a href={member.email} target="_blank" rel="noopener noreferrer" className="text-red-600">
                  <Mail />
                </a>
              </div>
            </motion.div>
          ))}
        </section>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-bold text-center text-green-700 mb-8"
        >
          What Farmers Say
        </motion.h2>
        <section>
          <Marquee gradient={false} speed={60} className="mb-16">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white/70 backdrop-blur-md p-6 mx-4 rounded-xl border border-green-100 shadow-md hover:shadow-xl w-[300px] transition-transform transform hover:scale-105"
              >
                <p className="text-gray-700 italic mb-4 text-sm">"{t.feedback}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-800 font-semibold text-base">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                  <CheckCircle className="text-green-600 w-6 h-6" />
                </div>
              </div>
            ))}
          </Marquee>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
