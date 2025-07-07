import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Platform Redesign",
      category: "Digital Transformation",
      description: "Complete overhaul of legacy e-commerce system resulting in 150% increase in conversions.",
      image: "/placeholder.svg?height=300&width=400",
      results: "+150% Conversions",
    },
    {
      title: "Manufacturing Process Optimization",
      category: "Business Consulting",
      description: "Streamlined manufacturing processes reducing costs by 30% and improving efficiency.",
      image: "/placeholder.svg?height=300&width=400",
      results: "-30% Costs",
    },
    {
      title: "Data Analytics Dashboard",
      category: "Data Analytics",
      description: "Custom analytics platform providing real-time insights for better decision making.",
      image: "/placeholder.svg?height=300&width=400",
      results: "+40% Efficiency",
    },
    {
      title: "Cloud Migration Project",
      category: "Digital Transformation",
      description: "Seamless migration to cloud infrastructure with zero downtime and improved scalability.",
      image: "/placeholder.svg?height=300&width=400",
      results: "99.9% Uptime",
    },
    {
      title: "Security Audit & Implementation",
      category: "Cybersecurity",
      description: "Comprehensive security overhaul protecting against modern cyber threats.",
      image: "/placeholder.svg?height=300&width=400",
      results: "100% Compliance",
    },
    {
      title: "Marketing Automation System",
      category: "Digital Marketing",
      description: "Automated marketing workflows increasing lead generation by 200%.",
      image: "/placeholder.svg?height=300&width=400",
      results: "+200% Leads",
    },
  ]

  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Our Portfolio</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Successful projects that showcase our expertise and results
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-background/90 text-foreground text-xs px-2 py-1 rounded-full font-semibold">
                    {project.results}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  View Case Study
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
