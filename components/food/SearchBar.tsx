import { Input } from "@/components/ui/Input";

interface SearchBarProps {
  placeholder?: string;
}

export function SearchBar({ placeholder = "Search menu" }: SearchBarProps) {
  return (
    <div className="w-full max-w-xl">
      <Input type="search" placeholder={placeholder} aria-label="Search menu" />
    </div>
  );
}
