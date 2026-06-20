export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">

      {/* NAVBAR */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-white/10 backdrop-blur-md bg-black/40 sticky top-0">
        <h1 className="text-xl font-bold tracking-widest">
          DTECH
        </h1>

        <nav className="flex gap-6 text-sm text-gray-300">
          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#products" className="hover:text-white transition">Products</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="text-center py-24">
        <h2 className="text-5xl font-bold mb-4">
          The Future of Technology
        </h2>

        <p className="text-gray-400">
          DTECH builds next-generation smart devices
        </p>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="px-6 pb-20">
        <h3 className="text-2xl font-bold mb-6">Products</h3>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

          <a href="/dphone" className={glassCard}>📱 DPHONE</a>
          <a href="/dpad" className={glassCard}>📟 DPAD</a>
          <a href="/dbook" className={glassCard}>💻 DBOOK</a>
          <a href="/dwatch" className={glassCard}>⌚ DWATCH</a>
          <a href="/dbuds" className={glassCard}>🎧 DBUDS</a>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="text-center py-20 border-t border-white/10">
        <h3 className="text-xl font-bold">Contact DTECH</h3>
        <p className="text-gray-400 mt-2">support@dtech.com</p>
      </section>

    </main>
  );
}

/* GLASS STYLE */
const glassCard =
  "bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/10 transition transform hover:scale-105";
