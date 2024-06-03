import Main from './components/todoMain';
export default function Home() {
  useState();
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Main props={val} />
    </main>
  );
}
