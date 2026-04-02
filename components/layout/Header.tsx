const MENU_ITEMS = [
  { href: '#section-home', label: 'Home', isButton: false },
  { href: '#section-resume', label: 'Resume', isButton: false },
  { href: '#section-portfolio', label: 'Portfolio', isButton: false },
  { href: '#section-blog', label: 'Blog', isButton: false },
  { href: '#section-contacts', label: 'Contacts', isButton: true }
];

export default function Header() {
  return (
    <header className="fixed left-0 top-[30px] w-full z-[100] text-right bg-white opacity-100 visible">
      <div className="head-top px-[65px] pt-[30px] pb-[15px]">
        <div className="logo">
          <a href="#section-home" aria-label="Taiwo.Dev home">
            Taiwo.Dev
          </a>
        </div>
        <div className="top-menu">
          <ul className="anchor_nav">
            {MENU_ITEMS.map((item, index) => (
              <li
                key={item.href}
                className={`${index === 0 ? 'active ' : ''}ml-[50px] inline-block align-top`}
              >
                <a href={item.href} className={item.isButton ? 'btn mt-0' : 'lnk block mt-[12px]'}>
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
