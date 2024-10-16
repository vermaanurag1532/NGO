import React, { useState } from "react";

export function Dialog({ children, open, onOpenChange }) {
  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${open ? "" : "hidden"}`}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity"
          onClick={() => onOpenChange(false)}
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        {children}
      </div>
    </div>
  );
}

export function DialogContent({ children }) {
  return (
    <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
      {children}
    </div>
  );
}

export function DialogHeader({ children }) {
  return <div className="sm:flex sm:items-start">{children}</div>;
}

export function DialogTitle({ children }) {
  return (
    <h3 className="text-lg leading-6 font-medium text-gray-900">{children}</h3>
  );
}

export function DialogTrigger({ children, asChild }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => setIsOpen(!isOpen);

  const Trigger = asChild ? (
    children
  ) : (
    <button
      type="button"
      onClick={toggleDialog}
      className="text-primary-600 hover:text-primary-900"
    >
      {children}
    </button>
  );

  return (
    <>
      {React.cloneElement(Trigger, { onClick: toggleDialog })}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        {children}
      </Dialog>
    </>
  );
}
