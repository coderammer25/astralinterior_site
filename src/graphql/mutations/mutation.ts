import { gql } from "@apollo/client";

export const CREATE_MESSAGE = gql`
	mutation CreateMessage($createMessageDto: CreateMessageDto!) {
		createMessage(createMessageDto: $createMessageDto) {
			_id
			userName
			email
			phone
			location
			projectType
			customizeFurniture
			content
		}
	}
`;
