import Avatar from "./components/Avatar";
import Combine from "./components/Combine";
import Mono from "./components/Mono";
import Text from "./components/Text";
import { COLOR_PRIMARY, TITLE } from "./style";
var Icons = Mono;
Icons.Text = Text;
Icons.Combine = Combine;
Icons.Avatar = Avatar;
Icons.colorPrimary = COLOR_PRIMARY;
Icons.title = TITLE;
export default Icons;