// import React from 'react';
// import { Landing } from "./components/Landing";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ProductsGrid from "./components/ProductsGrid";
// import RegistrationForm from "./components/RegistrationForm";
// import UserContext from "./components/UserContext";
// import { useAuth0 } from "@auth0/auth0-react";
// import DarkThemeComponent from "./components/DarkThemeComponent";
// import LightThemeComponent from "./components/LightThemeComponent";
// import ColorfulThemeComponent from "./components/ColorfulThemeComponent";
// import HomeComponent from "./components/HomeComponent" ;
//
// function App() {
//     const { isAuthenticated, user } = useAuth0();
//     return (
//         <div>
//             <Router>
//                 <UserContext.Provider value={{ user, isAuthenticated }}>
//                     <Routes>
//                         <Route exact path="/" element={<Landing />} />
//                         <Route path="/store-registration" element={<RegistrationForm/>} />
//
//                         <Route path="/light-theme/:storeId" element={<LightThemeComponent />} >
//                             <Route path="" element={<ProductsGrid />} />
//                         </Route>
//                         <Route path="/dark-theme/:storeId" element={<DarkThemeComponent />} >
//                             <Route path="" element={<ProductsGrid />} />
//                         </Route>
//                         <Route path="/colorful-theme/:storeId" element={<ColorfulThemeComponent />} >
//                             <Route path="" element={<ProductsGrid />} />
//                         </Route>
//                     </Routes>
//                 </UserContext.Provider>
//             </Router>
//
//
//         </div>
//     );
// }
//
// export default App;




import React from 'react';
import { Landing } from "./components/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductsGrid from "./components/ProductsGrid";
import RegistrationForm from "./components/RegistrationForm";
import UserContext from "./components/UserContext";
import { useAuth0 } from "@auth0/auth0-react";
import DarkThemeComponent from "./components/DarkThemeComponent";
import LightThemeComponent from "./components/LightThemeComponent";
import ColorfulThemeComponent from "./components/ColorfulThemeComponent";
import HomeComponent from "./components/HomeComponent";

function App() {
    const { isAuthenticated, user } = useAuth0();
    return (
        <div>
            <Router>
                <UserContext.Provider value={{ user, isAuthenticated }}>
                    <Routes>
                        <Route exact path="/" element={<Landing />} />
                        <Route path="/store-registration" element={<RegistrationForm/>} />

                        <Route path="/light-theme/:storeId" element={<LightThemeComponent />} >
                            <Route path="" element={<ProductsGrid />} />
                        </Route>
                        <Route path="/dark-theme/:storeId" element={<DarkThemeComponent />} >
                            <Route path="" element={<ProductsGrid />} />
                        </Route>
                        <Route path="/colorful-theme/:storeId" element={<ColorfulThemeComponent />} >
                            <Route path="" element={<ProductsGrid />} />
                        </Route>

                        {/* Add route for HomeComponent */}
                        <Route path="/home" element={<HomeComponent />} />
                    </Routes>
                </UserContext.Provider>
            </Router>
        </div>
    );
}

export default App;

