type NavbarProps = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

const navLinks = [
  { name: 'About', key: 'about' },
  { name: 'Projects', key: 'projects' }
];

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-700 py-4 px-8 shadow-lg animate-fade-in
                    rounded-t-2xl xl:rounded-none xl:rounded-tr-2xl xl:rounded-bl-2xl
                    xl:w-fit xl:ml-auto">
      <ul className="flex space-x-8 justify-center /* Center links on mobile */">
        {navLinks.map((link) => (
          <li key={link.key}>
            <button
              onClick={() => setActiveSection(link.key)}
              className={`cursor-pointer bg-transparent border-none text-gray-300 hover:text-orange-500 transition-colors ${
                activeSection === link.key ? 'text-orange-400 font-semibold' : ''
              }`}
            >
              {link.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}