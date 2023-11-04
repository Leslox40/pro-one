import ServicesSectionOne from "@/components/Services/ServicesSectionOne";
import ServicesSectionTwo from "@/components/Services/ServicesSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Portfolio from "@/components/Portfolio";
import { serviceSectionData } from "@/components/Services/serviceData";


const StructuralServicesPage = () => {
    return (
      <>
        <Breadcrumb
          pageName="Structural Engineering Services"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
        />
        <ServicesSectionOne serviceData={serviceSectionData.sectionOne.structural} />
        <Portfolio limit={6} />
        <ServicesSectionTwo serviceData={serviceSectionData.sectionTwo.structural} />
      </>
    );
  };
  
  export default StructuralServicesPage;