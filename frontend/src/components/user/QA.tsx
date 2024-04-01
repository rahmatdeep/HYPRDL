import { Fragment } from "react/jsx-runtime";
import { Card } from "../ui/card";

interface StringProps {
  children: React.ReactNode;
}

export function Question(props: StringProps) {
  return <p className="pt-5 text-xl font-semibold">{props.children}</p>;
}

export function Answer(props: StringProps) {
  return <p className="pt-1">{props.children}</p>;
}

interface CodeProps {
  lines: string[]; // Pass the array of strings as `lines` instead of `children`
}

export function Code({ lines }: CodeProps) {
  return (
    <Card>
      <pre className="p-4 ">
        <code className=" dark:selection:bg-orange-700 selection:bg-orange-400 block text-sm font-mono overflow-scroll">
          {lines.map((line, index) => (
            <Fragment key={index}>
              {line}
              {"\n"}
            </Fragment>
          ))}
        </code>
      </pre>
    </Card>
  );
}
