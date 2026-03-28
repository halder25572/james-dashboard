import clsx from "clsx";
import Image from "next/image";

type Props = {
  title: string;
  value: number;
  badge: string;
  badgeColor: string;
  icon: string;
  icon2?: string;
};

export default function StatsCard({ title, value, badge, badgeColor, icon, icon2 }: Props) {
  return (
    <div className="bg-white border-b-10 border-[#D2D5DB] rounded-4xl p-4 border shadow-sm flex flex-col gap-3 relative overflow-hidden">
      <div className="flex items-start justify-between">
        <div className="p-2.5 bg-[#FDECEC] rounded-[100px]">
          <Image src={icon} alt="" width={18} height={18} />
        </div>
        <span className={clsx("text-xs font-medium bg-[rgba(0,212,146,0.10)] rounded-[100px] flex items-center gap-1 py-2 px-4", badgeColor)}>{icon2 && <Image src={icon2} alt="" width={20} height={20} />}{badge}</span>
      </div>
      <div>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <p className="text-[16px] font-medium text-[#6D717F] mt-1">{title}</p>
      </div>
    </div>
  );
}