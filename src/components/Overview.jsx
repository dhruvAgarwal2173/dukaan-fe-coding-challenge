import ArrowDown from "../assets/icons/overview/arrow.svg"
import ChevronLeft from "../assets/icons/overview/chevron_left.svg"
import ChevronRight from "../assets/icons/overview/chevron_right.svg"
import Triangle from "../assets/icons/overview/triangle.svg"
import Info from "../assets/icons/overview/info.svg"
import Search from "../assets/icons/overview/search.svg"
import Sort from "../assets/icons/overview/sort.svg"
import Download from "../assets/icons/overview/download.svg"
import { useState } from "react";

export default function Overview() {
    const [currentTab, setCurrentTab] = useState(0);
    const totalTabs = 18;

     const Table = () => {
        const data = [
        {"Order ID": "#281201", "Order Date": "29 June, 2023", "Order Amount": "₹1,278.23", "Transaction Fees": "₹14"},
        {"Order ID": "#281202", "Order Date": "30 June, 2023", "Order Amount": "₹1,278.23", "Transaction Fees": "₹15"},
        {"Order ID": "#281203", "Order Date": "1 July, 2023", "Order Amount": "₹1,278.23", "Transaction Fees": "₹16"},
        {"Order ID": "#281204", "Order Date": "2 July, 2023", "Order Amount": "₹1,278.23", "Transaction Fees": "₹17"},
        {"Order ID": "#281205", "Order Date": "3 July, 2023", "Order Amount": "₹1,278.23", "Transaction Fees": "₹18"},
        {"Order ID": "#281206", "Order Date": "4 July, 2023", "Order Amount": "₹1,278.23", "Transaction Fees": "₹19"},
        {"Order ID": "#281207", "Order Date": "5 July, 2023", "Order Amount": "₹1,278.23", "Transaction Fees": "₹20"},
        {"Order ID": "#281208", "Order Date": "6 July, 2023", "Order Amount": "₹1,278.23", "Transaction Fees": "₹21"},
        {"Order ID": "#281209", "Order Date": "7 July, 2023", "Order Amount": "₹1,278.23", "Transaction Fees": "₹22"},
        {"Order ID": "#281210", "Order Date": "8 July, 2023", "Order Amount": "₹1,278.23", "Transaction Fees": "₹23"},
        {"Order ID": "#281211", "Order Date": "9 July, 2023", "Order Amount": "₹1,278.23", "Transaction Fees": "₹24"},
        {"Order ID": "#281212", "Order Date": "10 July, 2023", "Order Amount": "₹1,278.23", "Transaction Fees": "₹25"},
        {"Order ID": "#281213", "Order Date": "11 July, 2023", "Order Amount": "₹1,278.23", "Transaction Fees": "₹26"},
        {"Order ID": "#281214", "Order Date": "12 July, 2023", "Order Amount": "₹1,278.23", "Transaction Fees": "₹27"},
        {"Order ID": "#281215", "Order Date": "13 July, 2023", "Order Amount": "₹1,278.23", "Transaction Fees": "₹28"},
        {"Order ID": "#281216", "Order Date": "14 July, 2023", "Order Amount": "₹1,278.23", "Transaction Fees": "₹29"},
        {"Order ID": "#281217", "Order Date": "15 July, 2023", "Order Amount": "₹1,278.23", "Transaction Fees": "₹30"},
        {"Order ID": "#281218", "Order Date": "16 July, 2023", "Order Amount": "₹1,278.23", "Transaction Fees": "₹31"},
    ]
        
        const headers = Object.keys(data[0])
        console.log(headers)
        
        return (
            <table style={{width: "100%", tableLayout:'fixed', borderCollapse: 'collapse'}}>
                <thead style={{ backgroundColor:"#F2F2F2", overflow: "hidden"}}>
                    <tr >
                        {headers.map((header, index) => (
                            <th style={{fontSize: "14px",padding: "10px 12px", fontWeight: 500, borderTopLeftRadius: index === 0? "8px": 0, borderBottomLeftRadius: index===0? "8px": 0,borderTopRightRadius: index === 3? "8px": 0, borderBottomRightRadius: index===3? "8px": 0, textAlign: index === 0 || index === 1 ? 'left':'right', alignItems: "center" }} key={header}>{header}{index === 1?<img src={Triangle} style={{marginLeft: "4px"}}/> :index === 3?<img src={Info} style={{marginLeft: "4px"}}/> :<></>}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Array.from(Array(20)).map((row, index) => (
                        <tr key={index} style={{borderBottom: "1px solid #E6E6E6"}}>
                            {
                                Object.values(data[currentTab]).map((value, index) => (
                                    <td style={{fontSize: "14px",padding: "14px 12px", fontWeight: 400, textAlign: index === 0 || index === 1 ? 'left':'right', alignItems: "center" }} key={index}>{value}</td>
                                ))
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
          );
    }

    return (
        <div className="overview" style={{display: 'flex', flex: 1, width: "100%", backgroundColor: "#FAFAFA",flexDirection: 'column', padding: '32px', alignItems: 'flex-start', justifyContent: 'flex-start', overflow: 'auto' }}>
            <div style={{width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: 'space-between', marginBottom: '24px'}}>
            <p style={{fontWeight: 500, fontSize: '20px', color: '#1A181E'}}>Overview</p>
            <div style={{padding: "6px 14px 6px 14px", backgroundColor: "#FFFFFF", borderRadius: "4px", display: 'flex', flexDirection: "row", border: "1px solid #D9D9D9"}}>
                <p style={{fontSize: "16px", color: "#1A181E", fontWeight: 400}}>This Month</p>
                <img src={ArrowDown} style={{marginLeft: "8px"}}/>
            </div>
            </div>
            <div style={{width: "100%", display: "flex", flexDirection: 'row', alignItems: 'flex-start', marginBottom: "32px"}}>
                <div style={{maxWidth: "50%", width: "50%", display: "flex", flexDirection: "column", padding: "20px", borderRadius: "8px", backgroundColor: "#FFFFFF", position: "relative", marginRight: "20px", boxShadow: "0px 2px 6px rgba(26, 24, 30, 0.04)"}}>
                        <p style={{color: "#4D4D4D", fontWeight: 400, fontSize: "16px", marginBottom: "16px"}}>Online Orders</p>
                        <p style={{color: "#1A181E", fontWeight: 500, fontSize: "32px"}}>231</p>
                </div>
                <div style={{maxWidth: "50%", width: "50%", display: "flex", flexDirection: "column", padding: "20px", borderRadius: "8px", backgroundColor: "#FFFFFF", position: "relative", marginRight: "20px", boxShadow: "0px 2px 6px rgba(26, 24, 30, 0.04)"}}>
                        <p style={{color: "#4D4D4D", fontWeight: 400, fontSize: "16px", marginBottom: "16px"}}>Amount recieved</p>
                        <p style={{color: "#1A181E", fontWeight: 500, fontSize: "32px"}}>₹23,92,312.19</p>
                </div>
            </div>
            <p style={{fontWeight: 500, fontSize: '20px', color: '#1A181E', marginBottom: "20px"}}>Transactions | This Month</p>
            <div style={{borderRadius: "8px", backgroundColor: "#FFFFFF", boxShadow: "0px 2px 6px rgba(26, 24, 30, 0.04)", width: "100%", padding: "12px"}}>
                <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: "12px"}}>
                    <div className="table-searchbar" style={{backgroundColor: '#FFFFFF', flex: 1, height: '40px', maxWidth: '22%',display: 'flex', alignItems: 'center', borderRadius: '4px',border: "1px solid #D9D9D9", padding: '12px 16px 12px 0px'}}>
                        <img src={Search} style={{padding: '12px 8px 12px 16px'}}></img>
                        <input type="text" placeholder="Search by order ID ..." style={{border: 'none', backgroundColor: 'transparent',"::placeholder":{color: '#808080'}, color: "#1B1B1B" , flex: 1, outline: 'none'}}/>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    <button style={{padding: "8px 12px 8px 12px", borderRadius: "4px", border: "1px solid #D9D9D9", backgroundColor: "#FFFFFF", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: 'center', marginRight: "12px"}}>
                        <p style={{color: "#4D4D4D", fontSize: "14px", fontWeight: 500}}>Sort</p>
                        <img src={Sort} style={{marginLeft: "6px"}}/>
                    </button>
                    <button style={{padding: "6px 12px 6px 12px", borderRadius: "4px", border: "1px solid #D9D9D9", backgroundColor: "#FFFFFF", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: 'center'}}>
                        <img src={Download} style={{marginLeft: "6px"}}/>
                    </button>
                    </div>
                </div>
                <Table/>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", padding: "24px"}}>
                    <button style={{padding: "6px 12px 6px 12px", borderRadius: "4px", border: "1px solid #D9D9D9", backgroundColor: "#FFFFFF", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: 'center', marginRight: "24px"}} onClick={() => {
                        if(currentTab > 0) {
                            setCurrentTab(currentTab-1)
                        }
                    }}>
                        <img src={ChevronLeft} style={{marginRight: "6px"}}/>
                        <p style={{color: "#4D4D4D", fontSize: "14px", fontWeight: 500}}>Previous</p>
                    </button>
                    <button style={{width: "28px", height: "28px", borderRadius: "4px", backgroundColor: currentTab === 0?"#146EB4": "#FFFFFF", alignItems: "center", display: "flex", justifyContent: "center", border: "none"}} onClick={() => {
                        setCurrentTab(0);
                    }}>
                        <p style={{fontSize: "14px", fontWeight: 400, color: currentTab === 0? "#FFFFFF" : "#4D4D4D"}}>1</p>
                    </button>
                    {
                        currentTab > 8? 
                        <div style={{width: "28px", height: "28px", borderRadius: "4px", backgroundColor: "#FFFFFF", alignItems: "center", display: "flex", justifyContent: "center"}}>
                        <p style={{fontSize: "14px", fontWeight: 400, color:"#4D4D4D"}}>...</p>
                    </div> : <></>
                    }
                    {
                        currentTab <9? Array.from(Array(8)).map((_, index) => (
                            <button key={index} style={{width: "28px", height: "28px", borderRadius: "4px", backgroundColor: currentTab === index+1?"#146EB4": "#FFFFFF", alignItems: "center", display: "flex", justifyContent: "center", margin: "0px 8px", border: "none"}} onClick={() => {
                                setCurrentTab(index+1);
                            }}>
                                <p style={{fontSize: "14px", fontWeight: 400, color: currentTab === index+1? "#FFFFFF": "#4D4D4D"}}>{index+2}</p>
                            </button>
                        )) : Array.from(Array(9)).map((_, index) => (
                            <button key={index} style={{width: "28px", height: "28px", borderRadius: "4px", backgroundColor: currentTab === index+8?"#146EB4": "#FFFFFF", alignItems: "center", display: "flex", justifyContent: "center", margin: "0px 8px", border: "none"}} onClick={() => {
                                setCurrentTab(index+8);
                            }}>
                            <p style={{fontSize: "14px", fontWeight: 400, color: currentTab === index+8? "#FFFFFF": "#4D4D4D"}}>{index+9}</p>
                            </button>
                        ))
                    }
                    {
                        currentTab < 9? <div style={{width: "28px", height: "28px", borderRadius: "4px", backgroundColor: "#FFFFFF", alignItems: "center", display: "flex", justifyContent: "center"}}>
                        <p style={{fontSize: "14px", fontWeight: 400, color:"#4D4D4D"}}>...</p>
                    </div> : <></>
                    }
                    <button style={{width: "28px", height: "28px", borderRadius: "4px", backgroundColor: currentTab === 17?"#146EB4": "#FFFFFF", alignItems: "center", display: "flex", justifyContent: "center", border: "none"}} onClick={() => {
                        setCurrentTab(17);
                    }}>
                        <p style={{fontSize: "14px", fontWeight: 400, color: currentTab === 17? "#FFFFFF" : "#4D4D4D"}}>18</p>
                    </button>
                    <button style={{padding: "6px 12px 6px 12px", borderRadius: "4px", border: "1px solid #D9D9D9", backgroundColor: "#FFFFFF", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: 'center', marginLeft: "24px"}} onClick={() => {
                        if(currentTab < totalTabs-1) {
                            setCurrentTab(currentTab+1)
                        }
                    }}>
                        <p style={{color: "#4D4D4D", fontSize: "14px", fontWeight: 500}}>Next</p>
                        <img src={ChevronRight} style={{marginLeft: "6px"}}/>
                    </button>
                </div>
            </div>
        </div>
    )
}