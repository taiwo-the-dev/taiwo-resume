import SectionTitle from "../ui/SectionTitle";

const PORTFOLIO_ITEMS = [
  "/assets/images/portfolio/portfolio1.png",
  "/assets/images/portfolio/portfolio2.png",
  "/assets/images/portfolio/portfolio3.png",
  "/assets/images/portfolio/portfolio4.png",
  "/assets/images/portfolio/portfolio5.png",
  "/assets/images/portfolio/portfolio6.png",
];

export default function PortfolioSection() {
  return (
    <div
      className="section portfolio relative z-[97] px-[80px] pt-0 pb-[150px] opacity-100 visible"
      id="section-portfolio"
    >
      <div className="content relative">
        <SectionTitle title="My Portfolio" />
        <div
          className="box-items relative"
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}
        >
          {PORTFOLIO_ITEMS.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="box-item mt-0 mb-[3%] relative overflow-hidden text-center"
              style={{ width: "32%" }}
            >
              <div className="image relative">
                <a
                  className="block text-[0]"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.google.com/"
                >
                  <img
                    className="w-full h-auto relative top-0"
                    src={src}
                    alt=""
                  />
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
