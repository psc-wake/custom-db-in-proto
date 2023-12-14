// pages/index.js
"use client";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Index() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        <p>Auth0で認証時にもらったユーザセッションデータ</p>
        <ul>
          <li>name: {user.name}</li>
          <li>nickname: {user.nickname}</li>
          <li>email: {user.email}</li>
          <li>org_id: {user.org_id}</li>
          <li>picture: {user.picture}</li>
          <li>sub: {user.sub}</li>
          <li>updated_at: {user.updated_at}</li>
        </ul>
      </div>
    );
  }

  return <a href="/api/auth/login">Login</a>;
}
