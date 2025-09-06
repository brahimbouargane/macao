import DisplaySection from '@/components/displaySection';
import ImageGrid from '@/components/gridImages';
import PralineAdvertisement from '@/components/newAbout';
import ProductShowcase from '@/components/newProductsSection';
import TextSlider from '@/components/textSlider';

import { NewLayout } from '@/layouts/new-layout';

function NewhomePage() {
  return (
    <>
      {' '}
      {/* <BentoGrid /> */}
      {/* <CategoryCarousel /> */}
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

export default NewhomePage;
NewhomePage.layout = (page: any) => <NewLayout children={page} />;
