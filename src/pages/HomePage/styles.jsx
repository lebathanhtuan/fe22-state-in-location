import styled, { css } from "styled-components";

export const MainWrapper = styled.div`
  position: relative;
  display: flex;
  min-height: calc(100vh - 156px);
`;

export const ContentWrapper = styled.div`
  width: 100%;
  padding: 16px;
  margin-left: ${({ isShowSidebar }) =>
    isShowSidebar ? "200px" : "0"};
  transition: 0.3s all;
`;

export const SidebarWrapper = styled.div`
  width: 200px;
  background-color: #d03c3c;
  padding: 16px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  padding: 8px;
  border: 3px solid
    ${({ isSelected }) => (isSelected ? "red" : "black")};
  color: black;
  background-color: white;
  cursor: pointer;

  &:hover {
    color: green;
  }

  & > p {
    margin-bottom: 0;
  }

  ${({ isNew }) =>
    isNew &&
    css`
      color: red;
      background-color: yellow;
    `}
`;
