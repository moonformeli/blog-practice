import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface IRequestParams extends AxiosRequestConfig {}

export interface IResponse<T = any>
  extends Pick<
    AxiosResponse<T>,
    "data" | "headers" | "status" | "statusText"
  > {}

export enum ERequestMethod {
  GET = "GET",
  DELETE = "DELETE",
  HEAD = "HEAD",
  OPTIONS = "OPTIONS",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH"
}
