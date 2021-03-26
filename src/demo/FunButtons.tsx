import React, { ReactElement } from "react";
import styled from "styled-components";

/**
 * These are just for show...
 *
 * @returns ReactElement
 */
export default function FunButtons(): ReactElement {
  const Nav = styled.ul`
    background-clip: padding-box;
    background: #fff;
    border-radius: 5px;
    border: 1px solid rgba(23, 24, 26, 0.11);
    overflow: hidden;
    padding: 0;
    margin: 0;
    position: absolute;
    right: 10px;
    top: 10px;
    user-select: none;
  `;

  const NavItem = styled.li`
    align-items: center;
    border-right: 1px solid #d4d7d9;
    display: inline-block;
    padding: 5px 10px;
  `;

  const NavLink = styled.a`
    color: inherit;
    text-decoration: none;
  `;

  return (
    <Nav>
      <NavItem>
        <NavLink href="#">Help</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">About us</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Got Plus?</NavLink>
      </NavItem>
    </Nav>
  );
}
