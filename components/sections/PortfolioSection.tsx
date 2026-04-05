import SectionTitle from "../ui/SectionTitle";

type PortfolioItem = {
  image: string;
  href: string;
  alt: string;
};

const PORTFOLIO_ITEMS = [
  {
    image: "/assets/images/portfolio/portfolio1.png",
    href: "https://frontend-gpt4.vercel.app/",
    alt: "Portfolio item 1",
  },
  {
    image: "/assets/images/portfolio/portfolio2.png",
    href: "https://tenshub.vercel.app/",
    alt: "Portfolio item 2",
  },
  {
    image: "/assets/images/portfolio/portfolio3.png",
    href: "https://k7-restaurant.vercel.app/",
    alt: "Portfolio item 3",
  },
  {
    image: "/assets/images/portfolio/portfolio4.png",
    href: "https://adlspace-preview.netlify.app/",
    alt: "Portfolio item 4",
  },
  {
    image: "/assets/images/portfolio/portfolio5.png",
    href: "https://guard-preview.netlify.app/",
    alt: "Portfolio item 5",
  },
  {
    image: "/assets/images/portfolio/portfolio6.png",
    href: "https://gamblesol.vercel.app/",
    alt: "Portfolio item 6",
  },
] satisfies PortfolioItem[];

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
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {PORTFOLIO_ITEMS.map((item, index) => (
            <div
              key={`${item.image}-${index}`}
              className="box-item mt-0 mb-[3%] relative overflow-hidden text-center"
              style={{ width: "32%" }}
            >
              <div className="image relative">
                <a
                  className="block text-[0]"
                  target="_blank"
                  rel="noreferrer"
                  href={item.href}
                >
                  <img
                    className="w-full h-auto relative top-0"
                    src={item.image}
                    alt={item.alt}
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
