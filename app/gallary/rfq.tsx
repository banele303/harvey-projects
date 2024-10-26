import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function FrequentlyAskedQuestions() {
    return (


        <div>

<p className="md:text-center text-xl md:text-2xl my-6   md:w-4/5 mx-auto text-gray-500">
Frequently Asked Question About Decking
        </p>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. Is animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
    )
  }
  