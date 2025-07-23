export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white p-6 mt-10">
      <div className="max-w-7xl mx-auto text-center text-sm">
        © {new Date().getFullYear()} MeuSite. Todos os direitos reservados.
      </div>
    </footer>
  );
}
