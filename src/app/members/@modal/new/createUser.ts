"use server";

type Result = { success: true } | { success: false; error: string };

export async function createUser(formData: FormData): Promise<Result> {
  console.log(formData);
  return {
    success: true,
  };
}
