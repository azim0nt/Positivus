import { motion } from "framer-motion";




function ServicesScreen() {
    const animationPreset = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount:0.5 },
        transition: { duration: 0.5, ease: "linear" },
        
      };

      const services = [
       { text_1:'Search engine', text_2:'optimization', image:}
      ]

    return ( <>
    <div className="services-wrapper mt-20">
        <motion.div {...animationPreset} className="services-top flex items-center h-[60px] gap-7">
            <p className="h2 px-2 h-full bg-green-color rounded-[15px] font-black text-center">Services</p>
            <p className="p">At our digital marketing agency, we offer a range of services to <br /> help businesses grow and succeed online. These services include:</p>
        </motion.div>
    </div>
    </> );
}

export default ServicesScreen;