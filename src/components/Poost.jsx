import styled from "styled-components";
import React from "react"
export const Posts = ({ img, name, ext, git, live ,disc,skill}) => {
  return (
    <Proj>
      <Card>
        <img
          src={img}
          alt="proj-img"
        />
        <div className="contents">
          <h2>{name}</h2>
          <p>
          {disc}
          </p>
          <h5>
            Tech stack : {skill}
          </h5>
          <h4>
            <div className="iconss">
            <a href={live} target="_blank" >
              <i className="fas fa-external-link-alt wg  fa-2x "></i>
            </a>
          <a href={git} target="_blank" >
              <i className="fab fa-github fa-2x wh "></i>
            </a>
            </div>
            </h4>
        </div>
      </Card>
      </Proj>
     
  );
};

const Proj = styled.div`
  position: relative;
  width: 100%;
  height: inherit;
  background: #1d1d1d;
  padding: 20px 0px 20px 0px;

  @media screen and (max-width: 767) {
    position: relative;
    width: 100%;
    height: inherit;
    background: #1d1d1d;
    padding: 30px 0px 30px 0px;
  }
`;

const Card = styled.div`
  margin: 20px auto;
  width: 80%;
  height: inherit;

  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: 0.5s;
  color:#6E85B2;
  &:hover {
    transform: scale3d(1.08, 1.08, 1.08);
    background: #1d1d1d;
  }

  img {
    width: 50%;
    height: 250px;
    align-self: center;
    margin-left: 2%;
    border-radius: inherit;
  }

  .contents {
    display: flex;
    flex-direction: column;
    padding: 0px 20px 0px 20px;

    p {
      text-align: justify;
    padding-top: 3%;
    width: 100%;
    padding-bottom: 2%;
    color: #fff;
    font-family: monospace;
    font-size: 14px;
    }
    h2{
      font-size: 2rem;
  font-family: "Gloria Hallelujah";
  color: #fff;
  text-align: center;
    }
    h5{
      font-size: 15px;
    font-family: monospace;
    color: #fff;
    text-align: center;
    }
    h4{
      justify-content: space-between !important;
      text-align: center !important;
    }
    .iconss a {
  color: #23ffde;
  padding: 0.5rem;
  padding-right: 1rem
}

.iconss a:hover {
  color: #ffe7ee;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out
}
  }
  .linkIcons {
    width: 20px;
    height: 20px;
  }

  @media screen and (max-width: 767px) {
    margin: 10px auto;
    width: 90%;
    height: inherit;
  
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    img {
      width: 90%;
      height: 250px;
      margin-left: 0px;
      margin-top: 4%;
      border-radius: inherit;
    }
  }
`;
