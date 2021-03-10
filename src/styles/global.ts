import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 *{
     margin: 0;
     padding: 0;
     box-sizing: 0;
     outline: 0;
 }

 body{
     background: #E5E5E5;
     -webkit-font-smoothing: antialised;
 }

 button{
     cursor: pointer;
 }
`;
