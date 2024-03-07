import React from "react";
import "../styles/Page.css";
import { PiCheckCircleLight } from "react-icons/pi";
import { PiInfoLight } from "react-icons/pi";
import { GoChevronDown } from "react-icons/go";
import { PiCaretRightLight } from "react-icons/pi";
import { GiTrophyCup } from "react-icons/gi";
import { IoDiamondOutline } from "react-icons/io5";
import { SlInfo } from "react-icons/sl";
import { cardsData, biscuitCard } from "./data/data";

import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

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
            <SlInfo className="react-icons" size={16} />
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
      <div className="cards">
        {cardsData.map((card, index) => (
          <div className="card" key={index}>
            <div className="left-div">
              {card.tag.present === true ? (
                <div>
                  {card.tag.title === "Best Choice" ? (
                    <div className="card-tag">
                      <GiTrophyCup size={20} />
                      <p>{card.tag.title}</p>
                    </div>
                  ) : null}
                  {card.tag.title === "Best Value" ? (
                    <div className="card-tag">
                      <IoDiamondOutline size={20} />
                      {card.tag.title}
                    </div>
                  ) : null}
                </div>
              ) : null}

              <div className="srNo">{index + 1}</div>

              <div className="image-section">
                <img src={card.img} />
                <p>{card.name}</p>
              </div>
            </div>

            {/* middle section  */}

            <div className="middle-div">
              <div className="upper-section">
                <span className="productName">
                  <span>{card.productName}</span>
                  {card.productDescription}
                </span>
                {card.offer ? <div className="offer">{card.offer}</div> : null}
              </div>
              <div className="lower-section">
                <span className="highlight-heading">
                  {card.highlights.heading}
                </span>
                {card.feedback ? (
                  <div className="feedback">
                    {card.feedback.map((feedbackItem, index) => (
                      <div className="info" key={index}>
                        <div className="rating">{feedbackItem.rating}</div>
                        <div>{feedbackItem.comment}</div>
                      </div>
                    ))}
                  </div>
                ) : null}
                {card.question && card.answers && (
                  <div>
                    <div className="question">{card.question}</div>
                    {card.answers.map((answer, index) => (
                      <span className="answers" key={index}>
                        <img src={card.checkSrc} />
                        {answer}
                      </span>
                    ))}
                  </div>
                )}
                <p className="highlights-description">
                  {card.highlights.description}
                </p>
              </div>

              <a>
                Show more <GoChevronDown />
              </a>
            </div>

            {/* right-section */}

            <div className="right-div">
              <div className="rating">
                {card.rating.icon === true ? (
                  <div className="info-icon">
                    <SlInfo fill={"#BABEC3"} size={10} />
                  </div>
                ) : null}
                <div className="number">{card.rating.num}</div>
                <div className="rating-quality">{card.rating.quality}</div>
                <div className="stars">
                  <Stack spacing={1}>
                    <Rating
                      name="half-rating-read"
                      defaultValue={card.rating.num / 2}
                      precision={0.5}
                      readOnly
                      size="small"
                    />
                  </Stack>
                </div>
              </div>
              <div>
                <button>View</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="secondary-heading">Related deals you might like for</div>
      <div className="biscuits-cards">
        {biscuitCard.map((card, index) => (
          <div key={index} className="biscuit">
            <div className="image">
              <img src={card.img} />
            </div>
            <div className="offers">
              <div className="offerPercentage">{card.offerPercentage}</div>
              <div className="limitedTime">
                {card.limitedTime === true ? "Limited time" : null}
              </div>
            </div>
            <div className="productName">{card.productName}</div>
            <div className="productDiscription">{card.productDescription}</div>
            {/*       */}
            <div className="pricing">
              <div className="offer-price">{card.offerPercentage}</div>
              <div className="price">{card.price}</div>
              <div className="offer-percentage">{card.off}</div>
            </div>
            <div className="button">
              <button>View Deal</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;

{
  /* 
<div>{card.moreData === true ? <p>Show more</p> : ""}</div> */
}
