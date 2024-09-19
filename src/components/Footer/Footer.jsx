import './footer.css';
import logo from '../../images/logo.png';

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-left">
        <img src={logo} alt="Seclorum Logo" className="footer-logo" />
        <p>&copy; 2024 Seclorum. Все права защищены.</p>
      </div>
      <div className="footer-right">
        <div className="footer-links">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">Twitter</a>
        </div>
        <div className="footer-contact">
          <p>Email: info@seclorum.com</p>
          <p>Телефон: +123 456 7890</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
