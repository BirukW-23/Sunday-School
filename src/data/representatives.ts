import { 
  Instagram, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Youtube 
} from "lucide-react";

export const representatives = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Instagram Specialist",
    bio: "Visual storyteller with 5+ years crafting engaging content that drives brand awareness and community growth.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
    platforms: [
      { platform: "Instagram", handle: "@sarahchen_creative", followers: "125K", icon: Instagram },
      { platform: "Twitter", handle: "@sarahcreates", followers: "45K", icon: Twitter },
      { platform: "LinkedIn", handle: "/in/sarahchen", followers: "15K", icon: Linkedin }
    ],
    stats: {
      totalReach: "1.2M",
      engagement: "8.5%",
      campaigns: 47
    },
    specialties: ["Visual Design", "Brand Photography", "Story Creation", "Community Management"]
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Content Strategist",
    bio: "Data-driven content creator specializing in viral campaigns and cross-platform storytelling.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    platforms: [
      { platform: "Twitter", handle: "@marcusviralcontent", followers: "89K", icon: Twitter },
      { platform: "LinkedIn", handle: "/in/marcusrodriguez", followers: "32K", icon: Linkedin },
      { platform: "YouTube", handle: "@MarcusCreates", followers: "67K", icon: Youtube }
    ],
    stats: {
      totalReach: "2.1M",
      engagement: "12.3%",
      campaigns: 62
    },
    specialties: ["Viral Marketing", "Analytics", "Content Planning", "Trend Analysis"]
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Community Manager",
    bio: "Building authentic connections and fostering brand loyalty through meaningful conversations.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    platforms: [
      { platform: "Facebook", handle: "@emilywatson.community", followers: "156K", icon: Facebook },
      { platform: "Instagram", handle: "@emily_engages", followers: "78K", icon: Instagram },
      { platform: "LinkedIn", handle: "/in/emilywatson", followers: "28K", icon: Linkedin }
    ],
    stats: {
      totalReach: "890K",
      engagement: "15.7%",
      campaigns: 38
    },
    specialties: ["Community Building", "Customer Support", "Engagement Strategy", "Crisis Management"]
  },
  {
    id: 4,
    name: "David Kim",
    role: "Video Content Creator",
    bio: "Bringing brands to life through dynamic video content and immersive storytelling experiences.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    platforms: [
      { platform: "YouTube", handle: "@DavidKimCreative", followers: "234K", icon: Youtube },
      { platform: "Instagram", handle: "@davidkim.video", followers: "142K", icon: Instagram },
      { platform: "Twitter", handle: "@davidcreates", followers: "56K", icon: Twitter }
    ],
    stats: {
      totalReach: "3.2M",
      engagement: "9.8%",
      campaigns: 29
    },
    specialties: ["Video Production", "Motion Graphics", "Live Streaming", "Educational Content"]
  },
  {
    id: 5,
    name: "Alex Thompson",
    role: "Brand Influencer",
    bio: "Authentic voice connecting with audiences through genuine storytelling and brand partnerships.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    platforms: [
      { platform: "Instagram", handle: "@alexthompson.authentic", followers: "287K", icon: Instagram },
      { platform: "YouTube", handle: "@AlexAuthentic", followers: "198K", icon: Youtube },
      { platform: "Twitter", handle: "@alexthompson", followers: "134K", icon: Twitter }
    ],
    stats: {
      totalReach: "1.8M",
      engagement: "11.2%",
      campaigns: 51
    },
    specialties: ["Influencer Marketing", "Brand Partnerships", "Authentic Content", "Lifestyle Branding"]
  },
  {
    id: 6,
    name: "Maria Gonzalez",
    role: "Social Media Analyst",
    bio: "Turning data into actionable insights that drive strategic decisions and optimize performance.",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop&crop=face",
    platforms: [
      { platform: "LinkedIn", handle: "/in/mariagonzalez.data", followers: "45K", icon: Linkedin },
      { platform: "Twitter", handle: "@maria_analytics", followers: "67K", icon: Twitter },
      { platform: "Instagram", handle: "@maria.insights", followers: "34K", icon: Instagram }
    ],
    stats: {
      totalReach: "650K",
      engagement: "7.9%",
      campaigns: 73
    },
    specialties: ["Data Analysis", "Performance Metrics", "ROI Optimization", "Strategic Planning"]
  }
];