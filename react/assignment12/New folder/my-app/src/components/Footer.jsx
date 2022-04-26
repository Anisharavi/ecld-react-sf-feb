import React, { Component } from "react";
import { AuthContext } from "../AuthContext/AuthContextProvider";
import "./Login.css";

export default class Footer extends Component {
  render() {
    const { isTheme, toggleTheme } = this.context;
    console.log(isTheme);

    return (
      <div>
        <div class="footer">
          
        </div>
      </div>
    );
  }
}
Footer.contextType = AuthContext;
