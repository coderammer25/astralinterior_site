

import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
		<div className="flex flex-col items-center justify-center gap-6 bg-muted px-6 md:py-28">
			<div className="flex w-full max-w-sm flex-col gap-6">
				<LoginForm />
			</div>
		</div>
	);
}
