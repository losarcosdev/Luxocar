import { PREFIX_API_URL } from "@/constants";
import { OrderCreatedResponse } from "@/interfaces";
import { calcTotalRent } from "@/utils";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";
import { DateRange } from "react-day-picker";

interface FormState {
  address1: string;
  address2: string;
  country: string;
  city: string;
  telephoneNumber: string;
  additionalComments?: string;
}

interface Props {
  carId: string;
  pricePerDay: number;
}

export const useCreateOrder = ({ carId, pricePerDay }: Props) => {
  const session = useSession();
  const [formState, setFormState] = useState<FormState>({
    address1: "",
    address2: "",
    country: "",
    city: "",
    telephoneNumber: "",
    additionalComments: "",
  });
  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDate = (date: DateRange | undefined) => {
    setDate(date);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!date?.from || !date.to || !session.data?.user) return;

    const total = calcTotalRent(date.from, date.to, pricePerDay);

    const orderData = {
      pickUpAddress: {
        ...formState,
      },
      userId: session.data.user.id,
      carId,
      dropOffDate: date.to,
      pickUpDate: date.from,
      total,
    };

    try {
      const { data }: { data: OrderCreatedResponse } = await axios.post(
        `${PREFIX_API_URL}/api/order-car`,
        orderData
      );

      router.push(`/orders/${data._id}`);
      setLoading(true);
    } catch (error) {
      setLoading(false);
      console.error("Error al realizar la solicitud POST:", error);
    }
  };

  return {
    handleChange,
    handleDate,
    handleSubmit,
    date,
    formState,
    loading,
    session,
  };
};
