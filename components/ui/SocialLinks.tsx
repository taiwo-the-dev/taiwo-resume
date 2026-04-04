const SOCIAL_LINKS = [
  { href: 'https://www.linkedin.com/in/taiwo-john-a135441a7/', icon: 'ion-social-linkedin' },
  { href: 'https://github.com/taiwo-the-dev/', icon: 'ion-social-github' },
  { href: 'https://twitter.com/taiwo_the_dev', icon: 'ion-social-twitter' },
  { href: 'https://wa.me/2348144518276', icon: 'ion-social-whatsapp' },
  { href: 'mailto:jtaiwo909@gmail.com', icon: 'ion-email' }
];

export default function SocialLinks() {
  return (
    <>
      {SOCIAL_LINKS.map((item) => (
        <a
          key={item.icon}
          className="inline-block align-middle ml-[12px]"
          target="_blank"
          rel="noreferrer"
          href={item.href}
        >
          <span className={`ion ${item.icon} text-[17px] text-[#363636]`} />
        </a>
      ))}
    </>
  );
}
