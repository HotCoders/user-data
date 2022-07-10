import { useForm } from "react-hook-form";
import {ConactWrapper,Headings } from './Styled/Contact.styled'

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
      console.log(data);
    document.querySelector('.finalData').innerHTML= "Thank You " +data.firstName +' '+data.lastName;
    }
    return (
        <ConactWrapper>
            <Headings>Contact Us</Headings>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-feild">
                    <label>First Name</label>
                    <input placeholder='First Name' type="text" {...register("firstName", { required: true, maxLength: 10 })}/>
                    {errors.firstName && <p>Please check the First Name</p>}
                </div>
               
                <div className="form-feild">
                    <label>Last Name</label>
                    <input placeholder='Last Name' type="text" {...register("lastName", { required: true, maxLength: 10 })}/>
                    {errors.lastName && <p>Please check the Last Name</p>}
                </div>
                
                <div className="form-feild">
                    <label>Email</label>
                    <input placeholder='Email' type="email" {...register("email",{required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
                    {errors.email && <p>Please check the Email</p>}
                </div>
                <button type='submit'>Submit</button>
            </form>
            <p className="finalData"> </p>
        </ConactWrapper>
    )
}
export default Contact;