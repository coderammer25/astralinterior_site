"use client";

import { Button, Modal } from "antd";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PopupForm from "../popupForm/popupForm";

const Popup = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [hasShownModal, setHasShownModal] = useState<boolean>(false); // Default to false

	// Check localStorage only on the client side
	useEffect(() => {
		const getInitialModalState = (): boolean => {
			if (typeof window === "undefined") return false; // Server-side fallback
			const lastShown = localStorage.getItem("modalLastShown");
			const oneDay = 24 * 60 * 60 * 1000;
			if (lastShown === null) return false;
			const lastShownTime = parseInt(lastShown, 10);
			return !isNaN(lastShownTime) && Date.now() - lastShownTime < oneDay;
		};

		setHasShownModal(getInitialModalState());
	}, []); // Empty dependency array: runs once on mount

	const handleScroll = () => {
		const scrollPosition: number = window.scrollY;
		const threshold: number = 2800;
		if (scrollPosition > threshold && !hasShownModal && !isModalVisible) {
			setIsModalVisible(true);
			setHasShownModal(true);
			if (typeof window !== "undefined") {
				localStorage.setItem("modalLastShown", Date.now().toString());
			}
		}
	};

	// Add scroll event listener
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [hasShownModal]);

	// Modal close handlers
	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	// Framer Motion animation variants
	const modalVariants = {
		hidden: { opacity: 0, y: -50 }, // Start above and invisible
		visible: { opacity: 1, y: 0 }, // Slide down and fade in
		exit: { opacity: 0, y: 50 }, // Slide down and fade out
	};
	return (
		<AnimatePresence>
			{isModalVisible && (
				<motion.div
					variants={modalVariants}
					initial="hidden"
					animate="visible"
					exit="exit"
					transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
				>
					<Modal
						open={isModalVisible}
						onOk={handleOk}
						onCancel={handleCancel}
						footer={[
							<Button
								className="bg-primary"
								key="submit"
								type="primary"
								onClick={handleOk}
							>
								Cancel
							</Button>,
						]}
						closable={true} // Ensure the modal can be closed
						maskClosable={true} // Allow closing by clicking outside
					>
						<PopupForm />
					</Modal>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
export default Popup;
