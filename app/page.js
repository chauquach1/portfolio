import NavBar from "./components/NavBar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <NavBar />
      <div className="container bg-gray-600 w-full h-1/2">
        <h1 className="text-5xl text-center text-white">Chau Quach</h1>
        <h2 className="text-3xl text-center text-white">Software Engineer</h2>
      </div>
    </main>
  );
}
