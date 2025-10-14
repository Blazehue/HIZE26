"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"
import ParticleBackground from "@/components/ParticleBackground"
import CountdownTimer from "@/components/CountdownTimer"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-8 mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block"
          >
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-4">
              HIZE <span className="text-muted-foreground">2026</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-4"
          >
            <div className="inline-block clay-card px-8 py-4 bg-primary text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                HIGH IMPACT ZONAL EVENTS
              </h2>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground font-serif max-w-3xl mx-auto"
            >
              A flagship IEEE Computer Society initiative bringing together innovation, technology, and academic excellence
            </motion.p>

            {/* Countdown Timer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="pt-8"
            >
              <CountdownTimer />
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Registration Banner */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mb-20"
        >
          <div className="clay-card p-12 md:p-16 text-center space-y-6 bg-gradient-to-br from-card via-secondary to-card">
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                REGISTRATION
              </h2>
              <p className="text-6xl md:text-7xl font-bold tracking-tight text-primary">
                GO LIVE SOON!
              </p>
            </motion.div>
            
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            
            <p className="text-xl text-muted-foreground font-serif max-w-2xl mx-auto">
              Get ready to be part of an extraordinary event featuring hackathons, workshops, and keynote sessions
            </p>
          </div>
        </motion.section>

        {/* Collaboration Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="space-y-8"
        >
          <h3 className="text-center text-2xl font-serif italic text-muted-foreground">
            In Collaboration with
          </h3>
          
          <div className="clay-card p-10 bg-card">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                SRM Institute of Science & Technology
              </h2>
              <p className="text-lg text-muted-foreground font-mono">
                Kattankulathur, Tamil Nadu, Chengalpattu, 603203, India
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-8 pt-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="clay-card px-6 py-4 bg-secondary"
                >
                  <p className="font-bold text-lg">IEEE Computer Society</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="clay-card px-6 py-4 bg-secondary"
                >
                  <p className="font-bold text-lg">SYP Activities</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="clay-card px-6 py-4 bg-secondary"
                >
                  <p className="font-bold text-lg">School of Computing</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="clay-card px-6 py-4 bg-secondary"
                >
                  <p className="font-bold text-lg">CTECH</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* IEEE Logo Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex justify-center items-center gap-8 pt-16"
        >
          <div className="text-6xl font-bold tracking-wider">IEEE</div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20 py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>© 2026 IEEE CS SRM | In collaboration with SRM Institute of Science & Technology</p>
        </div>
      </footer>
    </div>
  )
}