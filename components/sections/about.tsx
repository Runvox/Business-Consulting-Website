import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Target, Award } from "lucide-react"

export default function About() {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Target, label: "Projects Completed", value: "1000+" },
    { icon: Award, label: "Years Experience", value: "15+" },
    { icon: CheckCircle, label: "Success Rate", value: "98%" },
  ]

  return (
    <section id="about" className="py-16 sm:py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">About Our Company</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              With over 15 years of experience in business consulting and digital transformation, we've helped hundreds
              of companies achieve their goals and exceed expectations.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <CheckCircle className="flex-shrink-0 h-6 w-6 text-primary mt-1" />
                <p className="ml-3 text-base text-muted-foreground">
                  Expert team with proven track record in business transformation
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="flex-shrink-0 h-6 w-6 text-primary mt-1" />
                <p className="ml-3 text-base text-muted-foreground">
                  Customized solutions tailored to your specific business needs
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="flex-shrink-0 h-6 w-6 text-primary mt-1" />
                <p className="ml-3 text-base text-muted-foreground">
                  24/7 support and ongoing partnership for long-term success
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
