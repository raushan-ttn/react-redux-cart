import React, { useState } from "react";
import parse from 'html-react-parser';

const FaqItem = ({ data }) => {
  const [isActive, setIsActive] = useState(data.show);

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={data.id}>
        <button
          className={`accordion-button ${!isActive ? "collapsed" : ""}`}
          type="button"
          aria-expanded="true"
          aria-controls={data.controls}
          onClick={() => setIsActive(!isActive)}
        >
          {data.name}
        </button>
      </h2>
      <div
        id={data.id}
        className={`accordion-collapse collapse show`}
        aria-labelledby={data.controls}
      >
        {isActive ? (
         <div className="accordion-body">{parse(data.description)}</div>
        ) : null}
      </div>
    </div>
  );
};

export default FaqItem;
