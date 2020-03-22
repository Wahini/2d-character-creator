import React from "react";
import { ConfigPart, ConfigImage } from "../interfaces/Config";

import classes from "./PartList.module.scss";
import configUtils from "../utils/configUtils";

interface PartListProps {
  parts: ConfigPart[];
  addPart: (newPart: ConfigPart) => void;
  removePart: (removedPart: ConfigPart) => void;
  partType: number;
  skinTone: number;
  partsArray: ConfigPart[];
}

export const PartList = (props: PartListProps) => {
  const { filter, reduce } = configUtils;

  return (
    <div>
      <div>Variants:</div>
      <div className={classes.partList}>
        {props.parts
          .filter(part => filter.byPartType(part, props.partType))
          .filter(part => filter.bySkinTone(part, props.skinTone))
          .filter(part => filter.byBodyShape(part, props.partsArray))
          .reduce(reduce.byPartName, [])
          .map((part, index) => (
            <div
              key={index}
              className={
                props.partsArray.some(layer => layer.id === part.id)
                  ? classes.partItemSelected
                  : classes.partItem
              }
              onClick={() => {
                if (props.partsArray.some(layer => layer.id === part.id)) {
                  props.removePart(part);
                } else {
                  props.addPart(part);
                }
              }}
            >
              {part.name}
            </div>
          ))}
      </div>
    </div>
  );
};
