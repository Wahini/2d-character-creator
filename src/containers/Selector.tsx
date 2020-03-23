import React from "react";
import config from "../config";

import { PartTypes } from "../components/PartTypes";
import { PartList } from "../components/PartList";
import { ConfigPart } from "../interfaces/Config";
import { PartColorSelector } from "../components/PartColorSelector";

interface SelectorProps {
  addPart: (newPart: ConfigPart) => void;
  removePart: (removedPart: ConfigPart) => void;
  changeSkinTone: (newSkinTone: number) => void;
  skinTone: number;
  partsArray: ConfigPart[];
}

const Selector = (props: SelectorProps) => {
  const [partType, setPartType] = React.useState<number>(0);

  return (
    <div>
      <PartTypes
        partTypes={config.partTypes}
        setPartType={setPartType}
        partType={partType}
      ></PartTypes>
      {partType !== undefined && (
        <React.Fragment>
          <PartList
            parts={config.parts}
            partType={partType}
            addPart={props.addPart}
            removePart={props.removePart}
            skinTone={props.skinTone}
            partsArray={props.partsArray}
          ></PartList>
          <PartColorSelector
            parts={config.parts}
            partType={partType}
            addPart={props.addPart}
            skinTone={props.skinTone}
            partsArray={props.partsArray}
            setSkinTone={props.changeSkinTone}
          ></PartColorSelector>
        </React.Fragment>
      )}
    </div>
  );
};

export default Selector;
