import { useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";

export function useNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  const navigateToSection = useCallback(
    (href: string) => {
      // Extract section ID from href (e.g., "/#about" -> "about")
      const isSectionLink = href.startsWith("/#");
      const sectionId = isSectionLink ? href.substring(2) : null;

      // Handle home link - scroll to top
      if (href === "/" && pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      // If it's a section link and we're on the home page, just scroll
      if (isSectionLink && pathname === "/") {
        // Add a small delay for mobile to ensure menu is closed
        setTimeout(() => {
          const element = document.getElementById(sectionId!);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else if (isSectionLink) {
        // Navigate to home page with the section hash
        router.push(`/${sectionId ? `?section=${sectionId}` : ""}`);
        // Scroll to section after navigation - use longer delay to let page fully load
        setTimeout(() => {
          const element = document.getElementById(sectionId!);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 600);
      } else {
        // Regular page navigation
        router.push(href);
      }
    },
    [pathname, router]
  );

  return { navigateToSection };
}
