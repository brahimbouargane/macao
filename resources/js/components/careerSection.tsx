import carrere from '@/assets/images/careere.webp';
import office from '@/assets/images/office.webp';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/shadcn-alert';
import { Button } from '@/components/ui/shadcn-button';
import { Input } from '@/components/ui/shadcn-input';
import { Label } from '@/components/ui/shadcn-label';
import { Textarea } from '@/components/ui/shadcn-textarea';
import { AlertCircle, ArrowRight, Briefcase, CheckCircle, Star, Users } from 'lucide-react';
import { useState } from 'react';
import { Container } from './ui';

const CareersSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: '',
    file: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(formData);
      setSubmitStatus('success');

      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          coverLetter: '',
          file: null
        });
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: files ? files[0] : value
    }));
  };

  return (
    <div className="w-full bg-gray-50">
      <div className="absolute -bottom-[80%] left-10 w-20 h-20 animate-float">
        <div className="w-full h-full rounded-full bg-black backdrop-blur-sm"></div>
      </div>
      <div className="absolute bottom-40 right-20 w-16 h-16 animate-float-delayed">
        <div className="w-full h-full rounded-full bg-black backdrop-blur-sm"></div>
      </div>
      <div className="absolute top-3/4 left-10 w-20 h-20 animate-float">
        <div className="w-full h-full rounded-full bg-black backdrop-blur-sm"></div>
      </div>
      <div className="absolute -bottom-full right-20 w-16 h-16 animate-float-delayed">
        <div className="w-full h-full rounded-full bg-black backdrop-blur-sm"></div>
      </div>
      {/* Hero Banner Section */}
      <div className="relative h-[28rem] overflow-hidden bg-gradient-to-r from-red-600 to-red-800">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src={carrere}
          alt="Careers Banner"
          className="w-full h-full object-cover object-center transform scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in">Carrières</h1>
          <p className="text-xl text-white/90 max-w-2xl text-center animate-fade-in-delayed">
            Rejoignez une équipe passionnée et contribuez à façonner l'avenir
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>
      <Container>
        <div className=" mx-auto px-4 py-24">
          {/* Main Content Section */}
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              Rejoignez Notre Équipe
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Nous sommes toujours à la recherche de talents exceptionnels pour rejoindre notre équipe en pleine
              croissance. Découvrez comment vous pouvez contribuer à notre succès tout en développant votre carrière.
            </p>
          </div>

          {/* Benefits Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              {
                icon: Briefcase,
                title: 'Opportunités de Croissance',
                description: 'Développement professionnel continu et progression de carrière personnalisée'
              },
              {
                icon: Users,
                title: "Culture d'Entreprise",
                description: 'Un environnement de travail dynamique et inclusif qui valorise la diversité'
              },
              {
                icon: Star,
                title: 'Avantages Compétitifs',
                description: 'Package attractif incluant santé, bien-être et équilibre travail-vie personnelle'
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-red-50 p-4 rounded-2xl mb-6 group-hover:bg-red-100 transition-colors duration-300">
                    <benefit.icon className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Why Join Us Section */}
          <div className="bg-white rounded-2xl shadow-lg p-12 mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Pourquoi Nous Rejoindre?</h3>
                <div className="space-y-4">
                  {[
                    'Innovation et créativité au cœur de nos projets',
                    'Formation continue et développement personnel',
                    'Environnement de travail moderne et flexible',
                    'Projets stimulants et impactants'
                  ].map((point, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-red-600 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-600">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <img src={office} alt="Office Life" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className=" mx-auto bg-white rounded-2xl shadow-lg p-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Déposez Votre Candidature</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Nom Complet
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="rounded-lg border-gray-200 focus:border-red-500 focus:ring-red-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-lg border-gray-200 focus:border-red-500 focus:ring-red-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium">
                  Numéro de Téléphone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="rounded-lg border-gray-200 focus:border-red-500 focus:ring-red-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="coverLetter" className="text-sm font-medium">
                  Lettre de Motivation
                </Label>
                <Textarea
                  id="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  className="rounded-lg border-gray-200 focus:border-red-500 focus:ring-red-500 min-h-[160px]"
                  rows={6}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cv" className="text-sm font-medium">
                  CV (PDF uniquement)
                </Label>
                <Input
                  id="cv"
                  type="file"
                  accept=".pdf"
                  onChange={handleChange}
                  className="rounded-lg border-gray-200 focus:border-red-500 focus:ring-red-500"
                  required
                />
              </div>

              <div className="flex justify-center pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-8 py-3 rounded-lg flex items-center gap-2 transform hover:scale-105 transition-all duration-300"
                >
                  {isSubmitting ? (
                    'Envoi en cours...'
                  ) : (
                    <>
                      Envoyer ma candidature
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </Button>
              </div>
            </form>

            {submitStatus === 'success' && (
              <Alert className="mt-6 bg-green-50 border-green-200">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <AlertTitle>Félicitations!</AlertTitle>
                <AlertDescription>Votre candidature a été envoyée avec succès.</AlertDescription>
              </Alert>
            )}

            {submitStatus === 'error' && (
              <Alert variant="destructive" className="mt-6">
                <AlertCircle className="h-5 w-5" />
                <AlertTitle>Erreur</AlertTitle>
                <AlertDescription>Une erreur est survenue lors de l'envoi. Veuillez réessayer.</AlertDescription>
              </Alert>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CareersSection;
