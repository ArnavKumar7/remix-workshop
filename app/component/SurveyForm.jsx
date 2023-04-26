import { Form } from "@remix-run/react";

export default function SurveyForm() {
  return (
    <Form method="post" id="survey-form">
      <p>
        <label htmlFor="title">Let us know your name</label>
        <input type="text" name="name" id="title" />
      </p>
      <p>
        <label htmlFor="about">What do you think about remix?</label>
        <textarea type="text" name="about_remix" id="about" rows="3"></textarea>
      </p>
      <div className="form-actions">
        <button type="submit">Register Survey</button>
      </div>
    </Form>
  );
}
