import Form from '../components/form/Form';

export default function page() {
  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-4'>
      <h1 className='text-4xl font-bold'>Contact </h1>
      <Form />
    </div>
  );
}
