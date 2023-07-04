import Image from "next/image";

const clientsReviews = [
  {
    img: "/clients-avatars/client-01.jpg",
    name: "Ashley Johnsonn",
    review:
      "Incredible service and car selection! I rented a luxury sports car for a special weekend, and it exceeded all my expectations. The booking process was quick and easy, and the staff was friendly and professional. The car was in perfect condition, and I had an unmatched driving experience. I will definitely recommend Luxocar to my friends and family",
  },
  {
    img: "/clients-avatars/messi.webp",
    name: "Messi",
    review:
      "Simply amazing! I rented a luxury SUV for a family vacation, and it was a perfect choice. The car was spacious, comfortable, and filled with luxurious features. My family and I enjoyed every moment on the road. Additionally, the rental process was fast and efficient, and the staff at Luxocar were extremely helpful and friendly. I highly recommend their services to anyone looking for an exceptional luxury car rental experience.",
  },
  {
    img: "/clients-avatars/client-02.jpg",
    name: "Albert Whitaker",
    review:
      "I can't express how satisfied I am with Luxocar. I rented an elegant luxury sedan for a business trip, and I was impressed by the quality of the vehicle and the exceptional service. The car was spotless, and the customer service team was friendly and attentive throughout. I will definitely use their services again on my future trips and recommend them to anyone looking for an unparalleled luxury car rental experience.",
  },
];

export const ClientsReview = () => {
  return (
    <section className="lg:h-screen relative flex items-center justify-center">
      <div className="flex flex-wrap z-40 gap-8 justify-center pb-8">
        {clientsReviews.map(({ img, name, review }) => (
          <div
            className={`w-80 lg:w-96 h-auto p-5 border-[#232323] border-[1px] backdrop-blur-[7px] bg-[#111111]/80 ${
              name === "Messi" && "lg:-translate-y-16"
            } flex flex-col items-center gap-5`}
            key={name}
          >
            <Image
              alt="Avatar image"
              src={img}
              width={80}
              height={80}
              className="rounded-[100%] w-[80px] h-[80px]"
            />
            <p className="font-sans text-[#bcbcbc] text-center">{review}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center absolute left-[15%] right-[15%] top-6">
        <h4 className="text-[10rem] lg:text-[14rem] text-center inline-block text-[#161616] leading-none select-none">
          What they say
        </h4>
        <h4 className="text-[10rem] lg:text-[14rem] text-center inline-block text-[#161616] leading-none select-none">
          About us
        </h4>
      </div>
    </section>
  );
};
