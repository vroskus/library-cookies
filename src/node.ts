// Types
import type {
  Request as $Request,
} from 'express';

// Helpers
import Cookies from 'universal-cookie';
import cookiesMiddleware from 'universal-cookie-express';
import _ from 'lodash';

// Types
import type {
  CookieSetOptions as $Options,
} from 'universal-cookie';

const getInstance = (req: $Request): Cookies => {
  const cookiesInstance = _.get(
    req,
    'universalCookies',
  );

  if (!cookiesInstance) {
    throw new Error('No cookies middleware');
  }

  return cookiesInstance;
};

export const getItem = (req: $Request, key: string): string | undefined => {
  const cookiesInstance = getInstance(req);

  return cookiesInstance.get(key);
};

export const setItem = (req: $Request, key: string, value: string, options?: $Options): void => {
  const cookiesInstance = getInstance(req);

  cookiesInstance.set(
    key,
    value,
    options,
  );
};

export const removeItem = (req: $Request, key: string, options?: $Options): void => {
  const cookiesInstance = getInstance(req);

  cookiesInstance.remove(
    key,
    options,
  );
};

export default cookiesMiddleware;
