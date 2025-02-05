export const handleScroll = () => {
	const navId = document.getElementById("navId");
	if (window.scrollY > 0) {
		navId?.classList.add(
			"shadow-md",
			"sticky",
			"top-0",
			"left-0",
			"bg-white",
			"z-10",
			"backdrop-blur-md"
		);
	} else {
		navId?.classList.remove(
			"shadow-md",
			"sticky",
			"top-0",
			"left-0",
			"bg-white",
			"z-10",
			"backdrop-blur-md"
		);
	}
};

export const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};
