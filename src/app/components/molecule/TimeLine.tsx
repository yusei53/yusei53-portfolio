import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { About } from "../../type/About";

interface TProps {
  AboutList: About[];
}

const TimeLine: React.FC<TProps> = ({ AboutList }) => {
  return (
    <>
      <VerticalTimeline>
        {AboutList.map((about) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={about.date}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            key={about.title}
          >
            <h3 className="vertical-timeline-element-title">{about.title}</h3>
            <p>{about.subtitle}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </>
  );
};

export default TimeLine;
