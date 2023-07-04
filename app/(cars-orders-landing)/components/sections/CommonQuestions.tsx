import { AccordionDemo } from "@/components/ui/AccordionDemo";
import React from "react";

export const CommonQuestions = () => {
  return (
    <section className="text-white flex items-center justify-center mx-auto h-screen mt-[-100px]">
      <div className="flex flex-col gap-5">
        <h4 className="text-center lg:text-left text-4xl lg:text-6xl tracking-wider">
          Common questions
        </h4>
        <AccordionDemo />
      </div>
    </section>
  );
};
