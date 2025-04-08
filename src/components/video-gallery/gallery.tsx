import { videos } from "@/data";

const Gallery = () => {
	// Convert YouTube URL to embeddable format
	const getEmbedUrl = (url: string) => {
		const videoId =
			url.split("youtu.be/")[1]?.split("?")[0] ||
			url.split("v=")[1]?.split("&")[0];
		return `https://www.youtube.com/embed/${videoId}`;
	};

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{videos.map((video) => (
				<div key={video._id} >
					<iframe
						width="100%"
						height="200"
						src={getEmbedUrl(video.url)}
						title={video.title}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
            className="rounded-md shadow-lg hover:shadow-2xl duration-500"
					></iframe>
				</div>
			))}
		</div>
	);
};
export default Gallery;
