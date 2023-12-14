import {
  BuildingOfficeIcon,
  KeyIcon,
  LockClosedIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { SideMenuTitle } from "@/app/components/SideMenu/SideMenuTitle";
import { SideMenuIcon } from "@/app/components/SideMenu/SideMenuIcon";
import { SideMenuItemGroup } from "@/app/components/SideMenu/SideMenuItemGroup";
import { SideMenuItem } from "@/app/components/SideMenu/SideMenuItem";

export function SideMenu() {
  return (
    <aside className="hidden lg:block fixed z-20 inset-0 top-10 left-0 right-auto w-60 pb-10 pl-8 pr-6 overflow-y-auto border-r">
      <div className="mt-6">
        <SideMenuTitle>
          <SideMenuIcon>
            <UsersIcon />
          </SideMenuIcon>
          メンバー管理
        </SideMenuTitle>
        <SideMenuItemGroup>
          <SideMenuItem>
            <Link href="/members">メンバー一覧</Link>
          </SideMenuItem>
          <SideMenuItem>
            <Link href="/members/new">メンバー追加</Link>
          </SideMenuItem>
        </SideMenuItemGroup>
        <SideMenuTitle>
          <SideMenuIcon>
            <KeyIcon />
          </SideMenuIcon>
          SSO管理
        </SideMenuTitle>
        <SideMenuItemGroup>
          <SideMenuItem>
            <Link href={""}>IdP情報の表示</Link>
          </SideMenuItem>
          <SideMenuItem>
            <Link href={""}>SAML設定</Link>
          </SideMenuItem>
        </SideMenuItemGroup>
        <SideMenuTitle>
          <SideMenuIcon>
            <BuildingOfficeIcon />
          </SideMenuIcon>
          企業情報
        </SideMenuTitle>
        <SideMenuItemGroup>
          <SideMenuItem>
            <Link href={""}>企業情報編集</Link>
          </SideMenuItem>
          <SideMenuItem>
            <Link href={""}>所属部署マスタ</Link>
          </SideMenuItem>
          <SideMenuItem>
            <Link href={""}>プラン変更</Link>
          </SideMenuItem>
          <SideMenuItem>
            <Link href={""}>ライセンス管理</Link>
          </SideMenuItem>
          <SideMenuItem>
            <Link href={""}>支払い管理</Link>
          </SideMenuItem>
        </SideMenuItemGroup>
        <SideMenuTitle>
          <SideMenuIcon>
            <LockClosedIcon />
          </SideMenuIcon>
          セキュリティ
        </SideMenuTitle>
        <SideMenuItemGroup>
          <SideMenuItem>
            <Link href={""}>IP制限</Link>
          </SideMenuItem>
          <SideMenuItem>
            <Link href={""}>MFA設定</Link>
          </SideMenuItem>
          <SideMenuItem>
            <Link href={""}>操作ログ</Link>
          </SideMenuItem>
        </SideMenuItemGroup>
      </div>
    </aside>
  );
}
