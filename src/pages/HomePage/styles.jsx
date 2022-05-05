import styled from "styled-components";

export const CustomButton = styled.button`
  border: 5px solid ${(props) => props.color};
`;

export const Wrapper = styled.div`
  & > h3 {
    color: red;
  }

  &:hover {
  }

  &:last-child {
  }
`;
