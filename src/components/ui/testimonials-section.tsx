"use client";

import { motion } from "framer-motion";

type Testimonial = {
  name: string;
  role: string;
  company?: string;
  image: string;
  quote: string;
  date: string;
  relationship: string;
};

// Paste your Supabase bucket URLs into the image fields below
// e.g. "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/SeenaMojahedi.jpg"
const testimonials: Testimonial[] = [
  {
    name: "Seena Mojahedi",
    role: "Director",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/People/Seena.png",
    date: "May 2024",
    relationship: "Managed Darjan directly",
    quote:
      "Simply put, Darjan is EXCELLENT. He shows up with poise and positive energy, is self-motivated, and gets stuff done. He designed a beautiful application from front-to-back with no guidance. We're very lucky to work with Darjan.",
  },
  {
    name: "Warren Lebovics",
    role: "Co-Founder",
    company: "Pequity",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/People/Warren.png",
    date: "March 2023",
    relationship: "Managed Darjan directly",
    quote:
      "Darjan is a designer's dream frontend partner. He brings creativity and pride to his work, resulting in extremely polished and thoughtful user experiences. Any team is lucky to have him.",
  },
  {
    name: "Ji Tae Kim",
    role: "Product Designer",
    company: "Uber",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/People/JosephKim.png",
    date: "March 2023",
    relationship: "Worked with Darjan on the same team",
    quote:
      "Darjan is an engineer who thinks like a designer. He can turn any design into a flawless and stunning feature that delights your end users. He would be a great asset to any design-led company that wants to wow its customers.",
  },
  {
    name: "Jeff Auston",
    role: "Engineering Lead",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/People/Jeff.png",
    date: "March 2023",
    relationship: "Managed Darjan directly",
    quote:
      "Darjan worked with our team for more than 2 years, made significant contributions to our code base, and was a pleasure to work with. I would hire Darjan again — highly recommend him for any team looking for a strong engineer.",
  },
  {
    name: "Harsh Patel",
    role: "Product Manager",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/People/Harsh.png",
    date: "April 2023",
    relationship: "Worked with Darjan on the same team",
    quote:
      "Darjan is a PM's engineer. Right from backlog grooming to product launch he was a terrific partner, customer centric and delivered big time.",
  },
  {
    name: "Mohamed Anwer",
    role: "Senior Software Engineer",
    company: "Pequity",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/People/Mohamed.png",
    date: "April 2023",
    relationship: "Worked with Darjan on the same team",
    quote:
      "I was consistently impressed by his productivity and speed. His ability to solve complex problems in a timely manner is truly exceptional. I have no doubt that Darjan would be an asset to any team lucky enough to work with him.",
  },
  {
    name: "Colby Dugger",
    role: "Marketing Lead",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/People/Colby.png",
    date: "May 2023",
    relationship: "Worked with Darjan on the same team",
    quote:
      "Darjan automated a multi-step pipeline that saved our team weeks of time. The turnaround time and cross-functional collaboration were unmatched. I highly recommend him to anyone looking for a top-tier developer.",
  },
  {
    name: "Joseph Lee",
    role: "Senior Full Stack Engineer",
    company: "BetterComp",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/People/JosephLee.png",
    date: "March 2023",
    relationship: "Worked with Darjan on the same team",
    quote:
      "Darjan fearlessly took on difficult frontend assignments and skillfully translated detailed Figma designs into functioning code. He would be a great addition to any engineering team.",
  },
  {
    name: "Ioana Manoliu",
    role: "Senior Software Engineer",
    company: "ADP",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/People/Ioana.png",
    date: "March 2023",
    relationship: "Senior to Darjan",
    quote:
      "If anyone is searching for the absolute frontend rockstar, I have to recommend Darjan! He makes frontends look pixel perfect in the most efficient manner.",
  },
  {
    name: "Giannis Koutsaftakis",
    role: "Staff Frontend Engineer",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/People/Giannis.png",
    date: "March 2023",
    relationship: "Senior to Darjan",
    quote:
      "He is an exceptional front-end developer with excellent proficiency in Python too. He has delivered high-quality projects that have exceeded our clients' expectations.",
  },
  {
    name: "Petar Ćevriz",
    role: "Software Engineer",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/People/Petar.png",
    date: "March 2023",
    relationship: "Worked with Darjan on the same team",
    quote:
      "Darjan was instrumental in delivering complex frontend projects and his work exceeded expectations. He demonstrated remarkable attention to detail and implemented pixel-perfect designs with precision and efficiency.",
  },
  {
    name: "Milos Glendza",
    role: "Software Developer",
    company: "ServalIT",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/People/Milos.png",
    date: "March 2023",
    relationship: "Worked with Darjan on the same team",
    quote:
      "He was the go-to guy when things needed to be perfect on the UI side, but had no fear when things needed to be done outside his expertise as well.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative w-full py-20 px-6 lg:px-10 max-w-6xl mx-auto">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-2">
          <h2 className="text-3xl tracking-tight text-balance md:text-4xl lg:text-5xl">
            What people say
          </h2>
          <p className="text-muted-foreground text-base md:text-lg opacity-60">
            Verified recommendations from colleagues, managers, and founders
            I've worked with.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(
            (
              { name, role, company, quote, image, date, relationship },
              index,
            ) => (
              <motion.div
                key={name}
                initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
                whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index + 0.05, duration: 0.7 }}
                className="grid grid-cols-[auto_1fr] gap-x-3 border border-border rounded-md bg-[#fff]/2 p-4"
              >
                <img
                  alt={name}
                  src={image}
                  loading="lazy"
                  className="size-9 rounded-full mt-0.5 object-cover"
                />
                <div>
                  <div className="-mt-0.5 space-y-0.5">
                    <p className="text-sm tracking-tight font-medium">{name}</p>
                    <span className="text-muted-foreground block text-[11px] tracking-tight opacity-70">
                      {role}
                      {company ? ` · ${company}` : ""}
                    </span>
                    <span className="text-[10px] opacity-40 block">
                      {date} · {relationship}
                    </span>
                  </div>
                  <blockquote className="mt-3">
                    <p className="text-foreground/70 text-sm leading-relaxed tracking-wide">
                      {quote}
                    </p>
                  </blockquote>
                </div>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
