import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';


function Footer() {


    const year = new Date()


    return (
        <div className='footer'>
            <div className="row top-footer">
                <div className='col-md-4'>
                    <h3>PASHA DERİ</h3>
                    <ul>
                        <li><a href="">Anasayfa</a></li>
                        <li><a href="">Kategori</a></li>
                        <li><a href="">Hakkımızda</a></li>
                        <li><a href="">İletişim</a></li>
                    </ul>
                </div>
                <div className='col-md-4'>
                    <h3>MÜŞTERİ HİZMETLERİ</h3>
                    <ul>
                        <li><a href="">Aydınlatma Metni</a></li>
                        <li><a href="">Mesafeli Satış Sözleşmesi</a></li>
                        <li><a href="">Üyelik Sözleşmesi</a></li>
                        <li><a href="">İptal ve İade Süreci</a></li>
                        <li><a href="">Gizlilik Politikası</a></li>
                    </ul>
                </div>
                <div className='col-md-4'>
                    <h3>SERVİSLER</h3>
                    <ul>
                        <li><a href="">Üye Girişi</a></li>
                        <li><a href="">Yeni Üye Ol</a></li>
                    </ul>
                </div>
                <div className='col-md-4 social-media'>
                    <h3>SOSYAL MEDYA</h3>
                    <ul>
                        <li>Bizi sosyal medyada takip edin</li>
                        <li>
                            <a href=""><FacebookIcon fontSize='small' /></a>
                            <a href=""><TwitterIcon fontSize='small' /></a>
                            <a href=""><InstagramIcon fontSize='small' /></a>
                            <a href=""><YouTubeIcon fontSize='small' /></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row bottom-footer">
                <div className="col-md-6">
                    Copyright © {year.getFullYear()}, <a className='link-website' href="">www.Lorem.com</a> | Tüm Hakları Saklıdır.
                </div>
                <div className="col-md-6">

                    Bu site <a href="https://ademkaragulle.netlify.app"><strong className='link-website'>Adem Karagülle</strong></a> tarafından yapılmıştır
                </div>
            </div>
        </div>
    )
}

export default Footer