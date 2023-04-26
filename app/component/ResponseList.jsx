export default function ResponseList({ response }) {
  return (
    <ul id="response">
      {response.map((res, index) => {
        return (
          <li key={index}>
            <p className="response-name">{res.name}</p>
            <p>{res.about_remix}</p>
          </li>
        );
      })}
    </ul>
  );
}
