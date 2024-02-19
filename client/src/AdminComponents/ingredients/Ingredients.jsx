// Ingredients component
import {
  useGetAllBaseTypeQuery,
  useDeleteBaseTypeMutation,
  useGetAllSauceTypeQuery,
  useDeleteSauceTypeMutation,
  useGetAllToppingQuery,
  useDeleteToppingTypeMutation,
  useGetAllCheeseTypeQuery,
  useDeleteCheeseTypeMutation,
} from "../../apis/ingredientsAPI";

function Ingredients() {
  // Base Types
  const {
    data: baseTypes,
    isLoading: isBaseLoading,
    refetch: refetchBaseTypes,
  } = useGetAllBaseTypeQuery();
  const [deleteBaseType] = useDeleteBaseTypeMutation();

  // Sauce Types
  const {
    data: sauces,
    isLoading: isSauceLoading,
    refetch: refetchSauceTypes,
  } = useGetAllSauceTypeQuery();
  const [deleteSauceType] = useDeleteSauceTypeMutation();

  // Topping Types
  const {
    data: toppings,
    isLoading: isToppingLoading,
    refetch: refetchToppingType,
  } = useGetAllToppingQuery();
  const [deleteToppingType] = useDeleteToppingTypeMutation();

  // Cheese Types
  const {
    data: cheeses,
    isLoading: isCheeseLoading,
    refetch: refetchCheeseTypes,
  } = useGetAllCheeseTypeQuery();
  const [deleteCheeseType] = useDeleteCheeseTypeMutation();

  const handleDelete = async (id, deleteMutation, refetchMutation) => {
    try {
      // Call the delete mutation
      await deleteMutation(id);

      // Optionally, refetch the data after deletion
      // refetchBaseTypes();
      // refetchSauces();
      // refetchToppings();
      // refetchCheeses();
      // Optionally, refetch the data after deletion
      refetchMutation();
    } catch (error) {
      console.error("Error deleting ingredient:", error);
    }
  };

  const ingredientTable = (
    data,
    category,
    isLoading,
    deleteMutation,
    refetchMutation
  ) => (
    <div key={category} className="mb-6">
      <h2 className="text-2xl font-bold mb-4">{category}s</h2>
      <div className="overflow-x-auto h-80">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-mainAdditionalcolor-150"></div>
          </div>
        ) : (
          <table className="min-w-full bg-white border border-gray-300 text-center ">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Quantity Available</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item) => (
                <tr key={item._id}>
                  <td className="py-2 px-4 border-b font-semibold">
                    {item._id}
                  </td>
                  <td className="py-2 px-4 border-b">{item.name}</td>
                  <td className="py-2 px-4 border-b">
                    {item.quantity_available}
                  </td>
                  <td className="py-2 px-4 border-b">${item.price}</td>

                  <td className="py-2 px-4 border-b ">
                    <button
                      type="button"
                      className="text-mainColor-400 border rounded-full py-[4px] px-2 font-semibold "
                      onClick={() =>
                        handleDelete(item._id, deleteMutation, refetchMutation)
                      }
                    >
                      remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
  console.log(toppings);
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Ingredients Control Center</h1>

      {ingredientTable(
        baseTypes,
        "Base",
        isBaseLoading,
        deleteBaseType,
        refetchBaseTypes
      )}
      {ingredientTable(
        cheeses,
        "Cheese",
        isCheeseLoading,
        deleteCheeseType,
        refetchCheeseTypes
      )}
      {ingredientTable(
        sauces,
        "Sauce",
        isSauceLoading,
        deleteSauceType,
        refetchSauceTypes
      )}
      {ingredientTable(
        toppings,
        "Topping",
        isToppingLoading,
        deleteToppingType,
        refetchToppingType
      )}
    </div>
  );
}

export { Ingredients };
