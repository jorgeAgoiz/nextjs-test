import classNames from "classnames/bind";
import styles from "./paragraph.module.css";
let cx = classNames.bind(styles);

interface Props {
  text: string;
  variant?: "success" | "info" | "error" | "default";
}

const Paragraph = ({ text, variant = "default" }: Props): JSX.Element => {
  const className = cx({
    paragraph: true,
    ["paragraph--default"]: variant === "default",
    ["paragraph--success"]: variant === "success",
    ["paragraph--info"]: variant === "info",
    ["paragraph--error"]: variant === "error",
  });

  return <p className={className}>{text}</p>;
};

export default Paragraph;
