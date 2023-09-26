import { Pressable, View } from "react-native";
import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";
import theme from "../theme";

const initialValues = {
  username: "",
  password: "",
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={{ padding: 10 }}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput secureTextEntry name="password" placeholder="Password" />
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
          Sign In
        </Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <View style={{ backgroundColor: 'white'}}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;
