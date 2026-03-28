import { Vehicle, ActivityItem } from "@/types";

export const vehicles: Vehicle[] = [
  {
    id: "1",
    name: "2021 Tesla Model 3",
    price: 35500,
    mileage: 24100,
    condition: "Excellent",
    location: "Seattle, WA",
    image: "/images/tesla1.png",
  },
  {
    id: "2",
    name: "2019 Porsche 718",
    price: 58000,
    mileage: 12500,
    condition: "Pristine",
    location: "Los Angeles, CA",
    image: "/images/Porsche.png",
  },
  {
    id: "3",
    name: "2023 Toyota Tundra",
    price: 52400,
    mileage: 5200,
    condition: "New",
    location: "Denver, CO",
    image: "/images/Toyota.png",
  },
];

export const activities: ActivityItem[] = [
  {
    id: "1",
    text: "Shaun registered for Elite Soccer Training",
    time: "2 hours ago",
    status: "green",
  },
  {
    id: "2",
    text: "Price drop alert: 2021 Audi A4",
    time: "Yesterday",
    status: "yellow",
  },
  {
    id: "3",
    text: "Purchase completed: 2020 Honda Accord",
    time: "3 days ago",
    status: "blue",
  },
];

export const messages = [
  {
    id: "1",
    sender: "Admin Support",
    preview: "Your bid on the Honda Accord has been confirmed.",
    avatar: "AS",
    avatarColor: "bg-yellow-500",
  },
  {
    id: "2",
    sender: "Billing",
    preview: "Invoice #12345 has been generated.",
    avatar: "B",
    avatarColor: "bg-gray-400",
  },
];

export const stats = [
  {
    id: "1",
    title: "New Vehicles",
    value: 24,
    icon2: "/icons/trend.svg",
    badge: "+12%",
    badgeColor: "text-green-500",
    icon: "/icons/car.svg",
  },
  {
    id: "2",
    title: "Active Bids",
    value: 7,
    icon2: "/icons/live.svg",
    badge: "Live",
    badgeColor: "text-[#00D492]",
    icon: "/icons/hammer.svg",
  },
  {
    id: "3",
    title: "Saved Vehicles",
    value: 12,
    icon2: "/icons/plus.svg",
    badge: "2 New",
    badgeColor: "text-[#00D492]",
    icon: "/icons/bookmark.svg",
  },
  {
    id: "4",
    title: "Purchased",
    value: 3,
    icon2: "/icons/Closed.svg",
    badge: "Closed",
    badgeColor: "text-[#00D492]",
    icon: "/icons/pur.svg",
  },
];