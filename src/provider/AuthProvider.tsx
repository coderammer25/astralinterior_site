import { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from "js-cookie";

type ChildrenType = {
	children: ReactNode;
};

type User = {
	_id: string;
	email: string;
	password: string;
	userName: string;
	mobile: string;
	role: string;
	profilePicture: string;
};

type ContextType = {
	user: User | null;
	token: string | null;
	userLogin: (userData: User, token: string) => void;
	logout: () => void;
}

export const AuthContext = createContext<ContextType | null>(null);

export const AuthProvider = ({ children }: ChildrenType) => {
	const [user, setUser] = useState<User | null>(null);
	const [token, setToken] = useState<string | null>(null);

	// Load user from cookies on page refresh
	useEffect(() => {
		const storedToken = Cookies.get("token");
		const storedUser = Cookies.get("user");
		if (storedToken && storedUser) {
			setToken(storedToken);
			setUser(JSON.parse(storedUser));
		}
	}, []);

	const userLogin = (userData: User, token: string) => {
		setUser(userData);
		setToken(token);
		Cookies.set("token", token, { expires: 7 }); // Store token for 7 days
		Cookies.set("user", JSON.stringify(userData), { expires: 7 });
	};

	const logout = () => {
		setUser(null);
		setToken(null);
		Cookies.remove("token");
		Cookies.remove("user");
	};

  const contextValue: ContextType = {
    user,
    token,
    userLogin,
    logout
  }

	return (
		<AuthContext.Provider value={contextValue}>
			{children}
		</AuthContext.Provider>
	);
};
