import { Container } from "@/components/user/Container";

export function Contact() {
  return (
    <>
      <Container>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-4">
          Contact Us
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          For content report:{" "}
          <a className="cursor-pointer underline">abuse@hyprdl.co</a>
          <br />
          For support/ feature requests / bug reports: If you have a longer,
          more complicated question, or have <br />
          some feature requests or bug reports, you should contact me via email
          at <a className="cursor-pointer underline">support@hyprdl.co.</a>
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          If you want to talk back and forth for a while, feel free to add me on
          Discord: <a className="cursor-pointer underline">@burritoflakes</a>.
          <br />I am generally available between 6 PM IST to 11 PM IST (sorry, I
          have a full-time job too.)
        </p>
      </Container>
    </>
  );
}
