import React from "react";
import { stateMapper } from "../../redux/store/store";
import { connect } from "react-redux";
import moment from "moment";
import { Link, NavLink } from "react-router-dom";
import Loading from "../_Loading/Loading";
function BlogBody(props) {
  
  return (
    <div className="container">
      <div className="row d-flex">
        {props.blogData && props.blogData.pageOfData ? (
          props.blogData.pageOfData.map(blog => {
            let time = moment(blog.updatedAt).format("Do MMM YY");
            return (
              <div className="col-md-4 float-right d-flex" key={blog.blogId}>
                <div className="blog-entry justify-content-end">
                  <Link to={`/blogs/${blog.blogId}`}>
                    <img
                      src={blog.cover}
                      className="block-20 embed-responsive"
                      alt={blog.title}
                    ></img>
                  </Link>
                  <div className="text p-4  d-block">
                    <div className="topper d-flex align-items-center">
                      <div className="py-2 pl-3 pr-3 align-self-stretch">
                        {time}
                      </div>
                    </div>
                    <Link
                      className="text-dark"
                      style={{ textDecoration: "none" }}
                      to={`/blogs/${blog.blogId}`}
                    >
                      <h3 className="heading mb-3 font-weight-bold text-capitalize">
                        {blog.title}
                      </h3>
                    </Link>
                    <p className="text-secondary p-body mt-2 ">{blog.body}</p>
                    <p>
                      <Link className="btn-custom" to={`/blogs/${blog.blogId}`}>
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                        &nbsp;&nbsp;
                        <span className="pb-3">read more</span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <Loading></Loading>
        )}
      </div>
      <div className="row mt-5">
        <div className="col text-center">
          <div className="block-pagination">
            {props.blogData &&
              props.blogData.pager &&
              props.blogData.pager.pages.length && (
                <ul>
                  <li
                    className={`mx-md-1 ${
                      props.blogData.pager.currentPage === 1 ? "disable" : ""
                    }`}
                  >
                    <NavLink
                      to={{
                        search: `?page=${props.blogData.pager.currentPage - 1}`
                      }}
                      activeClassName="active"
                      style={{ textDecoration: "none" }}
                    >
                      &lt;
                    </NavLink>
                  </li>
                  {props.blogData.pager.pages.map(page => (
                    <li key={page} className="mx-md-1">
                      <NavLink
                        to={`/blogs?page=${page}`}
                        activeClassName="active"
                        style={{ textDecoration: "none" }}
                      >
                        {page}
                      </NavLink>
                    </li>
                  ))}

                  <li
                    className={`mx-md-1 ${
                      props.blogData.pager.currentPage ===
                      props.blogData.pager.totalPages
                        ? "disable"
                        : ""
                    }`}
                  >
                    <NavLink
                      to={{
                        search: `?page=${props.blogData.pager.currentPage + 1}`
                      }}
                      activeClassName="active"
                      style={{ textDecoration: "none" }}
                    >
                      &gt;
                    </NavLink>
                  </li>
                </ul>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(stateMapper)(BlogBody);
