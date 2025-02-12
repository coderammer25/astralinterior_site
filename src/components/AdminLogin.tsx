"use client";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const AdminLogin = () => {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [formData, setFormData] = useState({ email: "", password: "" });

	const handleLogin = (values: { email: string; password: string }) => {
		// Set form data into useState
		setFormData(values);
		console.log("Form Data:", values);
	};

	return (
		<div>
			<Form
				className="bg-white px-[90px] py-10 rounded-2xl"
				layout="vertical"
				onFinish={handleLogin}
			>
				<Form.Item
					label="Email"
					name="email"
					rules={[
						{ required: true, message: "Please enter your email!" },
						{ type: "email", message: "Please enter a valid email!" },
					]}
				>
					<Input placeholder="Enter your email" />
				</Form.Item>

				<Form.Item
					label="Password"
					name="password"
					rules={[{ required: true, message: "Please enter your password!" }]}
				>
					<Input.Password
						placeholder="Enter your password"
						iconRender={(visible) => (visible ? <FaEyeSlash /> : <FaEye />)}
						suffix={
							<Button
								type="text"
								icon={passwordVisible ? <FaEyeSlash /> : <FaEye />}
								onClick={() => setPasswordVisible(!passwordVisible)}
								style={{ border: "none", boxShadow: "none" }}
							/>
						}
						type={passwordVisible ? "text" : "password"}
					/>
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

export default AdminLogin;
