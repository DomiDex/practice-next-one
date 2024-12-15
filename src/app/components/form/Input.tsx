'use client';
export default function Input({
  type,
  name,
  placeholder,
  onChange,
}: {
  type: string;
  name: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className='border border-gray-300 rounded-md p-2'
    />
  );
}
