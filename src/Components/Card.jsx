import { useState } from "react";
import DesktopImage from "../assets/bg-intro-desktop.png";
import MobileImage from "../assets/bg-intro-mobile.png";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #ff7979;
  background-image: url(${DesktopImage});
  background-size: cover;

  @media (max-width: 768px) {
    background-image: url(${MobileImage});
  }
`;
const TextContainer = styled.div`
  max-width: 525px;
  display: flex;
  flex-direction: column;
  align-items: self-start;
  color: #ffffff;
`;
const Title = styled.h1`
  font-size: 50px;
  font-weight: 700;
  line-height: 55px; /* 110% */
  letter-spacing: -0.521px;
  text-align: start;
  margin-bottom: 30px;
`;
const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  padding-right: 40px;
  text-align: start;
`;
const InputWrapper = styled.div`
  width: 540px;
  display: flex;
  flex-direction: column;
`;
const InputTitle = styled.h2`
  max-width: 540px;
  padding: 17px 0;
  border-radius: 10px;
  background: #5e54a4;
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
  letter-spacing: 0.368px;

  color: #fff;
  display: flex;
  justify-content: center;
  text-align: center;
`;
const LeftTitle = styled.span`
  font-weight: 00;
  font-size: 15px;
  margin-right: 5px;
`;
const RightTitle = styled.span`
  font-size: 15px;
  font-weight: 400;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-top: 24px;
  padding: 40px 40px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-top: 24px;
`;
const Input = styled.input`
  color: #3d3b48;
  font-size: 14px;
  letter-spacing: 0.25px;
  padding: 15px 35px;
  border-radius: 5px;
  border: 1px solid #5e54a4;
  background: #fff;
`;
const ErrorSpan = styled.span`
  color: #ff7979;
  text-align: right;
  font-size: 14px;
  font-style: italic;
  font-weight: 500;
`;
const Button = styled.button`
  border: none;
  border-radius: 5px;
  background: #38cc8b;
  box-shadow: 0px -4px 0px 0px rgba(0, 0, 0, 0.09) inset;
  cursor: pointer;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 15px 0;

  &:hover {
    background: #77e2b3;
  }
`;
const DescriptionContainer = styled.div`
  font-size: 11px;
  line-height: 26px;
`;
const LeftDescription = styled.span`
  color: #bab7d4;
`;
const RightDescription = styled.span`
  color: #ff7979;
`;

function Card() {
  const [useForm, setUseForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [useFormErrors, setUseFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    const { value, name } = e.target;
    setUseForm({
      ...useForm,
      [name]: value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    errorHandler();
  };

  const errorHandler = () => {
    const emailRagex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    const errors = {};

    if (useForm.firstName.trim() === "") {
      errors.firstName = "First Name cannot be empty";
    }
    if (useForm.lastName.trim() === "") {
      errors.lastName = "Last Name cannot be empty";
    }
    if (useForm.email.trim() === "") {
      errors.email = "Looks like this is not an email";
    }
    if (useForm.password.trim() === "") {
      errors.password = "Password cannot be empty";
    }
    setUseFormErrors(errors);
  };
  return (
    <Wrapper>
      <TextContainer>
        <Title>Learn to code by watching others</Title>
        <Text>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </Text>
      </TextContainer>
      <InputWrapper>
        <InputTitle>
          <LeftTitle>Try it free 7 days</LeftTitle>
          <RightTitle>then $20/mo. thereafter</RightTitle>
        </InputTitle>
        <InputContainer>
          <Form onSubmit={submitHandler} action="">
            <Input
              onChange={inputHandler}
              name="firstName"
              type="text"
              placeholder="Jonathan"
              value={useForm.firstName}
            />
            {useFormErrors.firstName && (
              <ErrorSpan>{useFormErrors.firstName}</ErrorSpan>
            )}
            <Input
              onChange={inputHandler}
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={useForm.lastName}
            />
            {useFormErrors.lastName && (
              <ErrorSpan>{useFormErrors.lastName}</ErrorSpan>
            )}
            <Input
              onChange={inputHandler}
              name="email"
              type="email"
              placeholder="Email Address"
              value={useForm.email}
            />
            {useFormErrors.email && (
              <ErrorSpan>{useFormErrors.email}</ErrorSpan>
            )}
            <Input
              onChange={inputHandler}
              name="password"
              type="password"
              placeholder="Password"
              value={useForm.password}
            />
            {useFormErrors.password && (
              <ErrorSpan>{useFormErrors.password}</ErrorSpan>
            )}
            <Button type="submit">CLAIM YOUR FREE TRIAL</Button>
          </Form>
          <DescriptionContainer>
            <LeftDescription>
              By clicking the button, you are agreeing to our{" "}
            </LeftDescription>
            <RightDescription>Terms and Services</RightDescription>
          </DescriptionContainer>
        </InputContainer>
      </InputWrapper>
    </Wrapper>
  );
}

export default Card;
