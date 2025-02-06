import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqProps {
  questions: {
    question: string;
    answer: string;
  }[];
}

export function Faq({ questions }: FaqProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className="lg:w-3/4 m-auto text-[#D6D6D6] mt-[35px]"
    >
      {questions.map((q, index) => (
        <AccordionItem value={`item-${index + 1}`} key={index}>
          <AccordionTrigger>{q.question}</AccordionTrigger>
          <AccordionContent>{q.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
