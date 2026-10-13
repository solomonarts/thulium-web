import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, TrendingDown, Zap, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const impacts = [
  { icon: TrendingUp, label: 'Efficiency', value: '↑ 45%', color: 'text-primary' },
  { icon: TrendingDown, label: 'Cost Reduction', value: '↓ 30%', color: 'text-accent' },
  { icon: Zap, label: 'Performance', value: '↑ 85%', color: 'text-primary-light' },
  { icon: Users, label: 'User Satisfaction', value: '↑ 92%', color: 'text-primary-glow' },
];

const ImpactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Horizontal scroll animation
    const panels = gsap.utils.toArray('.impact-panel');
    
    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: () => '+=' + containerRef.current!.offsetWidth,
      },
    });

    // Animate metrics
    impacts.forEach((_, index) => {
      gsap.from(`.metric-${index}`, {
        scrollTrigger: {
          trigger: `.metric-${index}`,
          start: 'left center',
          toggleActions: 'play none none reverse',
        },
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: 'back.out',
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 md:py-32 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-4">
            The <span className="text-gradient">Impact</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto px-4">
            Real Results. Real Success Stories.
          </p>
        </motion.div>
      </div>

      <div ref={containerRef} className="relative h-[500px] sm:h-[550px] md:h-[600px]">
        <div className="flex h-full w-[400%]">
          {/* Panel 1: Introduction */}
          <div className="impact-panel w-screen h-full flex items-center justify-center px-4 sm:px-8 md:px-12">
            <div className="max-w-4xl text-center text-white">
              <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
                Transforming Challenges into Success
              </h3>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 px-4">
                Every project we deliver creates measurable impact for our clients
              </p>
            </div>
          </div>

          {/* Panel 2: Metrics */}
          <div className="impact-panel w-screen h-full flex items-center justify-center px-4 sm:px-8 md:px-12">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-8 max-w-4xl w-full">
              {impacts.map((impact, index) => {
                const Icon = impact.icon;
                return (
                  <motion.div
                    key={index}
                    className={`metric-${index} bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20 hover:border-primary transition-smooth`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Icon className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2 sm:mb-3 md:mb-4 ${impact.color}`} />
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">
                      {impact.value}
                    </div>
                    <div className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300">{impact.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Panel 3: Case Study Preview */}
          <div className="impact-panel w-screen h-full flex items-center justify-center px-4 sm:px-8 md:px-12">
            <div className="max-w-4xl text-center text-white">
              <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
                Custom Solutions, Proven Results
              </h3>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 px-4">
                From startups to enterprises, we've helped businesses of all sizes achieve their goals
              </p>
              <div className="bg-gradient-primary rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-glow">
                <Zap className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 text-white" />
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">Ready to see what we can achieve together?</p>
              </div>
            </div>
          </div>

          {/* Panel 4: Transition */}
          <div className="impact-panel w-screen h-full flex items-center justify-center px-4 sm:px-8 md:px-12">
            <div className="max-w-4xl text-center text-white">
              <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
                Your Success Story Starts Here
              </h3>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 px-4">
                Let's build something extraordinary together
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 sm:mt-12 text-gray-400 px-4">
        <p className="text-xs sm:text-sm">← Scroll horizontally to explore →</p>
      </div>
    </section>
  );
};

export default ImpactSection;
