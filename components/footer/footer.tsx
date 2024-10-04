import { BRAND_NAME } from '@/app/configuration';


export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1920px] p-6 ">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div>
          <span>
            &copy; {new Date().getFullYear()} {BRAND_NAME}
          </span>
        </div>
        <div className="flex items-center space-x-6"></div>
      </div>
    </footer>
  );
}
