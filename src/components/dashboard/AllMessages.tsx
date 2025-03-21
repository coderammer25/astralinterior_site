"use client";
import { useState } from "react";
import { Table, Modal, Skeleton, Alert } from "antd";
import type { TableProps } from "antd";
// import { format } from "date-fns";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_MESSAGES } from "@/graphql/queries/query";
import { MdDelete } from "react-icons/md";
import { DELETE_MESSAGE } from "@/graphql/mutations/mutation";

interface MessageType {
	_id: string;
	content: string;
	userName: string;
	email: string;
	plan: string;
	phone: string;
	location: string;
}

const AllMessages = () => {
	const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });
	const [modalVisible, setModalVisible] = useState(false);
	const [modalContent, setModalContent] = useState<string | null>(null);

	const { data, error, loading, refetch } = useQuery(GET_ALL_MESSAGES);

	const [deleteMessage] = useMutation(DELETE_MESSAGE, {
		refetchQueries: [{ query: GET_ALL_MESSAGES }],
		awaitRefetchQueries: true, // Ensures refetch completes before continuing
		onError: (err) => console.error("Mutation Error:", err), // Handle errors gracefully
	});

	const handlePageChange = (page: number, pageSize: number) => {
		setPagination({ current: page, pageSize: pageSize });
	};

const onDeleteMessage = async (id: string) => {
	try {
		await deleteMessage({ variables: { id } });
		await refetch(); // Highlighted: Explicitly refetch messages after deletion
	} catch (error) {
		console.error("Error deleting message:", error);
	}
};

	const onContentClick = (content: string) => {
		setModalContent(content);
		setModalVisible(true);
	};

	let errorMessage;

	const columns: TableProps<MessageType>["columns"] = [
		{
			title: "Sl",
			key: "sl",
			render: (_text, _record, index) => (
				<span>
					{(pagination.current - 1) * pagination.pageSize + index + 1}
				</span>
			),
		},
		{
			title: "Name",
			dataIndex: "userName",
			key: "userName",
			render: (text) => <a>{text}</a>,
		},
		// {
		// 	title: "Date",
		// 	dataIndex: "createdAt",
		// 	key: "createdAt",
		// 	render: (text) => <a>{format(new Date(text), "yyyy-MM-dd")}</a>,
		// },
		{
			title: "Email",
			dataIndex: "email",
			key: "email",
		},
		{
			title: "Phone",
			dataIndex: "phone",
			key: "phone",
		},
		{
			title: "Content",
			dataIndex: "content",
			key: "content",
			render: (text) => {
				const words = text.split(" ");
				const isLongText = words.length > 10;
				const displayText = isLongText
					? words.slice(0, 20).join(" ") + "..."
					: text;

				return (
					<div
						className="max-w-[300px] cursor-pointer"
						onClick={() => onContentClick(text)}
					>
						<span
							className="block overflow-hidden text-ellipsis"
							style={{
								whiteSpace: "nowrap",
								overflow: "hidden",
								textOverflow: "ellipsis",
							}}
						>
							{displayText}
						</span>
					</div>
				);
			},
		},
		{
			title: "ProjectType",
			dataIndex: "projectType",
			key: "projectType",
		},
		{
			title: "Location",
			dataIndex: "location",
			key: "location",
		},
		{
			title: "Action",
			key: "action",
			render: (_text, record) => (
				<MdDelete
					className="text-xl text-center text-red-500 cursor-pointer"
					onClick={() => onDeleteMessage(record._id)}
				/>
			),
		},
	];


	if (loading) {
		return <Skeleton />;
	}

	const messages =
		data?.getAllMessages?.map((message: MessageType) => ({
			key: message._id,
			...message,
		})) || [];

	if (error) {
		return (errorMessage = (
			<Alert
				message="Error"
				description={error.message}
				type="error"
				showIcon
			/>
		));
	}

	return (
		<>
			{error && errorMessage}
			<div>
				<p className="mb-5 text-lg font-semibold text-primaryHover">
					<span className="font-bold">Total messages: </span>
					{data?.getAllMessages?.length}
				</p>
				<Table
					className="table w-full"
					columns={columns}
					dataSource={messages}
					rowKey="key"
					pagination={{
						current: pagination.current,
						pageSize: pagination.pageSize,
						onChange: handlePageChange,
						total: messages.length,
					}}
				/>
			</div>

			<Modal
				title="Full Content"
				open={modalVisible}
				footer={null}
				onCancel={() => setModalVisible(false)}
			>
				<p>{modalContent}</p>
			</Modal>
		</>
	);
};

export default AllMessages;
