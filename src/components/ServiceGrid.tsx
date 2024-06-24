import { FunctionComponent } from "react";
import Property1Default from "./Property1Default";
import Property1Variant2 from "./Property1Variant2";
import Property1Variant1 from "./Property1Variant1";
import Property1Variant from "./Property1Variant";
import styles from "./ServiceGrid.module.css";

export type ServiceGridType = {
  className?: string;
};

const ServiceGrid: FunctionComponent<ServiceGridType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.serviceGrid, className].join(" ")}>
      <div className={styles.frameServices}>
        <Property1Default />
        <Property1Variant2 />
        <Property1Variant1 />
        <Property1Variant />
      </div>
    </div>
  );
};

export default ServiceGrid;
