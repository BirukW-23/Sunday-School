import { useEffect, useState } from 'react';
import { 
  Instagram, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Youtube,
  Hash,
  AtSign,
  Heart,
  MessageCircle,
  Share2
} from "lucide-react";

interface FloatingIcon {
  id: number;
  Icon: React.ComponentType<any>;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

export const FloatingElements = () => {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);

  const iconComponents = [
    Instagram, Twitter, Linkedin, Facebook, Youtube, 
    Hash, AtSign, Heart, MessageCircle, Share2
  ];

  useEffect(() => {
    const generatedIcons: FloatingIcon[] = iconComponents.map((Icon, index) => ({
      id: index,
      Icon,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 6 + Math.random() * 4
    }));
    
    setIcons(generatedIcons);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute opacity-10 text-gold"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            animationDelay: `${icon.delay}s`,
            animationDuration: `${icon.duration}s`,
          }}
        >
          <div className="float-animation">
            <icon.Icon className="w-8 h-8" />
          </div>
        </div>
      ))}
      <div className="absolute top-20 left-10 w-20 h-20 border border-gold/20 rounded-full float-animation opacity-30" 
           style={{ animationDelay: '1s' }} />
      <div className="absolute top-60 right-20 w-16 h-16 bg-gradient-primary rounded-lg rotate-45 float-animation opacity-20" 
           style={{ animationDelay: '2.5s' }} />
      <div className="absolute bottom-40 left-1/4 w-12 h-12 border-2 border-gold/30 rotate-45 float-animation opacity-25" 
           style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-20 right-1/3 w-24 h-24 border border-gold/15 rounded-full float-animation opacity-20" 
           style={{ animationDelay: '3s' }} />
    </div>
  );
};