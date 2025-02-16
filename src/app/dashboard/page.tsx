// app/dashboard/page.tsx
import Image from "next/image";
import DashboardLayout from "./layout";  // Import the layout
import welcome from "../../../public/welcome.svg";
const DashboardPage = () => {
  

  return (
    <DashboardLayout showSidebar={false}> {/* This will show sidebar and header */}
     <div className="flex justify-center">
      <Image
       src={welcome}
       className="w-3/5"
        alt="Admin Welcome"
      ></Image>
     </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
