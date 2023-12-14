"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { UserIcon } from "@/app/components/Header/UserIcon";

export function Logout() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div className="text-xs">Loading...</div>;
  if (error) return <div className="text-xs text-red-500">{error.message}</div>;

  if (user) {
    return (
      <div className="flex gap-2 items-center">
        <UserIcon picture={user.picture ?? undefined} />
        <div className="text-xs">{user.name}</div>
        {/* ログアウトに関してはLinkコンポーネントは使えない */}
        <a
          href="/api/auth/logout"
          className="rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Logout
        </a>
      </div>
    );
  }

  return "";
}
