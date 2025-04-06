import project_01 from "../public/exterior/exterior_1.jpg";
import project_02 from "../public/Interior/interior_1.jpg";
import project_03 from "../public/Office/office_1.jpg";
import project_04 from "../public/hospital/hospital_1.jpg";
import project_05 from "../public/showroom/showroom_1.jpg";
import project_06 from "../public/bar and restaurant/bar_1.jpg";
import project_07 from "../public/bar and restaurant/resturent_1.jpg";
import project_08 from "../public/furniture/furniture_1.jpg";

import transform_01 from "../public/Office/office_1.jpg";
import transform_02 from "../public/Office/office_2.jpg";
import transform_03 from "../public/Office/office_3.jpg";
import transform_04 from "../public/Office/office_4.jpg";

import blog_img_01 from "../public/01_blog_img.webp";
import blog_img_02 from "../public/02_blog_img.webp";
import blog_img_03 from "../public/03_blog_img.webp";
import blog_img_04 from "../public/04_blog_img.webp";

export const services = [
	{
		title: "Interior",
		description:
			"We create comprehensive layout designs that optimize the functionality and flow of outdoor spaces. Our goal is to ensure every area serves its intended purpose efficiently while enhancing aesthetics and usability.",
		img: transform_01,
	},
	{
		title: "Exterior",
		description:
			"Our interior design services bring character, harmony, and sophistication to your space. We thoughtfully curate décor, colors, and accessories to create a balanced atmosphere that reflects your unique style and personality.",
		img: transform_02,
	},
	{
		title: "Office",
		description:
			"Lighting plays a crucial role in shaping the ambiance of a workspace. Our lighting design solutions are tailored to enhance productivity and comfort by incorporating the perfect balance of illumination based on your work environment and aesthetic preferences.",
		img: transform_03,
	},
	{
		title: "Hospitality",
		description:
			"We offer bespoke furniture design services, allowing you to integrate unique, custom-crafted pieces into your space. Whether you need a statement centerpiece or functional furnishings tailored to specific dimensions, we create solutions that blend aesthetics with practicality.",
		img: transform_04,
	},
];

export const projects = [
	{
		project_title: "Exterior",
		project_category: "furniture selection",
		project_img: project_01,
	},
	{
		project_title: "Interior",
		project_category: "lighting design",
		project_img: project_02,
	},
	{
		project_title: "Office",
		project_category: "project management",
		project_img: project_03,
	},
	{
		project_title: "Hospital",
		project_category: "space planning",
		project_img: project_04,
	},
	{
		project_title: "Showroom",
		project_category: "furniture selection",
		project_img: project_05,
	},
	{
		project_title: "Bar",
		project_category: "lighting design",
		project_img: project_06,
	},
	{
		project_title: "Resturent",
		project_category: "project management",
		project_img: project_07,
	},
	{
		project_title: "Furniture",
		project_category: "project management",
		project_img: project_08,
	},
];

export const clients = [
	{
		client_id: 1,
		client_logo:
			"https://cdn.prod.website-files.com/6713afdf3556af8f35af46f9/67301768421c8024ffc80b0d_Amsterdam.svg",
		client_thoughts:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
		client_img:
			"https://cdn.prod.website-files.com/6713afdf3556af8f35af46f9/6730b9136fe128fd28f4e21f_client-01-p-500.webp",
		client_name: "Liam Cole",
		client_position: "CEO",
		client_location: "Delaware",
	},
	{
		client_id: 2,
		client_logo:
			"https://cdn.prod.website-files.com/6713afdf3556af8f35af46f9/67301771ee33049f98c3c6d9_Monaco.svg",
		client_thoughts:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
		client_img:
			"https://cdn.prod.website-files.com/6713afdf3556af8f35af46f9/6730b9132c39026fe2577661_client-03-p-500.webp",
		client_name: "Liam Cole",
		client_position: "CEO",
		client_location: "Delaware",
	},
];

