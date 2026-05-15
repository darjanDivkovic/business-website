"use client";

import { ArrowRight } from "lucide-react";
import {
  StaggerTestimonials,
  type StaggerTestimonial,
} from "@/components/ui/stagger-testimonials";
import { StarButton } from "@/components/ui/star-button";
import { SectionTitleComponent } from "./SectionTitleComponent";

const LINKEDIN_RECS_URL =
  "https://www.linkedin.com/in/darjan-d-171386163/details/recommendations/?detailScreenTabIndex=0";

const testimonials: StaggerTestimonial[] = [
  {
    tempId: 0,
    name: "Seena Mojahedi",
    role: "Director",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/People/Seena.png",
    date: "May 2024",
    relationship: "Managed Darjan directly",
    quote:
      "Simply put, Darjan is EXCELLENT. He shows up with poise and positive energy, is self-motivated, and gets stuff done.",
    audio: "/Voices/Seena.mp3",
  },
  {
    tempId: 1,
    name: "Warren Lebovics",
    role: "Co-Founder",
    company: "Pequity",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/People/Warren.png",
    date: "March 2023",
    relationship: "Managed Darjan directly",
    quote:
      "Darjan is a designer's dream frontend partner. Any team is lucky to have him.",
    audio: "/Voices/Warren.mp3",
  },
  {
    tempId: 2,
    name: "Ji Tae Kim",
    role: "Product Designer",
    company: "Uber",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/People/JosephKim.png",
    date: "March 2023",
    relationship: "Worked with Darjan on the same team",
    quote:
      "Darjan is an engineer who thinks like a designer. He can turn any design into a flawless and stunning feature that delights your end users.",
    audio: "/Voices/JiTaeKim.mp3",
  },
  {
    tempId: 3,
    name: "Jeff Auston",
    role: "Engineering Lead",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/People/Jeff.png",
    date: "March 2023",
    relationship: "Managed Darjan directly",
    quote:
      "Darjan worked with our team for more than 2 years. I would hire Darjan again - highly recommend him for any team looking for a strong engineer.",
    audio: "/Voices/Jeff.mp3",
  },
  {
    tempId: 4,
    name: "Harsh Patel",
    role: "Product Manager",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/People/Harsh.png",
    date: "April 2023",
    relationship: "Worked with Darjan on the same team",
    quote:
      "Darjan is a PM's engineer. Right from backlog grooming to product launch he was a terrific partner, customer centric and delivered big time.",
    audio: "/Voices/Harsh.mp3",
  },
  {
    tempId: 5,
    name: "Mohamed Anwer",
    role: "Senior Software Engineer",
    company: "Pequity",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/People/Mohamed.png",
    date: "April 2023",
    relationship: "Worked with Darjan on the same team",
    quote:
      "I was consistently impressed by his productivity and speed. His ability to solve complex problems in a timely manner is truly exceptional.",
    audio: "/Voices/Mohamed.mp3",
  },
  {
    tempId: 6,
    name: "Colby Dugger",
    role: "Marketing Lead",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/People/Colby.png",
    date: "May 2023",
    relationship: "Worked with Darjan on the same team",
    quote:
      "The turnaround time and cross-functional collaboration were unmatched. I highly recommend him to anyone looking for a top-tier developer.",
    audio: "/Voices/Colby.mp3",
  },
  {
    tempId: 7,
    name: "Joseph Lee",
    role: "Senior Full Stack Engineer",
    company: "BetterComp",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/People/JosephLee.png",
    date: "March 2023",
    relationship: "Worked with Darjan on the same team",
    quote:
      "Darjan fearlessly took on difficult frontend assignments and skillfully translated detailed Figma designs into functioning code.",
    audio: "/Voices/Joseph.mp3",
  },
  {
    tempId: 8,
    name: "Ioana Manoliu",
    role: "Senior Software Engineer",
    company: "ADP",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/People/Ioana.png",
    date: "March 2023",
    relationship: "Senior to Darjan",
    quote:
      "If anyone is searching for the absolute frontend rockstar, I have to recommend Darjan! He makes frontends look pixel perfect in the most efficient manner.",
    audio: "/Voices/Ioana.mp3",
  },
  {
    tempId: 9,
    name: "Giannis Koutsaftakis",
    role: "Staff Frontend Engineer",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/People/Giannis.png",
    date: "March 2023",
    relationship: "Senior to Darjan",
    quote:
      "He is an exceptional front-end developer with excellent proficiency in Python too. He has delivered high-quality projects that have exceeded our clients' expectations.",
    audio: "/Voices/Giannis.mp3",
  },
  {
    tempId: 10,
    name: "Petar Ćevriz",
    role: "Software Engineer",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/People/Petar.png",
    date: "March 2023",
    relationship: "Worked with Darjan on the same team",
    quote:
      "Darjan was instrumental in delivering complex frontend projects and his work exceeded expectations.",
    audio: "/Voices/Petar.mp3",
  },
  {
    tempId: 11,
    name: "Milos Glendza",
    role: "Software Developer",
    company: "ServalIT",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/People/Milos.png",
    date: "March 2023",
    relationship: "Worked with Darjan on the same team",
    quote:
      "He was the go-to guy when things needed to be perfect on the UI side, but had no fear when things needed to be done outside his expertise as well.",
    audio: "/Voices/Milos.mp3",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative flex min-h-screen w-screen flex-col pt-10 pb-16 sm:h-screen sm:pb-0 mt-[-130px] sm:mt-0">
      <div className="mt-8 flex flex-col gap-6 px-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:gap-8 lg:px-[14%]">
        <SectionTitleComponent
          prefix="Testimonials"
          header="What my colleagues say about working with me"
        >
          These are testimonials from real, top-tier industry professionals that
          I had the enormous pleasure of working with. Started as coworkers, but
          became friends that forever shaped me as a professional and a person,
          for which I am forever grateful.
          <br />
          <br />
          Thank you, where ever you might be today.
        </SectionTitleComponent>

        <div className="flex shrink-0 justify-start sm:justify-center">
          <StarButton
            onClick={() =>
              window.open(LINKEDIN_RECS_URL, "_blank", "noopener,noreferrer")
            }
            borderWidth={3}
            className="h-12 px-6 text-base"
          >
            Read full testimonials on LinkedIn
            <ArrowRight className="size-4" />
          </StarButton>
        </div>
      </div>

      <div className="relative mt-8 h-[520px] w-full sm:mt-0 sm:h-auto sm:flex-1">
        <StaggerTestimonials testimonials={testimonials} />
      </div>
    </section>
  );
}
