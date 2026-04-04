import type { MouseEvent } from 'react';
import SectionTitle from '../ui/SectionTitle';

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
