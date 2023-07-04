import { Feature } from "../Features/Features";
import classes from "./style.module.css";

export const WhyUsSection = () => {
  return (
    <div className={classes.mainSection}>
      <div className={classes.mainIntro}>
        <h1> Why the industry chooses us Clickdee </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
      </div>
      {[1, 2, 3, 4, 5].map((each, _idx) => {
        return (
          <div key={_idx}>
            <Feature idx={_idx} />;
          </div>
        );
      })}
    </div>
  );
};
