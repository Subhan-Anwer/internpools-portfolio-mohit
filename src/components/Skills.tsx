const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "JavaScript", level: 88, icon: "🟨" },
        { name: "TypeScript", level: 82, icon: "🔷" },
        { name: "HTML5", level: 95, icon: "🌐" },
        { name: "CSS3", level: 90, icon: "🎨" },
        { name: "Tailwind CSS", level: 85, icon: "🌪️" }
      ]
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Express.js", level: 80, icon: "🚀" },
        { name: "MongoDB", level: 78, icon: "🍃" },
        { name: "Python", level: 75, icon: "🐍" },
        { name: "PostgreSQL", level: 70, icon: "🐘" },
        { name: "REST APIs", level: 88, icon: "🔗" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 85, icon: "📝" },
        { name: "Docker", level: 70, icon: "🐳" },
        { name: "AWS", level: 65, icon: "☁️" },
        { name: "Redux", level: 80, icon: "🔄" },
        { name: "Figma", level: 75, icon: "🎯" },
        { name: "Jest", level: 70, icon: "🧪" }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-surface">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-brand-red mx-auto mb-4"></div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different technologies and tools.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="portfolio-card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-text-primary">{skill.name}</span>
                      </div>
                      <span className="text-sm text-text-secondary font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-2 bg-gradient-to-r from-brand-red to-brand-red-light rounded-full transition-all duration-1000 ease-out animate-pulse"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">50+</div>
              <p className="text-text-secondary">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">200+</div>
              <p className="text-text-secondary">Students Mentored</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">2+</div>
              <p className="text-text-secondary">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">15+</div>
              <p className="text-text-secondary">Technologies Mastered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;