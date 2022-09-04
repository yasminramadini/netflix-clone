import React from "react";
import { MdLanguage } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="container mt-24 text-gray-600 py-20">
      <p>Question? Call 007-803-321-2130</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <ul className="list-none mt-5">
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Investor Realtions</a>
          </li>
          <li>
            <a href="#">Ways to Watch</a>
          </li>
          <li>
            <a href="#">Corporate Information</a>
          </li>
          <li>
            <a href="#">Only on Netflix</a>
          </li>
        </ul>
        <ul className="list-none mt-5">
          <li>
            <a href="#">Help Cneter</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <ul className="list-none mt-5">
          <li>
            <a href="#">Account</a>
          </li>
          <li>
            <a href="#">Reedem Gift Cards</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Speed Test</a>
          </li>
        </ul>
        <ul className="list-none mt-5">
          <li>
            <a href="#">Media Center</a>
          </li>
          <li>
            <a href="#">Buy Gift Cards</a>
          </li>
          <li>
            <a href="#">Cookie Preferences</a>
          </li>
          <li>
            <a href="#">Legal Noticies</a>
          </li>
        </ul>
      </div>
      <div className="inline-block">
        <div className="select-language border-2 border-white px-3 py-2 rounded flex items-center gap-1 mt-7">
          <MdLanguage className="text-white w-5 h-5" />
          <select
            name=""
            id=""
            className="bg-transparent text-white border-none cursor-pointer"
          >
            <option>English</option>
            <option>Bahasa Indonesia</option>
          </select>
        </div>
      </div>
      <p className="mt-4">Netflix Indonesia</p>
    </footer>
  );
};

export default Footer;
