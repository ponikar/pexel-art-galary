import * as React from "react";

declare module "react" {
  interface ImgHTMLAttributes<T> {
    datasrc?: string;
  }
}
