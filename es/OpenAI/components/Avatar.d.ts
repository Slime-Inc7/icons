/// <reference types="react" />
import { type IconAvatarProps } from "../../IconAvatar";
export interface AvatarProps extends Omit<IconAvatarProps, 'Icon'> {
    type?: 'normal' | 'gpt3' | 'gpt4';
}
declare const Avatar: import("react").NamedExoticComponent<AvatarProps>;
export default Avatar;
