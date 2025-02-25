import { MoreVertical } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useFlashcard } from '@/context/FlashcardContext';
import { Button } from '../ui/button';


export const FlashcardMenu = () => {
  const { currentCard } = useFlashcard();

  if (!currentCard) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Add note</DropdownMenuItem>
        <DropdownMenuItem>Hide card</DropdownMenuItem>
        <DropdownMenuItem className="text-red-600">Remove card</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};