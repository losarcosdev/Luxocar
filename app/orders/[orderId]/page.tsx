import { IOrderCar } from "@/interfaces";
import { convertDate } from "@/utils";
import Image from "next/image";
import { PayPalActions } from "./components";

interface Params {
  params: {
    orderId: string;
  };
}

const OrderPage = async ({ params }: Params) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_PREFIX_API_URL}/api/order-car/${params.orderId}`,
    { cache: "no-cache" }
  );

  const order = (await response.json()) as IOrderCar;

  return (
    <section className="py-10 px-3 lg:px-14 flex flex-col gap-10">
      <div className="flex justify-between items-center">
        <h1 className="text-5xl text-white tracking-wide">
          Order: {params.orderId}
        </h1>
        {order.status?.isPayed === false ? (
          <p className="p-5 border-[#ea4f4f] border-[1px] backdrop-blur-[7px] bg-orange-700/80 text-white text-center tracking-wide">
            Payment status: Pending of Payment
          </p>
        ) : (
          <p className="p-5 border-[#46c538] border-[1px] backdrop-blur-[7px] bg-green-700/80 text-white text-center tracking-wide">
            Payment status: Payed
          </p>
        )}
      </div>
      <div className="w-full h-auto p-5 border-[#232323] border-[1px] backdrop-blur-[7px] bg-[#111111]/80 flex flex-col gap-3 z-40 items-center justify-center">
        <h2 className="text-white text-4xl tracking-wide">{order.car.name}</h2>
        <Image
          alt={`Image of: ${order.car.name}`}
          src={order.car.images.black[1]}
          height={700}
          width={700}
          className="w-[1000px] h-auto"
        />
        <div className="flex gap-5 text-white text-lg tracking-wide">
          <p>From: {convertDate(order.pickUpDate)}</p>
          <p>To: {convertDate(order.dropOffDate)}</p>
        </div>
        <div className="flex gap-5 text-white text-4xl tracking-wide">
          <p>Total: ${order.total}</p>
        </div>
        {order.status?.isPayed === false ? (
          <PayPalActions order={order} />
        ) : (
          <p className="p-5 border-[#46c538] border-[1px] backdrop-blur-[7px] bg-green-700/80 text-white text-center tracking-wide">
            Payment status: Payed
          </p>
        )}
      </div>
    </section>
  );
};

export default OrderPage;
