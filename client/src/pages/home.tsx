import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/contact-form";
import { 
  Home as HomIcon, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Shield, 
  Users, 
  Euro, 
  Medal, 
  Hammer, 
  Wrench, 
  Droplets, 
  Thermometer, 
  AlertTriangle, 
  Search,
  Star,
  Menu,
  X,
  Facebook,
  Instagram,
  Linkedin,
  CheckCircle,
  ChevronDown,
  HelpCircle
} from "lucide-react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const links = document.querySelectorAll('a[href^="#"]');
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href')?.substring(1);
          const targetElement = document.getElementById(targetId || '');
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
          setIsMobileMenuOpen(false);
        });
      });
    };

    handleScroll();
  }, []);

  const services = [
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "Ремонт на покрив - Керемиди и улуци",
      description: "Експертен ремонт на покриви в София - подмяна на счупени керемиди, ремонт на течове, възстановяване на улуци и водосточни системи.",
      features: ["Подмяна на керемиди", "Ремонт на течове в покрива", "Възстановяване на улуци", "Ремонт на водосточни тръби"]
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Нов покрив - Строителство и реконструкция",
      description: "Изграждане на нови покриви и цялостна реконструкция на стари покриви с висококачествени материали.",
      features: ["Нов керемиден покрив", "Метален покрив с антикорозийна защита", "Битумна покривна мембрана", "Покривна конструкция"]
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Хидроизолация срещу течове",
      description: "Професионална хидроизолация на покриви в София - спираме течовете завинаги с гаранция.",
      features: ["Битумна хидроизолация", "PVC покривни мембрани", "Течна полиуретанова изолация", "Ремонт на течове"]
    },
    {
      icon: <Thermometer className="h-8 w-8" />,
      title: "Топлоизолация на покрив",
      description: "Енергийно ефективна топлоизолация на покриви в София - намалява разходите за отопление с до 40%.",
      features: ["Минерална вата за покриви", "Пенополистирол XPS", "PIR панели", "Изолация на тавански пространства"]
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "Спешен ремонт на покрив 24/7",
      description: "Спешни услуги при течове и аварийни ситуации с покрива в София. Бърза намеса при всякакво време.",
      features: ["Спешен ремонт на течове", "Временна защита на покрива", "Авариен ремонт след буря", "24/7 готовност"]
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Безплатен оглед на покрив в София",
      description: "Професионален безплатен оглед на покрива в София и областта с подробна оценка на състоянието и безплатна оферта.",
      features: ["Безплатна консултация на място", "Детайлна оценка на покрива", "Безплатна писмена оферта", "Препоръки за ремонт"]
    }
  ];

  const testimonials = [
    {
      name: "Мария Петрова",
      location: "София",
      rating: 5,
      text: "Чудесен ремонт на покрива! Подмениха всички счупени керемиди и направиха хидроизолация. Няма повече течове и работата е с гаранция. Препоръчвам RoofBot за ремонт на покриви в София!"
    },
    {
      name: "Иван Георгиев",
      location: "Пловдив", 
      rating: 5,
      text: "Спешен ремонт на покрив след буря - RoofBot дойдоха същия ден! Спряха течовете и направиха временна защита. На следващия ден завършиха ремонта на керемидите. Отлична услуга!"
    },
    {
      name: "Димитър Стоянов",
      location: "Варна",
      rating: 5,
      text: "Професионален ремонт на покрив с хидроизолация! Използваха качествени материали - битумна мембрана и нови керемиди. Цената беше много разумна за този вид покривни работи. Препоръчвам!"
    }
  ];

  const faqData = [
    {
      question: "Колко струва ремонт на покрив в София?",
      answer: "Цената за ремонт на покрив зависи от обхвата на работата. Подмяна на керемиди започва от 15 лв/м², хидроизолация от 25 лв/м². Предлагаме безплатен оглед и оферта без ангажимент."
    },
    {
      question: "Колко време отнема ремонтът на покрив?",
      answer: "Обикновен ремонт на керемиди отнема 1-2 дни. По-сложни ремонти с хидроизолация могат да отнемат 3-5 дни. При спешни течове реагираме в рамките на 2-4 часа."
    },
    {
      question: "Предлагате ли гаранция на ремонта на покрив?",
      answer: "Да, предлагаме 10 години гаранция на всички наши покривни работи и материали. Гаранцията покрива както работа, така и използваните материали."
    },
    {
      question: "Какви материали използвате за ремонт на покриви?",
      answer: "Използваме висококачествени материали - оригинални керемиди, битумни мембрани на Tegola, полиуретанова изолация. Всички материалени са с европейски сертификати."
    },
    {
      question: "Правите ли безплатен оглед на покрива?",
      answer: "Да, предлагаме напълно безплатен оглед в София и областта (до 50 км). Огледът включва професионална оценка, снимки и подробна писмена оферта."
    },
    {
      question: "Обслужвате ли спешни ремонти на покриви?",
      answer: "Да, предлагаме 24/7 спешни услуги при течове и аварийни ситуации. При спешни случаи реагираме в рамките на 2-4 часа с временна защита и авариен ремонт."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-textDark">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <HomIcon className="text-primary text-2xl h-8 w-8" />
              <span className="text-2xl font-bold text-secondary">RoofBot</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-secondary hover:text-primary transition-colors">Начало</a>
              <a href="#services" className="text-secondary hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-secondary hover:text-primary transition-colors">За нас</a>
              <a href="#testimonials" className="text-secondary hover:text-primary transition-colors">Отзиви</a>
              <a href="#faq" className="text-secondary hover:text-primary transition-colors">Въпроси</a>
              <Button asChild className="bg-primary text-white hover:bg-blue-700">
                <a href="#contact">
                  <Phone className="mr-2 h-4 w-4" />
                  Свържи се
                </a>
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden text-secondary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
          
          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-secondary hover:text-primary transition-colors">Начало</a>
                <a href="#services" className="text-secondary hover:text-primary transition-colors">Услуги</a>
                <a href="#about" className="text-secondary hover:text-primary transition-colors">За нас</a>
                <a href="#testimonials" className="text-secondary hover:text-primary transition-colors">Отзиви</a>
                <a href="#faq" className="text-secondary hover:text-primary transition-colors">Въпроси</a>
                <Button asChild className="bg-primary text-white hover:bg-blue-700 w-fit">
                  <a href="#contact">
                    <Phone className="mr-2 h-4 w-4" />
                    Свържи се
                  </a>
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-primary to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
          }}
        ></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Професионален ремонт на покрив<br />в София и областта
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Експертен ремонт на покриви, керемиди и хидроизолация с над 15 години опит. Безплатен оглед и гаранция. Обадете се: 0894 741 883
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-12">
            <Button asChild size="lg" className="bg-accent text-white hover:bg-orange-600">
              <a href="#contact">
                <Search className="mr-2 h-5 w-5" />
                Безплатен оглед
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="tel:+359894741883">
                <Phone className="mr-2 h-5 w-5" />
                0894 741 883
              </a>
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
            <div className="flex items-center">
              <Shield className="text-accent mr-2 h-5 w-5" />
              <span>10 години гаранция</span>
            </div>
            <div className="flex items-center">
              <Clock className="text-accent mr-2 h-5 w-5" />
              <span>24/7 спешни услуги</span>
            </div>
            <div className="flex items-center">
              <Medal className="text-accent mr-2 h-5 w-5" />
              <span>Лицензирани специалисти</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-neutral">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Ремонт на покрив и покривни услуги</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Специализираме се в ремонт на покриви в София - керемиди, метални покриви, хидроизолация и топлоизолация. Професионални покривари с 15+ години опит.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="text-primary mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-secondary mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="text-accent mr-2 h-4 w-4" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Защо да изберете RoofBot за ремонт на покрив?</h2>
              <p className="text-xl text-gray-600 mb-8">
                С над 15 години опит в ремонт на покриви в София, ние сме водещата фирма за покривни работи в региона. Специализираме се в професионален ремонт на керемиди, хидроизолация и спешни услуги.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-white p-3 rounded-lg">
                    <Medal className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary mb-2">15+ години опит</h3>
                    <p className="text-gray-600">Дългогодишен опит в покривни работи и стотици доволни клиенти.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-white p-3 rounded-lg">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary mb-2">Пълна гаранция</h3>
                    <p className="text-gray-600">10 години гаранция на всички наши услуги и материали.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-white p-3 rounded-lg">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary mb-2">Професионален екип</h3>
                    <p className="text-gray-600">Лицензирани и обучени специалисти с високи стандарти за качество.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-white p-3 rounded-lg">
                    <Euro className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary mb-2">Конкурентни цени</h3>
                    <p className="text-gray-600">Справедливи цени и прозрачни оферти без скрити такси.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:order-first">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Професионални покривари работят на покрив с професионално оборудване" 
                className="rounded-xl shadow-xl w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-neutral">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Какво казват нашите клиенти</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Прочетете отзивите на нашите доволни клиенти
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex text-accent text-sm">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600 text-sm">{testimonial.rating}.0</span>
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-secondary">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Често задавани въпроси за ремонт на покрив</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Отговори на най-често задаваните въпроси относно ремонт на покриви, цени и услуги в София
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {faqData.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  className="w-full text-left p-6 bg-neutral rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-secondary pr-4">{faq.question}</h3>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-500 transition-transform ${
                        openFaqIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>
                {openFaqIndex === index && (
                  <div className="p-6 bg-white border-l-4 border-primary">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-neutral">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Свържете се с нас</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Готови сме да отговорим на вашите въпроси и да ви предложим безплатен оглед
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-secondary mb-8">Заявете безплатен оглед</h3>
              <ContactForm />
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-secondary mb-8">Контактна информация</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-white p-3 rounded-lg">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Телефон</h4>
                    <p className="text-gray-600">
                      <a href="tel:+359894741883" className="hover:text-primary transition-colors">0894 741 883</a>
                    </p>
                    <p className="text-sm text-gray-500">24/7 за спешни случаи</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-white p-3 rounded-lg">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Email</h4>
                    <p className="text-gray-600">
                      <a href="mailto:info@remonti-stomova.com" className="hover:text-primary transition-colors">info@remonti-stomova.com</a>
                    </p>
                    <p className="text-sm text-gray-500">Отговаряме в рамките на 24 часа</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-white p-3 rounded-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Офис</h4>
                    <p className="text-gray-600">ул. "Васил Левски" 123<br />София 1000, България</p>
                    <p className="text-sm text-gray-500">Пон-Пет: 8:00 - 18:00</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-white p-3 rounded-lg">
                    <Wrench className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Обслужваме</h4>
                    <p className="text-gray-600">София и области<br />Радиус до 50 км</p>
                    <p className="text-sm text-gray-500">Безплатен оглед в района</p>
                  </div>
                </div>
              </div>
              
              <Card className="bg-neutral">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-secondary mb-3">Работно време</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Понеделник - Петък</span>
                      <span className="font-medium">8:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Събота</span>
                      <span className="font-medium">9:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Неделя</span>
                      <span className="font-medium">Само спешни случаи</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <HomIcon className="text-primary text-2xl h-8 w-8" />
                <span className="text-2xl font-bold">RoofBot</span>
              </div>
              <p className="text-gray-300 mb-4">
                Професионален ремонт на покриви в София с над 15 години опит. Качество и гаранция, на които можете да се доверите.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Покривни услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#services" className="hover:text-primary transition-colors">Ремонт на покрив София</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Подмяна на керемиди</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Хидроизолация</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Топлоизолация</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Спешни услуги</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#about" className="hover:text-primary transition-colors">За нас</a></li>
                <li><a href="#testimonials" className="hover:text-primary transition-colors">Отзиви</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Контакти</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Портфолио</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Гаранции</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакт</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <Phone className="text-primary mr-2 h-4 w-4" />
                  <a href="tel:+359888123456" className="hover:text-primary transition-colors">0888 123 456</a>
                </div>
                <div className="flex items-center">
                  <Mail className="text-primary mr-2 h-4 w-4" />
                  <a href="mailto:info@roofbot.bg" className="hover:text-primary transition-colors">info@roofbot.bg</a>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-primary mr-2 h-4 w-4" />
                  <span>София, България</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 RoofBot. Всички права запазени.
            </p>
            <div className="flex space-x-6 text-sm text-gray-300">
              <a href="#" className="hover:text-primary transition-colors">Политика за поверителност</a>
              <a href="#" className="hover:text-primary transition-colors">Условия за ползване</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
