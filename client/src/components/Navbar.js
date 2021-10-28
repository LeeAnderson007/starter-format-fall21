import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { routes } from "../pages/routes";

class Navbar extends React.Component {
  renderRoutes = () => {
    const { location } = this.props;
    return routes.map(({ pathname, title }) => {
      return (
        <Link to={pathname}>
          <Menu.Item active={location.pathname == pathname}>{title}</Menu.Item>
        </Link>
      );
    });
  };
  render() {
    return <Menu>{this.renderRoutes()}</Menu>;
  }
}

export default withRouter(Navbar);