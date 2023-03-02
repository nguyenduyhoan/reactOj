import React from "react";
import "./Home.scss";

class Home extends React.Component {
    render() {
        return (
          <form class="action_page.php">
            <div class="container">
              <label for="uname"><b>Username</b></label>
              <input type="text" placeholder="Enter Username" name="uname" required/>
          
              <label for="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required/>
          
              <button type="submit">Login</button>
            </div>
          </form>
        )
    }
}

export default Home;