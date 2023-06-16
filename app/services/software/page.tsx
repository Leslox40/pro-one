import ServicesSectionOne from "@/components/Services/ServicesSectionOne";
import ServicesSectionTwo from "@/components/Services/ServicesSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Portfolio from "@/components/Portfolio";

const SoftwareServicesPage = () => {
    return (
      <>
        <Breadcrumb
          pageName="Software Services"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
        />
        <ServicesSectionOne imgSrc={"/images/about/1.png"} />
        <Portfolio />
        <ServicesSectionTwo imgSrc={"/images/about/about-image-2.svg"} />
      </>
    );
  };
  
  export default SoftwareServicesPage;