type SectionTitleProps = {
  title: string;
  className?: string;
};

export default function SectionTitle({ title, className = '' }: SectionTitleProps) {
  return (
    <div className={`title relative mb-[40px] ${className}`.trim()}>
      <div className="title_inner inline-block align-middle text-center relative leading-[18px] text-[13px] text-[#141414] uppercase tracking-[0.04em]">
        {title}
      </div>
    </div>
  );
}
