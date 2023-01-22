import react from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value); //transofrm datapoint into the value
    const totalMaximun = Math.max(...dataPointValues); //with ...(spread operator), pull out all the array elements
                                                        //and add it as standalone arguments
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximun}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
