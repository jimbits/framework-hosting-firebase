import styled from 'styled-components';
 
const Header = ({...props}) =>{
 return (
   <HeaderStyles>
     <h1> {props.title}</h1>
     <p>{props.tagline}</p>
   </HeaderStyles>
 )
}


const HeaderStyles = styled.header ` 
   padding: 8rem 0;
   text-align:center;
   font-size: 5rem;
   background:crimson;
   color: #ffffff;
`

export default Header

