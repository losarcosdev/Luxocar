"use client";
import { DatePicker } from "@/components/ui/DatePicker";
import { useCreateOrder } from "../hooks";
import { NotLoggedInButton } from "./NotLoggedInButton";
import { ConfirmOrder } from "./ConfirmOrder";
import { SingleCarResponse } from "@/interfaces";

interface Props {
  car: SingleCarResponse;
}

export const MakeOrder = ({ car }: Props) => {
  const {
    date,
    handleChange,
    handleDate,
    handleSubmit,
    formState,
    session,
    loading,
  } = useCreateOrder({ carId: car._id, pricePerDay: car.pricePerDay });

  return (
    <section className="w-full">
      <form className="mx-auto font-sans text-white font-semibold tracking-tighter">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6">
          <div>
            <input
              className="border-[#232323] border-[1px] backdrop-blur-[7px] bg-[#111111]/80  px-4 py-3 w-full outline-none"
              type="text"
              name="address1"
              placeholder="Address 1"
              required
              value={formState.address1}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className="border-[#232323] border-[1px] backdrop-blur-[7px] bg-[#111111]/80  px-4 py-3 w-full outline-none"
              type="text"
              name="address2"
              placeholder="Address 2"
              value={formState.address2}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className="border-[#232323] border-[1px] backdrop-blur-[7px] bg-[#111111]/80  px-4 py-3 w-full outline-none"
              type="text"
              name="country"
              placeholder="Country"
              required
              value={formState.country}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className="border-[#232323] border-[1px] backdrop-blur-[7px] bg-[#111111]/80  px-4 py-3 w-full outline-none"
              type="text"
              name="city"
              placeholder="City"
              required
              value={formState.city}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className="border-[#232323] border-[1px] backdrop-blur-[7px] bg-[#111111]/80  px-4 py-3 w-full outline-none"
              type="tel"
              name="telephoneNumber"
              placeholder="Telephone Number"
              required
              value={formState.telephoneNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <DatePicker date={date} handleDate={handleDate} />
          </div>
          <div className="col-span-2">
            <textarea
              className="border-[#232323] border-[1px] backdrop-blur-[7px] bg-[#111111]/80  px-4 py-3 w-full h-32 resize-none outline-none"
              name="additionalComments"
              placeholder="Additional Comments"
              value={formState.additionalComments}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        {!session.data?.user ? (
          <NotLoggedInButton message="To create an order, you must first be logged in." />
        ) : (
          <ConfirmOrder
            formState={formState}
            date={date}
            handleSubmit={handleSubmit}
            car={car}
            loading={loading}
          />
        )}
      </form>
    </section>
  );
};
