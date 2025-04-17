export default function Button({ text, type }) {
  if (type === "primary") {
    return (
      <div class="flex justify-center mt-10">
        <button class="bg-orange-600 px-4 py-2 text-black font-sans font-semibold rounded-md cursor-pointer hover:bg-orange-300">
          {text}
        </button>
      </div>
    );
  } else {
    return (
      <div class="flex justify-center mt-10">
        <button class="bg-white px-4 py-2 text-black font-sans font-semibold rounded-md cursor-pointer hover:bg-gray-400">
          {text}
        </button>
      </div>
    );
  }
}
