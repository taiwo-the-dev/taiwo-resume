import type { MouseEvent } from 'react';
import SectionTitle from '../ui/SectionTitle';

const CONTACT_ITEMS = [
  {
    icon: 'ion-android-phone-portrait',
    name: 'Phone',
    value: '+234-814-687-5904',
    extra: '+234-814-451-8276'
  },
  { icon: 'ion-email', name: 'Email', value: 'jtaiwo909@gmail.com', href: 'mailto:jtaiwo909@gmail.com' },
  {
    icon: 'ion-ios-location',
    name: 'Address',
    value: 'Ojurin Akobo Estate, Ibadan, Nigeria'
  },
  {
    icon: 'ion-social-linkedin',
    name: 'LinkedIn',
    value: 'linkedin.com/in/taiwo-john-a135441a7/',
    href: 'https://www.linkedin.com/in/taiwo-john-a135441a7/'
  },
  {
    icon: 'ion-social-github',
    name: 'GitHub',
    value: 'github.com/taiwo-the-dev/',
    href: 'https://github.com/taiwo-the-dev/'
  },
  {
    icon: 'ion-social-twitter',
    name: 'Twitter',
    value: 'twitter.com/taiwo_the_dev',
    href: 'https://twitter.com/taiwo_the_dev'
  }
];

export default function ContactsSection() {
  const onSubmitClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const jquery = (globalThis as any).$;
    if (jquery) {
      jquery('#cform').submit();
    }
  };

  return (
    <div
      className="section contacts relative z-[97] px-[80px] pt-0 pb-[150px] opacity-100 visible"
      id="section-contacts"
    >
      <div className="content relative">
        <SectionTitle title="Contacts" className="mb-0" />
        <div className="service-items">
          {CONTACT_ITEMS.map((item) => (
            <div
              key={item.name}
              className="service-item inline-block align-top w-[28%] mt-[50px] mr-[4%] mb-0 ml-0 text-left"
            >
              <div className="icon float-left w-[36px] text-center text-[30px] text-extra-color">
                <span className={`ion ${item.icon} block`} />
              </div>
              <div className="name font-medium text-[13px] text-[#141414] mt-[6px] mr-0 mb-0 ml-[46px]">
                {item.name}
              </div>
              <p className="!mt-[20px] !mb-0">
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
                {item.extra ? (
                  <>
                    <br />
                    {item.extra}
                  </>
                ) : null}
              </p>
            </div>
          ))}
        </div>

        <div className="contact_form mt-[30px]">
          <form id="cform" method="post">
            <div className="group-val">
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="group-val">
              <input type="text" name="email" placeholder="Email" />
            </div>
            <div className="group-val ct-gr">
              <textarea className="!mt-[55px]" name="message" placeholder="Message" defaultValue="" />
            </div>
            <a href="#" className="btn fill" onClick={onSubmitClick} data-text="Send Message">
              Send Message
            </a>
          </form>
          <div className="alert-success">
            <p>Thanks, your message is sent successfully. We will contact you shortly!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
