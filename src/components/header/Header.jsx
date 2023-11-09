import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
function Header() {
    return (
        <div className='header'>
            <div className="header-left-side"></div>
            <div className="header-mid-side">
                <SearchIcon />
                <TextField id="standard-basic" label="Aramak istediğiniz ürünü yazınız." fullWidth />
            </div>
            <div className="header-right-side">
                <a>
                    <PersonOutlineOutlinedIcon />
                    <p>Giriş Yap</p>
                </a>
                <a>
                    <FavoriteBorderOutlinedIcon />
                    <p>Favorilerim</p>
                </a>
                <a>
                    <ShoppingCartOutlinedIcon />
                    <p>Sepetim</p>
                </a>
            </div>
        </div>
    )
}

export default Header