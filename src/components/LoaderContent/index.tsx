export const LoaderContent = () => {
  return (
    <div className="mx-auto h-full max-w-4xl flex flex-grow items-center justify-center">
      <div
        className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-matisse-600 border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  )
}