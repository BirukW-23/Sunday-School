import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import heroImage from "../assets/backim1.jpg";
import { motion } from "framer-motion";
import {
  FaTelegramPlane,
  FaYoutube,
  FaTiktok,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import Image1 from "../assets/logo2.png";
import Image2 from "../assets/logo2.png";

export const InteractiveHeader = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-0">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: `translate(${mousePosition.x * 0.02}px, ${
            mousePosition.y * 0.02
          }px) scale(1.1)`,
        }}
      />
      <div className="absolute inset-0 opacity-90" />
      <div className="absolute inset-0">
        <div
          className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-gold/10 rounded-full blur-3xl"
          style={{
            left: `${20 + mousePosition.x * 0.1}%`,
            top: `${10 + mousePosition.y * 0.1}%`,
            animationDelay: "0s",
          }}
        />
        <div
          className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-primary/20 rounded-full blur-3xl"
          style={{
            right: `${10 + mousePosition.x * 0.05}%`,
            bottom: `${20 + mousePosition.y * 0.05}%`,
            animationDelay: "2s",
          }}
        />
      </div>
      <div className="absolute top-6 left-6 sm:left-8 z-20">
        <motion.img
          src={Image1}
          alt="logo"
          className="w-16 h-16 sm:w-20 sm:h-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />
      </div>
      <div className="absolute top-6 right-6 sm:right-8 z-20">
        <motion.img
          src={Image2}
          alt="logo"
          className="w-16 h-16 sm:w-20 sm:h-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        />
      </div>
      <div className="relative z-10 text-center max-w-3xl sm:max-w-4xl mx-auto px-4 sm:px-6">
        <Badge
          className="mb-8 bg-gold/20 text-gold border-gold/30 backdrop-blur-sm slide-up text-sm sm:text-base"
          style={{ animationDelay: "0.2s" }}
        >
          <Sparkles className="w-4 h-4 mr-2" />
          ማህበራዊ ሚድያ ዝርዝር ገጽ
        </Badge>

        <motion.h1
          className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          ሐይመተ አብርሃም ሰንበት ትምህርት ቤት 
        </motion.h1>

        <motion.p
          className="text-base sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          👋 ይህ ገጽ በአዲስ አበባ ሀገረ ስብከት የጀሞ3 ደብረ ኃይል ቅዱስ ገብርኤል እና አቡነ ገብረ መንፈስ ቅዱስ
          ቤተክርስቲያን ሐይመተ አብርሃም ሰንበት ትምህርት ቤት የማህበራዊ ድረ-ገጾች ዝርዝር የሚያገኙበት ነው። ስለ ሰንበት ትምህርት ቤቱ ፈጣን መረጃ እንዲያገኙ ከታች ያሉትን ማህበራዊ ሚዲያዎች ፎሎው ያድርጉ።👍
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <span className="border-gold/30 text-gold backdrop-blur-sm px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-xl group">
            ማህበራዊ ሚድያዎቻችንን ይከተሉ
          </span>
        </motion.div>
        <motion.div 
          className="mt-16 flex flex-wrap justify-center gap-6 sm:gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {[
            {
              name: "ቲክቶክ",
              icon: <FaTiktok className="w-5 h-5 sm:w-6 sm:h-6" />,
              color: "text-black",
              hoverColor: "hover:text-tiktok-pink",
              url: "https://www.tiktok.com/@haymeteabrhame?_t=ZM-8yexHlAR6YA&_r=1",
              bgHover: "hover:bg-tiktok-pink/10",
            },
            {
              name: "ቴሌግራም",
              icon: <FaTelegramPlane className="w-5 h-5 sm:w-6 sm:h-6" />,
              color: "text-blue-500",
              hoverColor: "hover:text-telegram-blue",
              url: "https://t.me/haymeteabrham",
              bgHover: "hover:bg-telegram-blue/10",
            },
            {
              name: "ዮቲዩብ",
              icon: <FaYoutube className="w-5 h-5 sm:w-6 sm:h-6" />,
              color: "text-red-600",
              hoverColor: "hover:text-youtube-red",
              url: "https://www.youtube.com/@haymeteabrhame",
              bgHover: "hover:bg-youtube-red/10",
            },
            {
              name: "ፌስብክ",
              icon: <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6" />,
              color: "text-blue-600",
              hoverColor: "hover:text-facebook-blue",
              url: "https://www.facebook.com/share/1CgknpAkHn/",
              bgHover: "hover:bg-facebook-blue/10",
            },
            {
              name: "ኢንስታግራም",
              icon: <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />,
              color: "text-red-500",
              hoverColor: "hover:text-facebook-blue",
              url: "https://www.instagram.com/haymeteabrhame?igsh=MzJkM3oxcnBoaHg2&utm_source=ig_contact_invite",
              bgHover: "hover:bg-facebook-blue/10",
            },
          ].map((media, index) => (
            <motion.a
              key={media.name}
              href={media.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                delay: 1 + index * 0.15,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
              aria-label={`Follow us on ${media.name}`}
            >
              <div
                className={`p-4 sm:p-5 bg-white backdrop-blur-lg w-fit rounded-full transition-all duration-300 border border-white ${media.bgHover} shadow-md hover:shadow-lg`}
              >
                <span
                  className={`${media.color} ${media.hoverColor} transition-all duration-300 transform group-hover:scale-110`}
                >
                  {media.icon}
                </span>
              </div>
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div
                  className={`absolute inset-0 rounded-full ${media.color.replace(
                    "text",
                    "bg"
                  )} blur-md opacity-20`}
                ></div>
              </div>
              <motion.span 
                className="absolute -bottom-8 transform -translate-x-1/2 text-white font-semibold items-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ y: 10 }}
                whileHover={{ y: 0 }}
              >
                {media.name}
              </motion.span>
            </motion.a>
          ))}
        </motion.div>
        <motion.div 
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};