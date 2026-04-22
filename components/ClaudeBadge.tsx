export default function ClaudeBadge() {
  return (
    <a
      href="https://claude.ai/code"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111] text-white text-xs font-medium hover:bg-[#333] transition-all duration-200 hover:scale-105 shadow-sm group"
    >
      {/* Claude spark icon */}
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        className="flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity"
      >
        <path
          d="M12 2C12 2 13.5 7 17 8.5C13.5 10 12 15 12 15C12 15 10.5 10 7 8.5C10.5 7 12 2 12 2Z"
          fill="white"
        />
        <path
          d="M19 14C19 14 19.75 16.5 21.5 17.25C19.75 18 19 20.5 19 20.5C19 20.5 18.25 18 16.5 17.25C18.25 16.5 19 14 19 14Z"
          fill="white"
          opacity="0.7"
        />
        <path
          d="M5 3C5 3 5.75 5.5 7.5 6.25C5.75 7 5 9.5 5 9.5C5 9.5 4.25 7 2.5 6.25C4.25 5.5 5 3 5 3Z"
          fill="white"
          opacity="0.5"
        />
      </svg>
      <span>Built with Claude Code</span>
    </a>
  );
}
