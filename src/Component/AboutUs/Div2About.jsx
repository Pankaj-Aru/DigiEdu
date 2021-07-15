import React from "react";
import "../../Assets/Css/AboutUs/Div2About.css";
import Heading from "../../Component/Heading.jsx";
import "../../Assets/Css/Common.css";

export default function Div2About() {
  return (
    <div className="Div2About">
      <div className="data container">
        <Heading
          title="Why Choose Us"
          text="Education is the Movement From Darkness to Light"
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Voluptatibus, a exercitationem. Quidem enim animi quia pariatur fuga
          odio recusandae placeat ipsam? Recusandae, consectetur minima. Veniam
          ratione magnam rerum modi perferendis. Alias assumenda quo, ullam
          error tempore aut quis consequatur dicta velit tenetur non, corporis
          enim voluptatibus optio id, explicabo dolore dignissimos magni
          laborum? Iure earum optio atque illum. Magni, cumque?
        </p>
        <div className="vis-mis flex justify-center">
          <div className=" vertical-center">
            <h2>Our Mission</h2>{" "}
            <p>
            Sed alias, nemo dolorem earum inventore error id sit ratione unde,
              doloribus, praesentium excepturi nihil corporis blanditiis Lorem
              ipsum dolor sit amet consectetur adipisicing elit. consequuntur
              fugit fugiat ad nesciunt.
            </p>
          </div>
          <div className=" vertical-center ">
            <h2>Our Vision</h2>{" "}
            <p>
              Sed alias, nemo dolorem earum inventore error id sit ratione unde,
              doloribus, praesentium excepturi nihil corporis blanditiis Lorem
              ipsum dolor sit amet consectetur adipisicing elit. consequuntur
              fugit fugiat ad nesciunt.
            </p>
          </div>
        </div>
      
      </div>
    </div>
  );
}
