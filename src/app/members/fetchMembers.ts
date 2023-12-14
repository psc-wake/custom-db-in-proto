import { managementClient } from "@/app/lib/auth0ManagementClient";

// ユーザー情報
interface UserInformation {
  email: string;
  created_at: string;
  identities: Identity[];
  name: string;
  nickname: string;
  picture: string;
  updated_at: string;
  user_id: string;
  last_login: string;
  last_ip: string;
  logins_count: number;
  blocked?:boolean;
}

// アイデンティティ情報
interface Identity {
  provider: string;
  user_id: string;
}

/**
 * ユーザー一覧を取得する
 * @returns ユーザー一覧の配列
 */
export async function fetchMembers(): Promise<UserInformation[]> {
  try {
    const response = await managementClient.users.getAll();
    console.log(response);
    if (Array.isArray(response.data) && response.data.every(item => typeof item === 'object')) {
      return response.data as UserInformation[];
    }
    throw new Error('Invalid data format');
  } catch (error) {
    console.error('Error fetching members:', error);
    return [];
  }
}
