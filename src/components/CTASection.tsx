import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Calendar } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-64 h-64 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 md:w-96 md:h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight px-4">
            Let's Build the{' '}
            <span className="text-gradient">Next Possibility</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-gray-200 mb-8 sm:mb-12 leading-relaxed px-4">
            Every breakthrough starts with a conversation.
            <br className="hidden sm:block" />
            Let's turn your next challenge into a success story.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary-light text-white px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 text-base sm:text-lg md:text-xl shadow-glow transition-smooth group"
              >
                <Mail className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-secondary px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 text-base sm:text-lg md:text-xl transition-smooth"
              >
                <Calendar className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                Schedule a Call
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 sm:mt-16 text-gray-300"
          >
            <p className="text-sm sm:text-base md:text-lg mb-4 px-4">Trusted by innovative companies worldwide</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 md:gap-12 items-center opacity-60 px-4">
              <div className="h-10 w-24 sm:h-12 sm:w-32 bg-white/20 rounded backdrop-blur-sm" />
              <div className="h-10 w-24 sm:h-12 sm:w-32 bg-white/20 rounded backdrop-blur-sm" />
              <div className="h-10 w-24 sm:h-12 sm:w-32 bg-white/20 rounded backdrop-blur-sm hidden sm:block" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
