import Link from "next/link";
import { MemberTable } from "@/app/members/components/MemberTable";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div>
      <div className="flex justify-between items-center border-b">
        <div className="flex gap-4">
          <div>
            <Link
              href={""}
              className="px-6 py-3 text-sm block border-b-2 border-gray-800 text-gray-800 font-bold"
            >
              すべてのメンバー
            </Link>
          </div>
          <div>
            <Link
              href={""}
              className="px-6 py-3 text-sm block border-gray-800 text-gray-500 font-bold"
            >
              XXXのメンバー
            </Link>
          </div>
          <div>
            <Link
              href={""}
              className="px-6 py-3 text-sm block border-gray-800 text-gray-500 font-bold"
            >
              YYYのメンバー
            </Link>
          </div>
        </div>
        <div>
          <Link href="/members/new">
            <PlusIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
      <div className="">
        <MemberTable />
      </div>
    </div>
  );
}
