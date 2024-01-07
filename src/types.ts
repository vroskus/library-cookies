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

export type $CookiesInstance = {
  get: (key: string) => string | void;
  remove: (key: string, options?: $Options) => void;
  set: (key: string, value: string, options?: $Options) => void;
};
