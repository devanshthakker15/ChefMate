import React from "react";
import "./Meal.scss";
import { FaUtensilSpoon } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiChevronsRight } from "react-icons/bi";
import { AiOutlineCheckSquare } from "react-icons/ai";

const MealSingle = ({ meal }) => {
  console.log(meal);
  let instructions = meal?.instructions?.split("\r\n");
  instructions = instructions?.filter((instruction) => instruction.length > 1);
  const videoId = meal?.youtube?.split("v=")[1]?.split("&")[0];

  return (
    <div className="section-wrapper">
      <div className="container">
        <div className="breadcrumb bg-green text-white">
          <ul className="flex align-center my-2">
            <li className="breadcrumb-item">
              <Link to="/" className="flex align-center">
                <AiFillHome size={22} />
              </Link>
            </li>
            <li className="flex align-center mx-1">
              <BiChevronsRight size={23} />
            </li>
            <li className="breadcrumb-item flex">
              <span to="" className="fs-15 fw-5 text-uppercase">
                {meal?.title}
              </span>
            </li>
          </ul>
        </div>

        <div className="sc-title">Meal Details</div>
        <section className="sc-details bg-white">
          <div className="details-head grid">
            <div className="details-img">
              <img src={meal?.thumbnail} alt="" className="img-cover" />
            </div>

            <div className="details-intro">
              <h3 className="title text-green">{meal?.title}</h3>
              <div className="py-4">
                <div className="category flex align-center">
                  <span className="text-uppercase fw-8 ls-1 my-1">
                    Category: &nbsp;
                  </span>
                  <span className="text-uppercase ls-2">{meal?.category}</span>
                </div>

                <div className="source flex align-center">
                  <span className="fw-7">Source: &nbsp;</span>
                  <a
                    href={meal.source}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {meal.source
                      ? meal.source.substring(0, 40) + "..."
                      : "Not found"}
                  </a>
                </div>
              </div>

              <div className="ingredients my-5 px-3 py-3">
                <h6 className="fs-16 text-white">Ingredients</h6>
                <ul className="grid">
                  {meal?.ingredients?.map((ingredient, idx) => (
                    <li key={idx} className="flex align-center">
                      <span className="li-dot">{idx + 1}</span>
                      <span className="text-capitalize text-white fs-15">
                        {ingredient}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="details-body">
            <div className="instructions my-4">
              <h6 className="fs-16">Instructions:</h6>
              <ul className="grid">
                {instructions?.map((instruction, idx) => (
                  <li key={idx} className="fs-14">
                    <AiOutlineCheckSquare
                      size={18}
                      className="text-green li-icon"
                    />
                    <span className="li-text fs-16 fw-5 op-09">
                      {instruction}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Embed YouTube video */}
          {videoId && (
            <div className="youtube my-4">
              <h6 className="fs-16">Video Recipe:</h6>
              <div className="video-container">
                <iframe
                  width="80%"
                  height="515"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default MealSingle;
