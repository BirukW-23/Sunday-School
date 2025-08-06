import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import heroImage from "../assets/hero-bg.jpg";
import { motion } from "framer-motion";
import {
  FaTelegramPlane,
  FaYoutube,
  FaTiktok,
  FaFacebook,
} from "react-icons/fa";
import Image1 from "../assets/logo.png";

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
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute top-6 left-1/2 sm:left-2 transform -translate-x-1/2 sm:translate-x-0">
        <img
          src={Image1}
          alt="logo"
          className="w-20 h-20 sm:w-[100px] sm:h-[100px]"
        />
      </div>

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

      <div className="relative z-10 text-center max-w-3xl sm:max-w-4xl mx-auto px-4 sm:px-6">
        <Badge
          className="mb-8 bg-gold/20 text-gold border-gold/30 backdrop-blur-sm slide-up text-sm sm:text-base"
          style={{ animationDelay: "0.2s" }}
        >
          <Sparkles className="w-4 h-4 mr-2" />
          ማህበራዊ ሚድያ ዝርዝር ገጽ
        </Badge>

        <h1
          className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          የአዲስ አበባ ሀገረ ስብከት ሰንበት ትምህርት ቤቶች አንድነት
          <br />
          <span className="relative">
            <div className="absolute -inset-1 bg-gradient-primary blur opacity-30 group-hover:opacity-50 transition-opacity" />
          </span>
        </h1>

        <p
          className="text-base sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          እንኳን ለአዲስ አበባ ሀገረ ስብከት ሰንበት ትምህርት ቤቶች አንድነት 11ኛ ዓመት 2ተኛ ዙር ጠቅላላ ጉባኤ
          በሰላም አደረሳችሁ
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center slide-up"
          style={{ animationDelay: "0.8s" }}
        >
          <span className="border-gold/30 text-gold backdrop-blur-sm px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-xl group">
            ማህበራዊ ሚድያዎቻችንን ይከተሉ
          </span>
        </div>

        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse" />
          </div>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-6 sm:gap-10">
          {[
            {
              name: "ቲክቶክ",
              icon: <FaTiktok className="w-5 h-5 sm:w-6 sm:h-6" />,
              color: "text-black",
              hoverColor: "hover:text-tiktok-pink",
              url: "https://www.tiktok.com/@addisababasundays",
              bgHover: "hover:bg-tiktok-pink/10",
            },
            {
              name: "ቴሌግራም",
              icon: <FaTelegramPlane className="w-5 h-5 sm:w-6 sm:h-6" />,
              color: "text-blue-500",
              hoverColor: "hover:text-telegram-blue",
              url: "https://t.me/AAsundayschool",
              bgHover: "hover:bg-telegram-blue/10",
            },
            {
              name: "ዮቲዩብ",
              icon: <FaYoutube className="w-5 h-5 sm:w-6 sm:h-6" />,
              color: "text-red-600",
              hoverColor: "hover:text-youtube-red",
              url: "https://youtube.com/@addisababasundayschoolunity?si=MthzZ5S6nPXxL0Qa",
              bgHover: "hover:bg-youtube-red/10",
            },
            {
              name: "ፌስብክ",
              icon: <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6" />,
              color: "text-blue-600",
              hoverColor: "hover:text-facebook-blue",
              url: "https://web.facebook.com/sundayschooladdisababa/?_rdc=1&_rdr#",
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
                delay: 0.5 + index * 0.15,
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
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
