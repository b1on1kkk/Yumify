export default function SubmitButton({ title }: { title: string }) {
  return (
    <button
      className="bg-indigo-400 w-full h-12 text-white font-semibold rounded-sm mt-5 active:translate-y-0.5 hover:bg-indigo-500 transition-colors duration-200"
      type="submit"
    >
      {title}
    </button>
  );
}
