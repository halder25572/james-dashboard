import MainLayout from "@/components/layout/MainLayout";
import StatsCard from "@/components/dashboard/StatsCard";
import VehicleCard from "@/components/dashboard/VehicleCard";
import RecentActivity from "@/components/dashboard/RecentActivity";
import MessagesPanel from "@/components/dashboard/MessagesPanel";
import { vehicles, activities, stats } from "@/lib/data";

export default function DashboardPage() {
  return (
    <MainLayout title="Dashboard">
      {/* Welcome */}
      <div className="mb-5">
        <h1 className="text-lg font-semibold text-[#2D2D2D] mt-4 ">Welcome, Daniel</h1>
        <p className="text-[16px] text-[#2D2D2D]">
          Monitoring real-time auction data and high-torque opportunities.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {/* {stats.map((s) => (
          <StatsCard
            key={s.id}
            title={s.title}
            value={s.value}
            badge={s.badge}
            badgeColor={s.badgeColor}
            icon={s.icon}
            icon2={s.icon2}
          />
        ))} */}
        {stats.map((s) => (
        <StatsCard
            key={s.id}
            title={s.title}
            value={s.value}
            badge={s.badge}
            badgeColor={s.badgeColor}
            icon={s.icon}
            icon2={s.icon2}
            isSavedCard={s.title === "Saved Vehicles"}
        />
))}
      </div>

      {/* Recent Opportunities */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[16px] font-bold text-black">Recent Opportunities</h2>
          <button className="text-[16px] cursor-pointer text-black font-bold transition-colors">
            see All
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {vehicles.map((v) => (
            <VehicleCard key={v.id} vehicle={v} />
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <RecentActivity items={activities} />
        <MessagesPanel />
      </div>
    </MainLayout>
  );
}