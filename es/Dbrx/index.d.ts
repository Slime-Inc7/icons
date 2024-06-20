import Avatar from './components/Avatar';
import BrandColor from './components/BrandColor';
import BrandMono from './components/BrandMono';
import Color from './components/Color';
import Combine from './components/Combine';
import Mono from './components/Mono';
import Text from './components/Text';
export type CompoundedIcon = typeof Mono & {
    Avatar: typeof Avatar;
    Brand: typeof BrandMono;
    BrandColor: typeof BrandColor;
    Color: typeof Color;
    Combine: typeof Combine;
    Text: typeof Text;
    colorPrimary: string;
    title: string;
};
declare const Icons: CompoundedIcon;
export default Icons;