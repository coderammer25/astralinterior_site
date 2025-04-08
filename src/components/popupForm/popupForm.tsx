import { ChangeEvent, FormEvent, useState } from "react";

const INITIAL_STATE = {
	phone: "",
	email: "",
	message: "",
};

const PopupForm = () => {
	const [popupMessage, setPopupMessage] = useState({ ...INITIAL_STATE });
	const [error, setError] = useState(false);

	function handleFormField(
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		const name = event.target.name;
		const value = event.target.value;

		setPopupMessage((prevMessage) => ({
			...prevMessage,
			[name]: value,
		}));
	}

	function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (
			popupMessage.email === "" ||
			popupMessage.phone === "" ||
			popupMessage.message === ""
		) {
			setError(true);
		} else {
			console.log(popupMessage);
			setError(false);
      setPopupMessage({ ...INITIAL_STATE });
		}
	}

	return (
		<div>
      <h2 className="text-center uppercase mb-4 text-xl font-medium font-geist">send us message</h2>
			<form onSubmit={handleFormSubmit} className="w-full flex flex-col gap-2">
				<input
					type="tel"
					name="phone"
					id="phone"
					placeholder="Mobile Number"
					className={`border p-2 rounded-md focus:outline-none ${
						error && "border-red-500"
					}`}
					value={popupMessage.phone}
					onChange={handleFormField}
				/>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Your Email"
					className={`border p-2 rounded-md focus:outline-none ${
						error && "border-red-500"
					}`}
					value={popupMessage.email}
					onChange={handleFormField}
				/>
				<textarea
					name="message"
					id="message"
					placeholder="What's in your mind ?"
					className={`border p-2 rounded-md focus:outline-none ${
						error && "border-red-500"
					}`}
					value={popupMessage.message}
					onChange={handleFormField}
				></textarea>
				<button
					type="submit"
					className="bg-primary text-white py-2 rounded-md uppercase text-[10px] md:text-[14px]"
				>
					SEND MESSAGE
				</button>
			</form>
		</div>
	);
};
export default PopupForm;
