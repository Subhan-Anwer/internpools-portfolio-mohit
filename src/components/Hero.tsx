import profileImage from '@/assets/profile-image.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-32">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-lg text-text-secondary font-medium">Hello, my name is</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
                Mohit Sehrawat
              </h1>
              <div className="flex items-center space-x-2 text-xl lg:text-2xl">
                <span className="text-text-primary">I'm a</span>
                <span className="gradient-text font-bold">Full Stack Developer</span>
              </div>
            </div>

            <p className="text-lg text-text-secondary leading-relaxed max-w-lg">
              Passionate developer with strong administrative & communication skills, 
              good attention to detail & the ability to write efficient code.
            </p>

            <div className="flex gap-4">
              <button className="btn-primary">
                Resume
              </button>
              <button 
                className="btn-outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Red Background Circle */}
              <div className="absolute inset-0 w-80 h-80 bg-brand-red rounded-full transform rotate-12 opacity-20"></div>
              <div className="absolute inset-2 w-76 h-76 bg-brand-red rounded-full transform -rotate-6 opacity-40"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-strong bg-gradient-to-br from-brand-red to-brand-red-dark p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img
                    src={profileImage}
                    alt="Mohit Sehrawat - Full Stack Developer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col space-y-4 z-40">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-brand-red text-white rounded-full flex items-center justify-center hover:bg-brand-red-dark transition-colors shadow-medium hover:shadow-strong hover:scale-110 transform duration-300"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
          </svg>
        </a>
        
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-brand-red text-white rounded-full flex items-center justify-center hover:bg-brand-red-dark transition-colors shadow-medium hover:shadow-strong hover:scale-110 transform duration-300"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
          </svg>
        </a>
        
        <a 
          href="mailto:contact@mohit.dev" 
          className="w-12 h-12 bg-brand-red text-white rounded-full flex items-center justify-center hover:bg-brand-red-dark transition-colors shadow-medium hover:shadow-strong hover:scale-110 transform duration-300"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;