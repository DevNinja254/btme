import Smallscreens from "./Smallscreens";
import LargeScreen from "./LargeScreen";
const Header = ({zIndex})=> {
   // zIndex("z-10")
    return <>
       <Smallscreens/>
       <LargeScreen zIndex={zIndex}/>
    </>
}
export default Header;