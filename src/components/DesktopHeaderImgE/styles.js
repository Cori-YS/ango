import styled, { css } from "styled-components";
import perfectScrolbar from "react-perfect-scrollbar";
import { AiFillHome, AiOutlineBell, AiFillCaretDown } from "react-icons/ai";
export const Container = styled.header`
  background: #299be8;
  padding: 0 30px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  @media (max-width: 750px) {
    display: none;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  margin: 0 auto;
  height: 52px;

  .left,
  .right nav {
    display: flex;
    align-items: center;
  }

  .right nav {
    height: 100%;
    button {
      background: none;
      border: 0;
      outline: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-width: 90px;
      min-height: 100%;

      color: #fff;
      cursor: pointer;
      &:hover {
        color: white;
      }
      &.active {
        border-bottom: 2px solid #fff;
      }
    }
  }
`;
const generalIconCss = css`
  width: 24px;
  height: 24px;
`;
export const LinkDinIcon = styled.img`
  width: 64px;
  height: 40px;
  color: #fff;
  background: #299be8;
  border-radius: 4px;
  flex-shrink: 0;
`;
export const SearchInput = styled.input`
  margin-left: 12px;
  background: #fff;
  color: black;
  font-size: 14px;
  padding: 7.5px 8px;
  border: none;
  outline: none;
  border-radius: 2px;

  &:focus {
    background-color: white;
  }
`;
export const ContainerNotif = styled.div`
  position: relative;
`;
export const HomeIcon = styled(AiFillHome)`
  ${generalIconCss}
`;
export const NotificationIcon = styled(AiOutlineBell)`
  width: 24px;
  height: 24px;
`;
export const ProfileCircle = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid #fff;
`;
export const CaretDownIcon = styled(AiFillCaretDown)`
  width: 16px;
  height: 16px;
`;
export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;

  ${(props) =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        left: 47px;
        width: 10px;
        height: 10px;
        background: #ff892e;
        content: "";
        border-radius: 50%;
      }
    `}
`;
export const NotificationList = styled.div`
  position: absolute;
  width: 260px;
  left: calc(50% - 130px);
  top: calc(100% + 30px);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 15px 5px;
  display: ${(props) => (props.visible ? "block" : "none")};
  &::after {
    content: "";
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.8);
  }
`;

export const Notification = styled.div`
  color: #fff;

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    display: block;
    font-size: 12px;
    opacity: 0.6;
    margin-bottom: 5px;
  }
  button {
    font-size: 12px;
    border: 0;
    background: none;
    color: #299be8;
  }

  ${(props) =>
    props.unread &&
    css`
      &::after {
        content: "";
        display: inline-block;
        margin-left: 10px;
        width: 8px;
        height: 8px;
        background: #ff892e;
        border-radius: 50%;
      }
    `}
`;
export const Scroll = styled(perfectScrolbar)`
  max-height: 260px;
  padding: 5px 15px;
`;
