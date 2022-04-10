
import React from 'react'
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyles";
import Meal from "../../assets/meal.svg";

const Login = () => {
  // const navigate = useNavigate();
  const user = {
    username: "user",
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(user));

    window.location.href = "/home";
    // veri göndermeyeceksek bu şekilde sayfaya yönlendirebiliriz
  };
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={Meal} />
        <Header>{"<Clarusway/>"}Recipe</Header>
        {/* login sayfasındaki yuvarlak olayın içindeki yazı (Header) */}

        <StyledForm onSubmit={handleSubmit}>
          {/* 3 kutunun olduğu form  */}
          <StyledInput type="text" placeholder="username" required />
          <StyledInput type="password" placeholder="password" required />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  )
}

export default Login