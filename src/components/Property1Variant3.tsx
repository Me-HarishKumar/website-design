import { FunctionComponent } from "react";
import styles from "./Property1Variant3.module.css";

export type Property1Variant3Type = {
  className?: string;
};

const Property1Variant3: FunctionComponent<Property1Variant3Type> = ({
  className = "",
}) => {
  return <div className={[styles.property1variant7, className].join(" ")} />;
};

export default Property1Variant3;
