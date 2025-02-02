// app/dashboard/page.tsx
import DashboardLayout from "./layout";  // Import the layout

const DashboardPage = () => {
  return (
    <DashboardLayout showSidebar={false}> {/* This will show sidebar and header */}
      <h1>Welcome to the Dashboard</h1>
    </DashboardLayout>
  );
};

export default DashboardPage;
