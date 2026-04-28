import { IoWarningOutline } from "react-icons/io5";

type Props = {
  onCancel: () => void;
  onConfirm: () => void;
  title: string;
};

const DeletePopup = ({ onCancel, onConfirm, title }: Props) => {
  // const givenChat = "how ai works?";

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white rounded-xl p-10 w-88 shadow-lg">
        <div className="flex flex-col items-center gap-3">
          <IoWarningOutline size={28} color="red" />
          <h2 className="text-xl font-semibold text-center">Delete Chat?</h2>

          <p className="text-sm text-gray-500 text-center mb-6">
            Are you sure you want to delete{" "}
            <span className="text-green-600 font-medium">"{title}"</span>? This
            action cannot be undone.
          </p>
        </div>

        <div className="flex justify-between gap-3">
          <button
            onClick={onCancel}
            className="w-full py-2 rounded bg-gray-200"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="w-full py-2 rounded bg-red-500 text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
