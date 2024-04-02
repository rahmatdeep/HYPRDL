import { Container } from "@/components/user/Container";
import { Code, Question } from "@/components/user/QA";
import { devData } from "@/config/dev";
import { Fragment } from "react/jsx-runtime";

export function Developers() {
  return (
    <>
      <Container>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-4">
          Developers
        </h1>
        <h3 className="scroll-m-20 text-2xl  font-semibold tracking-tight pt-6">
          Uploading Files with cURL
        </h3>
        {devData.map((faq) => (
          <Fragment key={faq.question}>
            <Question>{faq.question}</Question>
            <Code lines={faq.code} />
          </Fragment>
        ))}
      </Container>
    </>
  );
}
