import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/HeroSection";
import BirthdayNote from "@/components/BirthdayNote";
import PhotoGallery from "@/components/PhotoGallery";
import ReasonsSection from "@/components/ReasonsSection";
import ClosingSection from "@/components/ClosingSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Happy 25th Birthday, Umar! 🎉" },
      { name: "description", content: "A love letter wrapped in pixels — celebrating Umar's 25th birthday." },
      { property: "og:title", content: "Happy 25th Birthday, Umar!" },
      { property: "og:description", content: "A love letter wrapped in pixels — celebrating Umar's 25th birthday." },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <BirthdayNote />

      <PhotoGallery
        id="growing-up"
        label="Through The Years"
        title="Growing Up Umar"
        description="From the cutest little boy to the most handsome man — every version of you has been a masterpiece."
        placeholderCount={9}
        accentColor="gold"
      />

      <div className="bg-gradient-teal">
        <PhotoGallery
          id="our-journey"
          label="Us, Together"
          title="Our Journey"
          description="From the first message to this very moment — every chapter with you has been my favourite."
          placeholderCount={9}
          accentColor="teal"
        />
      </div>

      <PhotoGallery
        id="through-his-lens"
        label="Through Your Lens"
        title="The Way You See Me"
        description="Every photo you've taken of me holds a piece of your love — here are some of my favourites."
        placeholderCount={9}
        accentColor="warm"
      />

      <ReasonsSection />
      <ClosingSection />
    </main>
  );
}
