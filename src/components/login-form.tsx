"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import logo from "./../../public/astral-logo.png";
import { type ChangeEvent, type FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { useQuery } from "@apollo/client";
import { GET_LOGIN } from "@/graphql/queries/query";
import { useDispatch } from "react-redux";
import { login } from "@/features/auth/authSlice";
import { useRouter } from "next/navigation";

type LoginFormProps = {
	email: string;
	password: string;
};

const INITIAL_FORM_STATE: LoginFormProps = {
	email: "",
	password: "",
};

export function LoginForm({
	className,
	...props
}: React.ComponentPropsWithoutRef<"div">) {
	const [adminInformation, setAdminInformation] = useState({
		...INITIAL_FORM_STATE,
	});
	const { email, password } = adminInformation;

	const route = useRouter();
	const dispatch = useDispatch();

	const { data, error } = useQuery(GET_LOGIN, {
		variables: { email, password },
		skip: !email || !password,
	});

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setAdminInformation({
			...adminInformation,
			[e.target.name]: e.target.value,
		});
	};

	async function handleSubmitInformation(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (adminInformation.email === "" || adminInformation.password === "") {
			toast.error("Please fill in all fields", {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeButton: false,
				pauseOnHover: true,
				progress: undefined,
				style: {
					backgroundColor: "#f8d7da",
					color: "#721c24",
					width: "100%",
				},
			});
			return;
		}

		if (data) {
			const { token, user } = data.login;
			dispatch(login({ token, user }));
			toast.success("Login successful", { autoClose: 1000 });
			route.push("/dashboard");
		} else {
			console.log(error?.message);
		}
	}

	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card>
				<CardHeader className="text-center">
					<Image
						className="w-[140px] select-none m-auto mb-5"
						src={logo}
						alt=""
					/>
					<CardTitle className="text-xl">Admin Login</CardTitle>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmitInformation}>
						<div className="grid gap-6">
							<div className="grid gap-6">
								<div className="grid gap-2">
									<Label htmlFor="email">Email</Label>
									<Input
										id="email"
										type="email"
										placeholder="m@example.com"
										value={email}
										name="email"
										onChange={handleInputChange}
									/>
								</div>
								<div className="grid gap-2">
									<div className="flex items-center">
										<Label htmlFor="password">Password</Label>
									</div>
									<Input
										id="password"
										type="password"
										value={password}
										name="password"
										onChange={handleInputChange}
										placeholder="******"
									/>
								</div>
								<Button type="submit" className="w-full">
									Login
								</Button>
							</div>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
