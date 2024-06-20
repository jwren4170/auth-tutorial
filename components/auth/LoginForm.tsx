import { CardWrapper } from "@/components/auth/CardWrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel={"Welcome Back"}
      backButtonLabel={"Don't have an account? Sign Up"}
      backButtonHref={"/register"}
      showSocial
    >
      Login Form
    </CardWrapper>
  );
};
