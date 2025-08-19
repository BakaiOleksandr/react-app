
import { useParams } from "react-router-dom";

export default function EditApartment() {
  const { id } = useParams();
  return (
    <div className="bg-white shadow rounded p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Apartment</h1>
      <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-400">
        Save Changes
      </button>
    </div>
  );
}
