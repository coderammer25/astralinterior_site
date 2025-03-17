export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote: "The attention to detail and creativity in our home renovation was exceptional. They transformed our space beyond our expectations.",
    name: "Sarah Johnson",
    title: "Homeowner"
  },
  {
    id: "testimonial-2",
    quote: "Professional, punctual, and passionate about their work. The team at Astral Interior made our dream home a reality.",
    name: "Michael Chen",
    title: "Property Developer"
  },
  {
    id: "testimonial-3",
    quote: "Their innovative design solutions and commitment to quality craftsmanship set them apart. Highly recommended!",
    name: "Emily Rodriguez",
    title: "Interior Design Enthusiast"
  },
  {
    id: "testimonial-4",
    quote: "The team's expertise in space optimization and modern design trends helped us create a perfect living environment.",
    name: "David Thompson",
    title: "Architect"
  },
  {
    id: "testimonial-5",
    quote: "Outstanding service from start to finish. They understood our vision and executed it flawlessly.",
    name: "Lisa Anderson",
    title: "Commercial Property Owner"
  }
]; 