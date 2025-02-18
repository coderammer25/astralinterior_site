"use client"
import { useState } from "react";
import { Table , Modal } from "antd";
import type { TableProps } from "antd";
import { format } from "date-fns";

interface MessageType {
	_id: string;
	content: string;
	userName: string;
	email: string;
	plan: string;
	phone: string;
	location: string;
}

const AllProjects = () => {
	const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });
	const [modalVisible, setModalVisible] = useState(false);
	const [modalContent, setModalContent] = useState<string | null>(null);

	// const { loading, data, error } = useQuery(GET_ALL_MESSAGES);
	// const [deleteMessage] = useMutation(DELETE_MESSAGE, {
	// 	refetchQueries: [{ query: GET_ALL_MESSAGES }],
	// });

	// if (loading) return <Skeleton />
	// if (error)
	// 	return (
	// 		<div className="w-1/3 ml-auto">
	// 			<Alert message="Error" type="error" showIcon closable />
	// 		</div>
	// 	);

	// const messages =
	// 	data?.getAllMessages?.map((message: MessageType) => ({
	// 		key: message._id,
	// 		...message,
	// 	})) || [];

	const handlePageChange = (page: number, pageSize: number) => {
		setPagination({ current: page, pageSize: pageSize });
	};

	// const onDeleteMessage = async (id: string) => {
	// 	try {
	// 		await deleteMessage({ variables: { id } });
	// 		toast.success("Message deleted successfully");
	// 	} catch (error) {
	// 		Notify("error", "Failed to delete the message");
	// 		console.error("Error deleting message:", error);
	// 	}
	// }
    
	const onContentClick = (content: string) => {
		setModalContent(content);
		setModalVisible(true);
	};

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
		{
			title: "Date",
			dataIndex: "createdAt",
			key: "createdAt",
			render: (text) => <a>{format(new Date(text), "yyyy-MM-dd")}</a>,
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "email",
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
			title: "Plan",
			dataIndex: "plan",
			key: "plan",
		},
		{
			title: "Phone",
			dataIndex: "phone",
			key: "phone",
		},
		{
			title: "Location",
			dataIndex: "location",
			key: "location",
		},
		{
			title: "Action",
			key: "action",
			// render: (_text, record) => (
			// 	<MdDelete
			// 		className="text-xl text-center text-red-500 cursor-pointer"
			//  	onClick={() => onDeleteMessage(record._id)}
			// 	/>
			// )
		},
	];

	return (
		<>
			<div>
				<p className="mb-5 text-lg font-semibold text-red-400">
					<span className="font-bold">Total Projects: </span>
					{/* {data?.getAllMessages?.length} */}
				</p>
				<Table
					className="table w-full"
					columns={columns}
					// dataSource={messages}
					rowKey="key"
					pagination={{
						current: pagination.current,
						pageSize: pagination.pageSize,
						onChange: handlePageChange,
						// total: messages.length,
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

export default AllProjects
