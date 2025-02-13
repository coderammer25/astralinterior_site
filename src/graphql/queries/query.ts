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
