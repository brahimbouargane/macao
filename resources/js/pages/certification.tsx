import { Button } from '@/components/ui/shadcn-button';
import { GuestLayout } from '@/layouts';
import { Float, OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { type Engine } from '@tsparticles/engine';
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useRef, useState } from 'react';
import Particles from 'react-particles';
import { Mesh } from 'three';
import { loadFull } from 'tsparticles';

interface FloatingCertificateProps {
  position: [number, number, number];
  color: string;
  scale: number;
}

function FloatingCertificate({ position, color, scale }: FloatingCertificateProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={[scale, scale, 0.1]}>
      <boxGeometry args={[1, 1.4, 0.1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: '#ffffff'
          },
          shape: {
            type: 'circle'
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'grab'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1
              }
            }
          }
        },
        retina_detect: true
      }}
    />
  );
}

export default function CertificationPage() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const certificates = [
    { id: 'cert1', name: 'Web Development', color: '#ff6b6b' },
    { id: 'cert2', name: 'Data Science', color: '#4ecdc4' },
    { id: 'cert3', name: 'UX Design', color: '#45b7d1' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      <ParticleBackground />
      <header className="p-6 z-10 relative">
        <h1 className="text-4xl font-bold text-center mb-4">Your Certifications</h1>
        <p className="text-center text-gray-300 max-w-2xl mx-auto">
          Explore your achievements and showcase your skills with our interactive certification display.
        </p>
      </header>
      <main className="container mx-auto px-4 py-12 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold mb-4">Your Achievements</h2>
            {certificates.map((cert) => (
              <motion.div key={cert.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="w-full text-left justify-between items-center"
                  variant="outline"
                  onClick={() => setSelectedCert(cert.id)}
                >
                  <span>{cert.name}</span>
                  <motion.span animate={{ rotate: selectedCert === cert.id ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    ▼
                  </motion.span>
                </Button>
              </motion.div>
            ))}
          </div>
          <div className="h-[400px] bg-gray-800 rounded-lg shadow-xl overflow-hidden">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <OrbitControls enableZoom={false} />
              {certificates.map((cert, index) => (
                <Float key={cert.id} speed={1.5} rotationIntensity={1} floatIntensity={2}>
                  <FloatingCertificate
                    position={[index * 2 - 2, 0, 0]}
                    color={cert.color}
                    scale={selectedCert === cert.id ? 1.2 : 1}
                  />
                </Float>
              ))}
            </Canvas>
          </div>
        </div>
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-8 p-6 bg-gray-800 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">{certificates.find((c) => c.id === selectedCert)?.name}</h3>
              <p className="text-gray-300">
                Congratulations on earning this certification! This achievement demonstrates your expertise and
                dedication to continuous learning.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

CertificationPage.layout = (page: any) => <GuestLayout children={page} />;
