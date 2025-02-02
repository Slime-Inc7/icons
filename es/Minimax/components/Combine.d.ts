/// <reference types="react" />
import { type IconCombineProps } from "../../IconCombine";
export interface CombineProps extends Omit<IconCombineProps, 'Icon' | 'Text'> {
    type?: 'color' | 'mono';
}
declare const Combine: import("react").NamedExoticComponent<CombineProps>;
export default Combine;
