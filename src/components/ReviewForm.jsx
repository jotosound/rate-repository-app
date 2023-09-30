import { View, Pressable } from "react-native";
import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";
import { Formik } from "formik";
import * as yup from "yup";
import useCreateReview from "../hooks/useCreateReview";
import { useState } from "react";
import { useNavigate } from "react-router-native";
const ReviewFormContainer = ({ onSubmit, error }) => {
  console.log(error)
  return (
    <View style={{ padding: 10 }}>
     {error && <Text fontSize='subheading' fontWeight='bold'>error: {error}</Text>} 
      <FormikTextInput name="ownerName" placeholder="Owner" />
      <FormikTextInput name="rating" placeholder="Rating(1-100)" />
      <FormikTextInput name="repositoryName" placeholder="Repository Name" />
      <FormikTextInput multiline name="text" placeholder="Review" />
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
         Create a Review 
        </Text>
      </Pressable>
    </View>
  );

}
const initialValues = {
  ownerName: '',
  rating: '',
  repositoryName: '',
  text: '',
}

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required("Owner name is required"),
  rating: yup
    .number()
    .min(0)
    .max(100)
    .required("Rating is required"),
  repositoryName: yup
    .string()
    .required("Repository Name is required"),
  text: yup
    .string(),
});

export const ReviewFormWrapper = ({ onSubmit, error }) => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => <ReviewFormContainer error={error} onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
}

const ReviewForm = () => {
  const [submitReview] = useCreateReview()
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const onSubmit = async (values) => {
    const { ownerName, rating, repositoryName, text } = values
    try {
      const result = await submitReview({ ownerName, rating, repositoryName, text}) 
      console.log('result', result.createReview.repository.id)
      navigate(`/repositories/${result.createReview.repository.id}`)
    } catch (e) {
      console.log('error',e)
      setError(e.message)
    }
  }
  return <ReviewFormWrapper onSubmit={onSubmit} error={error} />
 } 

export default ReviewForm
