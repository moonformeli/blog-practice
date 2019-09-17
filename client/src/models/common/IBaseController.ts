import { AxiosRequestConfig, Method } from "axios";

export interface IRequestParams extends AxiosRequestConfig {}

export enum ERequestMethod {
  GET = "GET",
  DELETE = "DELETE",
  HEAD = "HEAD",
  OPTIONS = "OPTIONS",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH"
}
