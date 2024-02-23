export function Error() {
  return (
    <div className="h-80">
      <div className="ml-24 mt-20 w-60">
        <h1 className="font-bold text-red-500 text-4xl">Oops!</h1>
        <p className="text-gray-600 mt-2 text-3xl">
          Something went wrong. Please try again later.
        </p>
      </div>
    </div>
  );
}
