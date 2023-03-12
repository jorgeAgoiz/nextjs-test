import classNames from "classnames/bind";
import { MouseEventHandler } from "react";
import styles from "./button.module.css";
let cx = classNames.bind(styles);

interface Props {
  type?: "button" | "submit" | "reset";
  text: string;
  title?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "secondary";
}

const Button = ({
  type,
  text,
  title,
  handleClick,
  variant = "primary",
}: Props): JSX.Element => {
  const className: string = cx({
    button: true,
    ["button--primary"]: variant === "primary",
    ["button--secondary"]: variant === "secondary",
  });

  return (
    <button
      className={className}
      type={type}
      title={title ?? text}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
