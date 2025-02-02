import { CSSProperties } from 'react';
import { type FlexboxProps } from 'react-layout-kit';
import IconAvatar, { IconAvatarProps } from "../IconAvatar";
import { IconType } from "../types";
export interface IconCombineProps extends FlexboxProps {
    Icon: IconType | typeof IconAvatar;
    Text?: IconType;
    color?: string;
    extra?: string;
    extraClassName?: string;
    extraStyle?: CSSProperties;
    iconProps?: Partial<IconAvatarProps>;
    showLogo?: boolean;
    showText?: boolean;
    size?: number;
    spaceMultiple?: number;
    textMultiple?: number;
}
declare const IconCombine: import("react").ForwardRefExoticComponent<IconCombineProps & import("react").RefAttributes<HTMLDivElement>>;
export default IconCombine;
