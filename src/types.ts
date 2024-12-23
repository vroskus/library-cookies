// Types
export type $Options = {
  domain?: string;
  expires?: Date;
  httpOnly?: boolean;
  maxAge?: number;
  path?: string;
  sameSite?: boolean;
  secure?: boolean;
};

/* eslint-disable perfectionist/sort-modules */
export type $CookiesInstance = {
  get: (key: string) => string | undefined;
  remove: (key: string, options?: $Options) => void;
  set: (key: string, value: string, options?: $Options) => void;
};
