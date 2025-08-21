import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const About = () => {
  const experiences = [
    {
      id: 'about',
      title: 'About me',
      content: {
        title: "Passionate Full Stack Developer",
        description: "Hello! My name is Mohit Sehrawat & I enjoy creating things that live on the internet. I'm a passionate Developer, with strong administrative & communication skills, good attention to detail & the ability to write efficient code.",
        highlights: [
          "🚀 Full-Stack Web Development expertise",
          "👥 Mentored 200+ students in web development",
          "💡 Strong problem-solving and analytical skills",
          "🎯 Focus on writing clean, efficient code"
        ]
      }
    },
    {
      id: 'kyndryl',
      title: 'Exp-Kyndryl',
      content: {
        title: "Full Stack Developer at Kyndryl",
        description: "Currently working as a Full Stack Developer at IBM's spin-off giant 'Kyndryl'. After much preparation, dedication and consistency, I achieved this milestone. Beginning the next chapter of my career, I am eager to Learn, Grow and Contribute to my new role.",
        highlights: [
          "🏢 Working at IBM's spin-off giant Kyndryl",
          "⚡ Developing enterprise-level applications",
          "🔧 Full-stack development with modern technologies",
          "📈 Contributing to large-scale projects"
        ]
      }
    },
    {
      id: 'masai',
      title: 'Exp-Masai',
      content: {
        title: "Instructor & Mentor at Masai School",
        description: "After completing my Full-Stack Web Development course, I got the opportunity to become an Instructor for newly joined students. I helped 200+ students clear their doubts related to web development and DSA curriculum & guided them during their entire course.",
        highlights: [
          "🎓 Mentored 200+ aspiring developers",
          "📚 Taught full-stack web development curriculum",
          "💻 Guided students through DSA concepts",
          "🌟 Helped shape the next generation of developers"
        ]
      }
    }
  ];

  return (
    <section id="about" className="section-padding bg-surface">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            All About Me And My Experience
          </h2>
          <div className="w-20 h-1 bg-brand-red mx-auto"></div>
        </div>

        <Tabs defaultValue="about" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white shadow-soft rounded-xl p-1">
            {experiences.map((exp) => (
              <TabsTrigger 
                key={exp.id} 
                value={exp.id}
                className="data-[state=active]:bg-brand-red data-[state=active]:text-white font-medium py-3 rounded-lg transition-all duration-300"
              >
                {exp.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {experiences.map((exp) => (
            <TabsContent key={exp.id} value={exp.id} className="mt-8">
              <div className="portfolio-card p-8">
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  {exp.content.title}
                </h3>
                <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                  {exp.content.description}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {exp.content.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-2 text-text-secondary">
                      <span className="text-lg">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default About;