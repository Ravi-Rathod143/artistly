export default function DashboardTable({ submissions }) {
  return (
    <table className="w-full border shadow-md">
      <thead className="bg-purple-600 text-white">
        <tr>
          <th className="p-2">Name</th>
          <th className="p-2">Category</th>
          <th className="p-2">City</th>
          <th className="p-2">Fee</th>
          <th className="p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {submissions.map((sub, idx) => (
          <tr key={idx} className="border-t hover:bg-gray-100">
            <td className="p-2">{sub.name}</td>
            <td className="p-2">{sub.category.join(", ")}</td>
            <td className="p-2">{sub.location}</td>
            <td className="p-2">₹{sub.fee}</td>
            <td className="p-2">
              <button
                className="bg-purple-500 text-white px-3 py-1 rounded"
                onClick={() =>
                  alert(
                    `Name: ${sub.name}\nCategory: ${sub.category.join(
                      ", "
                    )}\nLocation: ${sub.location}\nFee: ₹${sub.fee}`
                  )
                }
              >
                View
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
