"use client";

import ThreeBackground from "@/components/three-background";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Cloud,
  FileText,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  Send,
  Server,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PortfolioPage() {
  const [language, setLanguage] = useState<"en" | "fr" | "es">("en");
  const [activeSection, setActiveSection] = useState("about");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const languages = [
    { code: "en" as const, name: "English", flag: "🇬🇧" },
    { code: "fr" as const, name: "Français", flag: "🇫🇷" },
    { code: "es" as const, name: "Español", flag: "🇪🇸" },
  ];

  const translations = {
    en: {
      name: "Mohammed Dahiry",
      tagline: "Cloud, DevOps & Data Engineer",
      subtitle: "Building scalable cloud solutions and Data pipelines",
      nav: {
        about: "About",
        experience: "Experience",
        projects: "Projects",
        skills: "Skills",
        courses: "Courses",
        contact: "Contact",
      },
      buttons: {
        exploreWork: "Explore My Work",
        contactMe: "Contact Me",
        viewResume: "View Resume",
        github: "GitHub",
      },
      about: {
        title: "About Me",
        description:
          "I’m a passionate IT professional specializing in cloud infrastructure, DevOps practices, and data engineering. With hands-on expertise across AWS, Azure, and GCP, I design and manage scalable, secure, and highly available cloud environments while automating deployments and operations through modern CI/CD and infrastructure-as-code practices. My work focuses on enabling reliable data pipelines, optimizing system performance, and bridging development and operations to support agile, data-driven organizations.",
        expertise: "Expertise Areas",
        skills: [
          {
            icon: Cloud,
            title: "Cloud Architecture",
            desc: "AWS, Azure, GCP, Kubernetes",
          },
          {
            icon: Network,
            title: "Data",
            desc: "Data Pipelines, ETL, Data Warehousing, Analytics",
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
            year: "July 2025 — September 2025",
            role: "Cloud & DevOps Engineering Intern",
            company: "Rakless",
            location: "Casablanca, Morocco",
            description:
              "Led database externalization project migrating enterprise systems to AWS (RDS, S3, EC2), improving scalability and performance. Architected CI/CD pipelines using GitHub Actions and Jenkins, automating deployment workflows across all environments. Implemented Infrastructure as Code using Terraform and Ansible for automated provisioning and configuration management. Established monitoring, backup automation, and disaster recovery ensuring 99.9% availability and data integrity.",
          },
          {
            year: "June 2024 — August 2024",
            role: "Salesforce Developer Intern",
            company: "D&A Technologies",
            location: "Casablanca, Morocco",
            description:
              "Developed enterprise insurance application on Salesforce.com using Agile/Scrum, delivering iterative cloud-based solutions. Automated workflows using Apex and LWC, integrated third-party APIs, and configured custom dashboards for real-time metrics.",
          },
        ],
      },
      projects: {
        title: "Technical Projects",
        items: [
          {
            title: "Data Pipeline Orchestration with Apache Airflow",
            technologies: "AWS, Airflow, Kafka, Redshift",
            date: "July 2025",
            description: [
              "Architected automated ETL pipeline on AWS for data ingestion to Redshift with Airflow DAGs for workflow orchestration",
              "Implemented real-time streaming using Kafka and Zookeeper; deployed on EC2 with S3 staging and RDS metadata management",
              "Enforced security with IAM access control, encryption, and comprehensive logging for compliance",
            ],
            tags: ["AWS", "Airflow", "Kafka", "Redshift", "EC2", "S3", "RDS"],
          },
          {
            title: "CardioLink - Cloud-Native IoT Health Platform",
            technologies: "AWS IoT Core, Lambda, DynamoDB",
            date: "Mar – May 2025",
            description: [
              "Designed serverless architecture using AWS Lambda and DynamoDB; integrated IoT Core for real-time device communication",
              "Implemented containerized ML models for predictive analytics with HIPAA-compliant security and encryption",
            ],
            tags: ["AWS IoT Core", "Lambda", "DynamoDB", "ML", "Serverless"],
          },
          {
            title: "AFCON Morocco 2025 Web Platform",
            technologies: "PHP, MySQL, AWS",
            date: "Mar – Jul 2024",
            description: [
              "Developed scalable event management system with optimized database, RBAC authentication, and performance optimization",
            ],
            tags: ["PHP", "MySQL", "AWS", "RBAC"],
          },
        ],
      },
      skills: {
        title: "Technical Skills",
        categories: [
          {
            name: "Cloud Platforms",
            items: [
              "AWS (EC2, S3, RDS, Lambda, DynamoDB, IoT Core, Redshift, IAM, VPC, CloudWatch)",
              "Salesforce",
            ],
          },
          {
            name: "DevOps & CI/CD",
            items: [
              "GitHub Actions",
              "Jenkins",
              "Docker",
              "Terraform",
              "Ansible",
              "Git/GitHub",
              "Kubernetes (basic)",
            ],
          },
          {
            name: "Infrastructure & Orchestration",
            items: [
              "Apache Airflow",
              "Apache Kafka",
              "Zookeeper",
              "Linux System Administration",
            ],
          },
          {
            name: "Programming & Scripting",
            items: [
              "Python",
              "Bash/Shell",
              "Java",
              "JavaScript",
              "SQL",
              "Apex",
              "C/C++",
            ],
          },
          {
            name: "Databases",
            items: [
              "MySQL",
              "PostgreSQL",
              "Oracle DB",
              "Amazon Redshift",
              "DynamoDB",
            ],
          },
          {
            name: "Networking & Security",
            items: [
              "VPC",
              "Security Groups",
              "IAM Policies",
              "Network Security",
              "Cisco Networking",
              "Packet Tracer",
            ],
          },
        ],
      },
      certifications: {
        title: "Certifications",
        categories: [
          {
            name: "Udemy",
            items: [
              "AWS Data Engineer Associate",
              "AWS Solutions Architect Associate",
              "AWS Developer Associate",
              "HashiCorp Terraform Associate",
              "Database Design & SQL",
              "Web Developer full stack",
              "Data Science & Machine Learning",
            ],
          },
          {
            name: "Others",
            items: ["Cloud Computing (Alison)", "CISCO Networking Basics"],
          },
        ],
      },
      courses: {
        title: "Courses & Training Materials",
        description:
          "Educational resources and training materials I've created to share knowledge with the community.",
        items: [
          {
            title: "Terraform Basics",
            description:
              "Learn Infrastructure as Code fundamentals with Terraform. Covers core concepts, resource management, state management, and best practices for building scalable cloud infrastructure.",
            pdfUrl: "/Terraform_Basics.pdf",
            topics: [
              "Terraform",
              "Infrastructure as Code",
              "AWS",
              "Resource Management",
              "State Management",
            ],
            level: "Beginner",
          },
        ],
      },
      contact: {
        title: "Get In Touch",
        description:
          "Have a project in mind or want to discuss a potential collaboration? I&apos;d love to hear from you. Feel free to reach out using the contact form or through any of the provided channels.",
        cta: "Get in Touch",
        form: {
          name: "Name",
          email: "Email",
          subject: "Subject",
          message: "Message",
          send: "Send Message",
          namePlaceholder: "Your name",
          emailPlaceholder: "Your email",
          subjectPlaceholder: "Subject",
          messagePlaceholder: "Your message",
        },
        info: {
          email: "mohameddahiry117@gmail.com",
          phone: "+212 610-887000",
          location: "Casablanca, Morocco",
          follow: "Follow Me",
        },
      },
    },
    fr: {
      name: "Mohammed Dahiry",
      tagline: "Ingénieur en Cloud, DevOps et Data",
      subtitle:
        "Conception de solutions cloud évolutives et de pipelines de données",
      nav: {
        about: "À propos",
        experience: "Expérience",
        projects: "Projets",
        skills: "Compétences",
        courses: "Cours",
        contact: "Contact",
      },
      buttons: {
        exploreWork: "Découvrir Mes Projets",
        contactMe: "Me Contacter",
        viewResume: "Voir le CV",
        github: "GitHub",
      },
      about: {
        title: "À Propos de Moi",
        description:
          "Je suis un professionnel IT passionné, spécialisé dans l’infrastructure cloud, les pratiques DevOps et l’ingénierie des données. Fort d’une expertise pratique sur AWS, Azure et GCP, je conçois et gère des environnements cloud évolutifs, sécurisés et hautement disponibles, tout en automatisant les déploiements et les opérations grâce à des pratiques modernes de CI/CD et d’infrastructure as code. Mon travail vise à mettre en place des pipelines de données fiables, à optimiser les performances des systèmes et à faire le lien entre le développement et les opérations afin de soutenir des organisations agiles et orientées données.",
        expertise: "Domaines d'Expertise",
        skills: [
          {
            icon: Cloud,
            title: "Architecture Cloud",
            desc: "AWS, Azure, GCP, Kubernetes",
          },
          {
            icon: Network,
            title: "Données",
            desc: "Pipelines de Données, ETL, Entrepôts de Données, Analytique",
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
            year: "Juillet 2025 — Septembre 2025",
            role: "Stagiaire Ingénieur Cloud & DevOps",
            company: "Rakless",
            location: "Casablanca, Maroc",
            description:
              "Dirigé le projet d'externalisation de base de données migrant les systèmes d'entreprise vers AWS (RDS, S3, EC2), améliorant la scalabilité et les performances. Conçu des pipelines CI/CD utilisant GitHub Actions et Jenkins, automatisant les workflows de déploiement dans tous les environnements. Implémenté l'Infrastructure as Code avec Terraform et Ansible pour le provisionnement et la gestion de configuration automatisés. Établi la surveillance, l'automatisation des sauvegardes et la reprise après sinistre garantissant 99,9% de disponibilité et l'intégrité des données.",
          },
          {
            year: "Juin 2024 — Août 2024",
            role: "Stagiaire Développeur Salesforce",
            company: "D&A Technologies",
            location: "Casablanca, Maroc",
            description:
              "Développé une application d'assurance d'entreprise sur Salesforce.com en utilisant Agile/Scrum, livrant des solutions cloud itératives. Automatisé les workflows avec Apex et LWC, intégré des APIs tierces et configuré des tableaux de bord personnalisés pour des métriques en temps réel.",
          },
        ],
      },
      projects: {
        title: "Projets Techniques",
        items: [
          {
            title: "Orchestration de Pipeline de Données avec Apache Airflow",
            technologies: "AWS, Airflow, Kafka, Redshift",
            date: "Juillet 2025",
            description: [
              "Conçu un pipeline ETL automatisé sur AWS pour l'ingestion de données vers Redshift avec des DAGs Airflow pour l'orchestration des workflows",
              "Implémenté le streaming en temps réel avec Kafka et Zookeeper; déployé sur EC2 avec staging S3 et gestion des métadonnées RDS",
              "Renforcé la sécurité avec contrôle d'accès IAM, chiffrement et journalisation complète pour la conformité",
            ],
            tags: ["AWS", "Airflow", "Kafka", "Redshift", "EC2", "S3", "RDS"],
          },
          {
            title: "CardioLink - Plateforme de Santé IoT Cloud-Native",
            technologies: "AWS IoT Core, Lambda, DynamoDB",
            date: "Mars – Mai 2025",
            description: [
              "Conçu une architecture serverless utilisant AWS Lambda et DynamoDB; intégré IoT Core pour la communication d'appareils en temps réel",
              "Implémenté des modèles ML conteneurisés pour l'analyse prédictive avec sécurité et chiffrement conformes HIPAA",
            ],
            tags: ["AWS IoT Core", "Lambda", "DynamoDB", "ML", "Serverless"],
          },
          {
            title: "Plateforme Web AFCON Maroc 2025",
            technologies: "PHP, MySQL, AWS",
            date: "Mars – Juillet 2024",
            description: [
              "Développé un système de gestion d'événements scalable avec base de données optimisée, authentification RBAC et optimisation des performances",
            ],
            tags: ["PHP", "MySQL", "AWS", "RBAC"],
          },
        ],
      },
      skills: {
        title: "Compétences Techniques",
        categories: [
          {
            name: "Plateformes Cloud",
            items: [
              "AWS (EC2, S3, RDS, Lambda, DynamoDB, IoT Core, Redshift, IAM, VPC, CloudWatch)",
              "Salesforce",
            ],
          },
          {
            name: "DevOps & CI/CD",
            items: [
              "GitHub Actions",
              "Jenkins",
              "Docker",
              "Terraform",
              "Ansible",
              "Git/GitHub",
              "Kubernetes (base)",
            ],
          },
          {
            name: "Infrastructure & Orchestration",
            items: [
              "Apache Airflow",
              "Apache Kafka",
              "Zookeeper",
              "Administration Système Linux",
            ],
          },
          {
            name: "Programmation & Scripting",
            items: [
              "Python",
              "Bash/Shell",
              "Java",
              "JavaScript",
              "SQL",
              "Apex",
              "C/C++",
            ],
          },
          {
            name: "Bases de Données",
            items: [
              "MySQL",
              "PostgreSQL",
              "Oracle DB",
              "Amazon Redshift",
              "DynamoDB",
            ],
          },
          {
            name: "Réseau & Sécurité",
            items: [
              "VPC",
              "Security Groups",
              "Politiques IAM",
              "Sécurité Réseau",
              "Réseau Cisco",
              "Packet Tracer",
            ],
          },
        ],
      },
      certifications: {
        title: "Certifications",
        categories: [
          {
            name: "Udemy",
            items: [
              "AWS Data Engineer Associate",
              "AWS Solutions Architect Associate",
              "AWS Developer Associate",
              "HashiCorp Terraform Associate",
              "Conception de Base de Données & SQL",
              "Développeur Web full stack",
              "Science des Données & Machine Learning",
            ],
          },
          {
            name: "Autres",
            items: ["Cloud Computing (Alison)", "Bases du Réseau CISCO"],
          },
        ],
      },
      courses: {
        title: "Cours et Matériels de Formation",
        description:
          "Ressources éducatives et matériels de formation que j'ai créés pour partager mes connaissances avec la communauté.",
        items: [
          {
            title: "Les Bases de Terraform",
            description:
              "Apprenez les fondamentaux de l'Infrastructure as Code avec Terraform. Couvre les concepts de base, la gestion des ressources, la gestion de l'état et les meilleures pratiques pour construire une infrastructure cloud évolutive.",
            pdfUrl: "/Terraform_Basics.pdf",
            topics: [
              "Terraform",
              "Infrastructure as Code",
              "AWS",
              "Gestion des Ressources",
              "Gestion de l'État",
            ],
            level: "Débutant",
          },
        ],
      },
      contact: {
        title: "Contactez-moi",
        description:
          "Vous avez un projet en tête ou souhaitez discuter d'une collaboration potentielle ? J'aimerais avoir de vos nouvelles. N'hésitez pas à me contacter en utilisant le formulaire de contact ou par l'un des canaux fournis.",
        cta: "Contactez-moi",
        form: {
          name: "Nom",
          email: "Email",
          subject: "Sujet",
          message: "Message",
          send: "Envoyer le message",
          namePlaceholder: "Votre nom",
          emailPlaceholder: "Votre email",
          subjectPlaceholder: "Sujet",
          messagePlaceholder: "Votre message",
        },
        info: {
          email: "mohameddahiry117@gmail.com",
          phone: "+212 610-887000",
          location: "Casablanca, Maroc",
          follow: "Suivez-moi",
        },
      },
    },
    es: {
      name: "Mohammed Dahiry",
      tagline: "Ingeniero de Cloud, DevOps e Datos",
      subtitle: "Construyendo soluciones cloud escalables y pipelines de datos",
      nav: {
        about: "Acerca",
        experience: "Experiencia",
        projects: "Proyectos",
        skills: "Habilidades",
        courses: "Cursos",
        contact: "Contacto",
      },
      buttons: {
        exploreWork: "Explorar Mi Trabajo",
        contactMe: "Contáctame",
        viewResume: "Ver Currículum",
        github: "GitHub",
      },
      about: {
        title: "Sobre Mí",
        description:
          "Soy un profesional de TI apasionado, especializado en infraestructura en la nube, prácticas DevOps e ingeniería de datos. Con experiencia práctica en AWS, Azure y GCP, diseño y gestiono entornos cloud escalables, seguros y de alta disponibilidad, automatizando despliegues y operaciones mediante prácticas modernas de CI/CD e infraestructura como código. Mi trabajo se centra en habilitar pipelines de datos confiables, optimizar el rendimiento de los sistemas y conectar el desarrollo con las operaciones para apoyar a organizaciones ágiles y orientadas a los datos.",
        expertise: "Áreas de Especialización",
        skills: [
          {
            icon: Cloud,
            title: "Arquitectura Cloud",
            desc: "AWS, Azure, GCP, Kubernetes",
          },
          {
            icon: Network,
            title: "Datos",
            desc: "Pipelines de Datos, ETL, Almacenamiento de Datos, Análisis",
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
            year: "Julio 2025 — Septiembre 2025",
            role: "Pasante de Ingeniería Cloud & DevOps",
            company: "Rakless",
            location: "Casablanca, Marruecos",
            description:
              "Lideré el proyecto de externalización de base de datos migrando sistemas empresariales a AWS (RDS, S3, EC2), mejorando la escalabilidad y el rendimiento. Diseñé pipelines CI/CD usando GitHub Actions y Jenkins, automatizando flujos de trabajo de despliegue en todos los entornos. Implementé Infrastructure as Code usando Terraform y Ansible para aprovisionamiento y gestión de configuración automatizados. Establecí monitoreo, automatización de respaldos y recuperación ante desastres asegurando 99.9% de disponibilidad e integridad de datos.",
          },
          {
            year: "Junio 2024 — Agosto 2024",
            role: "Pasante Desarrollador Salesforce",
            company: "D&A Technologies",
            location: "Casablanca, Marruecos",
            description:
              "Desarrollé aplicación de seguros empresarial en Salesforce.com usando Agile/Scrum, entregando soluciones cloud iterativas. Automatizé flujos de trabajo usando Apex y LWC, integré APIs de terceros y configuré paneles personalizados para métricas en tiempo real.",
          },
        ],
      },
      projects: {
        title: "Proyectos Técnicos",
        items: [
          {
            title: "Orquestación de Pipeline de Datos con Apache Airflow",
            technologies: "AWS, Airflow, Kafka, Redshift",
            date: "Julio 2025",
            description: [
              "Diseñé pipeline ETL automatizado en AWS para ingesta de datos a Redshift con DAGs de Airflow para orquestación de flujos de trabajo",
              "Implementé streaming en tiempo real usando Kafka y Zookeeper; desplegado en EC2 con staging S3 y gestión de metadatos RDS",
              "Reforcé seguridad con control de acceso IAM, cifrado y registro exhaustivo para cumplimiento",
            ],
            tags: ["AWS", "Airflow", "Kafka", "Redshift", "EC2", "S3", "RDS"],
          },
          {
            title: "CardioLink - Plataforma de Salud IoT Cloud-Native",
            technologies: "AWS IoT Core, Lambda, DynamoDB",
            date: "Mar – May 2025",
            description: [
              "Diseñé arquitectura serverless usando AWS Lambda y DynamoDB; integré IoT Core para comunicación de dispositivos en tiempo real",
              "Implementé modelos ML containerizados para análisis predictivo con seguridad y cifrado compatibles con HIPAA",
            ],
            tags: ["AWS IoT Core", "Lambda", "DynamoDB", "ML", "Serverless"],
          },
          {
            title: "Plataforma Web AFCON Marruecos 2025",
            technologies: "PHP, MySQL, AWS",
            date: "Mar – Jul 2024",
            description: [
              "Desarrollé sistema de gestión de eventos escalable con base de datos optimizada, autenticación RBAC y optimización de rendimiento",
            ],
            tags: ["PHP", "MySQL", "AWS", "RBAC"],
          },
        ],
      },
      skills: {
        title: "Habilidades Técnicas",
        categories: [
          {
            name: "Plataformas Cloud",
            items: [
              "AWS (EC2, S3, RDS, Lambda, DynamoDB, IoT Core, Redshift, IAM, VPC, CloudWatch)",
              "Salesforce",
            ],
          },
          {
            name: "DevOps & CI/CD",
            items: [
              "GitHub Actions",
              "Jenkins",
              "Docker",
              "Terraform",
              "Ansible",
              "Git/GitHub",
              "Kubernetes (básico)",
            ],
          },
          {
            name: "Infraestructura & Orquestación",
            items: [
              "Apache Airflow",
              "Apache Kafka",
              "Zookeeper",
              "Administración de Sistemas Linux",
            ],
          },
          {
            name: "Programación & Scripting",
            items: [
              "Python",
              "Bash/Shell",
              "Java",
              "JavaScript",
              "SQL",
              "Apex",
              "C/C++",
            ],
          },
          {
            name: "Bases de Datos",
            items: [
              "MySQL",
              "PostgreSQL",
              "Oracle DB",
              "Amazon Redshift",
              "DynamoDB",
            ],
          },
          {
            name: "Redes & Seguridad",
            items: [
              "VPC",
              "Security Groups",
              "Políticas IAM",
              "Seguridad de Red",
              "Redes Cisco",
              "Packet Tracer",
            ],
          },
        ],
      },
      certifications: {
        title: "Certificaciones",
        categories: [
          {
            name: "Udemy",
            items: [
              "AWS Data Engineer Associate",
              "AWS Solutions Architect Associate",
              "AWS Developer Associate",
              "HashiCorp Terraform Associate",
              "Diseño de Base de Datos & SQL",
              "Desarrollador Web full stack",
              "Ciencia de Datos & Machine Learning",
            ],
          },
          {
            name: "Otros",
            items: ["Cloud Computing (Alison)", "Fundamentos de Redes CISCO"],
          },
        ],
      },
      courses: {
        title: "Cursos y Materiales de Formación",
        description:
          "Recursos educativos y materiales de formación que he creado para compartir conocimientos con la comunidad.",
        items: [
          {
            title: "Fundamentos de Terraform",
            description:
              "Aprende los fundamentos de Infrastructure as Code con Terraform. Cubre conceptos básicos, gestión de recursos, gestión de estado y mejores prácticas para construir infraestructura cloud escalable.",
            pdfUrl: "/courses/terraform-basics.pdf",
            topics: [
              "Terraform",
              "Infrastructure as Code",
              "AWS",
              "Gestión de Recursos",
              "Gestión de Estado",
            ],
            level: "Principiante",
          },
        ],
      },
      contact: {
        title: "Póngase en Contacto",
        description:
          "¿Tiene un proyecto en mente o quiere discutir una posible colaboración? Me encantaría saber de usted. No dude en contactarme usando el formulario de contacto o a través de cualquiera de los canales proporcionados.",
        cta: "Contáctame",
        form: {
          name: "Nombre",
          email: "Email",
          subject: "Asunto",
          message: "Mensaje",
          send: "Enviar Mensaje",
          namePlaceholder: "Su nombre",
          emailPlaceholder: "Su email",
          subjectPlaceholder: "Asunto",
          messagePlaceholder: "Su mensaje",
        },
        info: {
          email: "mohameddahiry117@gmail.com",
          phone: "+212 610-887000",
          location: "Casablanca, Marruecos",
          follow: "Sígueme",
        },
      },
    },
  };

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "about",
        "experience",
        "projects",
        "skills",
        "courses",
        "contact",
      ];
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:mohameddahiry117@gmail.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Reset form after a short delay
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="relative min-h-screen">
      <ThreeBackground />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <Image
                src="/logo.png"
                alt={t.name}
                width={200}
                height={100}
                className="h-12 md:h-16 w-auto"
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
            {/* Mobile Menu Dropdown */}
            <DropdownMenu open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-9 w-9 p-0 md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {Object.entries(t.nav).map(([key, label]) => (
                  <DropdownMenuItem
                    key={key}
                    onClick={() => {
                      scrollToSection(key);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`${
                      activeSection === key
                        ? "text-primary font-medium"
                        : ""
                    }`}
                  >
                    {label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className="flex items-center gap-2"
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                    {language === lang.code && (
                      <span className="ml-auto">✓</span>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.png"
              alt={t.name}
              width={400}
              height={200}
              className="h-32 md:h-48 w-auto"
            />
          </div>
          <p className="text-lg md:text-xl text-foreground/80 mb-2">
            Hello, I&apos;m
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-balance bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {t.name}
          </h1>
          <div className="relative inline-block">
            <p className="text-xl md:text-2xl text-foreground relative z-10">
              {t.tagline}
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
          </div>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.subtitle}
          </p>
          <div className="flex items-center justify-center gap-4 pt-8 flex-wrap">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
            >
              {t.buttons.exploreWork}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              {t.buttons.contactMe}
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-5 w-5" />
                {t.buttons.viewResume}
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/MohammedDahiry"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                {t.buttons.github}
              </a>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-4 pt-4">
            <a
              href="https://www.linkedin.com/in/mohamed-dahiry"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:mohameddahiry117@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://mohammed-dahiry-portfolio.vercel.app/"
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
                  className="p-6 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105 hover:border-primary/50 cursor-pointer group"
                >
                  <div className="relative">
                    <Icon className="h-12 w-12 mb-4 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:text-accent" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">
                    {skill.title}
                  </h4>
                  <p className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                    {skill.desc}
                  </p>
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
                className="p-6 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 cursor-pointer group"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:w-48 flex-shrink-0">
                    <p className="text-sm text-muted-foreground font-medium transition-colors duration-300 group-hover:text-primary">
                      {item.year}
                    </p>
                    {item.location && (
                      <p className="text-xs text-muted-foreground mt-1 transition-colors duration-300 group-hover:text-foreground/70">
                        {item.location}
                      </p>
                    )}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-1 transition-colors duration-300 group-hover:text-primary">
                      {item.role}
                    </h3>
                    <p className="text-primary mb-3 transition-colors duration-300 group-hover:text-accent">
                      {item.company}
                    </p>
                    <p className="text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground/80">
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
                className="p-6 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105 hover:border-primary/50 cursor-pointer group flex flex-col"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-primary flex-grow">
                    {project.title}
                  </h3>
                  {project.date && (
                    <span className="text-xs text-muted-foreground font-medium ml-2 whitespace-nowrap transition-colors duration-300 group-hover:text-foreground/70">
                      {project.date}
                    </span>
                  )}
                </div>
                {project.technologies && (
                  <p className="text-sm text-primary/80 mb-4 italic transition-colors duration-300 group-hover:text-primary">
                    {project.technologies}
                  </p>
                )}
                <div className="flex-grow mb-4">
                  {Array.isArray(project.description) ? (
                    <ul className="space-y-2">
                      {project.description.map((desc, descIndex) => (
                        <li
                          key={descIndex}
                          className="text-muted-foreground leading-relaxed text-sm transition-colors duration-300 group-hover:text-foreground/80 flex items-start"
                        >
                          <span className="mr-2 text-primary">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground/80">
                      {project.description}
                    </p>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-105"
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

      {/* Skills & Certifications Section */}
      <section id="skills" className="relative py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          {/* Technical Skills */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t.skills.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.skills.categories.map((category, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105 hover:border-primary/50 cursor-pointer group"
                >
                  <h3 className="text-lg font-semibold mb-4 transition-colors duration-300 group-hover:text-primary">
                    {category.name}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80 flex items-start"
                      >
                        <span className="mr-2 text-primary">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t.certifications.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {t.certifications.categories.map((category, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105 hover:border-primary/50 cursor-pointer group"
                >
                  <h3 className="text-lg font-semibold mb-4 transition-colors duration-300 group-hover:text-primary">
                    {category.name}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80 flex items-start"
                      >
                        <span className="mr-2 text-primary">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="relative py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {t.courses.title}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            {t.courses.description}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.courses.items.map((course, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105 hover:border-primary/50 cursor-pointer group flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <FileText className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <span className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                    {course.level}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-primary">
                  {course.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow transition-colors duration-300 group-hover:text-foreground/80">
                  {course.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.topics.map((topic, topicIndex) => (
                    <span
                      key={topicIndex}
                      className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded transition-all duration-300 group-hover:bg-primary/20"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <a
                    href={course.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Download PDF
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t.contact.title}
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.contact.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg border border-primary/20 bg-primary/5">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href={`mailto:${t.contact.info.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {t.contact.info.email}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg border border-primary/20 bg-primary/5">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a
                      href={`tel:${t.contact.info.phone}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {t.contact.info.phone}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg border border-primary/20 bg-primary/5">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      {t.contact.info.location}
                    </p>
                  </div>
                </div>
              </Card>

              <div>
                <h3 className="font-semibold mb-4">{t.contact.info.follow}</h3>
                <div className="flex gap-4">
                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-colors"
                  >
                    <span className="text-lg">💬</span>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-colors"
                  >
                    <span className="text-lg">📷</span>
                  </a>
                  <a
                    href="www.linkedin.com/in/mohamed-dahiry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://github.com/MohammedDahiry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-medium mb-2 block"
                  >
                    {t.contact.form.name}
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder={t.contact.form.namePlaceholder}
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium mb-2 block"
                  >
                    {t.contact.form.email}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t.contact.form.emailPlaceholder}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium mb-2 block"
                  >
                    {t.contact.form.subject}
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder={t.contact.form.subjectPlaceholder}
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium mb-2 block"
                  >
                    {t.contact.form.message}
                  </label>
                  <Textarea
                    id="message"
                    placeholder={t.contact.form.messagePlaceholder}
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                  disabled={isSubmitting}
                >
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? "Sending..." : t.contact.form.send}
                </Button>
              </form>
            </Card>
          </div>
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
