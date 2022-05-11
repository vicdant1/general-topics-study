import { useMemo } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface Props {
  percentage: number;
}
const CircleProgress: React.FC<Props> = ({ percentage }) => {
  const handlePercentageColor = useMemo(() => {
    if (percentage >= 0 && percentage <= 25) return "#60BF81";
    if (percentage > 25 && percentage <= 50) return "#0FC2C0";
    if (percentage > 50 && percentage <= 75) return "#DBF227";
    if (percentage > 75) return "#d41313";
  }, [percentage]);

  return (
    <div className="px-2">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={2}
        styles={buildStyles({
          rotation: 0.75,
          pathTransitionDuration: 0.5,

          pathColor: `${handlePercentageColor}`,
          textColor: `${handlePercentageColor}`,
          pathTransition: "none",
        })}
      />
    </div>
  );
};

export default CircleProgress;
