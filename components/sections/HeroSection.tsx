"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Download, Mail, MapPin } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar */}
          <div className="mb-8 animate-fade-in">
            <Avatar className="w-32 h-32 mx-auto border-4 border-white shadow-xl">
              <AvatarImage src="/placeholder-avatar.jpg" alt="Natalia Duran" />
              <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-blue-900 to-indigo-600 text-white">
                ND
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Main Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                Natalia Duran
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 font-medium text-primary">
                Full Stack Developer
              </h2>
            </div>

            <div className="flex items-center justify-center space-x-2 text-primary">
              <MapPin className="w-4 h-4" />
              <span>Santa Cruz de la Sierra, Bolivia</span>
            </div>

            {/* Skills badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
              {[
                "Spring Boot",
                "React.js",
                "TypeScript",
                "Apache Kafka",
                "Microservicios",
                "Docker",
                "Kubernetes",
                "MongoDB",
              ].map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-gradient-to-r from-blue-100 to-pink-100 text-gray-700 hover:from-blue-200 hover:to-pink-200 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            {/* Description */}
            <p className="text-lg text-primary max-w-2xl mx-auto leading-relaxed">
              Ingeniera de Sistemas con más de{" "}
              <span className="font-semibold">4 años de experiencia</span>{" "}
              en el desarrollo de soluciones robustas y escalables, especializada en{" "}
              <span className="font-semibold">arquitecturas de microservicios</span>{" "}
              y tecnologías cloud.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-800 to-pink-950 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all"
                onClick={() => scrollToSection("#contact")}
              >
                <Mail className="w-4 h-4 mr-2" />
                Contáctame
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-pink-200 hover:bg-pink-50 hover:border-pink-300 transition-colors"
                asChild
              >
                <a href="/cv-natalia-duran.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Descargar CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>
    </section>
  );
}