import ServicesSectionOne from "@/components/Services/ServicesSectionOne";
import ServicesSectionTwo from "@/components/Services/ServicesSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";
import Video from "@/components/Video";
import Pricing from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import CustomModal from "@/components/Carousel";




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
      <Portfolio />
      <ServicesSectionOne imgSrc={"/images/about/1.png"} />
      <ServicesSectionTwo imgSrc={"/images/about/about-image-2.svg"} />
      <CustomModal />
    </>
  );
};

export default ServicesPage;
