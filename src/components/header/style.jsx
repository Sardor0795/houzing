import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background-color: #0d263b;
  padding: 14px 0;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  z-index: 99;
  position: sticky;
  top: 0;
  box-shadow: 0px 0px 5px 1px #0061df;
  /* .show& {
    position: sticky;
    top: 0;
    box-shadow: 0px 0px 5px 1px #0061df;
  } */
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
`;

export const Li = styled.li`
  margin-right: ${({ last }) => (!last ? "64px" : 0)};
  @media (max-width: 800px) {
    margin-right: 50px;
  }
`;

export const LoginIconStyle = styled.img`
  width: 24px;
  height: 24px;
  display: none;
`;

export const LogoIconStyle = styled.a`
  width: 117px;
  height: 36px;
`;

export const LoginButtonStyle = styled.button`
  color: #fff;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  padding: 12px 40px;
  border: 1px solid #ffffff;
  border-radius: 2px;
`;
