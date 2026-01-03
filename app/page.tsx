"use client";

import ThreeBackground from "@/components/three-background";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Cloud,
  Github,
  Globe,
  Linkedin,
  Mail,
  Network,
  Server,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PortfolioPage() {
  const [language, setLanguage] = useState<"en" | "fr" | "es">("en");
  const [activeSection, setActiveSection] = useState("about");

  const translations = {
    en: {
      name: "Mohammed Dahiry",
      tagline: "Cloud, DevOps & Data Engineer",
      subtitle: "Building scalable cloud solutions and Data pipelines",
      nav: {
        about: "About",
        experience: "Experience",
        projects: "Projects",
        contact: "Contact",
      },
      about: {
        title: "About Me",
        description:
          "I'm a passionate IT professional specializing in cloud architecture, system interoperability, and enterprise integration. With expertise in AWS, Azure, and GCP, I design scalable solutions that connect disparate systems and enable seamless data flow across platforms. My work bridges the gap between legacy systems and modern cloud infrastructure, ensuring organizations can innovate while maintaining operational continuity.",
        expertise: "Expertise Areas",
        skills: [
          {
            icon: Cloud,
            title: "Cloud Architecture",
            desc: "AWS, Azure, GCP, Kubernetes",
          },
          {
            icon: Network,
            title: "Interoperability",
            desc: "API Design, Microservices, Integration Patterns",
          },
          {
            icon: Server,
            title: "Infrastructure",
            desc: "DevOps, CI/CD, Infrastructure as Code",
          },
        ],
      },
      experience: {
        title: "Experience",
        timeline: [
          {
            year: "2024 — Present",
            role: "Senior Cloud Architect",
            company: "TechCorp",
            description:
              "Leading cloud migration initiatives and designing multi-cloud strategies for enterprise clients. Implemented microservices architecture reducing deployment time by 60%.",
          },
          {
            year: "2022 — 2024",
            role: "Integration Engineer",
            company: "CloudSystems Inc",
            description:
              "Developed API gateways and integration patterns connecting legacy systems with modern cloud services. Built custom connectors for SAP, Salesforce, and custom applications.",
          },
          {
            year: "2020 — 2022",
            role: "DevOps Engineer",
            company: "StartupHub",
            description:
              "Established CI/CD pipelines and infrastructure automation using Terraform and Ansible. Managed Kubernetes clusters and container orchestration.",
          },
        ],
      },
      projects: {
        title: "Featured Projects",
        items: [
          {
            title: "Cloud Migration Platform",
            description:
              "Architected and deployed a multi-cloud migration tool that automated the transition of 500+ applications from on-premises to AWS/Azure.",
            tags: ["AWS", "Azure", "Terraform", "Python"],
          },
          {
            title: "Enterprise Service Bus",
            description:
              "Built a scalable ESB solution handling 10M+ messages daily, integrating 50+ disparate systems across the organization.",
            tags: ["Kafka", "REST APIs", "GraphQL", "Docker"],
          },
          {
            title: "IoT Data Pipeline",
            description:
              "Designed real-time data processing pipeline for IoT sensors, processing and analyzing 1TB+ of data daily.",
            tags: ["GCP", "BigQuery", "Kubernetes", "Go"],
          },
        ],
      },
      contact: {
        title: "Let's Connect",
        description:
          "Interested in collaborating on cloud projects or discussing system integration challenges? Feel free to reach out.",
        cta: "Get in Touch",
      },
    },
    fr: {
      name: "Mohammed Dahiry",
      tagline: "Spécialiste IT, Cloud & Interopérabilité",
      subtitle:
        "Créer des solutions cloud évolutives et des intégrations transparentes",
      nav: {
        about: "À propos",
        experience: "Expérience",
        projects: "Projets",
        contact: "Contact",
      },
      about: {
        title: "À Propos de Moi",
        description:
          "Je suis un professionnel IT passionné, spécialisé dans l'architecture cloud, l'interopérabilité des systèmes et l'intégration d'entreprise. Avec une expertise en AWS, Azure et GCP, je conçois des solutions évolutives qui connectent des systèmes disparates et permettent un flux de données transparent entre les plateformes. Mon travail fait le lien entre les systèmes hérités et l'infrastructure cloud moderne, garantissant que les organisations peuvent innover tout en maintenant la continuité opérationnelle.",
        expertise: "Domaines d'Expertise",
        skills: [
          {
            icon: Cloud,
            title: "Architecture Cloud",
            desc: "AWS, Azure, GCP, Kubernetes",
          },
          {
            icon: Network,
            title: "Interopérabilité",
            desc: "Conception API, Microservices, Patterns d'Intégration",
          },
          {
            icon: Server,
            title: "Infrastructure",
            desc: "DevOps, CI/CD, Infrastructure as Code",
          },
        ],
      },
      experience: {
        title: "Expérience",
        timeline: [
          {
            year: "2024 — Présent",
            role: "Architecte Cloud Senior",
            company: "TechCorp",
            description:
              "Direction des initiatives de migration cloud et conception de stratégies multi-cloud pour les clients d'entreprise. Mise en œuvre d'une architecture microservices réduisant le temps de déploiement de 60%.",
          },
          {
            year: "2022 — 2024",
            role: "Ingénieur d'Intégration",
            company: "CloudSystems Inc",
            description:
              "Développement de passerelles API et de patterns d'intégration connectant les systèmes hérités aux services cloud modernes. Création de connecteurs personnalisés pour SAP, Salesforce et applications sur mesure.",
          },
          {
            year: "2020 — 2022",
            role: "Ingénieur DevOps",
            company: "StartupHub",
            description:
              "Établissement de pipelines CI/CD et automatisation de l'infrastructure avec Terraform et Ansible. Gestion de clusters Kubernetes et orchestration de conteneurs.",
          },
        ],
      },
      projects: {
        title: "Projets Phares",
        items: [
          {
            title: "Plateforme de Migration Cloud",
            description:
              "Architecture et déploiement d'un outil de migration multi-cloud ayant automatisé la transition de 500+ applications du serveur local vers AWS/Azure.",
            tags: ["AWS", "Azure", "Terraform", "Python"],
          },
          {
            title: "Bus de Services d'Entreprise",
            description:
              "Construction d'une solution ESB évolutive traitant 10M+ de messages quotidiens, intégrant 50+ systèmes disparates à travers l'organisation.",
            tags: ["Kafka", "REST APIs", "GraphQL", "Docker"],
          },
          {
            title: "Pipeline de Données IoT",
            description:
              "Conception de pipeline de traitement de données en temps réel pour capteurs IoT, traitant et analysant 1TB+ de données quotidiennes.",
            tags: ["GCP", "BigQuery", "Kubernetes", "Go"],
          },
        ],
      },
      contact: {
        title: "Connectons-nous",
        description:
          "Intéressé par une collaboration sur des projets cloud ou discuter des défis d'intégration de systèmes ? N'hésitez pas à me contacter.",
        cta: "Contactez-moi",
      },
    },
    es: {
      name: "Mohammed Dahiry",
      tagline: "Especialista en IT, Cloud e Interoperabilidad",
      subtitle:
        "Construyendo soluciones cloud escalables e integraciones fluidas",
      nav: {
        about: "Acerca",
        experience: "Experiencia",
        projects: "Proyectos",
        contact: "Contacto",
      },
      about: {
        title: "Sobre Mí",
        description:
          "Soy un profesional de IT apasionado, especializado en arquitectura cloud, interoperabilidad de sistemas e integración empresarial. Con experiencia en AWS, Azure y GCP, diseño soluciones escalables que conectan sistemas dispares y permiten un flujo de datos fluido entre plataformas. Mi trabajo cierra la brecha entre sistemas heredados e infraestructura cloud moderna, asegurando que las organizaciones puedan innovar mientras mantienen la continuidad operativa.",
        expertise: "Áreas de Especialización",
        skills: [
          {
            icon: Cloud,
            title: "Arquitectura Cloud",
            desc: "AWS, Azure, GCP, Kubernetes",
          },
          {
            icon: Network,
            title: "Interoperabilidad",
            desc: "Diseño de APIs, Microservicios, Patrones de Integración",
          },
          {
            icon: Server,
            title: "Infraestructura",
            desc: "DevOps, CI/CD, Infrastructure as Code",
          },
        ],
      },
      experience: {
        title: "Experiencia",
        timeline: [
          {
            year: "2024 — Presente",
            role: "Arquitecto Cloud Senior",
            company: "TechCorp",
            description:
              "Liderando iniciativas de migración cloud y diseñando estrategias multi-cloud para clientes empresariales. Implementé arquitectura de microservicios reduciendo el tiempo de despliegue en un 60%.",
          },
          {
            year: "2022 — 2024",
            role: "Ingeniero de Integración",
            company: "CloudSystems Inc",
            description:
              "Desarrollo de gateways API y patrones de integración conectando sistemas heredados con servicios cloud modernos. Construcción de conectores personalizados para SAP, Salesforce y aplicaciones personalizadas.",
          },
          {
            year: "2020 — 2022",
            role: "Ingeniero DevOps",
            company: "StartupHub",
            description:
              "Establecimiento de pipelines CI/CD y automatización de infraestructura usando Terraform y Ansible. Gestión de clusters Kubernetes y orquestación de contenedores.",
          },
        ],
      },
      projects: {
        title: "Proyectos Destacados",
        items: [
          {
            title: "Plataforma de Migración Cloud",
            description:
              "Arquitecturé y desplegué una herramienta de migración multi-cloud que automatizó la transición de 500+ aplicaciones desde on-premises a AWS/Azure.",
            tags: ["AWS", "Azure", "Terraform", "Python"],
          },
          {
            title: "Bus de Servicios Empresariales",
            description:
              "Construí una solución ESB escalable manejando 10M+ mensajes diarios, integrando 50+ sistemas dispares a través de la organización.",
            tags: ["Kafka", "REST APIs", "GraphQL", "Docker"],
          },
          {
            title: "Pipeline de Datos IoT",
            description:
              "Diseñé un pipeline de procesamiento de datos en tiempo real para sensores IoT, procesando y analizando 1TB+ de datos diariamente.",
            tags: ["GCP", "BigQuery", "Kubernetes", "Go"],
          },
        ],
      },
      contact: {
        title: "Conectemos",
        description:
          "¿Interesado en colaborar en proyectos cloud o discutir desafíos de integración de sistemas? No dudes en contactarme.",
        cta: "Contáctame",
      },
    },
  };

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen">
      <ThreeBackground />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <Image
                src="/logo.png"
                alt={t.name}
                width={150}
                height={80}
                className="h-8 w-auto"
                priority
              />
            </button>
            <div className="hidden md:flex items-center gap-6">
              {Object.entries(t.nav).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className={`text-sm transition-colors ${
                    activeSection === key
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant={language === "en" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage("en")}
            >
              EN
            </Button>
            <Button
              variant={language === "fr" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage("fr")}
            >
              FR
            </Button>
            <Button
              variant={language === "es" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage("es")}
            >
              ES
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-balance">
            {t.name}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            {t.tagline}
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.subtitle}
          </p>
          <div className="flex items-center justify-center gap-4 pt-8">
            <Button size="lg" onClick={() => scrollToSection("contact")}>
              {t.contact.cta}
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-4 pt-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Globe className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            {t.about.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-16 leading-relaxed text-center">
            {t.about.description}
          </p>

          <h3 className="text-2xl font-semibold mb-8 text-center">
            {t.about.expertise}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {t.about.skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <Icon className="h-12 w-12 mb-4 text-primary" />
                  <h4 className="text-xl font-semibold mb-2">{skill.title}</h4>
                  <p className="text-muted-foreground">{skill.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {t.experience.title}
          </h2>
          <div className="space-y-8">
            {t.experience.timeline.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:w-48 flex-shrink-0">
                    <p className="text-sm text-muted-foreground font-medium">
                      {item.year}
                    </p>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-1">{item.role}</h3>
                    <p className="text-primary mb-3">{item.company}</p>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {t.projects.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.projects.items.map((project, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow flex flex-col"
              >
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 bg-muted/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {t.contact.description}
          </p>
          <Button size="lg" asChild>
            <a href="mailto:contact@example.com">
              <Mail className="mr-2 h-5 w-5" />
              {t.contact.cta}
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2026 {t.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
