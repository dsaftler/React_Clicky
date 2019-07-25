import React from 'react';

const imgStyle = {
  width: "100%",
  maxWidth: "175px",
  border: "solid 2px transparent",
  hover: "borderColor: red"
}
  // width: "175px",
  // height: "260px",
  // maxWidth: 100%,
  // height: "auto",
  // padding: "3px"


const Tiles = props => {   
  return  (
    <div className="column">
      <img 
      src={props.image}
      alt={props.alt}
      style={imgStyle}
      onClick={() => props.onClick()}
      />
    </div>
  );
};
export default Tiles;
