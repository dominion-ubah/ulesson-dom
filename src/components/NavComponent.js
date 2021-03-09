import React, { useState } from 'react';
// import PropTypes from 'prop-types'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const NavComponent = props => {
    const {name} = props;
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
      <Navbar className="nav_ulesson" light expand="md">
        <NavbarBrand href="/" className="logo ml-md-4"></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/"><div className="profile"></div></NavLink>
            </NavItem>
          </Nav>
          <NavbarText>{name}</NavbarText>
        </Collapse>
      </Navbar>
    </div>
    )
}

NavComponent.propTypes = {

}

export default NavComponent
