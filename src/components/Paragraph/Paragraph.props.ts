import { HTMLAttributes, ReactNode } from "react";

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  size?: number;
}
