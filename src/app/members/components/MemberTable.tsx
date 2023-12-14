import Link from "next/link";
import { formatDate } from "@/app/lib/stringUtils";
import { fetchMembers } from "@/app/members/fetchMembers";
import { ReactElement } from "react";
import Image from 'next/image';

export async function MemberTable(): Promise<ReactElement | null> {
  // const [selectAll, setSelectAll] = useState(false);
  const members = await fetchMembers();

  // membersが空の配列である場合はメッセージを表示
  if (members.length === 0) {
    return <p>メンバー情報を取得できませんでした。</p>;
  }

  // const toggleSelectAll = () => {
  //   setSelectAll(!selectAll);
  // };

  return (
    <table className="min-w-full divide-y divide-gray-300">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
          >
            {/* <input
              type="checkbox"
              name="selectAll"
              id="selectAll"
              checked={selectAll}
              onChange={toggleSelectAll}
            /> */}
          </th>
          <th>
            {/* profimage */}
          </th>
          <th
            scope="col"
            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
          >
            メールアドレス
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            氏名
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            認証プロバイダ
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            ステータス
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Manageロール
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Assistロール
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            最終ログイン
          </th>
          <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {members.map((member) => (
          <tr
            key={member.user_id}
            className={`whitespace-nowrap ${member.blocked ? "opacity-75 bg-slate-300" : ""
              }`}
          >
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
              <input type="checkbox" name="selectedMember" id={`checkbox-${member.user_id}`} disabled={member.blocked} />
            </td>
            <td className="whitespace-nowrap py-4 text-gray-900 sm:pl-6">
              <Image
                src={member.picture}
                alt="prof"
                className="rounded-full"
                width={30}
                height={30}
                layout="responsive"
              />
            </td>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
              {member.email}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {member.name}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {member.identities.map((identity: { provider: string; user_id: string; }) => (
                <div key={identity.provider + identity.user_id}>
                  {identity.provider}
                </div>
              ))}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {/* {member.status} */}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {/* {member.manageRole} */}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {/* {member.assistRole} */}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {formatDate(member.last_login)}
            </td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
              {!member.blocked && (
                <Link href={`/edit/${member.user_id}`} className="text-indigo-600 hover:text-indigo-900">
                  編集
                </Link>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
