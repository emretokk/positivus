import Navbar from "./components/Navbar";
import megaphone from "./assets/megaphone.svg";
import amazon from "./assets/amazon.svg";
import dribble from "./assets/dribble.svg";
import hubspot from "./assets/hubspot.svg";
import notion from "./assets/notion.svg";
import netflix from "./assets/netflix.svg";
import zoom from "./assets/zoom.svg";
import arr1 from "./assets/arr1.svg";
import arr2 from "./assets/arr2.svg";
import il1 from "./assets/il1.png";
import il2 from "./assets/il2.png";
import il3 from "./assets/il3.png";
import il4 from "./assets/il4.png";
import il5 from "./assets/il5.png";
import il6 from "./assets/il6.png";
import cta from "./assets/cta.png";

function ServiceCard(props) {
  return (
    <div
      className={`flex h-[300px] w-full items-center justify-center p-6 ${props.color} rounded-[3rem] border border-b-4 border-dark`}
    >
      <div className="flex h-full w-full flex-col justify-around">
        <div>
          <p className="inline text-wrap rounded-3xl bg-primary p-1 font-bold">
            {props.text}
          </p>
        </div>
        <div className="flex items-center">
          <img src={props.ico} alt="arrow icon" />
          <p className="ml-4 text-base">Learn more</p>
        </div>
      </div>
      <div className="w-full">
        <img src={props.il} alt="illustration" />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="space-grotesk">
      <Navbar />
      <div className="mt-32 w-full bg-white px-28 text-2xl">
        {/* Hero Section */}
        <div className="flex items-center py-8">
          <div>
            <h1 className="text-5xl font-medium leading-none md:text-6xl">
              Navigating the <br /> digital landscape <br /> for success
            </h1>
            <p className="my-4 text-xl font-normal leading-7">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <button className="inline-flex justify-items-center gap-2.5 rounded-2xl border border-black bg-zinc-900 px-9 py-5 text-white hover:bg-white hover:text-black md:justify-items-start">
              Book a consultation
            </button>
          </div>
          <img src={megaphone} alt="megafon" />
        </div>
        {/* Logotypes */}
        <div className="mt-24 flex justify-between">
          <img src={amazon} alt="amazon" />
          <img src={dribble} alt="dribble" />
          <img src={hubspot} alt="hubspot" />
          <img src={notion} alt="notion" />
          <img src={netflix} alt="netflix" />
          <img src={zoom} alt="zoom" />
        </div>
        {/* Services Heading */}
        <div className="mt-24 flex items-center">
          <div className="rounded bg-primary p-2 text-3xl font-bold">
            Services
          </div>
          <p className="ml-12 w-[500px] text-sm">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>
        {/* Services block */}
        <div className="mt-24 grid grid-cols-2 gap-4">
          <ServiceCard
            color={"bg-light"}
            ico={arr1}
            il={il1}
            text={"Search Engine Optimization"}
          />
          <ServiceCard
            color={"bg-primary"}
            ico={arr1}
            il={il2}
            text={"Pay-per-click advertising"}
          />
          <ServiceCard
            color={"bg-dark"}
            ico={arr2}
            il={il3}
            text={"Social Media Marketing"}
          />
          <ServiceCard
            color={"bg-light"}
            ico={arr1}
            il={il4}
            text={"E-Mail Marketing"}
          />
          <ServiceCard
            color={"bg-primary"}
            ico={arr1}
            il={il5}
            text={"Content Creation"}
          />
          <ServiceCard
            color={"bg-dark"}
            ico={arr2}
            il={il6}
            text={"Analytics and Tracking"}
          />
        </div>
        {/* CTA block */}
        <div className="relative mt-24 flex h-[400px] items-center">
          <div className="flex h-[350px] w-full flex-col justify-center rounded-3xl bg-light text-sm">
            <div className="flex h-fit w-[500px] flex-col gap-10 pl-14">
              <h3 className="text-xl font-bold">
                {"Let's make things happen"}
              </h3>
              <p className="text-base">
                Contact us today to learn more about how our digital marketing
                services can help your business grow and succeed online.
              </p>
              <button className="w-fit rounded-2xl bg-dark p-4 px-8 text-light">
                Get your free proposal
              </button>
            </div>
          </div>
          <img src={cta} alt="cta" className="absolute right-0 basis-1/3" />
        </div>
      </div>
    </div>
  );
}

export default App;
