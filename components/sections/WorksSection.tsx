import SectionTitle from '../ui/SectionTitle';

type WorkFilter = {
  label: string;
  value: string;
  active?: boolean;
};

type WorkItem = {
  typeClass: string;
  link: string;
  image: string;
  iconClass: string;
  category: string;
  title: string;
  linkClass: string;
  galleryId?: string;
  galleryImages?: string[];
};

const WORK_FILTERS: WorkFilter[] = [
  { label: 'All', value: '.box-item', active: true },
  { label: 'Video', value: '.f-video' },
  { label: 'Music', value: '.f-music' },
  { label: 'Links', value: '.f-links' },
  { label: 'Image', value: '.f-image' },
  { label: 'Gallery', value: '.f-gallery' }
];

const WORK_ITEMS: WorkItem[] = [
  {
    typeClass: 'f-gallery',
    link: '#gallery-1',
    image: '/assets/images/works/work1.jpg',
    iconClass: 'ion-images',
    category: 'Gallery',
    title: 'Canvas Tote Bag',
    linkClass: 'has-popup-gallery',
    galleryId: 'gallery-1',
    galleryImages: [
      '/assets/images/works/work1.jpg',
      '/assets/images/works/work2.jpg',
      '/assets/images/works/work3.jpg',
      '/assets/images/works/work4.jpg'
    ]
  },
  {
    typeClass: 'f-video',
    link: 'https://youtu.be/S4L8T2kFFck',
    image: '/assets/images/works/work2.jpg',
    iconClass: 'ion-videocamera',
    category: 'Video',
    title: 'Coffee Cup In Hand',
    linkClass: 'has-popup-video'
  },
  {
    typeClass: 'f-links',
    link: 'https://themeforest.net/user/marketify',
    image: '/assets/images/works/work8.jpg',
    iconClass: 'ion-link',
    category: 'Links',
    title: 'Love & Care Ceramic',
    linkClass: 'has-popup-link'
  },
  {
    typeClass: 'f-image',
    link: '/assets/images/works/work4.jpg',
    image: '/assets/images/works/work4.jpg',
    iconClass: 'ion-image',
    category: 'Image',
    title: 'Shopping gift bag',
    linkClass: 'has-popup-image'
  },
  {
    typeClass: 'f-music',
    link: 'https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F221650664&show_artwork=true',
    image: '/assets/images/works/work6.jpg',
    iconClass: 'ion-music-note',
    category: 'Music',
    title: 'Marta Veludo Poster',
    linkClass: 'has-popup-music'
  },
  {
    typeClass: 'f-image',
    link: '/assets/images/works/work3.jpg',
    image: '/assets/images/works/work3.jpg',
    iconClass: 'ion-image',
    category: 'Image',
    title: 'Mockup Cream',
    linkClass: 'has-popup-image'
  }
];

export default function WorksSection() {
  return (
    <div
      className="section works relative z-[97] px-[80px] pt-0 pb-[150px] opacity-100 visible"
      id="section-portfolio"
    >
      <div className="content relative">
        <SectionTitle title="Recent Works" />
        <div className="filter-menu">
          <div className="filters mb-[30px]">
            {WORK_FILTERS.map((filter) => (
              <div key={filter.label} className="btn-group inline-block align-top">
                <label
                  data-text={filter.label}
                  className={`${filter.active ? 'glitch-effect ' : ''}inline-block align-top mr-[25px] text-[13px] text-[#363636] cursor-pointer relative pb-0`}
                >
                  <input className="!hidden" type="radio" name="fl_radio" defaultValue={filter.value} />
                  {filter.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="box-items portfolio-items relative overflow-hidden ml-[-3%]">
          {WORK_ITEMS.map((item) => (
            <div
              key={`${item.title}-${item.typeClass}`}
              className={`box-item ${item.typeClass} w-[30.333333%] mt-0 mr-0 mb-[3%] ml-[3%] relative overflow-hidden text-center`}
            >
              <div className="image relative">
                <a href={item.link} className={`${item.linkClass} block text-[0]`}>
                  <img className="w-full h-auto relative top-0" src={item.image} alt="" />
                  <span className="info text-center w-full h-full block absolute left-0 top-0 opacity-0 p-[18px]">
                    <span className="centrize w-full max-w-full bg-extra-color">
                      <span className="vertical-center">
                        <span className={`ion ${item.iconClass} text-white text-[28px] inline-block`} />
                      </span>
                    </span>
                  </span>
                </a>

                {item.galleryId && item.galleryImages ? (
                  <div id={item.galleryId} className="mfp-hide">
                    {item.galleryImages.map((galleryImage) => (
                      <a key={galleryImage} className="block text-[0]" href={galleryImage} />
                    ))}
                  </div>
                ) : null}
              </div>
              <div className="desc relative pt-[15px] pb-[5px] px-[45px]">
                <div className="category mt-0 mx-0 mb-[10px] inline-block text-[11px] text-[#363636] uppercase tracking-[0.04em]">
                  {item.category}
                </div>
                <a href={item.link} className={`name ${item.linkClass} h-[40px] block text-[#363636] text-[13px] font-bold uppercase`}>
                  {item.title}
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
