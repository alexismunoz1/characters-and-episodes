import styled from "styled-components";
import { Link } from "@/ui-kit/links";

const FooterCont = styled.footer`
  background-color: var(--grey-04);
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px;
`;

export const Footer = () => {
  return (
    <FooterCont>
      <Link href='https://rickandmortyapi.com/'>Rick and Morty Api</Link>
    </FooterCont>
  );
};
