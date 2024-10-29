export default function Home() {
  return (
    <main className=" min-h-screen bg-gradient-to-b from-red-700 to-black text-white flex flex-col items-center justify-center p-6 font-serif">
      {/* Hero Section */}
      <section className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to the Marvel Universe
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Dive into the world of superheroes, villains, and legendary
          adventures. Explore your favorite characters and comics!
        </p>
        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="/series"
            className="bg-yellow-400 hover:bg-yellow-900 text-black font-semibold py-2 px-6 rounded-lg transition duration-300"
          >
            Explore Series
          </a>
          <a
            href="/comiccard"
            className="bg-yellow-400 hover:bg-yellow-900 text-black font-semibold py-2 px-6 rounded-lg transition duration-300"
          >
            Discover Comics
          </a>
        </div>
      </section>

      {/* Featured Content */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        {/* Characters Card */}
        <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-bold mb-2">Marvel Series</h2>
          <p className="text-sm mb-4">
            Discover iconic characters like Spider-Man, Iron Man, Captain
            America, and many more.
          </p>
          <a
            href="/series"
            className="text-red-600 font-semibold hover:underline"
          >
            Learn More &rarr;
          </a>
        </div>

        {/* Comics Card */}
        <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-bold mb-2">Marvel Comics</h2>
          <p className="text-sm mb-4">
            Dive into legendary comic book series and explore the Marvel lore
            from the beginning.
          </p>
          <a
            href="/comiccard"
            className="text-red-600 font-semibold hover:underline"
          >
            Learn More &rarr;
          </a>
        </div>
      </section>
    </main>
  );
}
