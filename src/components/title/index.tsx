import classNames from "classnames/bind";
import styles from "./title.module.css";
let cx = classNames.bind(styles);

interface Props {
  text: string;
  id?: string;
  variant?: "success" | "info" | "error" | "subtitle";
}

const Title = ({ text, id, variant }: Props): JSX.Element => {
  const className: string = cx({
    heading: true,
    ["heading--success"]: variant === "success",
    ["heading--info"]: variant === "info",
    ["heading--error"]: variant === "error",
    ["heading--subtitle"]: variant === "subtitle",
  });
  return (
    <h1 id={id} className={className}>
      {text}
    </h1>
  );
};

export default Title;
