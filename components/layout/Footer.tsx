import SocialLinks from '../ui/SocialLinks';

export default function Footer() {
  return (
    <footer className="fixed bottom-[25px] left-0 px-[60px] pt-[15px] pb-[30px] w-full bg-white z-[100] opacity-100 visible">
      <div className="soc float-right">
        <SocialLinks />
      </div>
      <div className="copy float-left pt-[2px] text-[11px] text-[#999]">
        © 2026 Taiwo.Dev. All rights reserved.
      </div>
      <div className="clr" />
    </footer>
  );
}
