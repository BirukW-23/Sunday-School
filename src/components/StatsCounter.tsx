import { useEffect, useState } from 'react';
import { Users, Eye, Heart, TrendingUp } from 'lucide-react';

interface Stat {
  icon: React.ComponentType<any>;
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
}

export const StatsCounter = () => {
  const [animated, setAnimated] = useState(false);

  const stats: Stat[] = [
    { icon: Users, label: "Total Followers", value: 2500000, suffix: "M", prefix: "+" },
    { icon: Eye, label: "Monthly Reach", value: 15000000, suffix: "M" },
    { icon: Heart, label: "Engagement Rate", value: 8.5, suffix: "%" },
    { icon: TrendingUp, label: "Growth Rate", value: 25, suffix: "%", prefix: "+" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const AnimatedNumber = ({ value, suffix, prefix }: { value: number; suffix: string; prefix?: string }) => {
    const [current, setCurrent] = useState(0);
    
    useEffect(() => {
      if (!animated) return;
      
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      const stepTime = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        setCurrent(Math.min(value, increment * step));
        
        if (step >= steps) {
          setCurrent(value);
          clearInterval(timer);
        }
      }, stepTime);
      
      return () => clearInterval(timer);
    }, [animated, value]);

    const formatNumber = (num: number) => {
      if (suffix === 'M') {
        return (num / 1000000).toFixed(1);
      }
      return num.toFixed(suffix === '%' ? 1 : 0);
    };

    return (
      <span className="text-4xl font-bold text-gold">
        {prefix}{formatNumber(current)}{suffix}
      </span>
    );
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="text-center group cursor-pointer"
          style={{ animationDelay: `${index * 200}ms` }}
        >
          <div className="bg-card rounded-2xl p-6 shadow-elevated hover:shadow-glow transition-all duration-500 hover:-translate-y-2 border border-gold/20">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:pulse-glow transition-all duration-300">
                <stat.icon className="w-8 h-8 text-navy" />
              </div>
            </div>
            <AnimatedNumber 
              value={stat.value} 
              suffix={stat.suffix} 
              prefix={stat.prefix}
            />
            <p className="text-muted-foreground mt-2 font-medium">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};