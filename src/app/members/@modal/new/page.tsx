"use client";

import Modal from "@/app/components/Modal/Modal";
import { useRouter } from "next/navigation";
import { createUser } from "@/app/members/@modal/new/createUser";

export default function Page() {
  const router = useRouter();
  const handleCloseModal = () => {
    router.back();
  };
  const handleSubmit = async (formData: FormData) => {
    const result = await createUser(formData);
    if (result.success) {
      handleCloseModal();
      // TODO: トースターを出して追加が完了した旨を伝えるなど
    } else {
      alert(`エラー: ${result.error}`);
    }
  };
  return (
    <Modal isOpen={true} onClose={handleCloseModal}>
      <div className="w-96">
        <h1>メンバー追加</h1>
        <form action={handleSubmit}>
          <div className="mt-6 border-b border-gray-900/10 pb-12">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="you@example.com"
                />
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              onClick={handleCloseModal}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
