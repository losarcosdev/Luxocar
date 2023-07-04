"use client";
import { IOrderCar } from "@/interfaces";
import { PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export type OrderResponseBody = {
  id: string;
  status:
    | "CREATED"
    | "COMPLETED"
    | "SAVED"
    | "APPROVED"
    | "VOIDED"
    | "PAYER_ACTION_REQUIRED";
};

interface Props {
  order: IOrderCar;
}

export const PayPalActions = ({ order }: Props) => {
  const router = useRouter();
  const [loadingPayment, setLoadingPayment] = useState<boolean>(false);

  const onOrderCompleted = async (details: OrderResponseBody) => {
    if (details.status !== "COMPLETED") {
      return alert("No payment in paypal");
    }
    setLoadingPayment(true);

    try {
      const transactionId = details.id;
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_PREFIX_API_URL}/api/order-car/pay`,
        {
          transactionId,
          orderId: order._id,
        }
      );

      window.location.reload();
    } catch (error) {
      setLoadingPayment(false);
      console.log({ error });
      alert("Error");
    }
  };

  return (
    <PayPalButtons
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: order.total.toString(),
              },
            },
          ],
        });
      }}
      onApprove={(data, actions) => {
        return actions.order!.capture().then((details) => {
          onOrderCompleted(details);
        });
      }}
    />
  );
};
