import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, Palette, Code, TestTube, Rocket } from 'lucide-react';
import DeviceMockups from './DeviceMockups';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    icon: Lightbulb,
    title: 'Discovery & Blueprint',
    subtitle: "Let's Define the \"What\" and \"Why\"",
    description: "Before a single line of code is written, we immerse ourselves in your world. We listen to your challenges, goals, and audience.",
    details: "In-depth Consultations, Goal Mapping, User Story Creation, Technical Feasibility Analysis",
  },
  {
    icon: Palette,
    title: 'Architect & Design',
    subtitle: 'From Blueprint to Beautiful, Functional Design',
    description: "Your idea takes shape. Our designers and architects create wireframes, mockups, and system diagrams.",
    details: "UX/UI Design, System Architecture, Prototyping, Brand Integration",
  },
  {
    icon: Code,
    title: 'Agile Development',
    subtitle: 'Building Your Solution, One Iteration at a Time',
    description: "This is where the magic happens. Our developers build using agile methodologies with regular check-ins.",
    details: "Full-Stack Development, Mobile Development, Desktop Applications, Continuous Integration",
  },
  {
    icon: TestTube,
    title: 'Test & Refine',
    subtitle: 'Polishing to Perfection',
    description: "We believe in launching with confidence. Rigorous testing for performance, security, usability, and bugs.",
    details: "Quality Assurance (QA), User Acceptance Testing (UAT), Performance & Security Audits",
  },
  {
    icon: Rocket,
    title: 'Launch & Grow',
    subtitle: "Your New Possibility is Live. Now, Let's Evolve.",
    description: "Launch day! We handle deployment and offer ongoing support to help your system grow and adapt.",
    details: "Deployment, Hosting Setup, Training & Documentation, Ongoing Support & Maintenance",
  },
];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current) return;

    // Pin title and fade out as user scrolls
    gsap.to(titleRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'top -50%',
        scrub: 1,
        pin: titleRef.current,
        pinSpacing: false,
      },
      opacity: 0,
      scale: 1.5,
    });

    // Animate each step on scroll
    processSteps.forEach((_, index) => {
      gsap.from(`.process-step-${index}`, {
        scrollTrigger: {
          trigger: `.process-step-${index}`,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1,
        },
        opacity: 0,
        y: 100,
        scale: 0.9,
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6">
        <div ref={titleRef} className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4"
          >
            The Process: Your Path to a{' '}
            <span className="text-gradient">New Possibility</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-4"
          >
            We Don't Just Deliver Code, We Deliver Confidence.
          </motion.p>
        </div>

        <div className="space-y-16 sm:space-y-24 md:space-y-32 max-w-6xl mx-auto">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`process-step-${index} flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 w-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl bg-primary/10 mb-4 sm:mb-6 shadow-elegant">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">
                    Step {index + 1}: {step.title}
                  </h3>
                  <h4 className="text-lg sm:text-xl md:text-2xl text-primary mb-3 sm:mb-4 font-semibold">
                    {step.subtitle}
                  </h4>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="bg-card border border-border rounded-xl p-4 sm:p-6 shadow-soft">
                    <p className="text-xs sm:text-sm font-semibold text-primary mb-2">What we do:</p>
                    <p className="text-xs sm:text-sm md:text-base text-foreground">{step.details}</p>
                  </div>
                </div>

                <div className="flex-1 w-full">
                  <DeviceMockups 
                    type={index === 0 || index === 3 ? 'laptop' : index === 1 || index === 4 ? 'phone' : 'both'} 
                    stepIndex={index} 
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
