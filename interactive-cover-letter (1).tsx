import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { User, Rocket, Heart, Brain, Zap, CheckCircle, ChevronDown, ChevronUp, Mail, Linkedin, Phone, MapPin } from 'lucide-react';

const InteractiveCoverLetter = () => {
  const [expandedAchievement, setExpandedAchievement] = useState(null);
  const [activeSection, setActiveSection] = useState('achievements');

  // Define sections array
  const sections = [
    { id: 'achievements', title: 'Key Achievements' },
    { id: 'values', title: 'Core Values' }
  ];

  // Custom brand colors
  const brandColors = {
    primary: '#72556b',    // Deep mauve
    secondary: '#bdb7d8',  // Soft lavender
  };

  // Contact info array for structured rendering
  const contactInfo = [
    { icon: <Mail className="w-4 h-4" />, text: "sumrudln@gmail.com" },
    { icon: <Linkedin className="w-4 h-4" />, text: "www.linkedin.com/in/sumrudilanucuncu" },
    { icon: <Phone className="w-4 h-4" />, text: "+31628130036" },
    { icon: <MapPin className="w-4 h-4" />, text: "Amsterdam, NL" },
  ];

  const achievements = [
    {
      icon: <Rocket className="w-6 h-6 text-blue-600" />,
      title: "Process Innovation",
      metric: "89% decrease",
      description: "in email creation time through no-code automation",
      details: "Developed and implemented automated frameworks using no-code tools to streamline email creation process, resulting in significant time savings and elimination of manual data processing errors."
    },
    {
      icon: <Brain className="w-6 h-6 text-blue-600" />,
      title: "Customer Support",
      metric: "11+ customers",
      description: "supported daily with analytical problem resolution",
      details: "Provided comprehensive support through detailed problem analysis and solution development, maintaining high customer satisfaction while handling complex technical issues."
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      title: "Technical Implementation",
      metric: "46% reduction",
      description: "in reporting time using Supermetrics solutions",
      details: "Successfully implemented Supermetrics automation solutions for monthly reporting, dramatically improving efficiency while maintaining data accuracy and report quality."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      title: "Process Improvement",
      metric: "91% reduction",
      description: "in campaign activation decision-making time",
      details: "Led initiative to optimize campaign activation workflow, resulting in faster decision-making processes while maintaining quality and accuracy of campaigns."
    }
  ];

  const values = [
    {
      title: "Meaningful work",
      description: "Committed to projects that create positive impact and align with personal values"
    },
    {
      title: "Sustainability",
      description: "Passionate about environmental consciousness and sustainable business practices"
    },
    {
      title: "Continuous growth",
      description: "Driven by restless curiosity and constant desire to learn and improve"
    },
    {
      title: "Innovation",
      description: "Consistently seeking new and better ways to solve problems"
    },
    {
      title: "Adaptability",
      description: "Thriving in fast-changing environments and embracing new challenges"
    }
  ];

  // Rest of the component remains the same...
  return (
    <div className="max-w-4xl mx-auto space-y-6 p-6">
      {/* Enhanced Header Section */}
      <Card className={`overflow-hidden`}>
        <div className="h-2 bg-gradient-to-r" style={{ 
          backgroundImage: `linear-gradient(to right, ${brandColors.primary}, ${brandColors.secondary})` 
        }} />
        <CardHeader className="space-y-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            {/* Name and Title */}
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full" style={{ backgroundColor: brandColors.secondary }}>
                <User className="w-8 h-8" style={{ color: brandColors.primary }} />
              </div>
              <div>
                <h1 className="text-2xl font-bold" style={{ color: brandColors.primary }}>
                  Sumru Dilan Ucuncu
                </h1>
                <p className="text-lg" style={{ color: brandColors.primary }}>
                  Low Code Developer Application
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col gap-2 text-sm">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-2" style={{ color: brandColors.primary }}>
                  {info.icon}
                  <span>{info.text}</span>
                </div>
              ))}
              <div className="flex items-center gap-2" style={{ color: brandColors.primary }}>
                <span className="font-medium">✓ No EU work permit needed</span>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Navigation Tabs */}
      <div className="flex gap-2 mb-4">
        {sections.map(section => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeSection === section.id 
                ? 'text-white' 
                : 'hover:bg-opacity-80'
            }`}
            style={{
              backgroundColor: activeSection === section.id ? brandColors.primary : brandColors.secondary,
              color: activeSection === section.id ? 'white' : brandColors.primary
            }}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* Achievement Cards */}
      {activeSection === 'achievements' && (
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold" style={{ color: brandColors.primary }}>
              Key Achievements
            </h2>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="p-4 border rounded-lg transition-colors cursor-pointer hover:bg-opacity-10"
                  style={{
                    borderColor: brandColors.secondary,
                    backgroundColor: expandedAchievement === index ? `${brandColors.secondary}20` : 'transparent'
                  }}
                  onClick={() => setExpandedAchievement(expandedAchievement === index ? null : index)}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div style={{ color: brandColors.primary }}>{achievement.icon}</div>
                    <h3 className="font-semibold" style={{ color: brandColors.primary }}>
                      {achievement.title}
                    </h3>
                    {expandedAchievement === index ? 
                      <ChevronUp className="w-4 h-4 ml-auto" style={{ color: brandColors.primary }} /> : 
                      <ChevronDown className="w-4 h-4 ml-auto" style={{ color: brandColors.primary }} />
                    }
                  </div>
                  <p className="text-2xl font-bold mb-1" style={{ color: brandColors.primary }}>
                    {achievement.metric}
                  </p>
                  <p className="text-gray-600">{achievement.description}</p>
                  {expandedAchievement === index && (
                    <div className="mt-4 pt-4 border-t text-gray-700" style={{ borderColor: brandColors.secondary }}>
                      {achievement.details}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Values Section */}
      {activeSection === 'values' && (
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Heart className="w-6 h-6" style={{ color: brandColors.primary }} />
              <h2 className="text-xl font-semibold" style={{ color: brandColors.primary }}>
                Core Values
              </h2>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="p-4 border rounded-lg transition-colors"
                  style={{ borderColor: brandColors.secondary }}
                >
                  <h3 className="font-semibold text-lg mb-2" style={{ color: brandColors.primary }}>
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Call to Action */}
      <Card style={{ backgroundColor: `${brandColors.secondary}20` }}>
        <CardContent className="p-6">
          <p className="text-center" style={{ color: brandColors.primary }}>
            "If this has sparked your curiosity, I would love to have a detailed conversation about the possibility of our collaboration."
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default InteractiveCoverLetter;
