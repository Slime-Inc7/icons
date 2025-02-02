/// <reference types="react" />
import { type IconAvatarProps } from "../../IconAvatar";
export type AvatarProps = Omit<IconAvatarProps, 'Icon'>;
declare const Avatar: import("react").NamedExoticComponent<AvatarProps>;
export default Avatar;
