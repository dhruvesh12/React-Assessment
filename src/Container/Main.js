import Filters from "./filters";
import NavBar from "./Navbar";
import ProductList from "./productlist";
import SideBar from "./SideBar";

function Main() {
    return ( 
        <>
        <div style={{backgroundColor:'#f5f5f5'}}>
            <NavBar/>
            <Filters/>
            
            <SideBar/>
            <ProductList/>
            </div>
        </>
     );
}

export default Main;