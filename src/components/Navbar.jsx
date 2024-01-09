import ChevronDown from "../assets/icons/Navbar/chevron_down.svg";
import Home from "../assets/icons/Navbar/home.svg";
import Orders from "../assets/icons/Navbar/orders.svg";
import Products from "../assets/icons/Navbar/products.svg";
import Delivery from "../assets/icons/Navbar/delivery.svg";
import Marketing from "../assets/icons/Navbar/marketing.svg";
import Analytics from "../assets/icons/Navbar/analytics.svg";
import Payouts from "../assets/icons/Navbar/payouts.svg";
import Discounts from "../assets/icons/Navbar/discounts.svg";
import Audience from "../assets/icons/Navbar/audience.svg";
import Appearance from "../assets/icons/Navbar/appearance.svg";
import Plugins from "../assets/icons/Navbar/plugins.svg";
import Wallet from "../assets/icons/Navbar/wallet.svg";
import { useState } from 'react';

export default function Navbar({}) {

    const NavbarOptions = () => {
        const [selected, setSelected] = useState(0);
        return (
            <div className="navbar-options" style={{flex: 1, width: "100%", height: "auto", display: "flex", flexDirection: "column"}}>
                <div className="navbar-option" style={{width: "100%", height: "auto", display: "flex", flexDirection: "row", alignItems: "center", paddingLeft: "16px", paddingRight: "16px", paddingTop: "8px", paddingBottom: "8px", borderRadius: "4px", backgroundColor: selected === 0? "#FFFFFF1A": "#FFFFFF00"}} onClick={() => setSelected(0)}>
                    <img src={Home} width="20px" height="20px" style={{marginRight: "12px"}}/>
                    <p style={{fontSize: "14px", color: "#FFFFFF", fontWeight: 500}}>Home</p>
                </div>
                <div className="navbar-option" style={{width: "100%", height: "auto", display: "flex", flexDirection: "row", alignItems: "center", paddingLeft: "16px", paddingRight: "16px", paddingTop: "8px", paddingBottom: "8px", borderRadius: "4px", backgroundColor: selected === 1? "#FFFFFF1A": "#FFFFFF00"}} onClick={() => setSelected(1)} >
                    <img src={Orders} width="20px" height="20px" style={{marginRight: "12px"}}/>
                    <p style={{fontSize: "14px", color: "#FFFFFF", fontWeight: 500}}>Orders</p>
                </div>
                <div className="navbar-option" style={{width: "100%", height: "auto", display: "flex", flexDirection: "row", alignItems: "center", paddingLeft: "16px", paddingRight: "16px", paddingTop: "8px", paddingBottom: "8px", borderRadius: "4px", backgroundColor: selected === 2? "#FFFFFF1A": "#FFFFFF00"}} onClick={() => setSelected(2)}>
                    <img src={Products} width="20px" height="20px" style={{marginRight: "12px"}}/>
                    <p style={{fontSize: "14px", color: "#FFFFFF", fontWeight: 500}}>Products</p>
                </div>
                <div className="navbar-option" style={{width: "100%", height: "auto", display: "flex", flexDirection: "row", alignItems: "center", paddingLeft: "16px", paddingRight: "16px", paddingTop: "8px", paddingBottom: "8px", borderRadius: "4px", backgroundColor: selected === 3? "#FFFFFF1A": "#FFFFFF00"}} onClick={() => setSelected(3)}>
                    <img src={Delivery} width="20px" height="20px" style={{marginRight: "12px"}}/>
                    <p style={{fontSize: "14px", color: "#FFFFFF", fontWeight: 500}}>Delivery</p>
                </div>
                <div className="navbar-option" style={{width: "100%", height: "auto", display: "flex", flexDirection: "row", alignItems: "center", paddingLeft: "16px", paddingRight: "16px", paddingTop: "8px", paddingBottom: "8px", borderRadius: "4px", backgroundColor: selected === 4? "#FFFFFF1A": "#FFFFFF00"}} onClick={() => setSelected(4)}>
                    <img src={Marketing} width="20px" height="20px" style={{marginRight: "12px"}}/>
                    <p style={{fontSize: "14px", color: "#FFFFFF", fontWeight: 500}}>Marketing</p>
                </div>
                <div className="navbar-option" style={{width: "100%", height: "auto", display: "flex", flexDirection: "row", alignItems: "center", paddingLeft: "16px", paddingRight: "16px", paddingTop: "8px", paddingBottom: "8px", borderRadius: "4px", backgroundColor: selected === 5? "#FFFFFF1A": "#FFFFFF00"}} onClick={() => setSelected(5)}>
                    <img src={Analytics} width="20px" height="20px" style={{marginRight: "12px"}}/>
                    <p style={{fontSize: "14px", color: "#FFFFFF", fontWeight: 500}}>Analytics</p>
                </div>
                <div className="navbar-option" style={{width: "100%", height: "auto", display: "flex", flexDirection: "row", alignItems: "center", paddingLeft: "16px", paddingRight: "16px", paddingTop: "8px", paddingBottom: "8px", borderRadius: "4px", backgroundColor: selected === 6? "#FFFFFF1A": "#FFFFFF00"}} onClick={() => setSelected(6)}>
                    <img src={Payouts} width="20px" height="20px" style={{marginRight: "12px"}}/>
                    <p style={{fontSize: "14px", color: "#FFFFFF", fontWeight: 500}}>Payouts</p>
                </div>
                <div className="navbar-option" style={{width: "100%", height: "auto", display: "flex", flexDirection: "row", alignItems: "center", paddingLeft: "16px", paddingRight: "16px", paddingTop: "8px", paddingBottom: "8px", borderRadius: "4px", backgroundColor: selected === 7? "#FFFFFF1A": "#FFFFFF00"}} onClick={() => setSelected(7)}>
                    <img src={Discounts} width="20px" height="20px" style={{marginRight: "12px"}}/>
                    <p style={{fontSize: "14px", color: "#FFFFFF", fontWeight: 500}}>Discounts</p>
                </div>
                <div className="navbar-option" style={{width: "100%", height: "auto", display: "flex", flexDirection: "row", alignItems: "center", paddingLeft: "16px", paddingRight: "16px", paddingTop: "8px", paddingBottom: "8px", borderRadius: "4px", backgroundColor: selected === 8? "#FFFFFF1A": "#FFFFFF00"}} onClick={() => setSelected(8)}>
                    <img src={Audience} width="20px" height="20px" style={{marginRight: "12px"}}/>
                    <p style={{fontSize: "14px", color: "#FFFFFF", fontWeight: 500}}>Audience</p>
                </div>
                <div className="navbar-option" style={{width: "100%", height: "auto", display: "flex", flexDirection: "row", alignItems: "center", paddingLeft: "16px", paddingRight: "16px", paddingTop: "8px", paddingBottom: "8px", borderRadius: "4px", backgroundColor: selected === 9? "#FFFFFF1A": "#FFFFFF00"}} onClick={() => setSelected(9)}>
                    <img src={Appearance} width="20px" height="20px" style={{marginRight: "12px"}}/>
                    <p style={{fontSize: "14px", color: "#FFFFFF", fontWeight: 500}}>Appearance</p>
                </div>
                <div className="navbar-option" style={{width: "100%", height: "auto", display: "flex", flexDirection: "row", alignItems: "center", paddingLeft: "16px", paddingRight: "16px", paddingTop: "8px", paddingBottom: "8px", borderRadius: "4px", backgroundColor: selected === 10? "#FFFFFF1A": "#FFFFFF00"}} onClick={() => setSelected(10)}>
                    <img src={Plugins} width="20px" height="20px" style={{marginRight: "12px"}}/>
                    <p style={{fontSize: "14px", color: "#FFFFFF", fontWeight: 500}}>Plugins</p>
                </div>
            </div>
        );
    }
    return (
        <div className="navbar-open" style={{width: '15%', backgroundColor: '#1E2640', padding: "8px", display: "flex", flexDirection: "column"}}>
            <div className="store-details" style={{width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', padding: "8.5px", marginBottom: "32px"}}>
                <img id="store-logo" src='src/assets/images/store_logo.png' width="17%" height="auto" style={{marginRight: "12.5px", borderRadius: "4px"}}/>
                <div style={{display: "flex",height: "100%", flexDirection: "column", alignItems: "flex-start", justifyContent: "space-between", flex: 1}}>
                <p style={{fontSize: "15px", color: "#FFFFFF", fontWeight: 500}}>Nishyan</p>
                <a href='' style={{fontSize: "13px", color: "#FFFFFF"}}>Visit store</a>
                </div>
                <img src={ChevronDown} width="10%" height="auto"/>
            </div>
            <NavbarOptions />
            <div className='navbar-bottom' style={{margin: "8px",paddingLeft: "12px", paddingRight: "12px", paddingTop: "6px", paddingBottom: "6px", backgroundColor: "#353C53", borderRadius: "4px", display: 'flex', flexDirection: "row" }}>
                <div style={{height: "36px", width: "36px", borderRadius: "4px", backgroundColor: "#FFFFFF1A", alignItems: "center", justifyContent: "center", display: "flex", marginRight: "12px"}}>
                    <img src={Wallet} width="24px" height="24px"/>
                </div>
                <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", height: "100%", justifyContent: "space-between"}}>
                    <p style={{fontSize: "13px", color: "#FFFFFF", fontWeight: 400}}>Available credits</p>
                    <p style={{fontSize: "16px", color: "#FFFFFF", fontWeight: 500}}>222.10</p>
                </div>
            </div>
        </div>
    )
}