export const featuredPost = {
	blogId: 1,
	category: "Design",
	title: "Understanding Warm vs. Cool Tones",
	readingTime: 7,
	image: blog_img_01,
	description:
		"Choosing between warm and cool tones can transform the mood of any space. Learn how different color temperatures impact design aesthetics and how to use them effectively in your home or workspace.",
};

export const recentPosts = [
	{
		blogId: 1,
		category: "Trends",
		title: "Benefits of Natural Elements in Design",
		readingTime: 9,
		image: blog_img_02,
		description:
			"Incorporating natural elements such as wood, stone, and plants can enhance both aesthetics and well-being. Discover how organic textures and earthy tones can create a harmonious environment.",
	},
	{
		blogId: 2,
		category: "Tips",
		title: "How to Make Small Spaces Feel Larger",
		readingTime: 7,
		image: blog_img_03,
		description:
			"Maximizing space is all about smart design choices. From strategic furniture placement to lighting tricks, learn how to make compact areas feel spacious and inviting.",
	},
	{
		blogId: 3,
		category: "Design",
		title: "The Essentials of Good Lighting Design",
		readingTime: 7,
		image: blog_img_04,
		description:
			"Lighting can make or break a room’s ambiance. Understand the fundamentals of task, ambient, and accent lighting to create a well-balanced and stylish interior.",
	},
];

export const menuItems = [
	{
		id: 1,
		path: "services",
		name: "Services",
	},
	{
		id: 2,
		path: "about-us",
		name: "About",
	},
	// {
	// 	id: 3,
	// 	path: "blog",
	// 	name: "Blog",
	// },
	{
		id: 4,
		path: "contact-us",
		name: "Contact",
	},
];

export const services_faq = [
	{
		id: 1,
		title: "What services does Astral Interior offer?",
		content:
			"Astral Interior provides a range of services including interior design, exterior design, landscape design, and furniture design.",
	},
	{
		id: 2,
		title: "How can I request a consultation for your services?",
		content:
			"To schedule a consultation, you can contact us through our website or give us a call. We'll be happy to discuss your project.",
	},
	{
		id: 3,
		title: "What sets Astral Interior apart from other design companies?",
		content:
			"Astral Interior stands out for its decade-long expertise, qualified staff, and a commitment to delivering high-quality, customized design solutions.",
	},
	{
		id: 4,
		title: "How does the design process work at Astral Interior?",
		content:
			"Our design process involves an initial consultation, concept development, client feedback, and the final implementation of the design.",
	},
	{
		id: 5,
		title: "Can I see examples of your previous work?",
		content:
			"Absolutely! We showcase our portfolio, including past projects and client testimonials, on our website for you to explore.",
	},
];

