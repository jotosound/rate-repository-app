import { Pressable, View } from "react-native";
import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";
import theme from "../theme";
import * as yup from "yup";
import useSignIn from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";
import useSignUp from "../hooks/useSignUp";

const initialValues = {
  username: "",
  password: "",
};

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={{ padding: 10 }}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput secureTextEntry name="password" placeholder="Password" />
      <FormikTextInput secureTextEntry name="passwordRepeat" placeholder="Password Confirmation" />
      <Pressable
        style={{
          margin: 10,
          justifyContent: "center",
          alignItems: "center",
          height: 60,
          backgroundColor: theme.colors.primary,
          borderRadius: 5,
        }}
        onPress={onSubmit}
      >
        <Text
          style={{ color: "white" }}
          fontSize="subheading"
          fontWeight="bold"
        >
          Sign Up
        </Text>
      </Pressable>
    </View>
  );
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5)
    .max(30)
    .required("Username is required"),
  password: yup
    .string()
    .min(5)
    .max(50)
    .required("Password is required"),
  passwordRepeat: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords do not match')
    .required("Password Confirmation is required"),

});

export const SignUpContainer = ({ onSubmit }) => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
}

const SignUp = () => {
  const [signUp] = useSignUp()
  const navigate = useNavigate()
  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signUp({ username, password });
      console.log("success");
      navigate('/') 
    } catch (error) {
      console.log(error);
    }
  };
 return <SignUpContainer onSubmit={onSubmit} /> 
  
};

export default SignUp;
