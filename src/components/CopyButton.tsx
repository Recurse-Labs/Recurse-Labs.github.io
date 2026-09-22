import type { ReactNode } from "react";
import { copyText } from "../lib/clipboard";

type Props = {
  text: string;
  children?: ReactNode;
  className?: string;
  title?: string;
};

export default function CopyButton({
  text,
  children = "copy",
  className = "btn sm",
  title,
}: Props) {
  return (
    <button type="button" className={className} title={title} onClick={() => void copyText(text)}>
      {children}
    </button>
  );
}
