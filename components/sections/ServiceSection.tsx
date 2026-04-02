import SectionTitle from '../ui/SectionTitle';

const SERVICES = [
  {
    icon: 'ion-social-html5',
    name: 'Web Design',
    description: 'Design-to-code delivery with clean, responsive, and production-ready UI.'
  },
  {
    icon: 'ion-code',
    name: 'Backend Development',
    description: 'Node.js API development, integration logic, and maintainable service architecture.'
  },
  {
    icon: 'ion-ipad',
    name: 'React Native Apps',
    description: 'Cross-platform mobile app experiences with reusable components and smooth UX.'
  },
  {
    icon: 'ion-social-javascript',
    name: 'JavaScript Engineering',
    description: 'Feature implementation across frontend and backend with strong JS foundations.'
  },
  {
    icon: 'ion-monitor',
    name: 'CMS Development',
    description: 'WordPress and Shopify builds, debugging, and e-commerce setup support.'
  },
  {
    icon: 'ion-university',
    name: 'Java Upskilling',
    description: 'Actively building Java knowledge to strengthen backend and software depth.'
  }
];

export default function ServiceSection() {
  return (
    <div className="section service relative z-[97] px-[80px] pt-0 pb-[150px] opacity-100 visible">
      <div className="content relative">
        <SectionTitle title="Services" className="mb-0" />
        <div className="service-items">
          {SERVICES.map((item) => (
            <div key={item.name} className="service-item inline-block align-top w-[28%] mt-[50px] mr-[4%] mb-0 ml-0">
              <div className="icon float-left w-[36px] text-center text-[30px] text-extra-color">
                <span className={`ion ${item.icon} block`} />
              </div>
              <div className="name font-medium text-[13px] text-[#141414] mt-[6px] mr-0 mb-0 ml-[46px]">
                {item.name}
              </div>
              <p className="!mb-0">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
