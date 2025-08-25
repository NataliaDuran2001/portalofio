"use client"; 
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Users } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "Desarrollo Full Stack",
      description: "Experiencia en frontend y backend con tecnologías modernas",
    },
    {
      icon: Database,
      title: "Bases de Datos",
      description: "Manejo de SQL y NoSQL con optimización para alto volumen",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Implementación de CI/CD y orquestación con contenedores",
    },
    {
      icon: Users,
      title: "Liderazgo",
      description: "Lead Organizer en Google Developer Groups Santa Cruz & Women Techmakers Santa Cruz",
    },
  ];

  return (
    <section id="about" className="py-20 bg-stone-200">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sobre mí
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Soy una desarrolladora apasionada por crear soluciones tecnológicas que generen 
              impacto real en los negocios, con un enfoque especial en arquitecturas escalables 
              y buenas prácticas en el desarrollo de software.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 gradient-bg-card"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Description */}
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Mi enfoque profesional
                  </h3>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Con más de 4 años de experiencia en el desarrollo de software, 
                      me especializo en crear <strong className="text-blue-600">
                      arquitecturas robustas y escalables</strong> que impulsan el 
                      crecimiento empresarial.
                    </p>
                    <p>
                      Mi experiencia abarca desde el desarrollo de <strong className="text-pink-600">
                      microservicios</strong> hasta la implementación de 
                      soluciones de streaming en tiempo real con <strong className="text-pink-600">Apache Kafka</strong>, siempre 
                      manteniendo las mejores prácticas de desarrollo seguro.
                    </p>
                    <p>
                      Como <strong className="text-purple-600">Lead Organizer de Google Developer Groups & Women Teckmakers</strong>, 
                      me apasiona compartir conocimiento y contribuir al crecimiento de la 
                      comunidad tecnológica en Bolivia.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-gray-900">
                    Logros destacados
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3"></div>
                      <div>
                        <p className="font-medium text-gray-900">75% de aumento</p>
                        <p className="text-sm text-gray-600">
                          En interacción de clientes con programas de lealtad
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-3"></div>
                      <div>
                        <p className="font-medium text-gray-900">99% de precisión</p>
                        <p className="text-sm text-gray-600">
                          En sistema Anti-Lavado de Dinero (AMLC)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-3"></div>
                      <div>
                        <p className="font-medium text-gray-900">100% acceso a información</p>
                        <p className="text-sm text-gray-600">
                          Dando transparencia en procesos de despacho con entregas parciales registradas
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-3"></div>
                      <div>
                        <p className="font-medium text-gray-900">100% digitalización</p>
                        <p className="text-sm text-gray-600">
                          De procesos de toma de pedidos con Flutter
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}