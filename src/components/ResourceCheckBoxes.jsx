import React, { useState } from "react";
import styled from "styled-components";

const resources = [
  { id: 1, name: "Basic Needs" },
  { id: 2, name: "Domestic Violence" },
  { id: 3, name: "Food" },
  { id: 4, name: "Education" },
  { id: 5, name: "Employment" },
  { id: 6, name: "Housing" },
  { id: 7, name: "Medical" },
  { id: 8, name: "Mental Health" },
  { id: 9, name: "Transportation" },
];

const ResourceCheckBoxes = (props) => {
  return (
    <CheckboxContainer>
      {resources.map((resource, index) => (
        <div key={resource.id}>
          <input
            type="checkbox"
            id={`resource-${resource.id}`}
            onChange={props.onCheckboxChange}
          />
          {resource.name}
        </div>
      ))}
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  div {
    width: calc(33.33% - 10px);
    margin: 10px;
  }
`;

export default ResourceCheckBoxes;
