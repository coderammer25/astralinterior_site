import { cn } from "@/lib/utils";

function Skeleton({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn("animate-pulse rounded-md bg-[#135A58]/10", className)}
			{...props}
		/>
	);
}

export { Skeleton };
