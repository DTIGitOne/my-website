import React, { useEffect, useState } from 'react';

const Background = ({ animate, backgroundColor1 }) => {
  const [backgroundColor, setBackgroundColor] = useState(
    "linear-gradient(210deg , #93BAE8 , #EDADC9 , #B8B5DB )"
  );

  useEffect(() => {
    
      setBackgroundColor(backgroundColor1);
    
  }, [backgroundColor1]);

  console.log(backgroundColor);

  return (
    <div className={`${animate ? "colorChangeToPortfolio" : ""}`} style={{ height: "100%", width: "100%", position: "absolute", overflow: "hidden", background: backgroundColor, backgroundSize: "350% 550%" }}></div>
  );
};

export default Background;
