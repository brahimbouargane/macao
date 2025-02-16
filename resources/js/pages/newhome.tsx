import BentoGrid from '@/components/bentoGrid';
import DisplaySection from '@/components/displaySection';
import ImageGrid from '@/components/gridImages';
import PralineAdvertisement from '@/components/newAbout';
import ProductShowcase from '@/components/newProductsSection';
import TextSlider from '@/components/textSlider';

import { NewLayout } from '@/layouts/new-layout';

function Newhome() {
  return (
    <>
      {' '}
      <BentoGrid />
      <div className="w-full">
        <TextSlider speed={8} pauseOnHover={true} />
      </div>
      <PralineAdvertisement />
      <ProductShowcase />
      <DisplaySection />
      <ImageGrid />
    </>
  );
}

export default Newhome;
Newhome.layout = (page: any) => <NewLayout children={page} />;
