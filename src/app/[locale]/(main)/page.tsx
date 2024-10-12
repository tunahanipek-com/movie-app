import LoginButton from '@/components/login-button';
import LogoutButton from '@/components/logout-button';
import ToggleLanguage from '@/components/toggle-language';
import { ToggleTheme } from '@/components/toggle-theme';
import { Link } from '@/navigation';

function page() {
  return (
    <div className="flex gap-5">
      <div className="flex gap-4 w-1/2">
        <LogoutButton width="max" />
        <LoginButton />
      </div>
      <Link href="/hello/tuna">Hello</Link>
      <Link href="/asdasdasd">dsadsadsad</Link>
      <ToggleTheme />
      <ToggleLanguage />
    </div>
  );
}

export default page;
