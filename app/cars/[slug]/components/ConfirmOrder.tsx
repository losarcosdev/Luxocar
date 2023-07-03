import { DateRange } from "react-day-picker";
import { FormEvent } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { SingleCarResponse } from "@/interfaces";
import { calcTotalDays, calcTotalRent, convertDate } from "@/utils";
import { AlertField } from "./AlertField";

interface Props {
  formState: {
    address1: string;
    address2: string;
    country: string;
    city: string;
    telephoneNumber: string;
    additionalComments?: string;
  };
  date: DateRange | undefined;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  car: SingleCarResponse;
  loading: boolean;
}

export const ConfirmOrder = ({
  car,
  date,
  formState,
  loading,
  handleSubmit,
}: Props) => {
  if (
    !formState.address1 ||
    !formState.address2 ||
    !formState.city ||
    !formState.country ||
    !formState.telephoneNumber ||
    !date?.from ||
    !date?.to
  ) {
    return (
      <button
        className="border-[#232323] border-[1px] backdrop-blur-[7px] bg-[#111111]/80 text-gray-100 opacity-60 duration-200 py-2 w-full text-center active:scale-95 tracking-wider mt-4"
        disabled={true}
      >
        Order
      </button>
    );
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="border-[#232323] border-[1px] backdrop-blur-[7px] bg-[#111111]/80 text-gray-100 hover:opacity-80 duration-200 py-2 w-full text-center active:scale-95 tracking-wider mt-4">
          Order
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="border-none rounded-none">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-4xl text-center">
            {loading ? "Creating Order..." : "Your Order"}
          </AlertDialogTitle>
          {loading ? (
            <AlertDialogDescription className="flex-col gap-5 flex items-center justify-center py-[50px]">
              <LoadingSpinner />
            </AlertDialogDescription>
          ) : (
            <AlertDialogDescription className="flex flex-col gap-5">
              <div>
                <p className="text-2xl tracking-wide">Your address</p>
                <AlertField
                  fieldLabel="Address 1:"
                  fieldValue={formState.address1}
                />
                <AlertField
                  fieldLabel="Address 2:"
                  fieldValue={formState.address2}
                />
                <AlertField fieldLabel="City:" fieldValue={formState.city} />
                <AlertField
                  fieldLabel="Country:"
                  fieldValue={formState.country}
                />
              </div>
              <div>
                <p className="text-2xl tracking-wide">Car details</p>
                <AlertField fieldLabel="Name:" fieldValue={car.name} />
                <AlertField fieldLabel="Brand:" fieldValue={car.brand} />
                <AlertField fieldLabel="Model:" fieldValue={car.model} />
              </div>
              <div>
                <p className="text-2xl tracking-wide">Summary</p>
                <AlertField
                  fieldLabel="Price Per Day:"
                  fieldValue={`$${car.pricePerDay}`}
                />
                <AlertField
                  fieldLabel="Date:"
                  fieldValue={`${convertDate(date.from)} to ${convertDate(
                    date.to
                  )}`}
                />
                <AlertField
                  fieldLabel="Days:"
                  fieldValue={`${calcTotalDays(date.from, date.to)}`}
                />
                <div className="flex gap-1 items-center text-xl">
                  <p>Total:</p>
                  <p className="text-black">
                    ${calcTotalRent(date.from, date.to, car.pricePerDay)}
                  </p>
                </div>
              </div>
            </AlertDialogDescription>
          )}
        </AlertDialogHeader>
        {loading ? (
          <></>
        ) : (
          <AlertDialogFooter className="flex flex-col gap-2">
            <AlertDialogCancel className="text-xl rounded-none w-full">
              Cancel
            </AlertDialogCancel>
            <form onSubmit={handleSubmit} className="w-full">
              <AlertDialogAction
                type="submit"
                className="text-xl rounded-none w-full"
              >
                Confirm
              </AlertDialogAction>
            </form>
          </AlertDialogFooter>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
};
