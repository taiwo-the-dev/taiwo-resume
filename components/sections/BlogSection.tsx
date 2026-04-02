import SectionTitle from '../ui/SectionTitle';

const BLOG_IMAGES = [
  '/assets/images/works/work1.jpg',
  '/assets/images/works/work2.jpg',
  '/assets/images/works/work3.jpg',
  '/assets/images/works/work4.jpg',
  '/assets/images/works/work5.jpg',
  '/assets/images/works/work7.jpg'
];

export default function BlogSection() {
  return (
    <div
      className="section blog relative z-[97] px-[80px] pt-0 pb-[150px] opacity-100 visible"
      id="section-blog"
    >
      <div className="content relative">
        <SectionTitle title="Latest Posts" />
        <div className="box-items relative overflow-hidden ml-[-3%]">
          {BLOG_IMAGES.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="box-item w-[30.333333%] mt-0 mr-0 mb-[3%] ml-[3%] relative overflow-hidden text-center"
            >
              <div className="image relative">
                <a className="block text-[0]" href="#section-blog">
                  <img className="w-full h-auto relative top-0" src={image} alt="" />
                  <span className="info text-center w-full h-full block absolute left-0 top-0 opacity-0 p-[18px]">
                    <span className="centrize w-full max-w-full bg-extra-color">
                      <span className="vertical-center">
                        <span className="ion ion-ios-book-outline text-white text-[28px] inline-block" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc relative pt-[15px] pb-[5px] px-[45px]">
                <div className="date mt-0 mx-0 mb-[10px] inline-block py-0 px-[5px] h-[20px] leading-[18px] font-medium text-[11px] text-extra-color border-solid border-extra-color border">
                  02 Feb 2023
                </div>
                <a
                  href="#section-blog"
                  className="name h-[40px] block text-[#363636] text-[13px] font-bold uppercase"
                >
                  Designing the perfect notification UX
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
