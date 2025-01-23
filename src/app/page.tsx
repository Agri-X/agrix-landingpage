"use client";

import { Hero } from "@/components/blocks/hero";
import { Icons } from "@/components/ui/icons";
import { Leaf } from "lucide-react";
import { Feature } from "@/components/ui/feature-with-advantages";
import { Footerdemo } from "@/components/ui/footer-section";

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero
          content={{
            title: "AgriX",
            description:
              "Revolutionize your agricultural operations with AI intelligence and make better decisions for your plantations. Maximize yields, reduce costs, and embrace the future of farming.",
            
          }}
        />
      </section>
      <section id="features">
        <Feature />
      </section>
      <section id="contact">
        <Footerdemo />
      </section>
    </>
  );
}
