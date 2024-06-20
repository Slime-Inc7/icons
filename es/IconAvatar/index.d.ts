import { CSSProperties } from 'react';
import { type FlexboxProps } from 'react-layout-kit';
import { IconType } from "../types";
export interface IconAvatarProps extends Omit<FlexboxProps, 'children'> {
    Icon?: IconType;
    background?: string;
    color?: string;
    iconClassName?: string;
    iconMultiple?: number;
    iconStyle?: CSSProperties;
    shape?: 'circle' | 'square';
    size: number;
}
declare const IconAvatar: import("react").ForwardRefExoticComponent<IconAvatarProps & import("react").RefAttributes<HTMLDivElement>>;
export default IconAvatar;
