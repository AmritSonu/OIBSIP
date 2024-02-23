import { useState } from "react";
import {
  useGetAllBaseTypeQuery,
  useDeleteBaseTypeMutation,
  useCreateBaseTypeMutation,
  useGetAllSauceTypeQuery,
  useDeleteSauceTypeMutation,
  useCreateSauceTypeMutation,
  useGetAllToppingQuery,
  useDeleteToppingTypeMutation,
  useCreateToppingMutation,
  useGetAllCheeseTypeQuery,
  useDeleteCheeseTypeMutation,
  useCreateCheeseTypeMutation,
} from "../../apis/ingredientsAPI";

function Ingredients() {
  // Base Types
  const {
    data: baseTypes,
    isLoading: isBaseLoading,
    refetch: refetchBaseTypes,
    error,
  } = useGetAllBaseTypeQuery();
  const [deleteBaseType] = useDeleteBaseTypeMutation();
  const [createBaseType] = useCreateBaseTypeMutation(); // Added

  // Sauce Types
  const {
    data: sauces,
    isLoading: isSauceLoading,
    refetch: refetchSauceTypes,
  } = useGetAllSauceTypeQuery();
  const [deleteSauceType] = useDeleteSauceTypeMutation();
  const [createSauceType] = useCreateSauceTypeMutation(); // Added

  // Topping Types
  const {
    data: toppings,
    isLoading: isToppingLoading,
    refetch: refetchToppingType,
  } = useGetAllToppingQuery();
  const [deleteToppingType] = useDeleteToppingTypeMutation();
  const [createTopping] = useCreateToppingMutation(); // Added

  // Cheese Types
  const {
    data: cheeses,
    isLoading: isCheeseLoading,
    refetch: refetchCheeseTypes,
  } = useGetAllCheeseTypeQuery();
  const [deleteCheeseType] = useDeleteCheeseTypeMutation();
  const [createCheeseType] = useCreateCheeseTypeMutation(); // Added

  const [newBaseType, setNewBaseType] = useState({
    name: "",
    quantity_available: 0,
    price: 0,
    description: "",
  });
  const [newSauceType, setNewSauceType] = useState({
    name: "",
    quantity_available: 0,
    price: 0,
    description: "",
  });
  const [newToppingType, setNewToppingType] = useState({
    name: "",
    quantity_available: 0,
    price: 0,
    description: "",
  });
  const [newCheeseType, setNewCheeseType] = useState({
    name: "",
    quantity_available: 0,
    price: 0,
    description: "",
  });

  //
  if (error) {
    console.log(error);
  }
  //

  const handleDelete = async (id, deleteMutation, refetchMutation) => {
    try {
      // Call the delete mutation
      await deleteMutation(id);
      refetchMutation();
    } catch (error) {
      console.error("Error deleting ingredient:", error);
    }
  };

  const handleCreate = async (newItem, createMutation, refetchMutation) => {
    try {
      // Call the create mutation
      await createMutation(newItem);
      refetchMutation();
    } catch (error) {
      console.error("Error creating ingredient:", error);
    }
  };

  const ingredientTable = (
    data,
    category,
    isLoading,
    deleteMutation,
    refetchMutation,
    createMutation,
    newItem,
    setNewItem
  ) => (
    <div key={category} className="my-1 border shadow-md mb-20">
      <div className="p-5 mb-5 border ">
        <h2 className="text-3xl font-bold mb-4">{category}s</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="mb-4">
            <label
              htmlFor={`${category}Name`}
              className="block text-sm font-semibold mb-1"
            >
              {category} Name
            </label>
            <input
              id={`${category}Name`}
              type="text"
              placeholder={`${category} Name`}
              className="border rounded p-2 w-full"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor={`${category}Quantity`}
              className="block text-sm font-semibold mb-1"
            >
              Quantity Available
            </label>
            <input
              id={`${category}Quantity`}
              type="number"
              placeholder="Quantity Available"
              className="border rounded p-2 w-full"
              value={newItem.quantity_available}
              onChange={(e) =>
                setNewItem({
                  ...newItem,
                  quantity_available: parseInt(e.target.value, 10),
                })
              }
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor={`${category}Price`}
              className="block text-sm font-semibold mb-1"
            >
              Price
            </label>
            <input
              id={`${category}Price`}
              type="number"
              placeholder={`Price`}
              className="border rounded p-2 w-full"
              value={newItem.price}
              onChange={(e) =>
                setNewItem({
                  ...newItem,
                  price: parseFloat(e.target.value),
                })
              }
            />
          </div>
          {/*  */}
          <div className="mb-4">
            <label
              htmlFor={`${category}Quantity`}
              className="block text-sm font-semibold mb-1"
            >
              Description
            </label>
            <input
              id={`${category}Description`}
              type="input"
              placeholder="Description"
              className="border rounded p-2 w-full"
              value={newItem.description}
              onChange={(e) =>
                setNewItem({
                  ...newItem,
                  description: e.target.value,
                })
              }
            />
          </div>
          {/*  */}
          <div>
            <button
              type="button"
              className="col-span-full bg-blue-500 text-white px-4 py-2 font-bold hover:bg-mainLightcolor-200"
              onClick={() =>
                handleCreate(newItem, createMutation, refetchMutation)
              }
            >
              Create
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4 text-center">All {category}s</h2>
      <div className="overflow-x-auto max-h-52">
        {isLoading ? (
          <div className="flex items-center justify-center h-full my-10">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-400"></div>
          </div>
        ) : (
          <table className="min-w-full bg-white border border-gray-300 text-center ">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">No.</th>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Quantity Available</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => (
                <tr key={item._id}>
                  <td className="py-2 px-4 border-b font-semibold">
                    {index + 1}
                  </td>
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

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center font-serif">
        Ingredients Control Center
      </h1>
      {ingredientTable(
        baseTypes,
        "Base",
        isBaseLoading,
        deleteBaseType,
        refetchBaseTypes,
        createBaseType,
        newBaseType,
        setNewBaseType
      )}
      {ingredientTable(
        cheeses,
        "Cheese",
        isCheeseLoading,
        deleteCheeseType,
        refetchCheeseTypes,
        createCheeseType,
        newCheeseType,
        setNewCheeseType
      )}
      {ingredientTable(
        sauces,
        "Sauce",
        isSauceLoading,
        deleteSauceType,
        refetchSauceTypes,
        createSauceType,
        newSauceType,
        setNewSauceType
      )}
      {ingredientTable(
        toppings,
        "Topping",
        isToppingLoading,
        deleteToppingType,
        refetchToppingType,
        createTopping,
        newToppingType,
        setNewToppingType
      )}
    </div>
  );
}

export { Ingredients };
