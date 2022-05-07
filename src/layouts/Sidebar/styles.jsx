import styled from "styled-components";

export const SidebarWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({ isShow }) => (isShow ? "0" : "-200px")};
  width: 200px;
  background-color: #d03c3c;
  padding: 16px;
  overflow: hidden;
  transition: 0.3s all;
`;
