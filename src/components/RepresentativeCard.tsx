import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Instagram, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Youtube, 
  ExternalLink,
  Heart,
  MessageCircle,
  Share2 
} from "lucide-react";

interface Representative {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  platforms: {
    platform: string;
    handle: string;
    followers: string;
    icon: React.ComponentType<any>;
  }[];
  stats: {
    totalReach: string;
    engagement: string;
    campaigns: number;
  };
  specialties: string[];
}

interface RepresentativeCardProps {
  representative: Representative;
  index: number;
}

export const RepresentativeCard = ({ representative, index }: RepresentativeCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="perspective-1000 h-96">
      <Card 
        className={`relative w-full h-full transition-all duration-700 transform-3d cursor-pointer hover-lift ${
          isFlipped ? 'rotate-y-180' : ''
        } bg-card border border-gold/20 shadow-elevated animate-fade-in`}
        style={{ animationDelay: `${index * 200}ms` }}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        {/* Front Side */}
        <div className={`absolute inset-0 w-full h-full p-6 bg-gradient-secondary rounded-lg ${isFlipped ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
          <div className="flex flex-col items-center text-center h-full">
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full bg-gradient-primary p-1 pulse-glow">
                <img 
                  src={representative.avatar} 
                  alt={representative.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gold text-navy font-medium">
                {representative.role}
              </Badge>
            </div>
            
            <h3 className="text-xl font-bold text-foreground mb-2">{representative.name}</h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{representative.bio}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {representative.specialties.map((specialty, idx) => (
                <Badge key={idx} variant="outline" className="border-gold/30 text-gold-light text-xs">
                  {specialty}
                </Badge>
              ))}
            </div>
            
            <div className="flex gap-3 mt-auto">
              {representative.platforms.slice(0, 3).map((platform, idx) => {
                const Icon = platform.icon;
                return (
                  <Button
                    key={idx}
                    size="sm"
                    variant="outline"
                    className="border-gold/30 hover:bg-gold hover:text-navy transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </Button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className={`absolute inset-0 w-full h-full p-6 bg-gradient-primary rounded-lg transform rotate-y-180 ${isFlipped ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
          <div className="flex flex-col h-full text-navy">
            <h4 className="text-lg font-bold mb-4 text-center">Performance Stats</h4>
            
            <div className="grid grid-cols-1 gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold">{representative.stats.totalReach}</div>
                <div className="text-sm opacity-80">Total Reach</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{representative.stats.engagement}</div>
                <div className="text-sm opacity-80">Avg. Engagement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{representative.stats.campaigns}</div>
                <div className="text-sm opacity-80">Campaigns</div>
              </div>
            </div>
            
            <div className="space-y-2 mb-4">
              {representative.platforms.map((platform, idx) => (
                <div key={idx} className="flex items-center justify-between bg-navy/20 rounded-lg p-2">
                  <div className="flex items-center gap-2">
                    <platform.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{platform.platform}</span>
                  </div>
                  <div className="text-sm">{platform.followers}</div>
                </div>
              ))}
            </div>
            
            <div className="flex gap-2 mt-auto">
              <Button
                size="sm"
                variant="outline"
                className="flex-1 border-navy/30 hover:bg-navy/20"
                onClick={() => setIsLiked(!isLiked)}
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="flex-1 border-navy/30 hover:bg-navy/20"
              >
                <MessageCircle className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="flex-1 border-navy/30 hover:bg-navy/20"
              >
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};