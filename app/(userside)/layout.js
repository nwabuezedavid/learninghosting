
import UserContext from "../(component)/context/auth";
import FoTter from "../(component)/footer";
import HheaderFind from "../(component)/header";
import Dashproverer from "../(component)/userside/context";
import Leftside from "../(component)/userside/left";
import NavDasd from "../(component)/userside/nav";
import "../globals.css";
import Sitedetail from "./../(component)/context/sitedetail";





export default function RootLayout({ children }) {
  return (
    < >
      <UserContext>
      <Dashproverer>
          <Sitedetail>
        <section className="w-screen m-0 p-0 h-screen flex flex-col overflow-hidden  bg-white flex-grow">

              <NavDasd />
              <main className="w-full  flex   h-[90%]  overflow-hidden ">

                <Leftside />
                {children}
              </main>
        </section>
          </Sitedetail>
      </Dashproverer>
      </UserContext>
    </>

  );
}
