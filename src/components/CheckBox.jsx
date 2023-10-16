function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

function CheckBox(props) {
  return (
    <input
      type="checkbox"
      className={cn(
        "inline-flex h-4 w-4 shrink-0 cursor-pointer appearance-none items-center justify-center rounded-full border-2 border-blue-500 text-gray-100 before:text-xs checked:border-blue-500 checked:bg-blue-500 checked:before:content-['✓']",
        props.task ? "ring-focus-task" : "ring-focus",
        props.className,
      )}
      onChange={props.onChange}
      checked={props.checked}
      name={props.name}
      id={props.id}
    />
  );
}

export default CheckBox;
