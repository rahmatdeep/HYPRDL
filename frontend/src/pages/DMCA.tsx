import { Container } from "@/components/user/Container";

export function DMCA() {
  return (
    <>
      <Container>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Content Policy
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The following types of content are not allowed to be shared on HYPRDL.
          They will be removed when reported.
          <br />
          <br />
          <ul>
            <li>
              <strong>Copyright violation</strong> : Works which are shared
              without permission from the copyright holder. For copyright
              reports we need a formal DMCA takedown request originating from
              the copyright holder or a representative. If your request is not
              valid it will be ignored. Takedown requests which are sent to any
              other address than abuse@HYPRDL.co will also be ignored. See the
              chapter Copyright infringement below.
            </li>
            <li>
              <strong>Abuse of minors</strong> : Videos, images or audio
              fragments depicting abuse or inappropriate touching of minors will
              be removed and reported to the National Center for Missing and
              Exploited Children when found.
            </li>
            <li>
              <strong>Terrorism</strong> : Videos, images or audio fragments
              which promote and glorify acts of terrorism.
            </li>
            <li>
              <strong>Gore</strong> : Graphic and shocking videos or images
              depicting severe harm to humans (or animals). I will clarify that
              I am not strictly against shocking content, and it is also not
              illegal in most places. When a shocking video goes viral it often
              ends up in the wrong places, and it can cause mental issues for
              unsuspecting viewers. For that reason I will remove it when it
              gets reported.
            </li>
            <li>
              <strong>Malware and computer viruses</strong> : Software designed
              to cause harm to computer systems.
            </li>
            <li>
              <strong>Doxing</strong> : Posting private information about an
              individual or organisation. This includes publicly sharing private
              photos, videos or documents. Shaming and extortion are not
              accepted.
            </li>
          </ul>
          If you have found content which falls in any of these categories on
          HYPRDL please report it at{" "}
          <a className="underline cursor-pointer">abuse@HYPRDL.co</a>
        </p>
        <h2 className="scroll-m-20 border-b pt-4 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Content Policy
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          If you have found content which infringes on your copyright you can
          send a formal DMCA take-down request to{" "}
          <a className="cursor-pointer underline">abuse@HYPRDL.co</a> and I will
          review it. In your e-mail you need to swear under penalty of perjury
          that you (or your company) own exclusive rights to the claimed
          content. Please state the name of your organisation so the report can
          be properly categorised. The abuse mailbox relies on e-mail forwarding
          to work. The mail is first processed by the HYPRDL server and then
          forwarded to my mailbox. If your sending e-mail server has an{" "}
          <a
            href="https://en.wikipedia.org/wiki/Sender_Policy_Framework#FAIL_and_forwarding"
            className="cursor-pointer underline"
          >
            SPF policy
          </a>{" "}
          which restricts forwarding your message will not arrive in my inbox.
          Abuse mails from repeated senders are automatically processed. This
          only works if you send the reports to <a>abuse@HYPRDL.co</a>. Do not
          send abuse reports to support, sales or any other e-mail address, your
          report will be ignored or delayed.
        </p>
        <h2 className="scroll-m-20 border-b pt-4 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Disclaimer
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          HYPRDL cannot be held liable for any illegal or copyrighted material
          that’s uploaded by the users of this application under the Online
          Copyright Infringement Liability Limitation Act § 512(c) in the USA
          and the Electronic Commerce Directive 2000 Article 14 in the EU.
        </p>
      </Container>
    </>
  );
}
