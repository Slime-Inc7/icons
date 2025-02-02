import Avatar from './components/Avatar';
import Combine from './components/Combine';
import Mono from './components/Mono';
import Text from './components/Text';
export type CompoundedIcon = typeof Mono & {
    Avatar: typeof Avatar;
    Combine: typeof Combine;
    Text: typeof Text;
    colorGpt3: string;
    colorGpt4: string;
    colorPrimary: string;
    title: string;
};
declare const Icons: CompoundedIcon;
export default Icons;
