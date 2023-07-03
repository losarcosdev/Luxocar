"use client";
import { useEffect, useState } from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { IOrderCar } from "@/interfaces";
import { convertDate } from "@/utils";
import { PREFIX_API_URL } from "@/constants";

const OrdersPage = () => {
  const [orders, setOrders] = useState<IOrderCar[]>([]);
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    const takeData = async () => {
      try {
        const response = await fetch(`${PREFIX_API_URL}/api/order-car`);
        const orders = await response.json();
        setOrders(orders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    takeData();
  }, []);

  const userOrders = orders
    .filter((order) => order.user === session.data?.user.id)
    .map(({ status, car, _id, pickUpDate, dropOffDate }) => ({
      id: _id,
      car: car.name,
      status: `${status?.isPayed === false ? "Pending" : "Success"}`,
      date: `${convertDate(pickUpDate)} to ${convertDate(dropOffDate)}`,
    }));

  return (
    <div className="py-5">
      <h1 className="text-4xl text-white tracking-wide text-center">
        My orders
      </h1>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={userOrders} />
      </div>
    </div>
  );
};

export default OrdersPage;
