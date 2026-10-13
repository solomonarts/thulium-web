import { motion } from 'framer-motion';
import { Globe, Smartphone, Monitor } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Globe,
    title: 'Websites & Web Systems',
    description: 'From stunning, conversion-focused brand websites to complex, data-driven web applications that streamline your entire operation.',
    gradient: 'from-primary to-primary-light',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Intuitive, high-performance iOS and Android apps that connect you with your audience on the devices they use most.',
    gradient: 'from-accent to-primary',
  },
  {
    icon: Monitor,
    title: 'Desktop System Development',
    description: 'Robust, secure, and powerful desktop software for specialized tasks that demand high performance and deep system integration.',
    gradient: 'from-primary-dark to-accent',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
            Our Services: The Tools for Your{' '}
            <span className="text-gradient">Transformation</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-4">
            Custom Solutions for Every Digital Frontier
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="transition-smooth"
              >
                <Card className="h-full border-2 hover:border-primary hover:shadow-glow transition-smooth">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${service.gradient} mb-4 sm:mb-6 shadow-elegant`}
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">{service.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
