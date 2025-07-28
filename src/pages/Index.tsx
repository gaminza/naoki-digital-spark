
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  TrendingUp, 
  Target, 
  Code, 
  Smartphone, 
  BarChart3,
  Users,
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  ExternalLink
} from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Globe,
      title: "Criação de Sites",
      description: "Sites profissionais, responsivos e otimizados para conversão",
      features: ["Design Responsivo", "SEO Otimizado", "Performance Rápida"]
    },
    {
      icon: TrendingUp,
      title: "Marketing Digital",
      description: "Estratégias completas para aumentar sua presença online",
      features: ["Estratégia Digital", "Conteúdo", "Automação"]
    },
    {
      icon: Target,
      title: "Tráfego Pago",
      description: "Campanhas otimizadas para maximizar seu ROI",
      features: ["Google Ads", "Facebook Ads", "Analytics"]
    }
  ];

  const portfolio = [
    {
      title: "E-commerce Fashion",
      category: "Criação de Site",
      image: "photo-1483058712412-4245e9b90334",
      tech: ["React", "E-commerce", "SEO"]
    },
    {
      title: "Campanha Tech Startup",
      category: "Tráfego Pago",
      image: "photo-1461749280684-dccba630e2f6",
      tech: ["Google Ads", "Conversão", "Analytics"]
    },
    {
      title: "SaaS Marketing",
      category: "Marketing Digital",
      image: "photo-1488590528505-98d2b5aba04b",
      tech: ["Automação", "CRM", "Lead Gen"]
    },
    {
      title: "App Mobile",
      category: "Desenvolvimento",
      image: "photo-1487058792275-0ad4aaf24ca7",
      tech: ["React Native", "UX/UI", "API"]
    }
  ];

  const stats = [
    { number: "1111+", label: "Projetos Entregues" },
    { number: "95%", label: "Clientes Satisfeitos" },
    { number: "300%", label: "ROI Médio" },
    { number: "24h", label: "Suporte" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-purple-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              NAOKI
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-purple-400 transition-colors">Home</a>
              <a href="#services" className="text-gray-300 hover:text-purple-400 transition-colors">Serviços</a>
              <a href="#portfolio" className="text-gray-300 hover:text-purple-400 transition-colors">Portfolio</a>
              <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">Sobre</a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contato</a>
            </div>
            <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
              Orçamento Grátis
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30">
              🚀 Transforme sua presença digital
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent leading-tight">
              Criamos Sites que
              <span className="block">Convertem</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Especialistas em criação de sites, marketing digital e tráfego pago. 
              Transformamos sua ideia em resultados reais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-lg px-8 py-6">
                Começar Projeto <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 text-lg px-8 py-6">
                Ver Portfolio <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-black/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-600/20 text-purple-300 border-purple-500/30">
              Nossos Serviços
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Soluções Completas
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Oferecemos tudo que você precisa para dominar o mundo digital
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-black/40 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
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

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-600/20 text-purple-300 border-purple-500/30">
              Portfolio
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Projetos que Impressionam
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Veja alguns dos projetos que desenvolvemos para nossos clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="bg-black/40 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group cursor-pointer overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=600&q=80`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-purple-600 text-white">
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="border-purple-500/30 text-purple-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-600/20 text-purple-300 border-purple-500/30">
                Sobre a NAOKI
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Inovação é nosso DNA
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Somos uma agência especializada em transformar ideias em soluções digitais de alto impacto. 
                Com foco em resultados, combinamos criatividade, tecnologia e estratégia para levar seu negócio ao próximo nível.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Zap className="h-8 w-8 text-purple-400" />
                  <div>
                    <h4 className="font-semibold text-white">Performance</h4>
                    <p className="text-sm text-gray-300">Sites ultrarrápidos</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-8 w-8 text-purple-400" />
                  <div>
                    <h4 className="font-semibold text-white">Experiência</h4>
                    <p className="text-sm text-gray-300">UX otimizada</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="h-8 w-8 text-purple-400" />
                  <div>
                    <h4 className="font-semibold text-white">Resultados</h4>
                    <p className="text-sm text-gray-300">ROI comprovado</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Code className="h-8 w-8 text-purple-400" />
                  <div>
                    <h4 className="font-semibold text-white">Tecnologia</h4>
                    <p className="text-sm text-gray-300">Stack moderna</p>
                  </div>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
                Conhecer Equipe
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
                alt="Tecnologia"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black/20">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-purple-600/20 text-purple-300 border-purple-500/30">
            Entre em Contato
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Pronto para Começar?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Vamos conversar sobre seu projeto e descobrir como podemos ajudar você a alcançar seus objetivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-lg px-8 py-6">
              WhatsApp
            </Button>
            <Button size="lg" variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 text-lg px-8 py-6">
              E-mail
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-purple-500/20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-0">
              NAOKI
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>© 2024 NAOKI. Todos os direitos reservados.</p>
              <p className="text-sm mt-1">Criação de Sites • Marketing Digital • Tráfego Pago</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
