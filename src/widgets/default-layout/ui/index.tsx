import { Outlet } from "react-router-dom";
import Wave from "react-wavify";

// primary: "#2e073e",
//         secondary: "#7a1dac",
//         accent: "#ad49e1",
//         light: "#ebd3f7",

export const DefaultLayout = () => {
  return (
    <>
      <div className="z-[-100] fixed top-0 left-0 bg-primary">
        <Wave
          fill="#7a1dac"
          paused={false}
          style={{
            height: "140vh",
            width: "calc(100vw + 400px)",
            position: "absolute",
            top: 0,
            left: -300,
            filter: "blur(50px)",
            rotate: "-12deg",
          }}
          options={{
            height: 500,
            amplitude: 200,
            speed: 0.075,
            points: 2,
          }}
        />
        <Wave
          fill="#ad49e1"
          paused={false}
          style={{
            height: "120vh",
            width: "calc(100vw + 200px)",
            position: "absolute",
            top: 0,
            left: -200,
            filter: "blur(1px)",
            opacity: 0.5,
            rotate: "12deg",
          }}
          options={{
            height: 700,
            amplitude: 50,
            speed: 0.15,
            points: 4,
          }}
        />
      </div>
      <Outlet />
    </>
  );
};
