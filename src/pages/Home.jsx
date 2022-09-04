import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Dropdown from "../utils/Dropdown";
import TV from "../assets/img/tv1.png";
import Device from "../assets/img/device.png";
import Video1 from "../assets/img/trailer1.mp4";
import Video2 from "../assets/img/trailer2.mp4";
import Mobile from "../assets/img/mobile.jpg";
import Boxshot from "../assets/img/boxshot.png";
import Loading from "../assets/img/loading.gif";
import Kids from "../assets/img/kids.png";
import { MdChevronRight } from "react-icons/md";

const Home = () => {
  const faqs = [
    {
      title: "What is Netflix?",
      content:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial - all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    },
    {
      title: "How much does Netflix cost?",
      content:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from IDR54.000 to IDR186.000 a month. No extra costs, no contracts.",
    },
    {
      title: "Where can I watch?",
      content:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also donwload your favorite shows with the IOS, Android, or Windows 10 app. Use download to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      title: "How do I cancel?",
      content:
        "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation-fees. Start or stop your account anytime.",
    },
    {
      title: "What can I watch on Netflix?",
      content:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      title: "Is Netflix good for kids?",
      content:
        "The Netflix Kids experience is inluded in in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.",
    },
  ];

  return (
    <>
      <header className="flex flex-col gap-10 relative">
        <Navbar />
        <div className="content text-white text-center container mt-10">
          <h1 className="text-5xl mt-5">
            Unlimited movies, TV shows, and more.
          </h1>
          <h3 className="text-2xl font-light mt-4">
            Watch anywhere, Cancel anytime.
          </h3>
          <p className="mt-7 text-2xl">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form
            action=""
            className="flex justify-center mt-7 flex-wrap gap-5 md:gap-0"
          >
            <input
              type="email"
              name=""
              id=""
              placeholder="Email address"
              className="bg-white py-3 px-3 block rounded grow-1 block w-full max-w-md"
            />
            <button className="rounded py-3 px-6 text-white bg-red-700 border-none cursor-pointer text-lg flex items-center gap-3 grow-0">
              Get started <MdChevronRight className="w-7 h-7" />
            </button>
          </form>
        </div>
      </header>

      <section className="container text-center my-24 grid grid-cols-1 lg:grid-cols-2 items-center">
        <div>
          <h3 className="text-3xl mb-4">Enjoy on your TV.</h3>
          <p>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
            Blue-ray players, and more.
          </p>
        </div>
        <div className="image-preview">
          <video
            src={Video1}
            autoPlay
            muted
            loop
            style={{ width: "100%" }}
          ></video>
          <img src={TV} style={{ width: "100%" }} />
        </div>
      </section>

      <section className="container text-center my-24 grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
        <div className="flex flex-col order-2 lg:order-1">
          <img src={Mobile} style={{ width: "100%" }} className="block" />
          <div
            className="p-3 rounded-md flex items-center gap-6 w-2/3 mx-auto bg-black"
            style={{ border: "2px solid #555", marginTop: "-100px" }}
          >
            <img src={Boxshot} style={{ width: "50px" }} />
            <p>
              Stranger Things
              <br />
              <span className="text-blue-800">Downloading...</span>
            </p>
            <img
              src={Loading}
              style={{ width: "50px" }}
              className="block ml-auto"
            />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <h3 className="text-3xl mb-4">
            Download your shows to watch offline.
          </h3>
          <p>Share your favorites easily and always have something to watch.</p>
        </div>
      </section>

      <section className="container text-center my-24 grid grid-cols-1 lg:grid-cols-2 items-center">
        <div>
          <h3 className="text-3xl mb-4">Watch everywhere.</h3>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="image-preview">
          <video
            src={Video2}
            autoPlay
            muted
            loop
            style={{ width: "63%" }}
            className="mx-auto mt-12"
          ></video>
          <img src={Device} style={{ width: "100%" }} />
        </div>
      </section>

      <section className="container text-center my-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-4">
        <div className="order-1 lg:order-2">
          <h3 className="text-3xl">Create profiles for kids.</h3>
          <p>
            Send kids of adventures with their favorite character in a space
            made just for them--free with your membership.
          </p>
        </div>
        <div className="order-2 lg:order-1">
          <img src={Kids} style={{ width: "100%" }} />
        </div>
      </section>

      <section className="container my-24 mx-auto">
        <div>
          <h3 className="text-3xl mb-5 text-center">
            Frequently Asked Question
          </h3>
        </div>
        <div>
          {faqs.map((faq, index) => (
            <Dropdown key={index} title={faq.title} content={faq.content} />
          ))}
        </div>
      </section>

      <section className="container text-center my-24">
        <p className="mt-7 text-2xl">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form
          action=""
          className="flex justify-center mt-7 flex-wrap gap-5 md:gap-0"
        >
          <input
            type="email"
            name=""
            id=""
            placeholder="Email address"
            className="bg-white py-3 px-3 block rounded grow-1 block w-full max-w-md"
          />
          <button className="rounded py-3 px-6 text-white bg-red-700 border-none cursor-pointer text-lg flex items-center gap-3 grow-0">
            Get started <MdChevronRight className="w-7 h-7" />
          </button>
        </form>
      </section>

      <Footer />
    </>
  );
};

export default Home;
