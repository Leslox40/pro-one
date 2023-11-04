import ServicesSectionOne from "@/components/Services/ServicesSectionOne";
import ServicesSectionTwo from "@/components/Services/ServicesSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";
import Video from "@/components/Video";
import Pricing from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import CustomModal from "@/components/Carousel";
import { serviceSectionData } from "@/components/Services/serviceData";





const ServicesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Services Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <Features />
      <Video videoId={"L61p2uyiMSo"} imgSrc={"/images/video/video.jpg"} />
      <Services />
      <Pricing />
      <Portfolio limit={6} />
      <ServicesSectionOne serviceData={serviceSectionData.sectionOne.services} />
      <ServicesSectionTwo serviceData={serviceSectionData.sectionTwo.services} />
      <CustomModal />
    </>
  );
};

export default ServicesPage;
