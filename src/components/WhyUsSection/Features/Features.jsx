import classes from "./style.module.css";
import clsx from "clsx";
export const Feature = ({ _idx }) => {
  console.log(_idx);
  return (
    <div
      className={clsx(
        classes.featuresSection,
        _idx === 0 || _idx === 2 || _idx === 4 ? classes.oddClass : ""
      )}
    >
      <div>
        <img
          src="https://picsum.photos/200/300"
          width="60"
          height="60"
          alt="img"
        />

        <p>Lorem Ipsum is simply dummy text of the</p>
      </div>
      <div className={classes.overlay}></div>
    </div>
  );
};
