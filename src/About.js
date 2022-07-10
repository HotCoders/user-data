import {AboutWrapper} from './Styled/About.styled'
import  { useState } from "react";
import PageHeading from './PageHeading';
import imgUser from './img/user.png';

  
const Readmore = ({ children }) => {
  const text = children;
  const [isReadmore, setIsReadmore] = useState(true);
  const toggleReadMore = () => {
  setIsReadmore(!isReadmore);
  };
  return (
    <p className="text">
      {isReadmore ? text.slice(0, 250) : text}
      <span onClick={toggleReadMore} className="showhide">
        {isReadmore ? "...read more" : " show less"}
      </span>
    </p>
  );
};
  
const About = () => {
  return (
    <AboutWrapper>
      <PageHeading pageTitle={'About Users'}/>
      <div className='container'>
        <div className='divLeft'>
          { <img src={imgUser} alt="users" /> }
        
        </div>
        <div className='divRight'>
        <Readmore>
        Inceptos quam sem. Rutrum et enim integer dolor in metus, eros placerat. Laoreet Eu eget dapibus luctus mus, justo gravida. Hymenaeos blandit etiam imperdiet. Non, mi ornare vulputate nascetur lorem. Dui hendrerit sociis. Quisque sociis semper. Magna tristique malesuada laoreet nam. Risus gravida pede taciti neque.
        Scelerisque velit ipsum per at. Senectus vitae potenti fringilla conubia ante mattis hendrerit etiam. Lectus nam. Cras integer, sed, sem dis.
      
        Elementum suspendisse taciti torquent elit donec proin nisl augue nonummy. Auctor luctus sociis tellus sem penatibus cum mus pretium posuere. Dui. Vehicula mus venenatis viverra. Ut congue tristique ac aptent nascetur primis mauris.
        
        Inceptos quam sem. Rutrum et enim integer dolor in metus, eros placerat. Laoreet Eu eget dapibus luctus mus, justo gravida. Hymenaeos blandit etiam imperdiet. Non, mi ornare vulputate nascetur lorem. Dui hendrerit sociis. Quisque sociis semper. Magna tristique malesuada laoreet nam. Risus gravida pede taciti neque.
        Scelerisque velit ipsum per at. Senectus vitae potenti fringilla conubia ante mattis hendrerit etiam. Lectus nam. Cras integer, sed, sem dis.,
        </Readmore>
        </div>
        </div>
    </AboutWrapper>
  );
};
  
export default About;

