"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Download, CheckCircle } from "lucide-react";
import { MobileNav } from "@/components/mobile-nav";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

type CareerOpportunity = {
  id: number;
  title: string;
  icon: string;
  description: string;
  hasJD: boolean;
};

const careerOpportunities: CareerOpportunity[] = [
  {
    id: 1,
    title: "Tech Engineer",
    icon: "💻",
    description: "Design and implement innovative tech solutions supporting the mission in empowering grassroots leaders.",
    hasJD: true,
  },
  {
    id: 2,
    title: "Social Media Manager",
    icon: "📱",
    description: "Drive engagement, amplify messaging, and advance DemoTact's mission through strategic social media initiatives.",
    hasJD: true,
  },
  {
    id: 3,
    title: "Campaign Lead",
    icon: "🚀",
    description: "Oversee and execute winning political campaigns.",
    hasJD: true,
  },
  {
    id: 4,
    title: "Policy Analyst",
    icon: "📊",
    description: "Conduct research, analyze policies, and provide insights for advancing effective governance and political reform.",
    hasJD: true,
  },
  {
    id: 5,
    title: "Admin Manager",
    icon: "🗂️",
    description: "Oversee office operations and support campaigns at each step.",
    hasJD: true,
  },
  {
    id: 6,
    title: "Digital Marketing Manager",
    icon: "🌐",
    description: "Drive online engagement and enhance our clients digital presence.",
    hasJD: true,
  },
  {
    id: 7,
    title: "HR Manager",
    icon: "🧑‍💼",
    description: "Oversee all human resources functions and ensure alignment with DemoTact's strategic goals across multiple locations.",
    hasJD: true,
  },
  {
    id: 8,
    title: "Campaign Manager",
    icon: "🎯",
    description: "Develop and execute strategic political campaigns.",
    hasJD: true,
  },
  {
    id: 9,
    title: "Data Analyst",
    icon: "📈",
    description: "Provide actionable insights and support strategic decision-making for political campaigns and governance initiatives.",
    hasJD: true,
  },
];

