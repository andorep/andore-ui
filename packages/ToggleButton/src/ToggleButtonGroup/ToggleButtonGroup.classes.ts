import {ToggleButtonGroupDensity} from "./ToggleButtonGroup.types";

export const ToggleButtonGroupBaseClassName = "MTToggleButtonGroup-root MTToggleButtonGroup group/root flex flex-row";

export const ToggleButtonGroupDensityMapClassName: Record<ToggleButtonGroupDensity, string> = {
    0: "MTToggleButtonGroup-density-0",
    "-1": "MTToggleButtonGroup-density-1",
    "-2": "MTToggleButtonGroup-density-2",
    "-3": "MTToggleButtonGroup-density-3",
}
