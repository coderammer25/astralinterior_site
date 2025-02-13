"use client";

import { Form, Input, Button } from "antd";
import { useState } from "react";

const AddBlogs = () => {
	const [formData, setFormData] = useState({ blogName: "", description: "" });

	const handleLogin = (values: { blogName: string; description: string }) => {
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
					label="Blog Name"
					name="blogName"
					rules={[
						{ required: true, message: "Please enter your Blog Name!" },
					]}
				>
					<Input placeholder="Enter your Blog Name" />
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

export default AddBlogs;
