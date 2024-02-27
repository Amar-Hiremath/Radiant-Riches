import React from "react";
import "../styles/Page.css";
import { PiCheckCircleLight } from "react-icons/pi";
import { PiInfoLight } from "react-icons/pi";
import { GoChevronDown } from "react-icons/go";
import { PiCaretRightLight } from "react-icons/pi";
import data from "./data/data";
function Page() {
  return (
    <div className="page">
      <h1>Best Website builders in the US</h1>
      <hr />
      <div className="flex-box">
        <div className="flex-box-1">
          <div className="flex-p">
            <PiCheckCircleLight className="react-icons" size={20} />
            <p>Last Updated - February 22, 2020</p>
          </div>
          <div className="flex-p">
            <PiInfoLight className="react-icons" size={20} />
            <p>Advertising Disclosure</p>
          </div>
        </div>
        <div>
          <div className="flex-p">
            <p>Top Relevant</p>
            <GoChevronDown className="react-icons" size={20} />
          </div>
        </div>
      </div>
      <hr />
      <div className="links">
        <div className="link">
          <a>Tools</a>
        </div>
        <div className="link">
          <a>AWS Builder</a>
        </div>
        <div className="link">
          <a>Start Build</a>
        </div>
        <div className="link">
          <a>Build Supplies</a>
        </div>
        <div className="link">
          <a>Tooling</a>
        </div>
        <div className="link">
          <a>BlueHosting</a>
        </div>
      </div>
      <div className="nav">
        <div className="nav-link">
          <a>Home</a>
          <PiCaretRightLight className="react-icon" />
        </div>
        <div className="nav-link">
          <a>Hosting for all</a>
          <PiCaretRightLight className="react-icon" />
        </div>
        <div className="nav-link">
          <a>Hosting</a>
          <PiCaretRightLight className="react-icon" />
        </div>
        <div className="nav-link">
          <a>Hosting6</a>
          <PiCaretRightLight className="react-icon" />
        </div>
        <div className="nav-link">
          <a>Hosting5</a>
        </div>
      </div>
      <div className="Cards">
        {data.map((card, index) => (
          <div  className="card" key={index}>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
