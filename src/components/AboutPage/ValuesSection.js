import React from "react";

import ValueItem from "./components/ValueItem";
import valueItems from "../../../data/AboutPage/valuesSectionData";

const ValuesSection = () => {
  const values = valueItems.map(value => 
    <ValueItem 
      id={value.id}
      header={value.header}
      content={value.content}
    />
  )

  return (
    <section>
      <div class="values-banner" id="our-values">
        <h2>Our values</h2>
        <p>At Socious we want to make a difference in the world but we believe that do so needs to start from within</p>
      </div>
      <div class="values-section">
        {values}
      </div>
    </section>
  )
}

export default ValuesSection
