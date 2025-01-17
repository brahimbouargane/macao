import { Alert, AlertDescription, AlertTitle } from '@/components/ui/shadcn-alert';
import { Button } from '@/components/ui/shadcn-button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/shadcn-dailog';
import { Input } from '@/components/ui/shadcn-input';
import { Label } from '@/components/ui/shadcn-label';
import { Textarea } from '@/components/ui/shadcn-textarea';
import { AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function CVSubmissionModal() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulating an API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log({
        name,
        email,
        phone,
        coverLetter,
        fileName: file ? file.name : 'Aucun fichier téléchargé'
      });

      setSubmitStatus('success');
      // Close the modal after successful submission after a short delay
      setTimeout(() => {
        setOpen(false);
        // Reset form
        setName('');
        setEmail('');
        setPhone('');
        setCoverLetter('');
        setFile(null);
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Soumettre votre CV</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-white">
        <DialogHeader>
          <DialogTitle>Soumettre votre CV</DialogTitle>
          <DialogDescription>
            Veuillez remplir le formulaire ci-dessous pour soumettre votre candidature.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Nom Complet</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="phone">Numéro de Téléphone</Label>
            <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="coverLetter">Lettre de Motivation</Label>
            <Textarea id="coverLetter" value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} rows={4} />
          </div>
          <div>
            <Label htmlFor="cv">Télécharger CV (PDF uniquement)</Label>
            <Input
              id="cv"
              type="file"
              accept=".pdf"
              onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
              required
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer CV'}
            </Button>
          </div>
        </form>
        {submitStatus === 'success' && (
          <Alert className="mt-4">
            <AlertTitle>Succès !</AlertTitle>
            <AlertDescription>Votre CV a été envoyé avec succès.</AlertDescription>
          </Alert>
        )}
        {submitStatus === 'error' && (
          <Alert variant="destructive" className="mt-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Erreur</AlertTitle>
            <AlertDescription>Une erreur est survenue lors de l'envoi. Veuillez réessayer.</AlertDescription>
          </Alert>
        )}
      </DialogContent>
    </Dialog>
  );
}
