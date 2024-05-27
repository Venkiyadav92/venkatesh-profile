import { useState } from "react";
import { EXAMPLES } from "../data";
import Section from "./Header/Section.jsx";
import TabButton from "./TabButton.jsx"
import Tabs from "./Header/Tabs.jsx";

export default function Example(){
    const [ selectedTopic,setSelectedTopic ] = useState()
    function handleClick(selectedButton){
      setSelectedTopic(selectedButton)
      // console.log("hi helo")
  }
  
  let TabContent=<p>Click me for more info</p>
  if(selectedTopic){
    TabContent = (
      <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                {EXAMPLES[selectedTopic].code}
  
                </code>
              </pre>
  
            </div>
  
    )
  }


    return (
        <Section title="Examples" id="examples">
          <Tabs buttons={<>
            <TabButton isSelected={selectedTopic === 'Linkedin'} onClick={()=> handleClick("Linkedin")}>Linkedin</TabButton>
            <TabButton isSelected={selectedTopic === 'Github'} onClick={()=> handleClick("Github")}>Github</TabButton>
            <TabButton isSelected={selectedTopic === 'GeeksforGeeks'} onClick={()=> handleClick("GeeksforGeeks")}>GeeksforGeeks</TabButton>
            <TabButton isSelected={selectedTopic === 'Instagram'} onClick={()=> handleClick("Instagram")}>Instagram</TabButton>
          </>}>
            {TabContent}
            </Tabs>

          
        </Section>
    )
}