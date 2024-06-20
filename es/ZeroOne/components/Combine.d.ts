/// <reference types="react" />
import { type IconCombineProps } from "../../IconCombine";
export type CombineProps = Omit<IconCombineProps, 'Icon' | 'Text'>;
declare const Combine: import("react").NamedExoticComponent<CombineProps>;
export default Combine;
