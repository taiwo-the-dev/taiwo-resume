import SectionTitle from "../ui/SectionTitle";

type ResumeItem = {
  date: string;
  name: string;
  description: string;
};

const EXPERIENCE_ITEMS: ResumeItem[] = [
  {
    date: "September 2020 - October 2021",
    name: "Web Development Intern - SQI Academy ICT",
    description:
      "Converted mock designs into code, translated Figma designs into CSS, and developed web applications with engaging user interfaces.",
  },
  {
    date: "October 2021 - November 2022",
    name: "Web Designer - Regnant Digital",
    description:
      "Converted UI/UX designs into production sites, built WordPress and Shopify websites, created ecommerce experiences, and handled troubleshooting and maintenance.",
  },
  {
    date: "February - July",
    name: "React Native Developer - Finaive",
    description:
      "Built and shipped mobile app features with React Native, improved usability, and worked closely with product and design to deliver smooth user flows.",
  },
];

const EXPERIENCE_ITEMS2: ResumeItem[] = [
  {
    date: "August - December",
    name: "Backend Developer (NestJS & AWS) - Reni AI",
    description:
      "Developed backend services using NestJS, built secure API endpoints, and used AWS services for deployment, storage, and production reliability.",
  },
  {
    date: "February - Present",
    name: "React Native Developer - Ditrop",
    description:
      "Currently building and maintaining React Native features, improving performance, and integrating mobile workflows with backend services.",
  },
];

function ResumeColumn({
  title,
  items,
}: {
  title?: string;
  items: ResumeItem[];
}) {
  return (
    <div className="col col-md">
      <SectionTitle title={title} />
      <div className="resume-items">
        {items.map((item, index) => (
          <div
            key={`${item.name}-${item.date}`}
            className={`resume-item active relative px-[30px] pt-0 ${index < items.length - 1 ? "pb-[60px]" : ""}`}
          >
            <div className="date relative top-[-10px] mx-0 mt-0 mb-[5px] inline-block py-0 px-[5px] h-[20px] leading-[18px] font-medium text-[11px] text-extra-color border-solid border-extra-color border">
              {item.date}
            </div>
            <div className="name font-medium text-[#141414] mx-0 mt-0 mb-[15px]">
              {item.name}
            </div>
            <p className="!m-0">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ResumeSection() {
  return (
    <div className="section resume relative z-[97] px-[80px] pt-0 pb-[150px] opacity-100 visible">
      <div className="content relative">
        <div className="cols">
          <ResumeColumn title="Experience" items={EXPERIENCE_ITEMS} />
          <ResumeColumn items={EXPERIENCE_ITEMS2} />
        </div>
      </div>
    </div>
  );
}
