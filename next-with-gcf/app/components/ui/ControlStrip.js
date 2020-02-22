import styled from 'styled-components'
import Link from 'next/link'

const ControlStripStyles = styled.nav`
  background-color: black;
  color: #ffffff;
  display: flex;
  justify-content: center;
  li {
    margin: 1rem;
  }
  a {
    display: block;
    color: white;
    text-decoration: none;
    font-weight: bold;
    margin: 1rem;
  }
`;

const ControlStrip = () =>{
   return (
     <ControlStripStyles>
       <Link href="/">
         <a>Home</a>
       </Link>
       <Link href="/about">
         <a>About Page</a>
       </Link>
       <Link href="/workshops">
         <a>Workshops</a>
       </Link>
       <Link href="/tutoring">
         <a>Tutoring</a>
       </Link>
     </ControlStripStyles>
   );
}




export default ControlStrip

 