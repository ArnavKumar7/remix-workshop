import { Link } from "@remix-run/react";
import homestyles from "~/styles/home.css";

export default function Index() {
  return (
    <main id="content">
      <h1>Let me know how much you like Remix!</h1>
      <p>You can let us know if remix is cool by clicking the link below</p>
      <p id="cta">
        <Link to="/survey">Try Now!</Link>
      </p>
    </main>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: homestyles }];
}
