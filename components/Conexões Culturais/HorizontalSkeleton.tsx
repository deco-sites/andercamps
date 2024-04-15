export default function HorizontalSkeleton() {
  return (
    <li class="flex flex-row max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-4 col-span-1 min-w-full h-[220px]">
      <figure class="skeleton bg-gray-200 rounded w-1/3"></figure>
      <div class="flex flex-col justify-between p-4 w-2/3">
        <div>
          <div class="skeleton bg-gray-200 h-6 w-4/6 md:w-full mb-2"></div>
          <div class="skeleton bg-gray-200 h-4 w-3/6 md:w-full"></div>
        </div>
        <div class="mt-3 flex items-center justify-between">
          <button
            class="skeleton px-4 py-2 bg-gray-200 text-white rounded"
            disabled
          >
            Carregando...
          </button>
        </div>
      </div>
    </li>
  );
}
