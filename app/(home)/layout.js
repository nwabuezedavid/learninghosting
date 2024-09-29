
import UserContext from "../(component)/context/auth";
import FoTter from "../(component)/footer";
import HheaderFind from "../(component)/header";
import "../globals.css";
import Sitedetail from "./../(component)/context/sitedetail";

   



export default function RootLayout({ children }) {
  return (  
<div className="">
<UserContext>


<Sitedetail>
<HheaderFind />
  {children}
<FoTter/>
</Sitedetail>
</UserContext>
</div>

  );
}
