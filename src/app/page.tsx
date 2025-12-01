'use client'
import Header from "./header/page";
import TrustBadges from "@/component/TrustBadge";
import WhyChooseUs from "@/component/WhyChooseUs";
import PlotFeatures from "@/component/PlotFeature";
import Gallery from "@/component/Pictures";
import LocationSection from "@/component/Location";
import { useEffect } from "react";


export default function Home() {
useEffect(() => {
  const sections: NodeListOf<Element> = document.querySelectorAll('.box');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');    
        } else {
          entry.target.classList.remove('show'); 
        }
      });
    },
    {
      threshold: 0.3, 
    }
  );

  sections.forEach((el) => observer.observe(el));

  // Cleanup: component unmount হলে observer disconnect হবে
  return () => {
    sections.forEach((el) => observer.unobserve(el));
  };
}, []);

  return (
    <div>
      <Header></Header>
      <section className="box">
        <PlotFeatures></PlotFeatures>
      </section>
      <section className="box">
        <TrustBadges></TrustBadges>
      </section>
      <section className="box">
        <WhyChooseUs></WhyChooseUs>
      </section>
      <section className="box">
        <LocationSection></LocationSection>
      </section>
      <section className="box">
        <Gallery></Gallery>
      </section>
      
    </div>
    
  );
}
