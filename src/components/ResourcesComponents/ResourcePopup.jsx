import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ResourceCheckBoxes from "../ResourceCheckBoxes";
import {
  Popup,
  Top,
  Content,
  RPUHeading,
  OrgInfo,
  ResourceDescription,
  ResourcesCheckBoxes,
} from "./styles/styledResourcePopup";

export const ResourcePopup = (props) => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    if (checked) {
      setSelectedValues([...selectedValues, id]);
    } else {
      setSelectedValues(selectedValues.filter((value) => value !== id));
    }
  };

  const handleSave = () => {
    console.log(`Selected values: ${selectedValues}`);
    // Add code to save the selected values
  };

  return (
    <>
      {props.showModal === "open" && (
        <Popup>
          <Top>
            <p>Resource alerts</p>
            <AiOutlineCloseCircle />
          </Top>
          <OrgInfo>
            <RPUHeading></RPUHeading>
            <img src="/images/user.svg" alt="" />
            <Content></Content>
          </OrgInfo>
          <ResourceDescription>
            <RPUHeading></RPUHeading>
            <Content></Content>
          </ResourceDescription>
          <ResourcesCheckBoxes>
            <RPUHeading></RPUHeading>
            <Content>
              <ResourceCheckBoxes onCheckboxChange={handleCheckboxChange} />
            </Content>
          </ResourcesCheckBoxes>

          <button onClick={handleSave}>Done</button>
        </Popup>
      )}
    </>
  );
};
