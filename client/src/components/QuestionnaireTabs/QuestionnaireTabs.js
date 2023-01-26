import { useState } from "react";
import "./QuestionnaireTabs.sass";

const QuestionnaireTabs = ({ content1, content2, content3 }) => {
  const tabs = [
    {
      id: 1,
      tabTitle: "Личные данные",
      content: content1,
    },
    {
      id: 2,
      tabTitle: "Ваше местоположение",
      content: content2,
    },
    {
      id: 3,
      tabTitle: "Контактные данные",
      content: content3,
    },
  ];
  const [currentTab, setCurrentTab] = useState(tabs[0].id);

  const handleTabClick = (id) => {
    setCurrentTab(id);
  };
  console.log(tabs);
  console.log(currentTab);
  return (
    <div>
      <div className="tabs">
        {tabs.map((tab) => {
          return (
            <span
              className="tab_title"
              style={{
                background: currentTab === tab.id ? "#E6F5FF" : "",
                color: currentTab === tab.id ? "#3D4EAC" : "#000",
              }}
              key={tab.id}
              id={tab.id}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.id}. {tab.tabTitle}
              <span
                className={currentTab === tab.id ? "tab_title_after" : ""}
              ></span>
            </span>
          );
        })}
      </div>
      <div>
        {tabs.map((tab) => {
          return (
            <div key={tab.id}>{currentTab === tab.id ? tab.content : null}</div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionnaireTabs;
