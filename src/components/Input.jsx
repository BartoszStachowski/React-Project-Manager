import { forwardRef } from "react";

const Input = forwardRef(({ label, textarea, ...props }, ref) => {
  const classes =
    "w-full rounded-sm border-b-2 border-stone-300 bg-stone-200 p-1 text-stone-600 focus:border-stone-600 focus:outline-none";

  return (
    <p className="my-4 flex flex-col gap-1">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
});

Input.displayName = "Input";

export default Input;
