type WindowsLogoProps = {
  className?: string;
};

export const WindowsLogo = ({ className }: WindowsLogoProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
    >
      <path
        fill="#0078d4"
        d="M67.328 67.331h60.669V128H67.328zm-67.325 0h60.669V128H.003zM67.328 0h60.669v60.669H67.328zM.003 0h60.669v60.669H.003z"
      />
    </svg>
  );
};
