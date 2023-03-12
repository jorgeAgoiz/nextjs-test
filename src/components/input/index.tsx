import classNames from "classnames/bind";
import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import styles from "./input.module.css";
let cx = classNames.bind(styles);

interface Props {
  type: HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  variant?: "small" | "large";
  mandatory?: boolean;
}

const Input = ({
  type,
  name,
  placeholder,
  onChange,
  value,
  variant = "large",
  mandatory = true,
}: Props): JSX.Element => {
  const className: string = cx({
    input: true,
    ["input--small"]: variant === "small",
    ["input--large"]: variant === "large",
  });

  return (
    <input
      className={className}
      type={type}
      name={name}
      placeholder={placeholder}
      title={placeholder}
      onChange={onChange}
      value={value}
      required={mandatory}
    />
  );
};

export default Input;
