// Helpers
import Cookies from 'universal-cookie';

// Types
import type {
  CookieSetOptions as $Options,
} from 'universal-cookie';

class CookiesServiceWrap {
  cookiesInstance: Cookies;

  constructor() {
    this.cookiesInstance = new Cookies();
  }

  getItem(key: string): string | undefined {
    return this.cookiesInstance.get(key);
  }

  setItem(key: string, value: string, options?: $Options): void {
    this.cookiesInstance.set(
      key,
      value,
      options,
    );
  }

  removeItem(key: string, options?: $Options): void {
    this.cookiesInstance.remove(
      key,
      options,
    );
  }
}

export default CookiesServiceWrap;
