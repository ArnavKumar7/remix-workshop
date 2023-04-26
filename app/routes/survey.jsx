import { Form, useLoaderData } from "@remix-run/react";
import axios from "axios";
import styles from "~/styles/survey.css";
import SurveyForm from "../component/SurveyForm";
import ResponseList from "../component/ResponseList";

export default function Survey() {
  const responses = useLoaderData();
  console.log(responses);
  return (
    <main>
      <SurveyForm />
      <ResponseList response={responses} />
    </main>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const response = await axios.post("http://localhost:8000/submit", data);
  return response.data;
}

export async function loader() {
  const response = await axios.get("http://localhost:8000");
  return response.data;
}
