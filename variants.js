import { Variants } from "framer-motion";

export const star = {
	initial: {
		y: 90,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	},
};
