import CareersSection from '@/components/careerSection';
import { NewLayout } from '@/layouts/new-layout';

function Career() {
  return <CareersSection />;
}

export default Career;
Career.layout = (page: any) => <NewLayout children={page} />;
