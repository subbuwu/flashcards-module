const DifficultyIndicator = ({ difficulty }: { difficulty: number }) => (
    <div className="text-sm text-gray-600 mt-4">
      {difficulty}% users face trouble mastering this card
    </div>
  );