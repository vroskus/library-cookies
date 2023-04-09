// Types
export type $Options = {
  path?: string;
  expires?: Date;
  maxAge?: number;
  domain?: string;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: boolean;
};

export type $CookiesInstance = {
  get: (key: string) => string | void;
  set: (key: string, value: string, options?: $Options) => void;
  remove: (key: string, options?: $Options) => void;
};
