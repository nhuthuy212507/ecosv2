import styled from 'styled-components';

const SideBarButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  color: ${props => props.theme.colorText};

  &:focus {
    outline: none;
  }

  &:hover {
    background: ${props => props.theme.colorHover};
  }
`;

export const SideBarButtonDesktop = styled(SideBarButton)`
  display: none;
  @media screen and (min-width: 576px) {
    display: block;
  }
`;

export const SideBarButtonMobile = styled(SideBarButton)`
  @media screen and (min-width: 576px) {
    display: none;
  }
`;
