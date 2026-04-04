import SectionTitle from "../ui/SectionTitle";

const SERVICES = [
  {
    icon: "ion-laptop",
    name: "Frontend Development",
    description:
      "I build responsive, production-ready interfaces from Figma and product requirements.",
  },
  {
    icon: "ion-code-working",
    name: "Backend API Development",
    description:
      "I develop secure, scalable APIs with clean architecture and integration-ready endpoints.",
  },
  {
    icon: "ion-ipad",
    name: "Mobile App Development",
    description:
      "I ship cross-platform app features with smooth UX, reusable components, and solid performance.",
  },
  {
    icon: "ion-monitor",
    name: "CMS Development",
    description:
      "I build and maintain WordPress and Shopify sites with reliable e-commerce functionality.",
  },
  {
    icon: "ion-social-javascript",
    name: "JavaScript Solutions",
    description:
      "I deliver end-to-end web and mobile products using modern JavaScript across the stack.",
  },
  {
    icon: "ion-wrench",
    name: "Maintenance & Bug Fixing",
    description:
      "I improve existing apps through debugging, performance tuning, and practical feature upgrades.",
  },
];

export default function ServiceSection() {
  return (
    <div className="section service relative z-[97] px-[80px] pt-0 pb-[150px] opacity-100 visible">
      <div className="content relative">
        <SectionTitle title="Services" className="mb-0" />
        <div className="service-items">
          {SERVICES.map((item) => (
            <div
              key={item.name}
              className="service-item inline-block align-top w-[28%] mt-[50px] mr-[4%] mb-0 ml-0"
            >
              <div className="flex items-center">
                <div className="icon w-[36px] h-[36px] text-center text-[30px] text-extra-color leading-[36px] shrink-0">
                  <span className={`ion ${item.icon} block leading-[36px]`} />
                </div>
                <div className="name font-medium text-[13px] text-[#141414] mt-0 mr-0 mb-0 ml-[10px]">
                  {item.name}
                </div>
              </div>
              <p className="!mb-0">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
