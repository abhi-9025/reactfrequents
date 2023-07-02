import { useState } from "react";
import Tab from "./Tab"

function App() {

  const [currentTabIndex,setCurrentTabIndex]=useState(1)
  const handleChange=(i)=>{
    console.log(i)
    setCurrentTabIndex(i)
  }
  return (
    <div className="App">
       <Tab currentTab={currentTabIndex} onChange={handleChange}>
          <Tab.HeadsContainer>
            <Tab.TabItem label="Tab1" index={1}/>
            <Tab.TabItem label="Tab2" index={2}/>
            <Tab.TabItem label="Tab3" index={3}/>
          </Tab.HeadsContainer>
          <Tab.ContentContainer>
            <Tab.ContentItem index={1}>Children1</Tab.ContentItem>
            <Tab.ContentItem index={2}>Children2</Tab.ContentItem>
            <Tab.ContentItem index={3}>Children3</Tab.ContentItem>
          </Tab.ContentContainer>
       </Tab>
    </div>
  );
}

export default App;
