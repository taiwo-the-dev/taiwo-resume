import SectionTitle from '../ui/SectionTitle';

const CLIENT_LOGOS = [
  '/assets/images/clients/client_1.png',
  '/assets/images/clients/client_2.png',
  '/assets/images/clients/client_3.png',
  '/assets/images/clients/client_1.png',
  '/assets/images/clients/client_2.png',
  '/assets/images/clients/client_3.png'
];

export default function ClientsSection() {
  return (
    <div className="section clients relative z-[97] px-[80px] pt-0 pb-[150px] opacity-100 visible">
      <div className="content relative">
        <SectionTitle title="Clients" />
        <div className="box-items relative overflow-hidden ml-[-3%]">
          {CLIENT_LOGOS.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="box-item w-[30.333333%] mt-0 mr-0 mb-[3%] ml-[3%] relative overflow-hidden text-center"
            >
              <div className="image relative">
                <a className="block text-[0]" target="_blank" rel="noreferrer" href="https://www.google.com/">
                  <img className="w-full h-auto relative top-0" src={src} alt="" />
                  <span className="info text-center w-full h-full block absolute left-0 top-0 opacity-0 p-[18px]">
                    <span className="centrize w-full max-w-full bg-extra-color">
                      <span className="vertical-center">
                        <span className="ion ion-link text-white text-[38px] inline-block" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="clear" />
      </div>
    </div>
  );
}
