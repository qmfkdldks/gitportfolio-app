import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import "../App.css";

export const Route = createRootRoute({
  component: () => (
    <>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
