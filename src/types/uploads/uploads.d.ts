import { Url } from 'url'

export declare type UploadCloudinaryResponse = {
  asset_id: string
  public_id: string
  version: number
  version_id: string
  signature: string
  width: number
  height: number
  format: string
  resource_type: string
  created_at: TDateISOWithoutMilliseconds
  tags: Array<string>
  bytes: number
  type: string
  etag: string
  placeholder: boolean
  url: Url
  secure_url: Url
  folder: string
  access_mode: string
  existing: boolean
  original_filename: string
}
