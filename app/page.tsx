"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Users,
  Target,
  Smartphone,
  BarChart3,
  Palette,
  Vote,
  ArrowRight,
  Calendar,
  MapPin,
  Star,
  Award,
  MessageCircle,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Globe,
  Flag,
  Heart,
  Zap,
  Shield,
  TrendingUp,
  Eye,
  Lightbulb,
  Download,
  Scale,
  Settings,
  PresentationIcon as PresentationChart,
  UserCheck,
  FileText,
  Database,
} from "lucide-react"
import { emailService, type ContactFormData } from "@/lib/email-service"
import { HeroCarousel } from "@/components/hero-carousel"
import { MobileNav } from "@/components/mobile-nav"
import { FloatingShapes, WavePattern, GridPattern } from "@/components/creative-elements"
import { Megaphone, Share2, Video } from "lucide-react"

export default function PoliticalConsultingWebsite() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentCase, setCurrentCase] = useState(0)
  const [isNewsScrolling, setIsNewsScrolling] = useState(true)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 50])
  const y2 = useTransform(scrollY, [0, 300], [0, -50])

  const [showConsultationModal, setShowConsultationModal] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false)
  const [consultationSubmitted, setConsultationSubmitted] = useState(false)
  const [contactSubmitted, setContactSubmitted] = useState(false)
  const [whatsappSubmitted, setWhatsappSubmitted] = useState(false)

  const services = [
    {
      icon: Target,
      title: "Campaign Strategy & Roadmapping",
      description: "Comprehensive election strategies tailored to your constituency and voter base",
      features: ["Voter Analysis", "Opposition Research", "Message Development", "Timeline Planning"],
      detailedInfo: {
        overview:
          "Our campaign strategy service provides end-to-end electoral planning designed to maximize your chances of victory. We analyze every aspect of your political landscape to create a winning roadmap.",
        process: [
          "Constituency Analysis: Deep dive into voter demographics, historical voting patterns, and local issues",
          "Opposition Research: Comprehensive analysis of competitors' strengths, weaknesses, and strategies",
          "Message Development: Crafting compelling narratives that resonate with your target audience",
          "Resource Allocation: Strategic distribution of budget, time, and human resources",
          "Timeline Planning: Detailed campaign calendar with key milestones and deadlines",
        ],
        benefits: [
          "Increased win probability by 35-40%",
          "Optimized resource utilization",
          "Clear roadmap for entire campaign duration",
          "Data-driven decision making",
          "Competitive advantage through strategic insights",
        ],
        caseExample:
          "In the 2023 Maharashtra Assembly elections, our strategic planning helped a first-time candidate defeat a three-term incumbent by focusing on youth issues and digital outreach, resulting in a 32% vote share increase.",
        pricing: "Starting from ₹5,00,000 for Assembly constituencies",
        duration: "4-6 months comprehensive planning",
      },
    },
    {
      icon: Smartphone,
      title: "Digital Outreach & Social Media",
      description: "Modern digital campaigns that reach voters where they are",
      features: ["Social Media Management", "Content Creation", "Influencer Partnerships", "Digital Advertising"],
      detailedInfo: {
        overview:
          "Transform your political presence with cutting-edge digital strategies that engage voters across all online platforms. Our digital experts create compelling content that drives real political engagement.",
        process: [
          "Platform Strategy: Customized approach for Facebook, Instagram, Twitter, YouTube, and WhatsApp",
          "Content Calendar: Daily content planning with political messaging and visual storytelling",
          "Community Management: Real-time engagement with supporters and addressing concerns",
          "Paid Advertising: Targeted ads to reach specific voter segments with precision",
          "Influencer Collaboration: Partnerships with local influencers and opinion leaders",
        ],
        benefits: [
          "Reach 10x more voters than traditional methods",
          "Real-time feedback and sentiment analysis",
          "Cost-effective compared to traditional media",
          "Viral potential for key messages",
          "Direct voter engagement and relationship building",
        ],
        caseExample:
          "Our digital campaign for a Karnataka municipal election generated 2.1M impressions, 85% engagement rate, and helped secure 15 out of 17 contested seats through targeted social media strategies.",
        pricing: "Starting from ₹2,00,000 per month",
        duration: "Ongoing throughout campaign period",
      },
    },
    {
      icon: Users,
      title: "Booth & Volunteer Operations",
      description: "Ground-level organization and volunteer mobilization",
      features: ["Booth Management", "Volunteer Training", "Ground Operations", "GOTV Campaigns"],
      detailedInfo: {
        overview:
          "Master the ground game with our comprehensive booth management and volunteer coordination services. We ensure maximum voter turnout through systematic grassroots organization.",
        process: [
          "Booth Mapping: Detailed analysis of every polling booth in your constituency",
          "Volunteer Recruitment: Identifying and recruiting dedicated campaign volunteers",
          "Training Programs: Comprehensive training on election laws, voter interaction, and booth procedures",
          "Coordination Systems: Real-time communication and coordination tools for election day",
          "GOTV Operations: Get-out-the-vote drives to maximize supporter turnout",
        ],
        benefits: [
          "Increased voter turnout by 15-25%",
          "Better booth-level vote management",
          "Trained volunteer network for future campaigns",
          "Real-time election day monitoring",
          "Reduced electoral malpractices",
        ],
        caseExample:
          "Our booth management system in Uttar Pradesh helped increase youth voter turnout by 45% through systematic volunteer coordination and targeted GOTV campaigns across 200+ polling booths.",
        pricing: "Starting from ₹3,00,000 for Assembly constituencies",
        duration: "2-3 months intensive preparation + election day",
      },
    },
    {
      icon: BarChart3,
      title: "Voter Analytics & Surveys",
      description: "Data-driven insights to understand your electorate",
      features: ["Polling & Surveys", "Demographic Analysis", "Sentiment Tracking", "Predictive Modeling"],
      detailedInfo: {
        overview:
          "Leverage the power of data to understand your voters better than ever before. Our analytics team provides actionable insights that drive campaign strategy and messaging.",
        process: [
          "Voter Database Creation: Comprehensive voter profiling and segmentation",
          "Survey Design: Scientific polling methodologies for accurate voter sentiment",
          "Data Collection: Multi-channel data gathering including phone, digital, and field surveys",
          "Analysis & Insights: Advanced statistical analysis and trend identification",
          "Predictive Modeling: AI-powered predictions for election outcomes and voter behavior",
        ],
        benefits: [
          "90%+ accuracy in voter sentiment prediction",
          "Targeted messaging for different voter segments",
          "Early identification of campaign issues",
          "Resource optimization based on data insights",
          "Competitive intelligence and benchmarking",
        ],
        caseExample:
          "Our voter analytics correctly predicted election outcomes in 89% of constituencies we worked on, helping candidates adjust strategies mid-campaign for maximum impact.",
        pricing: "Starting from ₹1,50,000 for basic analytics package",
        duration: "Ongoing throughout campaign with weekly reports",
      },
    },
    {
      icon: Palette,
      title: "Political Branding & Content",
      description: "Professional visual identity and compelling content creation",
      features: ["Logo & Branding", "Campaign Materials", "Video Production", "Speech Writing"],
      detailedInfo: {
        overview:
          "Create a powerful political brand that resonates with voters and stands out from the competition. Our creative team develops compelling visual identities and content that tell your political story.",
        process: [
          "Brand Strategy: Developing your unique political positioning and messaging framework",
          "Visual Identity: Logo design, color schemes, and visual guidelines for consistency",
          "Campaign Materials: Posters, banners, brochures, and digital assets",
          "Video Production: Professional campaign videos, testimonials, and social media content",
          "Speech Writing: Compelling speeches and talking points for various occasions",
        ],
        benefits: [
          "Professional image that builds voter confidence",
          "Consistent messaging across all platforms",
          "Memorable visual identity for better recall",
          "High-quality content that engages audiences",
          "Differentiation from competitors",
        ],
        caseExample:
          "Our complete rebranding of a Maharashtra candidate resulted in 40% better name recognition and a modern image that appealed to both traditional and young voters.",
        pricing: "Starting from ₹1,00,000 for complete branding package",
        duration: "4-6 weeks for complete brand development",
      },
    },
    {
      icon: Vote,
      title: "Election Day Operations",
      description: "Comprehensive election day management and monitoring",
      features: ["Polling Agent Training", "Real-time Monitoring", "Legal Support", "Result Analysis"],
      detailedInfo: {
        overview:
          "Ensure a smooth and successful election day with our comprehensive operations management. From polling agent coordination to real-time monitoring, we've got every detail covered.",
        process: [
          "Agent Deployment: Strategic placement of trained polling agents at every booth",
          "Communication Systems: Real-time communication network for instant updates",
          "Legal Support: On-call legal team for any election-related issues",
          "Monitoring Dashboard: Live tracking of voter turnout and booth-wise performance",
          "Result Compilation: Fast and accurate result analysis and reporting",
        ],
        benefits: [
          "Complete election day visibility and control",
          "Immediate response to any issues or irregularities",
          "Legal protection and compliance assurance",
          "Real-time strategic adjustments",
          "Comprehensive post-election analysis",
        ],
        caseExample:
          "Our election day operations team successfully managed 300+ polling booths across multiple constituencies, ensuring 100% agent coverage and zero legal complications.",
        pricing: "Starting from ₹2,50,000 for Assembly constituencies",
        duration: "Election day + 2 days for result analysis",
      },
    },
  ]

  const caseStudies = [
    {
      title: "State Assembly Victory 2023",
      location: "Maharashtra",
      result: "+32% Vote Share",
      description:
        "Transformed a trailing candidate into a decisive winner through targeted digital campaigns and grassroots mobilization.",
      metrics: { reach: "2.1M", engagement: "85%", volunteers: "1,200" },
    },
    {
      title: "Municipal Corporation Sweep",
      location: "Karnataka",
      result: "15/17 Seats Won",
      description: "Comprehensive ward-level strategy resulting in unprecedented municipal election success.",
      metrics: { reach: "850K", engagement: "92%", volunteers: "800" },
    },
    {
      title: "Youth Mobilization Campaign",
      location: "Uttar Pradesh",
      result: "+45% Youth Turnout",
      description: "Innovative social media strategy that significantly increased youth voter participation.",
      metrics: { reach: "3.2M", engagement: "78%", volunteers: "2,100" },
    },
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "MLA, Maharashtra",
      content:
        "Their strategic approach and ground-level execution helped us achieve what seemed impossible. Truly professional team.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Municipal Councillor",
      content: "The digital campaign strategy was game-changing. We reached voters we never could have reached before.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      role: "Party Secretary",
      content: "Exceptional booth management and volunteer coordination. They understand Indian politics deeply.",
      rating: 5,
    },
  ]

  const teamMembers = [
    {
      name: "Dr. Arjun Mehta",
      role: "Chief Campaign Strategist",
      experience: "15+ years",
      expertise: "Electoral Strategy, Policy Analysis",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Kavya Reddy",
      role: "Digital Media Head",
      experience: "10+ years",
      expertise: "Social Media, Content Strategy",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Rohit Singh",
      role: "Data Analytics Lead",
      experience: "8+ years",
      expertise: "Voter Analytics, Polling",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Meera Joshi",
      role: "Ground Operations Manager",
      experience: "12+ years",
      expertise: "Booth Management, Volunteer Coordination",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const upcomingEvents = [
    {
      title: "Digital Campaign Masterclass",
      date: "March 15, 2024",
      location: "Mumbai",
      type: "Workshop",
    },
    {
      title: "Booth Management Training",
      date: "March 22, 2024",
      location: "Delhi",
      type: "Training",
    },
    {
      title: "Political Analytics Summit",
      date: "April 5, 2024",
      location: "Bangalore",
      type: "Conference",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center ml-32 space-x-3">
            <img src="/demo_logo.png" alt="DEMOTACT" className="h-8 sm:h-10 w-auto" />
          </div>
         <div className="hidden md:flex items-center justify-end space-x-8 ml-auto mr-32">
            <a href="#about" className="text-slate-600 hover:text-primary transition-colors">
              About
            </a>
            <a href="#services" className="text-slate-600 hover:text-primary transition-colors">
              Services
            </a>
            <a href="#cases" className="text-slate-600 hover:text-primary transition-colors">
              Case Studies
            </a>
            <a href="#team" className="text-slate-600 hover:text-primary transition-colors">
              Team
            </a>
            <a href="/careers" className="text-slate-600 hover:text-primary transition-colors">
              Careers
            </a>
            <a href="#contact" className="text-slate-600 hover:text-primary transition-colors">
              Contact
            </a>

              
          </div>
          <div className="flex items-center space-x-4">
            {/* <Button
              className="hidden sm:flex bg-button-gradient hover:bg-reverse-gradient text-white border-0"
              onClick={() => setShowConsultationModal(true)}
            >
              Book Consultation
            </Button> */}
            <MobileNav onBookConsultation={() => setShowConsultationModal(true)} />
          </div>
        </div>
      </nav>


      {/* Hero Section with Video Background and Carousel */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video autoPlay muted loop playsInline className="absolute inset-0 object-cover w-full h-full z-0">
          <source src="/demo_video.mp4" type="video/mp4" />
        </video>

        {/* Fallback Background Image */}
        {/* <div className="absolute inset-0 bg-hero-gradient z-0" /> */}

        {/* Creative Elements */}
        {/* <FloatingShapes /> */}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-aqua/90 to-teal/80 z-5" />

        {/* Carousel Content */}

        <div className="relative z-10 h-full">
          <HeroCarousel onBookConsultation={() => setShowConsultationModal(true)} />
        </div>

         {/* <div className="relative z-10 h-full">
          <HeroTypographySlider  />
        </div> */}


        
      </section>

      {/* Scrolling News Ticker */}
      {/* <div className="bg-section-gradient text-white py-2 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: isNewsScrolling ? [-1000, 0] : 0 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          {newsItems.map((item, index) => (
            <span key={index} className="mx-8 text-sm font-medium">
              🔴 {item}
            </span>
          ))}
        </motion.div>
      </div> */}

      {/* About Section */}
      {/* <section id="about" className="py-12 sm:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
           
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/placeholder.svg?height=600&width=500"
                  alt="Political Consulting Team"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-aqua/10 rounded-full blur-xl"></div>
            </motion.div>

         
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                  At <span className="text-primary">DemoTact</span>, professionalism isn't just a buzzword—it's the cornerstone of everything we do.
                </h2>
                <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed">
                  <p>
                    At DemoTact, we are dedicated professionals deeply entrenched in the electoral ecosystem of our country. Our mission is clear: to fortify and enhance the governance system through strategic interventions and innovative approaches. We believe in working hand-in-hand with grassroots leaders, empowering them with the tools and knowledge needed to realize their vision and drive tangible change within their local communities.
                  </p>
                  <p>
                    We specialize in supporting young, first-time aspirants and grassroot leaders in their electoral endeavors. From providing strategic campaign guidance to assisting in constituency service delivery, we stand by our clients every step of the way. Our aim is not only to help them win elections but also to support them in serving their constituencies effectively.
                  </p>
                  <p>
                    Our approach is anchored in professionalism and a relentless commitment to excellence. Leveraging cutting-edge technology and a suite of tech-enabled tools and techniques, we empower our clients to navigate the complexities of politics and governance with confidence and efficiency.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-button-gradient hover:bg-reverse-gradient text-white border-0 px-8 py-3"
                  onClick={() => setShowConsultationModal(true)}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 bg-transparent"
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Our Services
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

            <section
        id="about"
        className="py-12 sm:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-navy text-white relative overflow-hidden"
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">About Us</h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-2">
                Demotact is a team of young, enthusiastic professionals dedicated to empowering dynamic leaders, change-makers, and aspiring youth who wish to enter electoral politics at any level.
                We are a group of seasoned political consultants and experienced professionals who have contributed across the political spectrum since the inception of this field. From grassroots campaigns to high-level strategy, Demotact brings together expertise, innovation, and passion to help you navigate and succeed in the world of politics.
              </p>
            </div>
          </motion.div>

          {/* Campaign Initiatives Section - Simplified */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-lg sm:text-xl font-bold text-center text-white mb-8">
              Our campaign initiatives include:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: Target,
                  title: "Policy suggestions",
                  description: "Comprehensive policy framework and strategic recommendations",
                },
                {
                  icon: Users,
                  title: "Grassroots campaigns",
                  description: "Community-level engagement and voter mobilization",
                },
                {
                  icon: Users,
                  title: "Stakeholder alignment",
                  description: "Building coalitions and strategic partnerships",
                },
                {
                  icon: Megaphone,
                  title: "High-octane narrative-defining events",
                  description: "Impactful events that shape public discourse",
                },
                {
                  icon: Share2,
                  title: "Social media amplification",
                  description: "Digital outreach and online community building",
                },
                {
                  icon: Video,
                  title: "Effective multimedia strategy and campaigns",
                  description: "Comprehensive multimedia content and campaigns",
                },
              ].map((initiative, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  className="group"
                >
                  <div className="bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-lg p-4 sm:p-5 hover:bg-slate-700/40 transition-all duration-300 hover:border-primary/30 h-full flex flex-col min-h-[140px]">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-aqua rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                      <initiative.icon className="h-6 w-6 text-white" />
                    </div>

                    <h4 className="text-sm font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300 text-center">
                      {initiative.title}
                    </h4>

                    <p className="text-white/80 text-xs leading-relaxed flex-1 text-center">{initiative.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mission Statement - Simplified */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="bg-slate-800/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
              <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-6">
                We aim to promote and facilitate constructive dialogue and interaction among young mission-driven
                professionals who want to revolutionise the field of electioneering, policy-making and governance
                advisory. We also aspire to collaborate with like-minded individuals to find common ground on the most
                important issues and elevate them to positions where they can affect real change.
              </p>

              {/* Call to Action */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  className="bg-gradient-to-r from-primary to-aqua hover:from-aqua hover:to-teal text-white border-0 px-6 py-2 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
                  onClick={() => setShowConsultationModal(true)}
                >
                  Start Your Campaign
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white hover:text-slate-900 backdrop-blur-sm px-6 py-2 bg-transparent text-sm"
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Explore Services
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Team Section */}
      {/* <section id="team" className="py-12 sm:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">Our Expert Team</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Meet the seasoned political strategists, digital experts, and grassroots organizers who make victory
              possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-primary/10 h-full flex flex-col"
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-48 sm:h-64 object-cover"
                />
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-2 text-sm sm:text-base">{member.role}</p>
                  <p className="text-gray-600 text-xs sm:text-sm mb-2">{member.experience}</p>
                  <p className="text-gray-500 text-xs sm:text-sm flex-1">{member.expertise}</p>
                </div>
              </motion.div>
            ))}
          </div>

    
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center h-full flex flex-col"
            >
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-card-gradient rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Shield className="h-8 sm:h-10 w-8 sm:w-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">Ethics & Integrity</h3>
              <p className="text-gray-600 text-sm sm:text-base flex-1">
                We maintain the highest standards of ethical conduct in all our campaign activities.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center h-full flex flex-col"
            >
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-section-gradient rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Zap className="h-8 sm:h-10 w-8 sm:w-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">Innovation</h3>
              <p className="text-gray-600 text-sm sm:text-base flex-1">
                Cutting-edge technology and creative strategies to stay ahead of the competition.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center h-full flex flex-col"
            >
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-reverse-gradient rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Heart className="h-8 sm:h-10 w-8 sm:w-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">Grassroots Connection</h3>
              <p className="text-gray-600 text-sm sm:text-base flex-1">
                Deep understanding of local issues and community-driven campaign approaches.
              </p>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section
        id="services"
        className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-primary-50 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">Our Services</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Comprehensive political consulting services designed to win elections and build lasting political success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group h-full"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/30 bg-white flex flex-col">
                  <CardHeader className="flex-shrink-0">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-card-gradient rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl text-slate-800">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600 text-sm sm:text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-2 mb-4 sm:mb-6 flex-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs sm:text-sm text-gray-600">
                          <CheckCircle className="h-3 sm:h-4 w-3 sm:w-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full group-hover:bg-button-gradient group-hover:text-white group-hover:border-transparent transition-all duration-300 text-sm sm:text-base bg-transparent"
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-3 sm:h-4 w-3 sm:w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl bg-white text-slate-900 rounded-xl shadow-xl overflow-y-auto max-h-[90vh]">
                        <DialogHeader>
                          <DialogTitle className="flex items-center text-2xl text-slate-800 mb-2">
                            <div className="w-10 h-10 bg-card-gradient rounded-full flex items-center justify-center mr-3">
                              <service.icon className="h-6 w-6 text-white" />
                            </div>
                            {service.title}
                          </DialogTitle>
                          <DialogDescription className="text-lg text-gray-600">
                            {service.detailedInfo.overview}
                          </DialogDescription>
                        </DialogHeader>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
                          {/* Left Column */}
                          <div className="space-y-6">
                            <div>
                              <h4 className="text-lg font-semibold text-slate-800 mb-3 flex items-center">
                                <Target className="h-5 w-5 text-primary mr-2" />
                                Our Process
                              </h4>
                              <ul className="space-y-3">
                                {service.detailedInfo.process.map((step, idx) => (
                                  <li key={idx} className="flex items-start text-sm text-gray-600">
                                    <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                                      {idx + 1}
                                    </div>
                                    {step}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="text-lg font-semibold text-slate-800 mb-3 flex items-center">
                                <Award className="h-5 w-5 text-teal mr-2" />
                                Key Benefits
                              </h4>
                              <ul className="space-y-2">
                                {service.detailedInfo.benefits.map((benefit, idx) => (
                                  <li key={idx} className="flex items-center text-sm text-gray-600">
                                    <CheckCircle className="h-4 w-4 text-teal mr-2 flex-shrink-0" />
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Right Column */}
                          <div className="space-y-6">
                            <div className="bg-gradient-to-br from-primary-50 to-aqua/10 p-6 rounded-lg border border-primary/20">
                              <h4 className="text-lg font-semibold text-slate-800 mb-3 flex items-center">
                                <Star className="h-5 w-5 text-yellow-500 mr-2" />
                                Success Story
                              </h4>
                              <p className="text-sm text-gray-700 italic">"{service.detailedInfo.caseExample}"</p>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                <h5 className="font-semibold text-slate-800 mb-2 flex items-center">
                                  <BarChart3 className="h-4 w-4 text-primary mr-2" />
                                  Investment
                                </h5>
                                <p className="text-sm text-gray-600">{service.detailedInfo.pricing}</p>
                              </div>

                              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                <h5 className="font-semibold text-slate-800 mb-2 flex items-center">
                                  <Calendar className="h-4 w-4 text-aqua mr-2" />
                                  Timeline
                                </h5>
                                <p className="text-sm text-gray-600">{service.detailedInfo.duration}</p>
                              </div>
                            </div>

                            <div className="pt-4 border-t border-gray-200">
                              <Button className="w-full bg-button-gradient hover:bg-reverse-gradient text-white border-0">
                                Get Started with {service.title}
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


          <section
        id="team"
        className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-primary-50 relative overflow-hidden"
      >
        <GridPattern />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">Meet The Team</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              A team of seasoned political strategists, digital experts, and grassroots organizers committed to
              transforming Indian democracy through innovative campaign solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-primary/10 h-full flex flex-col"
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-48 sm:h-64 object-cover"
                />
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-2 text-sm sm:text-base">{member.role}</p>
                  <p className="text-gray-600 text-xs sm:text-sm mb-2">{member.experience}</p>
                  <p className="text-gray-500 text-xs sm:text-sm flex-1">{member.expertise}</p>
                </div>
              </motion.div>
            ))}
          </div>

        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center h-full flex flex-col"
            >
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-card-gradient rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Shield className="h-8 sm:h-10 w-8 sm:w-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">Ethics & Integrity</h3>
              <p className="text-gray-600 text-sm sm:text-base flex-1">
                We maintain the highest standards of ethical conduct in all our campaign activities.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center h-full flex flex-col"
            >
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-section-gradient rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Zap className="h-8 sm:h-10 w-8 sm:w-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">Innovation</h3>
              <p className="text-gray-600 text-sm sm:text-base flex-1">
                Cutting-edge technology and creative strategies to stay ahead of the competition.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center h-full flex flex-col"
            >
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-reverse-gradient rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Heart className="h-8 sm:h-10 w-8 sm:w-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">Grassroots Connection</h3>
              <p className="text-gray-600 text-sm sm:text-base flex-1">
                Deep understanding of local issues and community-driven campaign approaches.
              </p>
            </motion.div>
          </div>
        </div>
        <WavePattern />
      </section>
      
      {/* Campaign Timeline */}
      {/* <section className="py-20 bg-timeline-gradient text-white relative overflow-hidden">
     
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Campaign Journey</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Our proven methodology takes you from campaign launch to victory
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-aqua to-teal"></div>
            <div className="space-y-12">
              {[
                { phase: "Campaign Launch", description: "Strategy development and team formation", icon: Flag },
                { phase: "Manifesto Design", description: "Policy framework and messaging", icon: Globe },
                { phase: "Digital Mobilization", description: "Social media and online campaigns", icon: Smartphone },
                { phase: "Booth Operations", description: "Ground-level voter outreach", icon: Users },
                { phase: "Victory Day", description: "Election day coordination and monitoring", icon: Award },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                    <div className="dark-glass-effect rounded-lg p-6 hover:bg-white/10 transition-all duration-300 border border-white/20">
                      <h3 className="text-2xl font-bold text-white mb-2">{item.phase}</h3>
                      <p className="text-white/70">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-aqua rounded-full border-4 border-white shadow-xl">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

            {/* Why Choose Us Section */}
      {/* <section
        id="why-us"
        className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-primary-50 relative overflow-hidden"
      >
        <GridPattern />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">Why Choose Us?</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              We combine proven expertise, innovative technology, and ethical practices to deliver exceptional political
              consulting services that drive real results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center h-full flex flex-col"
            >
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-card-gradient rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <TrendingUp className="h-8 sm:h-10 w-8 sm:w-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">Proven Track Record</h3>
              <p className="text-gray-600 text-sm sm:text-base flex-1">
                89% success rate across 127+ campaigns nationwide with measurable results and satisfied clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center h-full flex flex-col"
            >
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-section-gradient rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Eye className="h-8 sm:h-10 w-8 sm:w-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">Data-Driven Approach</h3>
              <p className="text-gray-600 text-sm sm:text-base flex-1">
                Advanced analytics and voter research provide deep insights for precise targeting and strategic
                decision-making.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center h-full flex flex-col"
            >
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-reverse-gradient rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Lightbulb className="h-8 sm:h-10 w-8 sm:w-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">Innovation & Technology</h3>
              <p className="text-gray-600 text-sm sm:text-base flex-1">
                Cutting-edge digital tools and platforms create modern campaigns that resonate with today's voters.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center h-full flex flex-col"
            >
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-card-gradient rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Shield className="h-8 sm:h-10 w-8 sm:w-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">Ethical Practices</h3>
              <p className="text-gray-600 text-sm sm:text-base flex-1">
                Transparent, legal, and ethical campaign methodologies that maintain the highest standards of integrity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center h-full flex flex-col"
            >
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-section-gradient rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Heart className="h-8 sm:h-10 w-8 sm:w-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">Local Expertise</h3>
              <p className="text-gray-600 text-sm sm:text-base flex-1">
                Deep understanding of regional politics, cultural nuances, and grassroots campaign dynamics.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center h-full flex flex-col"
            >
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-reverse-gradient rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Zap className="h-8 sm:h-10 w-8 sm:w-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">24/7 Support</h3>
              <p className="text-gray-600 text-sm sm:text-base flex-1">
                Round-the-clock assistance and real-time campaign monitoring throughout your electoral journey.
              </p>
            </motion.div>
          </div>


        </div>
        <WavePattern />
      </section> */}

      {/* Case Studies */}
      <section id="cases" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real campaigns, real results. See how we've helped leaders achieve electoral success.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-xl">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentCase * 100}%)` }}
              >
                {caseStudies.map((study, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="bg-white shadow-xl border-0">
                      <CardHeader className="bg-card-gradient text-white">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
                            <div className="flex items-center text-white/90">
                              <MapPin className="h-4 w-4 mr-1" />
                              {study.location}
                            </div>
                          </div>
                          <Badge className="bg-white text-primary text-lg px-4 py-2">{study.result}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="p-8">
                        <p className="text-gray-600 text-lg mb-8">{study.description}</p>
                        <div className="grid grid-cols-3 gap-6">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-primary">{study.metrics.reach}</div>
                            <div className="text-gray-500">Total Reach</div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-teal">{study.metrics.engagement}</div>
                            <div className="text-gray-500">Engagement Rate</div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-aqua">{study.metrics.volunteers}</div>
                            <div className="text-gray-500">Volunteers</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentCase(Math.max(0, currentCase - 1))}
                disabled={currentCase === 0}
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex space-x-2">
                {caseStudies.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentCase ? "bg-primary" : "bg-gray-300"
                    }`}
                    onClick={() => setCurrentCase(index)}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentCase(Math.min(caseStudies.length - 1, currentCase + 1))}
                disabled={currentCase === caseStudies.length - 1}
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-white"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">What Leaders Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Trusted by political leaders across India</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white border-0 shadow-xl">
              <CardContent className="p-12 text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-2xl text-gray-700 mb-8 italic">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div>
                  <div className="font-bold text-xl text-slate-800">{testimonials[currentTestimonial].name}</div>
                  <div className="text-primary font-semibold">{testimonials[currentTestimonial].role}</div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial ? "bg-primary" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Upcoming Events */}
      {/* <section className="py-12 sm:py-20 bg-white relative overflow-hidden">
        <FloatingShapes />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">Upcoming Events</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Join our training programs and workshops to enhance your political campaign skills
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary/30 bg-white h-full flex flex-col">
                  <CardHeader className="flex-shrink-0">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <Badge variant="secondary" className="bg-primary/10 text-primary text-xs sm:text-sm">
                        {event.type}
                      </Badge>
                      <Calendar className="h-4 sm:h-5 w-4 sm:w-5 text-gray-400" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl text-slate-800">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center text-gray-600 text-sm sm:text-base">
                        <Calendar className="h-3 sm:h-4 w-3 sm:w-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm sm:text-base">
                        <MapPin className="h-3 sm:h-4 w-3 sm:w-4 mr-2" />
                        {event.location}
                      </div>
                    </div>
                    <Button className="w-full mt-4 sm:mt-6 bg-button-gradient hover:bg-reverse-gradient text-white border-0 text-sm sm:text-base">
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

         {/* Contact/Consultation Form */}
      <section id="contact" className="py-20 bg-contact-gradient text-white relative overflow-hidden">
        {/* Add geometric pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="100%" height="100%" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Win?</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Let's discuss your campaign goals and create a winning strategy together
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {!formSubmitted ? (
              <Card className="dark-glass-effect border-white/10 shadow-2xl">
                <CardContent className="p-8">
                  <form
                    className="space-y-6"
                    onSubmit={(e) => {
                      e.preventDefault()
                      setFormSubmitted(true)
                    }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-white/90 mb-2">Full Name *</label>
                        <Input
                          required
                          className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-primary focus:ring-primary/20"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/90 mb-2">Phone Number *</label>
                        <Input
                          required
                          type="tel"
                          className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-primary focus:ring-primary/20"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white/90 mb-2">Email Address *</label>
                      <Input
                        required
                        type="email"
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-primary focus:ring-primary/20"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-white/90 mb-2">
                          Political Party/Organization
                        </label>
                        <Input
                          className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-primary focus:ring-primary/20"
                          placeholder="Party name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/90 mb-2">State/Region</label>
                        <Select>
                          <SelectTrigger className="bg-white/5 border-white/20 text-white focus:border-primary focus:ring-primary/20">
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-slate-700">
                            <SelectItem value="maharashtra">Maharashtra</SelectItem>
                            <SelectItem value="karnataka">Karnataka</SelectItem>
                            <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                            <SelectItem value="gujarat">Gujarat</SelectItem>
                            <SelectItem value="rajasthan">Rajasthan</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white/90 mb-2">
                        What do you need help with? *
                      </label>
                      <Select>
                        <SelectTrigger className="bg-white/5 border-white/20 text-white focus:border-primary focus:ring-primary/20">
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-700">
                          <SelectItem value="strategy">Campaign Strategy</SelectItem>
                          <SelectItem value="digital">Digital Marketing</SelectItem>
                          <SelectItem value="booth">Booth Management</SelectItem>
                          <SelectItem value="analytics">Voter Analytics</SelectItem>
                          <SelectItem value="branding">Political Branding</SelectItem>
                          <SelectItem value="full-service">Full-Service Campaign</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white/90 mb-2">Additional Details</label>
                      <Textarea
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-primary focus:ring-primary/20"
                        placeholder="Tell us about your campaign goals, timeline, and any specific requirements..."
                        rows={4}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-aqua hover:from-aqua hover:to-teal text-white py-4 text-lg font-semibold rounded-lg border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                    >
                      Schedule Free Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-16"
              >
                <div className="dark-glass-effect rounded-2xl p-8 border border-white/20">
                  <CheckCircle className="h-24 w-24 text-primary mx-auto mb-6" />
                  <h3 className="text-3xl font-bold text-white mb-4">Thank You!</h3>
                  <p className="text-xl text-white/80 mb-8">
                    We've received your consultation request. Our team will contact you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setFormSubmitted(false)}
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white hover:text-slate-900 backdrop-blur-sm"
                  >
                    Submit Another Request
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img src="/demo_logo.png" alt="DEMOTACT" className="h-8 w-auto" />
              </div>
              <p className="text-gray-400 mb-6">
                Empowering political change through strategic consulting and innovative campaign solutions.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white hover:border-primary bg-transparent"
                >
                  <MessageCircle className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white hover:border-primary bg-transparent"
                >
                  <Phone className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white hover:border-primary bg-transparent"
                >
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Campaign Strategy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Booth Management
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Voter Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Political Branding
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#about" className="hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#team" className="hover:text-primary transition-colors">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#cases" className="hover:text-primary transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +91 98765 43210
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  hello@demotact.in
                </div>
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-1" />
                  <div>
                    123 Political Plaza
                    <br />
                    New Delhi, India 110001
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 DEMOTACT. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 flex flex-col space-y-2 sm:space-y-3 z-50">
        <Button
          size="sm"
          className="bg-teal hover:bg-teal/90 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 shadow-lg animate-float"
          title="WhatsApp Chat"
          onClick={() => {
            const contactData: ContactFormData = {
              name: "WhatsApp User",
              email: "whatsapp@temp.com",
              phone: "WhatsApp",
              contactType: "whatsapp",
            }

            emailService.scheduleFollowUpSequence(contactData)

            window.open(
              "https://wa.me/919876543210?text=Hi! I'm interested in political consulting services. Can you help me?",
              "_blank",
            )
            setWhatsappSubmitted(true)
          }}
        >
          <MessageCircle className="h-4 sm:h-5 w-4 sm:w-5" />
        </Button>
        <Button
          size="sm"
          className="bg-primary hover:bg-primary/90 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 shadow-lg animate-float"
          title="Call Now"
          onClick={() => setShowContactModal(true)}
          style={{ animationDelay: "0.5s" }}
        >
          <Phone className="h-4 sm:h-5 w-4 sm:w-5" />
        </Button>
      </div>

      {/* Book Consultation Modal */}
      <Dialog open={showConsultationModal} onOpenChange={setShowConsultationModal}>
        <DialogContent className="max-w-2xl bg-white text-slate-900 rounded-xl shadow-xl overflow-y-auto max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="flex items-center text-2xl text-slate-800 mb-2">
              <div className="w-10 h-10 bg-card-gradient rounded-full flex items-center justify-center mr-3">
                <Target className="h-6 w-6 text-white" />
              </div>
              Book Your Strategy Consultation
            </DialogTitle>
            <DialogDescription className="text-lg text-gray-600">
              Schedule a free 30-minute consultation with our political strategy experts to discuss your campaign goals.
            </DialogDescription>
          </DialogHeader>

          {!consultationSubmitted ? (
            <form
              className="space-y-6 mt-6"
              onSubmit={async (e) => {
                e.preventDefault()

                const formData = new FormData(e.target as HTMLFormElement)
                const contactData: ContactFormData = {
                  name: formData.get("name") as string,
                  email: formData.get("email") as string,
                  phone: formData.get("phone") as string,
                  contactType: "consultation",
                  additionalData: {
                    consultationType: "Strategy Session",
                    electionType: (formData.get("electionType") as string) || "Assembly",
                    preferredTime: (formData.get("preferredTime") as string) || "Flexible",
                    position: (formData.get("position") as string) || "Candidate",
                    constituency: (formData.get("constituency") as string) || "Not specified",
                  },
                }

                const emailSent = await emailService.sendConfirmationEmail(contactData)
                if (emailSent) {
                  emailService.scheduleFollowUpSequence(contactData)
                }

                setConsultationSubmitted(true)
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <Input required placeholder="Enter your full name" name="name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <Input required type="tel" placeholder="+91 XXXXX XXXXX" name="phone" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <Input required type="email" placeholder="your@email.com" name="email" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Political Position</label>
                  <Select name="position">
                    <SelectTrigger>
                      <SelectValue placeholder="Select position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="candidate">Political Candidate</SelectItem>
                      <SelectItem value="party-leader">Party Leader</SelectItem>
                      <SelectItem value="campaign-manager">Campaign Manager</SelectItem>
                      <SelectItem value="volunteer">Volunteer Coordinator</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Constituency/Region</label>
                  <Input placeholder="e.g., Mumbai North, Bangalore South" name="constituency" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Election Type *</label>
                <Select name="electionType">
                  <SelectTrigger>
                    <SelectValue placeholder="Select election type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lok-sabha">Lok Sabha</SelectItem>
                    <SelectItem value="assembly">State Assembly</SelectItem>
                    <SelectItem value="municipal">Municipal Corporation</SelectItem>
                    <SelectItem value="panchayat">Panchayat</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Consultation Time</label>
                <Select name="preferredTime">
                  <SelectTrigger>
                    <SelectValue placeholder="Select preferred time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                    <SelectItem value="evening">Evening (4 PM - 8 PM)</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Goals & Challenges</label>
                <Textarea
                  placeholder="Tell us about your campaign objectives, current challenges, and what you hope to achieve..."
                  rows={4}
                />
              </div>

              <div className="bg-primary-50 p-4 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">What to Expect:</h4>
                <ul className="text-sm text-primary/80 space-y-1">
                  <li>• 30-minute strategy discussion with our experts</li>
                  <li>• Preliminary campaign assessment</li>
                  <li>• Customized service recommendations</li>
                  <li>• No obligation - completely free consultation</li>
                </ul>
              </div>

              <Button
                type="submit"
                className="w-full bg-button-gradient hover:bg-reverse-gradient text-white py-3 border-0"
              >
                Schedule Free Consultation
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-8"
            >
              <CheckCircle className="h-16 w-16 text-teal mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Consultation Booked!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for booking a consultation. Our strategy team will contact you within 2 hours to confirm your
                appointment time.
              </p>
              <div className="bg-teal/10 p-4 rounded-lg mb-6 border border-teal/20">
                <p className="text-teal text-sm">
                  <strong>Next Steps:</strong> Check your email for confirmation details and a calendar invite.
                </p>
              </div>
              <Button
                onClick={() => {
                  setConsultationSubmitted(false)
                  setShowConsultationModal(false)
                }}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Book Another Consultation
              </Button>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>

      {/* Contact Modal */}
      <Dialog open={showContactModal} onOpenChange={setShowContactModal}>
        <DialogContent className="max-w-xl bg-white text-slate-900 rounded-xl shadow-xl overflow-y-auto max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="flex items-center text-2xl text-slate-800 mb-2">
              <div className="w-10 h-10 bg-card-gradient rounded-full flex items-center justify-center mr-3">
                <Phone className="h-6 w-6 text-white" />
              </div>
              Contact Our Team
            </DialogTitle>
            <DialogDescription className="text-lg text-gray-600">
              Get in touch with our political consulting experts through your preferred method.
            </DialogDescription>
          </DialogHeader>

          {!contactSubmitted ? (
            <div className="space-y-6 mt-6">
              {/* Direct Contact Options */}
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-gradient-to-r from-primary-50 to-aqua/10 p-6 rounded-lg border border-primary/20">
                  <div className="flex items-center mb-4">
                    <Phone className="h-6 w-6 text-primary mr-3" />
                    <h4 className="text-lg font-semibold text-slate-800">Call Us Directly</h4>
                  </div>
                  <p className="text-gray-600 mb-4">Speak with our consultants immediately</p>
                  <div className="space-y-2">
                    <a
                      href="tel:+919876543210"
                      className="flex items-center text-primary hover:text-primary/80 font-semibold"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      +91 98765 43210 (Primary)
                    </a>
                    <a
                      href="tel:+919876543211"
                      className="flex items-center text-primary hover:text-primary/80 font-semibold"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      +91 98765 43211 (Secondary)
                    </a>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-aqua/10 to-teal/10 p-6 rounded-lg border border-aqua/20">
                  <div className="flex items-center mb-4">
                    <Mail className="h-6 w-6 text-aqua mr-3" />
                    <h4 className="text-lg font-semibold text-slate-800">Email Us</h4>
                  </div>
                  <p className="text-gray-600 mb-4">Send us your detailed requirements</p>
                  <div className="space-y-2">
                    <a
                      href="mailto:hello@demotact.in"
                      className="flex items-center text-aqua hover:text-aqua/80 font-semibold"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      hello@demotact.in
                    </a>
                    <a
                      href="mailto:strategy@demotact.in"
                      className="flex items-center text-aqua hover:text-aqua/80 font-semibold"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      strategy@demotact.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Contact Form */}
              <div className="border-t pt-6">
                <h4 className="text-lg font-semibold text-slate-800 mb-4">Or Request a Callback</h4>
                <form
                  className="space-y-4"
                  onSubmit={async (e) => {
                    e.preventDefault()

                    const formData = new FormData(e.target as HTMLFormElement)
                    const contactData: ContactFormData = {
                      name: formData.get("name") as string,
                      email: (formData.get("email") as string) || `${formData.get("phone")}@temp.com`,
                      phone: formData.get("phone") as string,
                      contactType: "callback",
                      additionalData: {
                        callTime: (formData.get("callTime") as string) || "Anytime",
                        message: (formData.get("message") as string) || "Callback requested",
                      },
                    }

                    const emailSent = await emailService.sendConfirmationEmail(contactData)
                    if (emailSent) {
                      emailService.scheduleFollowUpSequence(contactData)
                    }

                    setContactSubmitted(true)
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input required placeholder="Your Name" name="name" />
                    <Input required type="tel" placeholder="Phone Number" name="phone" />
                  </div>
                  <Select name="callTime">
                    <SelectTrigger>
                      <SelectValue placeholder="Best time to call" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                      <SelectItem value="evening">Evening (4 PM - 8 PM)</SelectItem>
                      <SelectItem value="anytime">Anytime</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea placeholder="Brief message about your requirements..." rows={3} name="message" />
                  <Button
                    type="submit"
                    className="w-full bg-button-gradient hover:bg-reverse-gradient text-white border-0"
                  >
                    Request Callback
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-8"
            >
              <CheckCircle className="h-16 w-16 text-teal mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Callback Requested!</h3>
              <p className="text-gray-600 mb-6">We'll call you back within 30 minutes during business hours.</p>
              <Button
                onClick={() => {
                  setContactSubmitted(false)
                  setShowContactModal(false)
                }}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Close
              </Button>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>

      {/* WhatsApp Modal */}
      <Dialog open={showWhatsAppModal} onOpenChange={setShowWhatsAppModal}>
        <DialogContent className="max-w-lg bg-white text-slate-900 rounded-xl shadow-xl overflow-y-auto max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="flex items-center text-2xl text-slate-800 mb-2">
              <div className="w-10 h-10 bg-teal rounded-full flex items-center justify-center mr-3">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              WhatsApp Support
            </DialogTitle>
            <DialogDescription className="text-lg text-gray-600">
              Connect with our team instantly on WhatsApp for quick support and consultation.
            </DialogDescription>
          </DialogHeader>

          {!whatsappSubmitted ? (
            <div className="space-y-6 mt-6">
              {/* Direct WhatsApp Options */}
              <div className="bg-gradient-to-r from-teal/10 to-aqua/10 p-6 rounded-lg border border-teal/20">
                <div className="text-center mb-6">
                  <MessageCircle className="h-16 w-16 text-teal mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">Chat with Our Experts</h4>
                  <p className="text-gray-600">Get instant responses to your political consulting questions</p>
                </div>

                <div className="space-y-4">
                  <a
                    href="https://wa.me/919876543210?text=Hi! I'm interested in political consulting services. Can you help me?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-teal hover:bg-teal/90 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Chat with Campaign Strategist
                  </a>

                  <a
                    href="https://wa.me/919876543211?text=Hello! I need help with digital campaign strategies. Can we discuss?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-aqua hover:bg-aqua/90 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Chat with Digital Expert
                  </a>
                </div>
              </div>

              {/* Pre-filled Message Options */}
              <div className="border-t pt-6">
                <h4 className="text-lg font-semibold text-slate-800 mb-4">Quick Message Templates</h4>
                <div className="space-y-3">
                  <button
                    onClick={() => {
                      const contactData: ContactFormData = {
                        name: "WhatsApp User",
                        email: "whatsapp@temp.com",
                        phone: "WhatsApp",
                        contactType: "whatsapp",
                      }

                      emailService.scheduleFollowUpSequence(contactData)

                      window.open(
                        "https://wa.me/919876543210?text=Hi! I'm planning to contest in upcoming elections and need comprehensive campaign strategy. Can you help?",
                        "_blank",
                      )
                      setWhatsappSubmitted(true)
                    }}
                    className="w-full text-left p-3 bg-gray-50 hover:bg-primary-50 rounded-lg border transition-colors"
                  >
                    <div className="font-medium text-slate-800">Campaign Strategy Inquiry</div>
                    <div className="text-sm text-gray-600">For comprehensive election planning</div>
                  </button>

                  <button
                    onClick={() => {
                      const contactData: ContactFormData = {
                        name: "WhatsApp User",
                        email: "whatsapp@temp.com",
                        phone: "WhatsApp",
                        contactType: "whatsapp",
                      }

                      emailService.scheduleFollowUpSequence(contactData)

                      window.open(
                        "https://wa.me/919876543210?text=Hello! I need help with social media and digital campaigning for my political campaign. What services do you offer?",
                        "_blank",
                      )
                      setWhatsappSubmitted(true)
                    }}
                    className="w-full text-left p-3 bg-gray-50 hover:bg-primary-50 rounded-lg border transition-colors"
                  >
                    <div className="font-medium text-slate-800">Digital Campaign Help</div>
                    <div className="text-sm text-gray-600">For social media and online presence</div>
                  </button>

                  <button
                    onClick={() => {
                      const contactData: ContactFormData = {
                        name: "WhatsApp User",
                        email: "whatsapp@temp.com",
                        phone: "WhatsApp",
                        contactType: "whatsapp",
                      }

                      emailService.scheduleFollowUpSequence(contactData)

                      window.open(
                        "https://wa.me/919876543210?text=Hi! I'm interested in booth management and volunteer coordination services. Can you provide more details?",
                        "_blank",
                      )
                      setWhatsappSubmitted(true)
                    }}
                    className="w-full text-left p-3 bg-gray-50 hover:bg-primary-50 rounded-lg border transition-colors"
                  >
                    <div className="font-medium text-slate-800">Ground Operations</div>
                    <div className="text-sm text-gray-600">For booth management and volunteers</div>
                  </button>

                  <button
                    onClick={() => {
                      const contactData: ContactFormData = {
                        name: "WhatsApp User",
                        email: "whatsapp@temp.com",
                        phone: "WhatsApp",
                        contactType: "whatsapp",
                      }

                      emailService.scheduleFollowUpSequence(contactData)

                      window.open(
                        "https://wa.me/919876543210?text=Hello! I'd like to know about your voter analytics and polling services. What insights can you provide?",
                        "_blank",
                      )
                      setWhatsappSubmitted(true)
                    }}
                    className="w-full text-left p-3 bg-gray-50 hover:bg-primary-50 rounded-lg border transition-colors"
                  >
                    <div className="font-medium text-slate-800">Voter Analytics</div>
                    <div className="text-sm text-gray-600">For data-driven insights</div>
                  </button>
                </div>
              </div>

              <div className="bg-primary-50 p-4 rounded-lg border border-primary/20">
                <h5 className="font-semibold text-primary mb-2">WhatsApp Support Hours:</h5>
                <ul className="text-sm text-primary/80 space-y-1">
                  <li>• Monday - Friday: 9 AM - 9 PM</li>
                  <li>• Saturday: 10 AM - 6 PM</li>
                  <li>• Sunday: Emergency support only</li>
                  <li>• Average response time: Under 5 minutes</li>
                </ul>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-8"
            >
              <MessageCircle className="h-16 w-16 text-teal mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 mb-3">WhatsApp Opened!</h3>
              <p className="text-gray-600 mb-6">
                Your WhatsApp chat should open shortly. If it doesn't, you can manually message us at +91 98765 43210.
              </p>
              <Button
                onClick={() => {
                  setWhatsappSubmitted(false)
                  setShowWhatsAppModal(false)
                }}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Close
              </Button>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
