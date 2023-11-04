import ServicesSectionOne from "@/components/Services/ServicesSectionOne";
import ServicesSectionTwo from "@/components/Services/ServicesSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Portfolio from "@/components/Portfolio";
import { serviceSectionData } from "@/components/Services/serviceData";


const SoftwareServicesPage = () => {
    return (
      <>
        <Breadcrumb
          pageName="Software Services"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
        />
        <ServicesSectionOne serviceData={serviceSectionData.sectionOne.software} />
        <Portfolio limit={6} />
        <ServicesSectionTwo serviceData={serviceSectionData.sectionTwo.software} />
      </>
    );
  };
  
  export default SoftwareServicesPage;