export default function CareersPage() {
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<CareerOpportunity | null>(null);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  const handleJobApplication = (job: CareerOpportunity) => {
    setSelectedJob(job);
    setShowApplicationModal(true);
  };

  const handleDownloadJD = (jobTitle: string) => {
    // Simulate JD download
    const link = document.createElement("a");
    link.href = "/placeholder.pdf";
    link.download = `${jobTitle.replace(/\s+/g, "_")}_JD.pdf`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-navy text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center ml-32 space-x-3">
            <img src="/demo_logo.png" alt="DEMOTACT" className="h-8 sm:h-10 w-auto" />
          </div>
          <div className="hidden md:flex items-center justify-end space-x-8 ml-auto mr-32">
            <a href="/" className="text-slate-600 hover:text-primary transition-colors">Home</a>
            <a href="#contact" className="text-slate-600 hover:text-primary transition-colors">Contact</a>
          </div>
          <div className="flex items-center space-x-4">
            {/* Minimal MobileNav for Careers */}
            <MobileNavCareers />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-16 text-center bg-gradient-to-br from-primary/80 via-aqua/60 to-teal/80 relative overflow-hidden">
        <div className="relative z-10">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
          >
            Join Our Mission
            <span className="block w-24 h-1 mx-auto mt-4 bg-gradient-to-r from-aqua to-primary rounded-full"></span>
          </h1>
          <p
            className="text-lg sm:text-2xl text-white/90 max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            Be part of a passionate team transforming Indian democracy.<br className="hidden sm:inline" />
            <span className="text-aqua font-semibold">Explore our open roles and apply today!</span>
          </p>
        </div>
        {/* Decorative background shapes */}
        <div className="absolute left-0 top-0 w-48 h-48 bg-aqua/30 rounded-full blur-3xl -z-1 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-1 translate-x-1/3 translate-y-1/3"></div>
      </section>

      {/* Careers Grid */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">Open Positions</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              We are waiting to welcome you! Find your next opportunity below.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerOpportunities.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                className="group bg-white/5 rounded-2xl p-8 flex flex-col shadow-lg hover:shadow-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 min-h-[320px]"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary to-aqua rounded-full mb-5 text-3xl group-hover:scale-110 transition-transform duration-300">
                  <span>{job.icon}</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {job.title}
                  </h3>
                  {job.hasJD && (
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary text-white text-xs px-3 py-1 rounded-md"
                      onClick={() => handleDownloadJD(job.title)}
                    >
                      <Download className="h-3 w-3 mr-1" />
                      JD
                    </Button>
                  )}
                </div>
                <p className="text-white/80 text-sm leading-relaxed flex-1 mb-6">{job.description}</p>
                <Button
                  className="w-full bg-gradient-to-r from-teal to-primary hover:from-primary hover:to-aqua text-white font-semibold py-3 rounded-md transition-all duration-300 hover:shadow-lg"
                  onClick={() => handleJobApplication(job)}
                >
                  APPLY NOW
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <Dialog open={showApplicationModal} onOpenChange={setShowApplicationModal}>
        <DialogContent className="max-w-lg bg-white text-slate-900 rounded-xl shadow-xl overflow-y-auto max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              {selectedJob !== null ? (
                <>
                  <div className="w-8 h-8 bg-gradient-to-br from-teal to-primary rounded-full flex items-center justify-center mr-3 text-2xl">
                    <span>{selectedJob.icon}</span>
                  </div>
                  Apply for {selectedJob.title}
                </>
              ) : null}
            </DialogTitle>
            <DialogDescription>
              Please fill out the application form below. We'll review your application and get back to you soon.
            </DialogDescription>
          </DialogHeader>
          {applicationSubmitted ? (
            <div className="text-center py-6">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Application Submitted!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for your interest in the {selectedJob?.title} position. Our HR team will review your application and contact you within 5-7 business days.
              </p>
              <Button
                onClick={() => {
                  setApplicationSubmitted(false);
                  setShowApplicationModal(false);
                  setSelectedJob(null);
                }}
                className="bg-primary hover:bg-primary/90"
              >
                Close
              </Button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setApplicationSubmitted(true);
              }}
              className="grid gap-4 py-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                  <Input type="text" placeholder="First Name" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                  <Input type="text" placeholder="Last Name" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <Input type="email" placeholder="your@email.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <Input type="tel" placeholder="+91 XXXXX XXXXX" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Current Location *</label>
                <Input type="text" placeholder="City, State" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience *</label>
                <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700" required>
                  <option value="">Select experience</option>
                  <option value="0-1">0-1 years</option>
                  <option value="2-3">2-3 years</option>
                  <option value="4-5">4-5 years</option>
                  <option value="6-10">6-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
                <Textarea placeholder="Tell us why you're interested in this position and what makes you a great fit..." rows={4} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Resume/CV *</label>
                <Input type="file" accept=".pdf,.doc,.docx" required />
                <p className="text-xs text-gray-500 mt-1">Please upload your resume in PDF, DOC, or DOCX format</p>
              </div>
              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowApplicationModal(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button type="submit" className="flex-1 bg-teal hover:bg-teal text-white">
                  Submit Application
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>

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
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white hover:border-primary bg-transparent">
                  <MessageCircle className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white hover:border-primary bg-transparent">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white hover:border-primary bg-transparent">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Campaign Strategy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Digital Marketing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Booth Management</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Voter Analytics</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Political Branding</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#team" className="hover:text-primary transition-colors">Our Team</a></li>
                <li><a href="#cases" className="hover:text-primary transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center"><Phone className="h-4 w-4 mr-2" />+91 98765 43210</div>
                <div className="flex items-center"><Mail className="h-4 w-4 mr-2" />hello@demotact.in</div>
                <div className="flex items-start"><MapPin className="h-4 w-4 mr-2 mt-1" /><div>123 Political Plaza<br />New Delhi, India 110001</div></div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 DEMOTACT. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function MobileNavCareers() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden relative z-50"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
      </Button>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsOpen(false)}>
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <img src="/demo_logo.png" alt="DEMOTACT" className="h-8 w-auto" />
            </div>
            <nav className="flex-1 px-6 py-8">
              <ul className="space-y-6">
                <li>
                  <a href="/" className="flex items-center space-x-4 text-lg text-gray-700 hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-primary/5" onClick={() => setIsOpen(false)}>
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a href="#contact" className="flex items-center space-x-4 text-lg text-gray-700 hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-primary/5" onClick={() => setIsOpen(false)}>
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
} 