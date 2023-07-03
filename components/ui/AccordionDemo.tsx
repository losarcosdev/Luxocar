import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

const commonQuestions: { question: string; answer: string }[] = [
  {
    question: "How old do I need to be to rent a luxury car?",
    answer:
      "To rent a luxury car, you must be at least 25 years old and possess a valid driver's license. Some high-performance or specialty vehicles may require renters to be at least 30 years old. We enforce these age requirements to ensure the safety and proper handling of our luxury cars.",
  },
  {
    question: "Are there mileage restrictions on luxury car rentals?",
    answer:
      "We offer generous mileage allowances for our luxury car rentals, allowing you to enjoy your driving experience without unnecessary limitations. However, if you exceed the allotted mileage, additional charges may apply. It's important to review the terms and conditions of your rental agreement for details on mileage allowances and any associated fees.",
  },
  {
    question: "What happens if the luxury car I rented gets damaged?",
    answer:
      "Our luxury car rentals are comprehensively insured, but in the event of any damage, you are responsible for the deductible outlined in your rental agreement. We strongly encourage renters to inspect the vehicle thoroughly before driving off and report any existing damage to our team. Additionally, we offer optional insurance coverage upgrades to minimize your liability in case of an accident. Our staff will provide detailed information and support in the event of any damage or insurance claim.",
  },
];

export function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      className="text-white font-sans w-[100vw] lg:w-[90vw]"
    >
      {commonQuestions.map(({ answer, question }, index) => (
        <AccordionItem
          value={`item-${index}`}
          className="border-[#2b2b2b] bg-[#111111] p-2"
          key={question}
        >
          <AccordionTrigger className="uppercase tracking-tighter w-full font-semibold">
            {question}
          </AccordionTrigger>
          <AccordionContent className="text-[#7c7c7c]">
            {answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
