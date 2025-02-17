"use client";

import { Form, Input, Button } from "antd";
import { useState } from "react";

const AddProject = () => {
	const [formData, setFormData] = useState({ projectName: "", description: "" });

	const handleLogin = (values: { projectName: string; description: string }) => {
		setFormData(values);
		console.log("Form Data:", values);
	};

	console.log(formData);

	return (
		<div>
			<Form
				className="bg-white lg:px-[300px] py-10 rounded-2xl"
				layout="vertical"
				onFinish={handleLogin}
			>
				<Form.Item
					label="Project Name"
					name="projectName"
					rules={[
						{ required: true, message: "Please enter your Project Name!" },
					]}
				>
					<Input placeholder="Enter your Project Name" />
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
						Add Project
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default AddProject;
