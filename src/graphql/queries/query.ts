// queries.js
import { gql } from "@apollo/client";

export const GET_ALL_MESSAGES = gql`
	query GetAllMessages {
		getAllMessages {
			_id
			content
			userName
			email
			phone
			location
			projectType
			customizeFurniture
		}
	}
`;

export const GET_LOGIN = gql`
	query Login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				_id
				email
				userName
				mobile
				role
				profilePicture
			}
		}
	}
`;
