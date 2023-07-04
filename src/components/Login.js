import styled from "styled-components";

export const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.png"></CTALogoOne>
          <Signup>GET ALL HERE</Signup>
          <Description>
            Get the premium access to the Disney Plus hotstar this the way that
            you watch all the series and movies and also cartoons.then you get
            the pack for $1.00
          </Description>
        </CTA>
        <Bgimage /> 
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 80px 20px;
  height: 100%;
`;
const Bgimage = styled.div`
  height: 100%;
  background-image: url("/images/login-background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 650px;
  margin-bottom: 2vw;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-width: 1px;
  width: 100%;
  display: block;
`;

const Signup = styled.div`
  color: #f9f9f9;
  background-color: #0036e5;
  font-weight: bold;
  letter-spacing: 1.5px;
  font-size: 18px;
  width: 100%;
  padding: 16.5px 0;
  border-radius: 4px;
  border: 1px solid transparent;
  margin-bottom: 12px;
  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  letter-spacing: 1.5px;
  line-height: 1.5px;
  margin: 0 0 24px;
`;
