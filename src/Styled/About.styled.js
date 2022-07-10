import styled from 'styled-components';

export const AboutWrapper = styled.section`
 width:80%;
 margin:20px auto;
 border:2px solid #319296;
 border-radius: 10px;
 background:#f2f6f7;
 padding:20px;
 .showhide{
     color:#ff0000;
     cursor:pointer;
     font-weight:bold;
 }
 .container{
     display: flex;
     justify-content: center;
     align-items: flex-start;
 }
 .divLeft{
  
     width:200px;
     img{
        width:180px;
        height:auto;
   
    }
 }
 .divRight{
  
    width:70%;
    text-align:justify;
    padding-left:10px;

}
`
export const Headings = styled.h1`
font : bold 35px 'Trebuchet MS';
color : ${props => props.fc ? '#26889e' : '#8f183c'}
`