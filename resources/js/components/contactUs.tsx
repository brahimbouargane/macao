import Pastor from '@/assets/images/pastor.jpg';
import { Button } from '@/components/ui/shadcn-button';
import { Card, CardContent } from '@/components/ui/shadcn-card';
import { Input } from '@/components/ui/shadcn-input';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };
  return (
    <div className="relative w-full py-10">
      {/* Map Section */}
      <div className="grid lg:grid-cols-2 gap-0">
        <div className="relative h-[600px] bg-muted">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1661.9232125861787!2d-7.649992323583578!3d33.56785337807974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2d6cdf894dd%3A0xcef3758880cfd48a!2sPASTOR%20S.A.!5e0!3m2!1sen!2sma!4v1703893456789!5m2!1sen!2sma"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
            title="PASTOR S.A. Location Map"
          />
        </div>
        <div className="relative">
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
            <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-white rounded-bl-[100px]" />
          </div>
          <div className="relative h-[600px]">
            <img src={Pastor} alt="Ocean Tower Building" className="h-full w-full object-fill" />
            <div className="absolute inset-0 bg-black/40">
              <div className="p-8 lg:p-12 text-white">
                <h2 className="text-3xl font-bold mb-6">Our Location</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5" />
                    <div>
                      <p>49, rue Ennasrine Beausejour</p>
                      <p>Casablanca 20200</p>
                      <p>Maroc</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5" />
                    <div className="flex flex-col">
                      <p>+212 (5) 22 79 10 00</p>
                      <p>+212 (5) 22 36 54 92</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5" />
                    <p>export@pastor-macao.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Email Call to Action */}
      <div className=" py-10">
        <Card className="w-full">
          <CardContent className="p-8 md:p-12">
            {/* Responsive flex container */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* Text content */}
              <div className="space-y-2 lg:max-w-md">
                <h3 className="text-2xl md:text-3xl font-bold">RESTER AU COURANT</h3>
                <p className="text-muted-foreground">
                  Inscrivez-vous pour découvrir nos nouveautés et nos actualités en avant-première !
                </p>
              </div>

              {/* Form */}
              <div className="flex-1 lg:max-w-xl">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Votre adresse email"
                    className="flex-1 min-w-0"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit" className="whitespace-nowrap">
                    S'inscrire
                  </Button>
                </form>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
