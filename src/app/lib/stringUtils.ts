/**
 * 日付のフォーマット変更
 * @param data 日付データ
 * @returns YYYY/MM/DD hh:mm:ss 形式の日付データ
 */
export function formatDate(data: string): string {

    if(!data) {
      return "-";
    }

    const date = new Date(data);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
  }