export const about_faq = [
	{
		id: 1,
		title:
			"When was Astral Interior established, and what inspired its inception?",
		content:
			"Astral Interior was founded in 2014 with a passion for transforming spaces and creating environments that blend functionality with aesthetics.",
	},
	{
		id: 2,
		title: "What types of design projects does Astral Interior specialize in?",
		content:
			"Astral Interior specializes in a wide range of design projects, including interior design, exterior design, landscape design, furniture design and many more.",
	},
	{
		id: 3,
		title:
			"How has Astral Interior evolved over the years since its establishment in 2014?",
		content:
			"Over the years, Astral Interior has evolved by expanding its expertise, working with diverse clients, and embracing new design trends while maintaining its commitment to excellence.",
	},
	{
		id: 4,
		title:
			"What is the driving philosophy behind Astral Interior's design approach?",
		content:
			"Our design philosophy revolves around creating spaces that not only meet functional needs but also inspire and reflect the unique personality and lifestyle of our clients.",
	},
	{
		id: 5,
		title: "Can you tell us about the team behind Astral Interior?",
		content:
			"The Astral Interior team is comprised of highly qualified and creative individuals who bring a wealth of experience in the field of design. Their passion for innovation and attention to detail sets us apart.",
	},
	{
		id: 6,
		title:
			"What achievements and milestones has Astral Interior reached since its inception?",
		content:
			"Astral Interior has achieved significant milestones, including successful projects with reputable clients, positive reviews, and a decade of contributing to the design landscape in Bangladesh.",
	},
	{
		id: 7,
		title:
			"How does Astral Interior approach sustainability and eco-friendly design practices?",
		content:
			"Sustainability is a key consideration in our design approach. We strive to incorporate eco-friendly materials and practices in our projects, contributing to a greener and more sustainable future.",
	},
	{
		id: 8,
		title:
			"How can potential clients get started with a design project with Astral Interior?",
		content:
			"Getting started is easy! Simply reach out to us through our website or contact us directly to schedule a consultation. We'll guide you through the initial steps of your design journey.",
	},
	{
		id: 9,
		title:
			"What values and principles guide Astral Interior's interactions with clients and the community?",
		content:
			"Astral Interior is guided by values of integrity, creativity, and client satisfaction. We believe in building lasting relationships and contributing positively to the communities we serve.",
	},
	{
		id: 10,
		title:
			"How does Astral Interior stay updated on the latest design trends and innovations?",
		content:
			"Our team actively participates in industry events, continuous education, and design conferences to stay at the forefront of emerging trends and bring the latest innovations to our projects.",
	},
];

export const contact_faq = [
	{
		id: 1,
		title: "How can I get in touch with Astral Interior for design inquiries?",
		content:
			"You can contact Astral Interior by filling out the contact form on our website, emailing us at astralinterior2@gmail.com, or giving us a call at 01703706613.",
	},
	{
		id: 2,
		title:
			"What information should I include when reaching out for a design consultation?",
		content:
			"When contacting us for a design consultation, provide details such as your project scope, preferred design style, and any specific requirements you have in mind.",
	},
	{
		id: 3,
		title:
			"Is there a consultation fee for discussing my design project with Astral Interior?",
		content:
			"Astral Interior offers initial consultations free of charge. It's an opportunity for us to understand your needs and discuss how we can bring your vision to life.",
	},
	{
		id: 4,
		title:
			"What is the typical response time for inquiries submitted through the contact form?",
		content:
			"We strive to respond to inquiries promptly. You can expect to hear back from us within [insert expected response time, e.g., 24-48 hours].",
	},
	{
		id: 5,
		title:
			"Can I visit Astral Interior's office in person to discuss my design project?",
		content:
			"Absolutely! While It’s recommended to let us know before visit., you are welcome to visit our office at any time (during our business hours.).",
	},
	{
		id: 6,
		title:
			"What information should I have ready when scheduling a design consultation with Astral Interior?",
		content:
			"Prepare information such as your project goals, budget, and any specific ideas or inspirations you have for the design. This will help us tailor the consultation to your needs.",
	},
	{
		id: 7,
		title: "Does Astral Interior work on projects outside of Bangladesh?",
		content:
			"Yes, Astral Interior is open to working on projects both within Bangladesh and internationally. We can discuss the logistics and details during the consultation.",
	},
	{
		id: 8,
		title:
			"How does Astral Interior handle client confidentiality and privacy?",
		content:
			"Client confidentiality is a priority for us. We take measures to ensure that your personal information and project details are handled with the utmost discretion.",
	},
	{
		id: 9,
		title:
			"Can I request a portfolio or references from previous clients before committing to a project?",
		content:
			"Certainly! We can provide you with a portfolio showcasing our previous work and, upon request, connect you with references who have experienced our design services.",
	},
	{
		id: 10,
		title:
			"What steps should I take if I have an urgent design project or a tight deadline?",
		content:
			"If your project has urgent timelines, please mention it during your initial inquiry. We'll do our best to accommodate your needs and discuss a suitable timeline during the consultation.",
	},
];
