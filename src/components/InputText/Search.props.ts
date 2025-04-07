import { InputHTMLAttributes, Ref } from "react";

export interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  isSearch?: boolean;
  ref?: Ref<HTMLInputElement>;
}
