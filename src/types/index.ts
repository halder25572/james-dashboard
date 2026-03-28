export type Vehicle = {
  id: string;
  name: string;
  price: number;
  mileage: number;
  condition: "New" | "Excellent" | "Pristine" | "Good";
  location: string;
  image: string;
};

export type ActivityItem = {
  id: string;
  text: string;
  time: string;
  status: "green" | "yellow" | "blue";
};