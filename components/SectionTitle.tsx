type SectionTitleProps = {
  label: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  label,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-6 flex flex-col gap-2">
      <p className="text-sm font-extrabold tracking-[0.25em] text-[#f5c400]">
        {label}
      </p>

      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="max-w-2xl text-base leading-7 text-gray-500">
          {description}
        </p>
      )}
    </div>
  );
}