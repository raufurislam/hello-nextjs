import { Suspense } from "react";
import UserComponent from "./components/user-component";

export default function ClientPage() {
  return (
    <div>
      <h1>This is ClientPage component</h1>
      <UserComponent />
    </div>
  );
}
