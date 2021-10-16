import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const srcBrandImage = '/bigcity.jpeg';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div className="navbar-brand">
            <Link href='/'>
              <a className="navbar-brand-image">
                <Image width='53' height='40' src={srcBrandImage} alt='brand image' />
                <h1 id='title-brand'>Cardealer Bigcity New</h1>
              </a>
            </Link>
          </div>
          <button className="navbar-toggler" 
            type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href='/'>
                  <a className="nav-link active" aria-current="page">Trang Chủ</a>
                </Link>                
              </li>
              <li className="nav-item">
                <Link href='/car'>
                  <a className="nav-link active" aria-current="page">Sản Phẩm</a>
                </Link>                
              </li>
              <li className="nav-item">
                <Link href='/price'>
                  <a className="nav-link active" aria-current="page">Bảng Phí</a>
                </Link>                
              </li>
              <li className="nav-item">
                <Link href='/about'>
                  <a className="nav-link active" aria-current="page">Giới Thiệu</a>
                </Link>              
              </li>              
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
