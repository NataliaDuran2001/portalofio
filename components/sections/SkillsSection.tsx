"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Settings, 
  Monitor,
  Server,
  GitBranch,
  Shield
} from "lucide-react";

const skillCategories = [
  {
    title: "Backend Development",
    icon: Server,
    gradient: "from-blue-500 to-blue-600",
    skills: [
      { name: "Spring Boot", level: 95, years: "4 años" },
      { name: "NestJS", level: 90, years: "2 años" },
      { name: "Node.js", level: 85, years: "3 años" },
      { name: ".NET", level: 80, years: "2 años" }
    ]
  },
  {
    title: "Frontend Development",
    icon: Monitor,
    gradient: "from-pink-500 to-pink-600",
    skills: [
      { name: "React.js", level: 90, years: "3 años" },
      { name: "Angular", level: 85, years: "2 años" },
      { name: "TypeScript", level: 95, years: "4 años" },
      { name: "JavaScript", level: 92, years: "4 años" }
    ]
  },
  {
    title: "Databases",
    icon: Database,
    gradient: "from-green-500 to-green-600",
    skills: [
      { name: "Oracle", level: 95, years: "4 años" },
      { name: "MongoDB", level: 90, years: "3 años" },
      { name: "PostgreSQL", level: 85, years: "3 años" },
      { name: "SQL Server", level: 80, years: "2 años" }
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    gradient: "from-purple-500 to-purple-600",
    skills: [
      { name: "Docker", level: 90, years: "3 años" },
      { name: "Kubernetes", level: 85, years: "2 años" },
      { name: "Jenkins", level: 80, years: "2 años" },
      { name: "Azure DevOps", level: 85, years: "2 años" }
    ]
  }
];

const languages = [
  { name: "Java", level: 95, color: "bg-orange-500" },
  { name: "TypeScript", level: 95, color: "bg-blue-500" },
  { name: "JavaScript", level: 92, color: "bg-yellow-500" },
  { name: "C#", level: 80, color: "bg-purple-500" }
];

const tools = [
  "Apache Kafka", "Grafana", "Dynatrace", "Argo CD", "Git", "SCRUM", "Agile",
  "Clean Architecture", "Microservices", "REST APIs", "Event-Driven Architecture",
  "OWASP", "ASVS", "CI/CD", "Flutter", "Kony", "SAP B1"
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-pink-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Habilidades Técnicas
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tecnologías y herramientas con las que construyo soluciones robustas y escalables
            </p>
          </div>

          {/* Skills Categories */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 gradient-bg-card">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center shadow-md`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-900">{skill.name}</span>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="text-xs">
                              {skill.years}
                            </Badge>
                            <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                          </div>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Programming Languages */}
          <Card className="border-0 shadow-lg mb-8">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Lenguajes de Programación</h3>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {languages.map((lang, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{lang.name}</span>
                      <span className="text-sm font-medium text-gray-600">{lang.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full ${lang.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${lang.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tools & Technologies */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-md">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Herramientas & Tecnologías</h3>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-pink-100 text-gray-700 hover:from-blue-200 hover:to-pink-200 transition-all duration-300 cursor-default"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Methodologies */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="border-0 shadow-lg text-center p-6 gradient-bg-card">
              <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Desarrollo Seguro</h4>
              <p className="text-sm text-gray-600">OWASP, ASVS, Security Best Practices</p>
            </Card>
            <Card className="border-0 shadow-lg text-center p-6 gradient-bg-card">
              <GitBranch className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Metodologías Ágiles</h4>
              <p className="text-sm text-gray-600">SCRUM, Kanban, Continuous Integration</p>
            </Card>
            <Card className="border-0 shadow-lg text-center p-6 gradient-bg-card">
              <Settings className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Arquitectura</h4>
              <p className="text-sm text-gray-600">Microservices, Clean Code, Event-Driven</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}