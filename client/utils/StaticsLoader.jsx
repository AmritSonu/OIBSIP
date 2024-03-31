function StaticsLoader() {
  return (
    <div className="flex items-center justify-center my-10 py-32">
      <span className="font-mono text-sm font-semibold">
        statics are loading....
      </span>
      <div className="border-t-4 border-black animate-spin rounded-full h-14 w-14"></div>
    </div>
  );
}

export { StaticsLoader };
