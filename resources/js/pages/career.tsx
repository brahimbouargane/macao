import CareersSection from '@/components/careerSection';
import { GuestLayout } from '@/layouts';

function Career() {
  return <CareersSection />;
}

export default Career;
Career.layout = (page: any) => <GuestLayout children={page} />;
