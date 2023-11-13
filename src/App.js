import "./styles.css";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <ProgressBarController />
    </div>
  );
}

const ProgressBarController = () => {
  const [status, setStatus] = React.useState(0);
  const [on, setOn] = React.useState(false);

  React.useEffect(() => {
    let interval;
    if(on) {
      interval = setInterval(() => {
        setStatus((s) => {
          return s >= 100 ? 0 : s + 1;
        })
      }, 100)
    }
    else {
      clearInterval(interval)
    }

    return () => {
      clearInterval(interval)
    }
  }, [on]);

  return (
    <div>
      <ProgressBar status={status} />
      <ProgressBar status={status} />
      <ProgressBar status={status} />
      <ProgressBar status={status} />
      <button
        className="progress-controller-button"
        onClick={() => setOn(status => !status)}
      >
        {on ? "Stop" : "Start"}
      </button>
    </div>
  )
};

const ProgressBar = ({ status = 0 }) => {
  return (
    <div className="progress-container" style={{ width: `${status}%` }}>
      {`${status}%`}
    </div>
  );
};
