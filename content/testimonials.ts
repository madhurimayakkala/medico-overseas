export interface Testimonial {
  id: string;
  studentName: string;
  country: string; // e.g. "Russia" — matches country.name in content/countries.ts
  university: string;
  year: string; // batch/admission year, e.g. "2023"
  quote: string;
  rating: number; // 1-5
  image?: string; // path in public/images/testimonials/, optional
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    studentName: "Ankit Sharma",
    country: "Russia",
    university: "Kazan State Medical University",
    year: "2022",
    quote:
      "Medico Overseas handled everything from documentation to visa stamping. I landed in Kazan knowing exactly what to expect, no surprises at the airport or the university.",
    rating: 5,
    image: "/images/testimonials/ankit-sharma.jpg",
  },
  {
    id: "t2",
    studentName: "Priya Nair",
    country: "Georgia",
    university: "Tbilisi State Medical University",
    year: "2023",
    quote:
      "What stood out was the zero-donation admission and complete transparency on fees upfront. No hidden costs came up later like I'd heard happens with other consultants.",
    rating: 5,
    image: "/images/testimonials/priya-nair.jpg",
  },
  {
  id: "t3",
  studentName: "Rahul Verma",
  country: "Uzbekistan",
  university: "Tashkent Medical Academy",
  year: "2021",
  quote:
    "The English-medium instruction and modern campus made the transition easy. My counsellor followed up regularly even after I'd already left India.",
  rating: 4,
  image: "/images/testimonials/rahul-verma.jpg",
  },
  {
    id: "t4",
    studentName: "Sneha Reddy",
    country: "Kyrgyzstan",
    university: "Osh State Medical University",
    year: "2022",
    quote:
      "Visa processing was faster than I expected, and the pre-departure briefing covered things I wouldn't have thought to ask about, like local banking and SIM cards.",
    rating: 5,
    image: "/images/testimonials/sneha-reddy.jpg",
  },
  {
    id: "t5",
    studentName: "Vikram Desai",
    country: "Uzbekistan",
    university: "Tashkent Medical Academy",
    year: "2023",
    quote:
      "Affordable fees without compromising on NMC-recognized status. The team was upfront about FMGE pass rates instead of overselling, which built real trust early on.",
    rating: 4,
    image: "/images/testimonials/vikram-desai.jpg",
  },
  {
    id: "t6",
    studentName: "Meera Iyer",
    country: "Russia",
    university: "Volgograd State Medical University",
    year: "2021",
    quote:
      "Post-admission support didn't stop after I got my seat. They helped with hostel issues and connected me with senior students already on campus.",
    rating: 5,
    image: "/images/testimonials/meera-iyer.jpg",
  },
];

/** Helper for homepage — a random or curated subset (e.g. 3) for the trust section */
export function getFeaturedTestimonials(count = 3): Testimonial[] {
  return testimonials.slice(0, count);
}

/** Helper for country pages — testimonials filtered by country name */
export function getTestimonialsByCountry(countryName: string): Testimonial[] {
  return testimonials.filter(
    (t) => t.country.toLowerCase() === countryName.toLowerCase()
  );
}