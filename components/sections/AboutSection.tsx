import SectionTitle from "../ui/SectionTitle";

export default function AboutSection() {
  return (
    <div
      className="section about relative z-[97] px-[80px] pt-0 pb-[150px] opacity-100 visible"
      id="section-resume"
    >
      <div className="content relative">
        <SectionTitle title="About Me" />
        <div className="desc">
          <p>
            I am an innovative software developer and IT professional with
            experience building practical software solutions that help
            entrepreneurs and streamline project workflows. I focus on
            delivering clear user experiences on the web, robust backend
            functionality, and mobile app experiences with React Native.
          </p>
          <p>
            I am highly organized across the full development lifecycle and
            especially interested in fintech products where performance,
            usability, and reliability matter.
          </p>
          <div className="info-list mb-[42px]">
            <ul>
              <li className="inline-block align-top w-[32%] mt-[12px] mb-0 mx-0">
                <strong className="font-normal text-extra-color">Name:</strong>{" "}
                John Taiwo
              </li>
              <li className="inline-block align-top w-[32%] mt-[12px] mb-0 mx-0">
                <strong className="font-normal text-extra-color">Role:</strong>{" "}
                Software Developer
              </li>
              <li className="inline-block align-top w-[32%] mt-[12px] mb-0 mx-0">
                <strong className="font-normal text-extra-color">Focus:</strong>{" "}
                JavaScript / Java
              </li>
              <li className="inline-block align-top w-[32%] mt-[12px] mb-0 mx-0">
                <strong className="font-normal text-extra-color">
                  Location:
                </strong>{" "}
                Ibadan, Nigeria
              </li>
              <li className="inline-block align-top w-[32%] mt-[12px] mb-0 mx-0">
                <strong className="font-normal text-extra-color">Phone:</strong>{" "}
                +234-814-687-5904
              </li>
              <li className="inline-block align-top w-[32%] mt-[12px] mb-0 mx-0">
                <strong className="font-normal text-extra-color">
                  E-mail:
                </strong>{" "}
                jtaiwo909@gmail.com
              </li>
              <li className="inline-block align-top w-full mt-[12px] mb-0 mx-0">
                <strong className="font-normal text-extra-color">
                  Education:
                </strong>{" "}
                BSC in Industrial Technology, Federal University of Technology
                Minna, Nigeria (2025)
              </li>
            </ul>
          </div>
          <div className="bts">
            <a
              href="/assets/docs/John-Taiwo-Resume.pdf"
              className="btn fill"
              data-text="Download CV"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
}
