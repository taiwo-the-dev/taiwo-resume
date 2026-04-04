export default function HeroSection() {
  return (
    <div
      className="section started relative z-[97] opacity-100 visible text-center p-0 m-0"
      id="section-home"
    >
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="started-content inline-block align-middle text-center relative">
            <div
              className="h-title text-[68px] font-roboto text-[#141414] font-bold uppercase tracking-[0.04em] mx-0 mt-[10px] mb-[5px] glitch-effect"
              data-text="I'm John Taiwo"
            >
              I&apos;m <span>John Taiwo</span>
            </div>
            <div className="h-subtitle text-[13px] typing-subtitle">
              <p>JavaScript Software Developer.</p>
              <p>Frontend, Backend & Mobile Developer.</p>
              <p>Based in Ibadan, Nigeria.</p>
            </div>
            <span className="typed-subtitle text-[13px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
