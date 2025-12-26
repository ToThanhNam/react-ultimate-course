import { useState } from "react";
import "./TabsStyle.css";

interface Tab {
  id: number;
  title: string;
  content: string;
}

const TABS: Tab[] = [
  {
    id: 1,
    title: "HTML",
    content:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    id: 2,
    title: "CSS",
    content:
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
  },
  {
    id: 3,
    title: "Javascript",
    content:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<string>("HTML");
  console.log(activeTab);
  const activeTabData = TABS.find((tab) => tab.title === activeTab);

  return (
    <>
      <div className="tabs-container">
        <h3 className="tabs-title">Sample App: Tabs Nam</h3>
        <div className="tabs-buttons">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button${
                activeTab === tab.title ? " active" : ""
              }`}
              onClick={() => setActiveTab(tab.title)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="tabs-content">
          <p>{activeTabData?.content}</p>
        </div>
      </div>
    </>
  );
};

export default Tabs;
