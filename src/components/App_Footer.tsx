"use client";
import "../app/globals.css";

interface AppFooterProps {
  isSidebarClosed: boolean;
}

export default function AppFooter({ isSidebarClosed }: AppFooterProps) {
  return (
    <footer
      className={`body-text transition-all duration-300 ease-in-out ${isSidebarClosed ? "ml-24" : "ml-64"} bg-body-color text-text-color p-4`}>
      <p>&copy; 2024 Streamline Researchers. All rights reserved.</p>
    </footer>
  );
}