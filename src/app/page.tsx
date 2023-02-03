"use client";
import { Inter } from "@next/font/google";
import FirstSection from "@/components/LandingContainer/FirstSection/FirstSection";
import SecondSection from "@/components/LandingContainer/SecondSection/SecondSection";
import VerticalLine from "@/components/VerticalLine/VerticalLine";
import MediaContentSection from "@/components/LandingContainer/MediaContentSection/MediaContentSection";
import ShopSection from "@/components/LandingContainer/ShopSection/ShopSection";
import Article from "@/components/Article/Article";
import SubscribeSection from "@/components/LandingContainer/SubscribeSection/SubscribeSection";
import ContactUsSection from "@/components/LandingContainer/ContactUsSection/ContactUsSection";
import FooterSection from "@/components/LandingContainer/FooterSection/FooterSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="d-flex flex-column mx-auto py-2 ps-3">
      <ToastContainer />
      {/* First Section */}
      <FirstSection />
      {/* Second Section */}
      <SecondSection />
      {/* Vertical Line */}
      <VerticalLine />
      {/* Media Content Section */}
      <MediaContentSection />
      {/* Shop Slider Section */}
      <ShopSection />
      {/* Articles */}
      <Article
        className="justify-content-end"
        title="Surf Training"
        description="By better understanding the various aspects of surfing,
                     By better understanding the various aspects of surfing,
                     you will improve faster and have more fun in the water."
        isFirst
      />
      <Article
        isFirst={false}
        className="justify-content-start"
        title="Point Break"
        description="By better understanding the various aspects of By better understanding the various aspects of surfing,
                     By better understanding the various aspects of surfing,
                     you will improve faster and have more fun in the water."
      />
      {/* Vertical Line */}
      <VerticalLine />
      {/* Subscribe Section */}
      <SubscribeSection>
        <ContactUsSection />
      </SubscribeSection>
      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}
