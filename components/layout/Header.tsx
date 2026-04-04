const MENU_ITEMS = [
  { href: '#section-home', label: 'Home', isButton: false },
  { href: '#section-resume', label: 'Resume', isButton: false },
  { href: '#section-portfolio', label: 'Portfolio', isButton: false },
  { href: '#section-contacts', label: 'Contacts', isButton: true }
];

export default function Header() {
  return (
    <header className="site-header fixed left-0 top-[30px] w-full z-[100] text-right bg-white opacity-100 visible">
      <div className="head-top px-[65px] pt-[30px] pb-[15px]">
        <div className="logo">
          <a href="#section-home" aria-label="Taiwo.Dev home">
            Taiwo.Dev
          </a>
        </div>
        <div className="top-menu nav-panel">
          <ul className="anchor_nav nav-list">
            {MENU_ITEMS.map((item, index) => (
              <li
                key={item.href}
                className={`${index === 0 ? 'active ' : ''}inline-block align-top nav-item`}
              >
                <a
                  href={item.href}
                  className={item.isButton ? 'btn mt-0 nav-cta' : 'lnk block mt-[12px] nav-link'}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
