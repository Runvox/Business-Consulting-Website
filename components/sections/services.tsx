import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, Code, BarChart3, Shield, Zap, Globe } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Briefcase,
      title: "Business Consulting",
      description: "Strategic guidance to optimize your business operations and drive growth.",
      features: ["Strategic Planning", "Process Optimization", "Market Analysis"],
    },
    {
      icon: Code,
      title: "Digital Transformation",
      description: "Modernize your business with cutting-edge technology solutions.",
      features: ["System Integration", "Cloud Migration", "Automation"],
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Turn your data into actionable insights for better decision making.",
      features: ["Business Intelligence", "Predictive Analytics", "Reporting"],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your business with comprehensive security solutions.",
      features: ["Risk Assessment", "Security Audits", "Compliance"],
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Enhance efficiency and productivity across your organization.",
      features: ["Workflow Optimization", "Team Training", "KPI Tracking"],
    },
    {
      icon: Globe,
      title: "Digital Marketing",
      description: "Expand your reach with data-driven marketing strategies.",
      features: ["SEO Optimization", "Social Media", "Content Strategy"],
    },
  ]

  return (
    <section id="services" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">Comprehensive solutions to meet all your business needs</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="relative group hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="h-8 w-8 text-primary mb-2" />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
