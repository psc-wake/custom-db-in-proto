import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>ダッシュボード的な</h1>
      <div>
        <p>
          <Link href="/profile" className="text-blue-600">
            Auth0で取得したユーザセッションデータ
          </Link>
        </p>
      </div>
    </div>
  );
}
