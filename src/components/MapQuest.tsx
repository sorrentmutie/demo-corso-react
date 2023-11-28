import React from "react";
import { MapQuestProps } from "./mapQuestProps";

export const MapQuest: React.FC<MapQuestProps
   & React.ImgHTMLAttributes<HTMLImageElement>> = ({city, width, height, ...rest}) => { 
  //const {city, width, height} = props;
  // https://www.mapquestapi.com/staticmap/v5/map?key=jSA1sVGnuPmhezWCJdiVfONPZntFFwQf&center=New+York&size=1100,500@2x
  const urlBase = " https://www.mapquestapi.com/staticmap/v5/map?";
  const key = "key=jSA1sVGnuPmhezWCJdiVfONPZntFFwQf";
  const url = `${urlBase}${key}&center=${city}&size=${width},${height}@2x`;

const url2="https://www.mapquestapi.com/staticmap/v5/map?key=jSA1sVGnuPmhezWCJdiVfONPZntFFwQf&center=New+York&size=1100,500@2x";

  console.log(url);
  return (
    <div>
      <img alt="" src={url2} {...rest} />
    </div>
  );
};