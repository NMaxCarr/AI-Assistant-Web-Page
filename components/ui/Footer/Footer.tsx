export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1920px] p-6 ">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div>
          <span>
            &copy; {new Date().getFullYear()} HumanLovesAI ❤️ All rights
            reserved.
          </span>
        </div>
        <div className="flex items-center space-x-6"></div>
      </div>
    </footer>
  );
}
