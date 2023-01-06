import React from "react";
import { BsSpeakerFill } from "react-icons/bs";
import { TbBorderAll } from "react-icons/tb";
import { IoIosContact } from "react-icons/io";
import { MdVerified } from "react-icons/md";
function Header() {
  return (
    <section className="bg-light">
      <div className="container-fluid bg-light">
        <div className="container ">
          <div className="row py-3">
            <div className="col-md-4 px-3 d-flex justify-content-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxc5V4a7uDaoNcd4Ygrc1CXyh5XmCKUq0KP8GtWYLLLg&s"
                alt="photo"
                className="borde"
              />
            </div>
            <div className="col-md-8">
              <div className="d-flex align-items-center">
                <h4 className="mr-5">
                  Virat kholi
                  <MdVerified className="mx-2 text-primary" />
                </h4>
                <button className="btn mx-4 px-3 rounded border-0 bg">
                  Follow
                </button>
                <button className="btn px-3 rounded border-0 bg">
                  Message
                </button>
                <i class="fa-solid fa-ellipsis fa-2x ml-4 mx-3"></i>
              </div>
              <div className="d-flex">
                <p className="mr-5 my-3">
                  <span className="fw-bold">1,491</span> Post
                </p>
                <p className="mx-5 my-3">
                  <span className="fw-bold">230M</span> Followers
                </p>
                <p className="mx-2 my-3">
                  <span className="fw-bold">262</span> Following
                </p>
              </div>
              <div>
                <h6 className="font-weight-bold mb-0">virat Kholi</h6>
                <p className="font-weight-bold mb-0">Carpediem!</p>
                <a className="text-decoration-none text-dark " href="#">
                  one8.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <hr></hr>
      </div>

      <div className="d-flex justify-content-center bg-light">
        <p className="fw-bold">
          <TbBorderAll className="mx-1" />
          POSTS
        </p>
        <p className="mx-5 text-muted">
          <BsSpeakerFill className="mx-1" />
          REELS
        </p>
        <p className="text-muted">
          <IoIosContact className="mx-1" />
          TAGGED
        </p>
      </div>
    </section>
  );
}

export default Header;
