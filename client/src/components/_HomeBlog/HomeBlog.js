import React from "react";
import { stateMapper } from "../../redux/store/store";
import { connect } from "react-redux";
import moment from "moment";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton
} from "react-share";
import { Link } from "react-router-dom";
import Loading from "../_Loading/Loading";

function HomeBlog(props, { url = String(window.location) }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {props.blogData && props.blogData.pageOfData ? (
            props.blogData.pageOfData.map(blog => {
              let time = moment(blog.updatedAt).format("DD/MM/YYYY");
              return (
                <div className="case" key={blog.blogId}>
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-xl-8 d-flex">
                      <Link to={`/blogs/${blog.blogId}`}>
                        <img
                          src={blog.cover}
                          className="img cover-img rounded w-100 mb-3 mb-md-0"
                          atl={blog.title}
                        ></img>
                      </Link>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4 d-flex">
                      <div className="text w-100 pl-md-3">
                        <Link
                          to={`/blogs/${blog.blogId}`}
                          style={{ "textDecoration": "none" }}
                        >
                          <h2 className="text-capitalize blog-title">{blog.title}</h2>
                        </Link>
                        <br></br>
                        <ul className="media-social mt-md-3 list-unstyled">
                          <li>
                            <FacebookShareButton
                              url={`${url}/blogs/${blog.blogId}`}
                            >
                              <img
                                className="icon-share"
                                src="https://img.icons8.com/nolan/48/facebook.png"
                                alt="facebook"
                              ></img>
                            </FacebookShareButton>
                          </li>
                          <li>
                            <LinkedinShareButton
                              url={`${url}/blogs/${blog.blogId}`}
                            >
                              <img
                                className="icon-share"
                                src="https://img.icons8.com/nolan/48/linkedin.png"
                                alt="linkedin"
                              ></img>
                            </LinkedinShareButton>
                          </li>
                          <li>
                            <TwitterShareButton
                              url={`${url}/blogs/${blog.blogId}`}
                            >
                              <img
                                className="icon-share"
                                src="https://img.icons8.com/nolan/48/twitter-squared.png"
                                alt="twitter"
                              ></img>
                            </TwitterShareButton>
                          </li>
                        </ul>
                        <div className="meta">
                          <p className="mb-0 text-muted">{time}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
              <Loading></Loading>
         )}
        </div>
      </div>
    </div>
  );
}

export default connect(stateMapper)(HomeBlog);
