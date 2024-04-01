import { Container } from "@/components/user/Container";
import { Answer, Question } from "@/components/user/QA";
import { faqData } from "@/config/faq";
import { Fragment } from "react/jsx-runtime";

export function Faq() {
  return (
    <>
      <Container>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-4">
          FAQ - All You Need to Know
        </h1>
        {faqData.map((faq) => (
          <Fragment key={faq.question}>
            <Question>{faq.question}</Question>
            <Answer>{faq.answer}</Answer>
          </Fragment>
        ))}
      </Container>
    </>
  );
}
