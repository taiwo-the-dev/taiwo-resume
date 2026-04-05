import SectionTitle from "../ui/SectionTitle";

const DESIGN_SKILLS = [
  { name: "Frontend Development (React.js)", value: "90%" },
  { name: "Backend Development (JavaScript/Java)", value: "86%" },
  { name: "Mobile App Development (React Native)", value: "84%" },
  { name: "Software Development (JavaScript/Java)", value: "88%" },
];

const LANGUAGE_SKILLS = [
  { name: "Backend Development", value: "85%" },
  { name: "Mobile App Development", value: "82%" },
  { name: "JavaScript Software Development", value: "93%" },
  { name: "Java Development", value: "58%" },
];

const CODING_SKILLS = [
  { name: "JavaScript / TypeScript", value: "93%", className: "p93" },
  { name: "Node.js Backend", value: "85%", className: "p85" },
  { name: "React Native", value: "82%", className: "p82" },
  { name: "Java", value: "58%", className: "p58" },
];

const KNOWLEDGE_ITEMS = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React.js",
  "Next.js",
  "Redux Toolkit",
  "Tailwind CSS",
  "HTML5 & CSS3",
  "Node.js",
  "NestJS",
  "Express.js",
  "REST APIs",
  "React Native",
  "Expo",
  "MongoDB",
  "AWS (EC2/S3)",
  "Java (Core)",
  "Spring Boot",
  "Spring Data JPA",
  "Hibernate ORM",
  "MySQL / PostgreSQL",
  "Git & GitHub",
];

function DesignSkillsSection() {
  return (
    <div className="section skills relative z-[97] px-[80px] pt-0 pb-[150px] opacity-100 visible">
      <div className="content relative">
        <SectionTitle title="Core Focus Areas" />
        <div className="skills">
          <ul className="m-0 p-0 list-none">
            {DESIGN_SKILLS.map((item, index) => (
              <li
                key={item.name}
                className={`px-0 pt-0 ${index < DESIGN_SKILLS.length - 1 ? "pb-[30px]" : ""}`}
              >
                <div className="name text-[13px] text-[#363636] font-normal relative mx-0 mt-0 mb-[9px]">
                  {item.name}
                </div>
                <div className="progress block h-[3px] relative w-full bg-[#ddd]">
                  <div
                    className="percentage left-0 top-0 absolute h-[3px] w-[0%] bg-extra-color"
                    style={{ width: item.value }}
                  >
                    <span className="percent absolute top-[-27px] right-0 text-[13px] text-[#363636] font-normal">
                      {item.value}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function LanguageSkillsSection() {
  return (
    <div className="section skills relative z-[97] px-[80px] pt-0 pb-[150px] opacity-100 visible">
      <div className="content">
        <SectionTitle title="Core Focus Areas" />
        <div className="skills dotted">
          <ul className="mx-[-30px] list-none text-[0]">
            {LANGUAGE_SKILLS.map((item, index) => (
              <li
                key={item.name}
                className={`relative px-[30px] w-1/2 inline-block align-top ${index < 2 ? "pb-[30px]" : ""}`}
              >
                <div className="name text-[#363636] text-[13px] font-normal relative mx-0 mt-0 mb-[9px]">
                  {item.name}
                </div>
                <div className="progress h-[14px] !bg-transparent block relative w-full">
                  <div
                    className="percentage relative overflow-hidden top-0 h-[14px] !bg-transparent z-[2] left-0"
                    style={{ width: item.value }}
                  >
                    <span className="percent">{item.value}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function CodingSkillsSection() {
  return (
    <div className="section skills relative z-[97] px-[80px] pt-0 pb-[150px] opacity-100 visible">
      <div className="content relative">
        <SectionTitle title="Coding Skills" />
        <div className="skills circles">
          <ul className="list-none p-0 mx-0 mb-0 mt-[-30px]">
            {CODING_SKILLS.map((item) => (
              <li
                key={item.name}
                className="mt-[30px] pb-[40px] inline-block align-top w-[20%] relative"
              >
                <div className="name absolute top-[115px] left-0 w-[90px] text-center font-normal text-[13px] mb-[9px] text-[#363636]">
                  {item.name}
                </div>
                <div
                  className={`progress ${item.className} m-0 relative text-[90px] w-[90px] h-[90px] rounded-[90px] bg-[#ddd] block`}
                >
                  <div className="percentage" style={{ width: item.value }}>
                    <span className="percent">{item.value}</span>
                  </div>
                  <span className="absolute left-0 top-0 w-full h-full leading-[90px] text-[17px] text-center whitespace-nowrap z-[2]">
                    {item.value}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function KnowledgeSkillsSection() {
  return (
    <div className="section skills relative z-[97] px-[80px] pt-0 pb-[150px] opacity-100 visible">
      <div className="content">
        <SectionTitle title="Knowledge" />
        <div className="skills list">
          <ul className="p-0 list-none text-[0] my-0 mx-[-30px]">
            {KNOWLEDGE_ITEMS.map((item) => (
              <li
                key={item}
                className="knowledge-item relative pt-0 pb-[10px] px-[30px] inline-block align-top"
              >
                <div className="name pl-[23px] relative text-[13px] font-normal mt-0 mx-0 mb-[9px] text-[#363636]">
                  {item}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function SkillsSectionGroup() {
  return (
    <>
      <DesignSkillsSection />
      <KnowledgeSkillsSection />
    </>
  );
}
