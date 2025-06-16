import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Trophy, 
  TrendingUp, 
  Globe, 
  Factory, 
  Users, 
  Target,
  BarChart3,
  Handshake,
  Star,
  MapPin,
  Calendar,
  DollarSign,
  Zap
} from 'lucide-react';
import { useLanguage } from './hooks/useLanguage';
import { LanguageToggle } from './components/LanguageToggle';
import confetti from 'canvas-confetti';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const { currentLanguage, content, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleConfetti = () => {
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 160,
          origin: { x: Math.random(), y: Math.random() - 0.2 }
        });
      }, i * 300);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <LanguageToggle currentLanguage={currentLanguage} onToggle={toggleLanguage} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 opacity-90"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="mb-8">
            <div className="flex items-center justify-center mb-6">
              <Factory className="w-12 h-12 text-amber-400 mr-4" />
              <span className="text-2xl font-bold text-amber-400">×</span>
              <Handshake className="w-12 h-12 text-amber-400 ml-4" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="text-white">Haandbryggeriet</span>
              <br />
              <span className="text-amber-400">&</span>
              <br />
              <span className="text-copper-500">Pinnacle Brands</span>
            </h1>
          </div>
          <p className="text-2xl md:text-3xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            {content.hero.subtitle}
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-24 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Trophy className="w-16 h-16 text-amber-400 mx-auto mb-6" />
            <h2 className="text-5xl font-bold mb-6">{content.heritage.title}</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {content.heritage.description}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-700 p-8 rounded-xl hover:bg-slate-600 transition-all duration-300 group">
              <Calendar className="w-12 h-12 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">{content.heritage.cards.years.title}</h3>
              <p className="text-slate-300">{content.heritage.cards.years.description}</p>
            </div>
            <div className="bg-slate-700 p-8 rounded-xl hover:bg-slate-600 transition-all duration-300 group">
              <Star className="w-12 h-12 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">{content.heritage.cards.award.title}</h3>
              <p className="text-slate-300">{content.heritage.cards.award.description}</p>
            </div>
            <div className="bg-slate-700 p-8 rounded-xl hover:bg-slate-600 transition-all duration-300 group">
              <Zap className="w-12 h-12 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">{content.heritage.cards.position.title}</h3>
              <p className="text-slate-300">{content.heritage.cards.position.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Situation */}
      <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <BarChart3 className="w-16 h-16 text-amber-400 mx-auto mb-6" />
            <h2 className="text-5xl font-bold mb-6">{content.situation.title}</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {content.situation.description}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Challenges */}
            <div className="bg-red-900/20 border border-red-500/30 p-8 rounded-xl">
              <h3 className="text-3xl font-bold mb-6 text-red-400">{content.situation.challenges.title}</h3>
              <div className="space-y-4">
                {content.situation.challenges.items.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <DollarSign className="w-6 h-6 text-red-400 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Opportunities */}
            <div className="bg-green-900/20 border border-green-500/30 p-8 rounded-xl">
              <h3 className="text-3xl font-bold mb-6 text-green-400">{content.situation.opportunities.title}</h3>
              <div className="space-y-4">
                {content.situation.opportunities.items.map((item, index) => {
                  const icons = [Zap, Star, Users, Target];
                  const IconComponent = icons[index] || Zap;
                  return (
                    <div key={index} className="flex items-center">
                      <IconComponent className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Capacity Visualization */}
          <div className="bg-slate-700 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Produksjonskapasitet</h3>
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">500k</div>
                <div className="text-slate-300">{content.situation.capacity.current}</div>
              </div>
              <ArrowRight className="w-8 h-8 text-amber-400" />
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">1,2M</div>
                <div className="text-slate-300">{content.situation.capacity.today}</div>
              </div>
              <ArrowRight className="w-8 h-8 text-amber-400" />
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">2,5M</div>
                <div className="text-slate-300">{content.situation.capacity.investment}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Vision */}
      <section className="py-24 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Handshake className="w-16 h-16 text-amber-400 mx-auto mb-6" />
            <h2 className="text-5xl font-bold mb-6">{content.partnership.title}</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {content.partnership.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-700 to-slate-600 p-8 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <Globe className="w-16 h-16 text-amber-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">{content.partnership.cards.global.title}</h3>
              <p className="text-slate-300">{content.partnership.cards.global.description}</p>
            </div>
            <div className="bg-gradient-to-br from-slate-700 to-slate-600 p-8 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <TrendingUp className="w-16 h-16 text-amber-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">{content.partnership.cards.export.title}</h3>
              <p className="text-slate-300">{content.partnership.cards.export.description}</p>
            </div>
            <div className="bg-gradient-to-br from-slate-700 to-slate-600 p-8 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <Zap className="w-16 h-16 text-amber-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">{content.partnership.cards.craft.title}</h3>
              <p className="text-slate-300">{content.partnership.cards.craft.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Projects */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Target className="w-16 h-16 text-amber-400 mx-auto mb-6" />
            <h2 className="text-5xl font-bold mb-6">{content.growth.title}</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {content.growth.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-slate-700 p-8 rounded-xl border-l-4 border-green-400">
              <h3 className="text-2xl font-bold mb-4 text-green-400">{content.growth.projects.retail.title}</h3>
              <p className="text-slate-300 mb-4">{content.growth.projects.retail.description}</p>
              <div className="text-sm text-slate-400">
                {content.growth.projects.retail.note}
              </div>
            </div>
            <div className="bg-slate-700 p-8 rounded-xl border-l-4 border-blue-400">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">{content.growth.projects.volume.title}</h3>
              <p className="text-slate-300 mb-4">{content.growth.projects.volume.description}</p>
              <div className="text-2xl font-bold text-blue-400">140k liter/år</div>
              <div className="text-sm text-slate-400">{content.growth.projects.volume.note}</div>
            </div>
            <div className="bg-slate-700 p-8 rounded-xl border-l-4 border-amber-400">
              <h3 className="text-2xl font-bold mb-4 text-amber-400">{content.growth.projects.strategic.title}</h3>
              <p className="text-slate-300 mb-4">{content.growth.projects.strategic.description}</p>
              <div className="text-2xl font-bold text-amber-400">200k+ liter</div>
              <div className="text-sm text-slate-400">{content.growth.projects.strategic.note}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-24 bg-gradient-to-br from-amber-900 to-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8">{content.whyNow.title}</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl text-slate-200 mb-8 leading-relaxed">
              {content.whyNow.description}
            </p>
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-4 text-amber-400">{content.whyNow.haandbryggeriet.title}</h3>
                <ul className="space-y-2 text-slate-200">
                  {content.whyNow.haandbryggeriet.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-4 text-amber-400">{content.whyNow.pinnacle.title}</h3>
                <ul className="space-y-2 text-slate-200">
                  {content.whyNow.pinnacle.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <button 
              onClick={handleConfetti}
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-12 py-6 rounded-lg text-2xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"
            >
              {content.whyNow.ctaButton}
              <ArrowRight className="ml-3 w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 border-t border-slate-700">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-6">
            <Factory className="w-8 h-8 text-amber-400 mr-3" />
            <span className="text-xl font-bold">Haandbryggeriet & Pinnacle Brands</span>
          </div>
          <p className="text-slate-400 mb-4">
            {content.footer.subtitle}
          </p>
          <div className="flex justify-center space-x-8 text-sm text-slate-500">
            <a href="https://haandbryggeriet.no" className="hover:text-amber-400 transition-colors">
              haandbryggeriet.no
            </a>
            <a href="https://belmonte.no" className="hover:text-amber-400 transition-colors">
              belmonte.no
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;