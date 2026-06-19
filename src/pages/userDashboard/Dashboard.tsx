import React from "react";
import BoxContainer from "@/components/BoxContainer";
import { FaTasks } from "react-icons/fa";
import { useDashboardStatsQuery } from "@/features/task/taskApi";

const Dashboard: React.FC = () => {
  const { data, isLoading } = useDashboardStatsQuery();
  console.log(data, "dashboard data");
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const dashboardInfo = [
    {
      title: "Remaining Tasks",
      TitleNumber: data?.availableTasks || 0,
      icon: <FaTasks />,
    },
    {
      title: "Consumed Tasks",
      TitleNumber: data?.consumedTasks || 0,
      icon: <FaTasks />,
    },
    {
      title: "Paid Tasks",
      TitleNumber: data?.initialTasks || 0,
      icon: <FaTasks />,
    },
    {
      title: "Completed Tasks",
      TitleNumber: data?.completedTasks || 0,
      icon: <FaTasks />,
    },
  ];

  return (
    <div className="m-6 mt-10">
      <div className="mb-10">
        <h1 className="text-xl">Overview</h1>
        <p className="text-gray-400 text-[14px]">
          Welcome back, here's what's happening with the activity on this Day.
        </p>
      </div>

      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardInfo.map((info) => (
          <BoxContainer
            key={info.title}
            title={info.title}
            TitleNumber={info.TitleNumber}
            icon={info.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;