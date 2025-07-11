import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.error(e, `errored out requesting / api`);
    }
  };

  useEffect(() => {
    helloWorldApi();
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Création de Miniatures YouTube",
      description: "Des miniatures accrocheuses qui augmentent votre taux de clic",
      icon: "🎨",
      features: ["Design personnalisé", "Optimisation CTR", "Livraison rapide"]
    },
    {
      title: "Montage Vidéo Professionnel",
      description: "Montage de qualité professionnelle pour vos contenus",
      icon: "🎬",
      features: ["Montage créatif", "Effets visuels", "Synchronisation audio"]
    },
    {
      title: "Branding & Identité",
      description: "Création de votre identité visuelle YouTube",
      icon: "🎯",
      features: ["Logo personnalisé", "Bannière chaîne", "Cohérence visuelle"]
    }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      role: "YouTubeuse Gaming",
      content: "Mes vues ont augmenté de 300% grâce à leurs miniatures ! Service exceptionnel.",
      rating: 5
    },
    {
      name: "Thomas Martin",
      role: "Créateur Tech",
      content: "Qualité professionnelle et livraison ultra-rapide. Je recommande vivement !",
      rating: 5
    },
    {
      name: "Sophie Laurent",
      role: "Lifestyle Creator",
      content: "Ils comprennent parfaitement les tendances YouTube. Résultats garantis !",
      rating: 5
    }
  ];

  const portfolioItems = [
    {
      title: "Gaming Thumbnails",
      description: "Miniatures pour chaînes gaming",
      image: "https://images.pexels.com/photos/7562106/pexels-photo-7562106.jpeg"
    },
    {
      title: "Tech Reviews",
      description: "Designs pour reviews tech",
      image: "https://images.pexels.com/photos/8254894/pexels-photo-8254894.jpeg"
    },
    {
      title: "Lifestyle Content",
      description: "Miniatures lifestyle & beauté",
      image: "https://images.pexels.com/photos/7818237/pexels-photo-7818237.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">YT Studio</div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-600 hover:text-blue-600 transition-colors">Portfolio</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Témoignages</a>
              <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1548328928-34db1c5fcc1f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxZb3VUdWJlJTIwdGh1bWJuYWlsfGVufDB8fHxibHVlfDE3NTIyNjQzNzZ8MA&ixlib=rb-4.1.0&q=85')`
          }}
        ></div>
        
        <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Créez des Miniatures
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Irrésistibles
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Boostez vos vues YouTube avec nos miniatures professionnelles et notre montage vidéo de qualité
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Commencer Maintenant
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105">
              Voir Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des solutions complètes pour faire exploser votre chaîne YouTube
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-xl border-2 cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                  activeService === index ? 'border-blue-500 shadow-2xl' : 'border-gray-200'
                }`}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <span className="text-blue-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez nos créations qui ont boosté les chaînes de nos clients
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1513151233558-d860c5398176?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxZb3VUdWJlJTIwdGh1bWJuYWlsfGVufDB8fHxibHVlfDE3NTIyNjQzNzZ8MA&ixlib=rb-4.1.0&q=85')`
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des résultats qui parlent d'eux-mêmes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/14016239/pexels-photo-14016239.png')`
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Prêt à Booster Votre Chaîne ?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Contactez-nous pour un devis personnalisé et gratuit
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Nom</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Chaîne YouTube</label>
                  <input
                    type="url"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="https://youtube.com/@votre-chaine"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Décrivez votre projet..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg"
                >
                  Demander un Devis Gratuit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-4">YT Studio</div>
              <p className="text-gray-400">
                Votre partenaire créatif pour dominer YouTube
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Miniatures YouTube</li>
                <li>Montage vidéo</li>
                <li>Branding</li>
                <li>Conseils créatifs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contact@ytstudio.com</li>
                <li>+33 1 23 45 67 89</li>
                <li>Paris, France</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <span className="sr-only">YouTube</span>
                  🎥
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <span className="sr-only">Instagram</span>
                  📸
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <span className="sr-only">Twitter</span>
                  🐦
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 YT Studio. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;