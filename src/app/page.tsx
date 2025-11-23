
import Header from "./header/page";
import TrustBadges from "@/component/TrustBadge";
import WhyChooseUs from "@/component/WhyChooseUs";
import PlotFeatures from "@/component/PlotFeature";
import Gallery from "@/component/Pictures";
import LocationSection from "@/component/Location";


export default function Home() {
  return (
    <div>
      <Header></Header>
      <PlotFeatures></PlotFeatures>
      <TrustBadges></TrustBadges>
      <Gallery></Gallery>
      <WhyChooseUs></WhyChooseUs>
      <LocationSection></LocationSection>
    </div>
    
  );
}
