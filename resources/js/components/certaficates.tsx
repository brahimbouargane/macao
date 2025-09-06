import ifs from '@/assets/images/ifs.webp';
import iso from '@/assets/images/iso.webp';
import onssa from '@/assets/images/onssa.webp';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/shadcn-card';

interface CertificateProps {
  logoSrc: string;
  title: string;
  description: string;
  issueDate: string;
}

// Certificate data array
const certificates: CertificateProps[] = [
  {
    logoSrc: iso,
    title: 'ISO 9001:2015',
    description:
      'Système de Management de la Sécurité des Denrées Alimentaires, garantissant les plus hauts standards de sécurité alimentaire dans notre processus de production.',

    issueDate: '2023'
  },
  {
    logoSrc: ifs,
    title: 'HACCP',
    description:
      'Certification en Analyse des Dangers et Points Critiques pour leur Maîtrise, assurant un contrôle rigoureux de la sécurité alimentaire dans notre production.',
    issueDate: '2023'
  },
  {
    logoSrc: onssa,
    title: 'Certification Halal',
    description:
      'Certification attestant que nos produits sont conformes aux normes alimentaires Halal, garantissant la qualité et la traçabilité de nos ingrédients.',
    issueDate: '2023'
  }
];

function CertificateCard({ logoSrc, title, description, issueDate }: CertificateProps) {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center space-x-4 pb-2">
        <img src={logoSrc} alt={`${title} logo`} width={64} height={64} className="rounded-full" />
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        {/* <p className="text-sm text-muted-foreground">Issued: {issueDate}</p> */}
      </CardContent>
    </Card>
  );
}

export default function CertificatesSection() {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-red-500 font-medium tracking-wide uppercase mb-4">Our Certifications</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
