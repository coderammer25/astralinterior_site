"use client";

import { Form, Input, Button } from "antd";
import { useState } from "react";

const AddService = () => {
	const [formData, setFormData] = useState({ productName: "", description: "" });

	const handleLogin = (values: { productName: string; description: string }) => {
		setFormData(values);
		console.log("Form Data:", values);
	};

	return (
		<div>
			<Form
				className="bg-white lg:px-[300px] py-10 rounded-2xl"
				layout="vertical"
				onFinish={handleLogin}
			>
				<Form.Item
					label="Product Name"
					name="productName"
					rules={[
						{ required: true, message: "Please enter your product name!" },
					]}
				>
					<Input placeholder="Enter your product name" />
				</Form.Item>

				<Form.Item
					label="Description"
					name="description"
					rules={[
						{ required: true, message: "Please enter your description" },
					]}
				>
					<Input placeholder="Enter your description" />
				</Form.Item> 

				<Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						className="w-full bg-black"
					>
						Sign In
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default AddService;
