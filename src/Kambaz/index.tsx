import { Navigate, Route, Routes } from "react-router";
import Account from "./Account";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";

export default function Kambaz() {
    return(
        <div id="wd-kambaz">
            <table>
                <tr>
                    <td valign="top">
                        <KambazNavigation />
                    </td>
                    <td valign="top">
                        <Routes>
                            <Route path="/" element={<Navigate to="Account"/>} />
                            <Route path = "Account/*" element ={<Account />}/>
                            <Route path = "Dashboard" element ={<Dashboard />}/>
                            <Route path = "Courses/:cid/*" element ={<Courses />}/>
                            <Route path="/Calendar" element={<h1>Calendar</h1>} />
                            <Route path="/Inbox" element={<h1>Inbox</h1>} />
                            <Route path="/History" element={<h1>History</h1>} />
                            <Route path="/Studio" element={<h1>Studio</h1>} />
                            <Route path="/Help" element={<h1>Inbox</h1>} />
                        </Routes>
                    </td>
                </tr>
            </table>
        </div>
    );
}