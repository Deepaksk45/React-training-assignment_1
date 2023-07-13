import "./App.css";
import ServiceBox from "./components/ServiceBox";
import componentsImage from "./assets/images/components.png";
import stateImage from "./assets/images/state.png";
import eventsImage from "./assets/images/events.png";
import Header from "./components/Header";

function App() {
  const serviceBoxData = [
    {
      title: "Components",
      image: componentsImage,
      description:
        "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.",
    },
    {
      title: "State",
      image: stateImage,
      description:
        "State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.",
    },
    {
      title: "Events",
      image: eventsImage,
      description:
        "Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.",
    },
  ];
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
      </div>
      {/* <div className="serviceBoxList"></div> */}
      <div className="container serviceBoxList">
        {serviceBoxData.map((item, index) => (
          <ServiceBox {...item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
