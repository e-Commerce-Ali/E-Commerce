import { Box, Container, Stack, Typography } from "@mui/material";
import './Header.css'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PashaDeri from '../../assets/img/Pasha-Deri.png'
const navs = [
    { name: "Anasayfa", url: "/" },
    { name: "Anasayfa", url: "/" },
    { name: "Anasayfa", url: "/" },
    { name: "Anasayfa", url: "/" },
];
function Header() {

    const navItems = [
        {
            link_name: "Mağaza",
            path_name: "/magaza",
        },
        {
            link_name: "koleksiyonlar",
            path_name: "/koleksiyonlar",
        },
        {
            link_name: "Hakkımızda",
            path_name: "/hakkimizda",
        },
        {
            link_name: "İletişim",
            path_name: "/iletisim",
        }
    ]


    return (
        <>
            <header>
                <div className="top-header">
                    <p>Pasha Deri</p>
                </div>
                <div className="bottom-header">
                    <nav>
                        {
                            navItems.map((navItem) => (
                                <a href={navItem.path_name} className="nav-button">
                                    {navItem.link_name}
                                </a>
                            ))
                        }
                    </nav>
                    <div className="bottom-header-right">
                        <SearchOutlinedIcon />
                        <PersonOutlineOutlinedIcon />
                        <ShoppingBagOutlinedIcon />
                    </div>
                    <a href="/" className="header-logo">
                        <img style={{ width: "160px" }} src={PashaDeri} alt="" />
                    </a>
                </div>
            </header>


        </>
    );
}

export default Header;
