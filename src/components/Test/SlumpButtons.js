import React, { Component } from "react";
import "./Test.css";
import { NavLink, Link } from "react-router-dom";
export class SlumpButtons extends Component {
  render() {
    return (
      <div>
        <div className="custom-btn-lists">
          <ul>
            <li>
              <button className="btn btn-info">
                <NavLink
                  activeClassName="selected"
                  to={process.env.PUBLIC_URL + "/TableRf2"}
                >
                  RF - 02
                </NavLink>
              </button>
            </li>
            <li>
              <button className="btn btn-info">
                <NavLink
                  activeClassName="selected"
                  to={process.env.PUBLIC_URL + "/TableRf3"}
                >
                  RF - 03
                </NavLink>
              </button>
            </li>
            <li>
              <button className="btn btn-info">
                <NavLink
                  activeClassName="selected"
                  to={process.env.PUBLIC_URL + "/TableRf4"}
                >
                  RF - 04
                </NavLink>
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SlumpButtons;
