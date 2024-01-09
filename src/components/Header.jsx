import header_search from "../assets/icons/header/header_search.svg"
import menu from "../assets/icons/header/Menu.svg"
import menu1 from "../assets/icons/header/Menu-1.svg"
import Help from "../assets/icons/header/Help.svg"


export default function Header() {
    return (
        <div className="header" style={{backgroundColor: "#FFFFFF", display: 'flex', width: '100%', height: '64px', flexDirection: 'row', alignItems: 'center', padding: '21px 16px 21px 32px', justifyContent: 'space-between'}}>
            <div className="page-name" style={{ height: '22px', width: '360px', display: "flex", flexDirection: "row", alignItems: 'center'}}>
                <span style={{ fontSize: "20px", fontWeight: 500,color: "1A181E", width: '70px', marginRight: '16px'}}>Payments</span>
                <img src={Help} style={{
                    padding: '1px 6px 1px 16px'
                }}/>
                <span style={{fontSize: '12px', fontWeight: 400, color: '#4D4D4D'}}>How it works</span>
            </div>

            <div className="header-searchbar" style={{backgroundColor: '#D9D9D9', flex: 1, height: '40px', maxWidth: '32%',display: 'flex', alignItems: 'center', borderRadius: '6px', padding: '12px 16px 12px 0px'}}>
                <img src={header_search} style={{padding: '12px 8px 12px 16px'}}></img>
                <input type="text" placeholder="Search features, tutorials, etc." style={{border: 'none', backgroundColor: 'transparent',"::placeholder":{color: '#808080'}, color: "#1B1B1B" , flex: 1, outline: 'none'}}/>
            </div>

            <div className="last-ke-do-icons" style={{display: 'flex', flexDirection: 'row-reverse', height: '40px', width: '360px', flex: 'end'}}>
                <img src={menu1}></img>
                <img src={menu} style={{ paddingRight: '16px'}}></img>
            </div>
        </div>
    )
}