"use client";
import dynamic from "next/dynamic";
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ProfileCard from "./components/ProfileCard/ProfileCard";
import TextType from "./components/TextType/TextType";
import Aurora from "./components/Aurora/Aurora";

const ColorBends = dynamic(() => import("./components/ColorBends/ColorBends"), {
  ssr: false,
});

export default function Home() {
  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = 'hidden';
    
    // Cleanup function to re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div 
      className="h-screen w-full text-white relative flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="fixed inset-0 -z-10">
        <Aurora
          className="w-full h-full"
          colorStops={["#1B3C53", "#234C6A", "#456882"]}
          blend={1}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      {/* HERO SECTION */}
      <motion.section 
        className="relative w-full h-full overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              when: "beforeChildren",
              staggerChildren: 0.2
            }
          }
        }}
      >
        {/* 🔥 Background ColorBends (Hero Background) */}
        <div className="absolute inset-0 z-0" aria-hidden>
          {/* Base layer (opaque) */}
          <ColorBends
            className="w-full h-full"
            colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
            rotation={30}
            speed={0.28}
            autoRotate={3}
            scale={1.2}
            frequency={1.35}
            warpStrength={1.2}
            mouseInfluence={0.4}
            parallax={0.5}
            noise={0.06}
            drift={0.25}
            driftSpeed={0.12}
            transparent={false}
          />

          {/* Overlay 1 */}
          <div className="pointer-events-none absolute inset-0">
            <ColorBends
              className="absolute inset-0 w-full h-full mix-blend-screen opacity-70"
              colors={["#00ffd1", "#8a5cff", "#ff5c7a"]}
              rotation={-35}
              speed={0.22}
              autoRotate={-6}
              scale={1.45}
              frequency={1.25}
              warpStrength={1.3}
              mouseInfluence={0.3}
              parallax={0.4}
              noise={0.05}
              drift={0.35}
              driftSpeed={0.16}
              transparent
            />
          </div>

          {/* Overlay 2 */}
          <div className="pointer-events-none absolute inset-0">
            <ColorBends
              className="absolute inset-0 w-full h-full mix-blend-screen opacity-60"
              colors={["#8a5cff", "#00ffd1", "#ff5c7a"]}
              rotation={75}
              speed={0.18}
              autoRotate={4}
              scale={1.1}
              frequency={1.5}
              warpStrength={1.15}
              mouseInfluence={0.25}
              parallax={0.35}
              noise={0.04}
              drift={0.3}
              driftSpeed={0.14}
              transparent
            />
          </div>

          {/* Overlay 3 */}
          <div className="pointer-events-none absolute inset-0">
            <ColorBends
              className="absolute inset-0 w-full h-full mix-blend-screen opacity-50"
              colors={["#ff5c7a", "#00ffd1", "#8a5cff"]}
              rotation={0}
              speed={0.26}
              autoRotate={8}
              scale={1.6}
              frequency={1.2}
              warpStrength={1.4}
              mouseInfluence={0.2}
              parallax={0.3}
              noise={0.03}
              drift={0.4}
              driftSpeed={0.2}
              transparent
            />
          </div>
        </div>

        {/* Overlay 4 (Additional Layer) */}
        <div className="pointer-events-none absolute inset-0">
          <ColorBends
            className="absolute inset-0 w-full h-full mix-blend-soft-light opacity-40"
            colors={["#ffffff", "#e0e0e0", "#c0c0c0"]}
            rotation={0}
            speed={0.26}
            autoRotate={8}
            scale={2.2}
            frequency={2.2}
            warpStrength={0.8}
            mouseInfluence={0.6}
            parallax={0.9}
            noise={0.15}
            drift={0.3}
            driftSpeed={0.25}
            interactive={true}
            transparent
          />
        </div>

        {/* Gradient Overlay untuk readability */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-transparent to-black/60" />

        {/* HERO CONTENT */}
        <div className="relative z-20 mx-auto max-w-5xl px-4 h-screen flex flex-col">

          {/* HERO LAYOUT */}
          <div className="flex-1 flex flex-col md:flex-row items-center justify-between mt-17 gap-12">
            {/* Text Content */}
            <div className="w-full md:w-1/2 text-start">
              <div className="space-y-6">
                <motion.div 
                  className="space-y-2"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.6, ease: "easeOut" }
                    }
                  }}
                >
                  <motion.h2 
                    className="text-lg md:text-xl text-white/70 font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    Hello, I'm Yusuf.
                  </motion.h2>
                  <motion.h1 
                    className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <TextType
                      text={[
                        "Frontend Developer",
                        "Building Clean UI",
                        "Future Full Stack Developer",
                        "Happy scrolling !",
                      ]}
                      typingSpeed={75}
                      pauseDuration={1500}
                      showCursor={true}
                      cursorCharacter="|"
                    />
                  </motion.h1>
                  <motion.h5
                    id="home"
                    className="text-lg md:text-1xl text-white/70 font-medium text-justify w-2xl max-w-130"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    Passionate Frontend Developer with a strong focus on
                    crafting intuitive, responsive, and visually engaging user
                    interfaces. I bring ideas to life through clean, efficient
                    code and seamless user experiences. Currently expanding my
                    expertise toward full-stack development to create end-to-end
                    solutions that deliver both functionality and great design.
                  </motion.h5>
                </motion.div>

                {/* Buttons Row */}
                <motion.div 
                  className="pt-4 flex space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <motion.a
                    href="#"
                    className="inline-flex items-center justify-center px-15 py-2.5 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    My Project
                  </motion.a>
                  <motion.a
                    href="/assets/For_Download/CV_Yusup.png"
                    download
                    className="inline-flex items-center justify-center px-6 py-2.5 border border-white/20 bg-white/5 rounded-full text-white hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Download CV</span>
                    <motion.svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      animate={{ y: [0, 2, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </motion.svg>
                  </motion.a>
                </motion.div>

                {/* Social Media Buttons - Below Text */}
                <motion.div 
                  className="flex justify-start space-x-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <a
                    href="https://github.com/yusuppppppppp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.1-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.212 22 16.456 22 12.017 22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/alvaretttt?igsh=YXo4aWJqbWppanJp"
                    target="_blank"
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.09c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.09c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.976.045-1.505.207-1.858.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.976.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yusuf-satria-793575336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Profile Card */}
            <motion.div 
              className="mt-36 md:mb-40 relative z-0"
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                rotate: 0,
                transition: { 
                  delay: 0.4,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative z-0">
                <ProfileCard
                  name="Yusuf"
                  title="Frontend Developer"
                  contactText="Contact Me"
                  avatarUrl="/assets/profile.png"
                  showUserInfo={false}
                  enableTilt={true}
                  enableMobileTilt={true}
                  onContactClick={() => console.log("Contact clicked")}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      </motion.div> 
    );
}
