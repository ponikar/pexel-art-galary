export interface ImageType {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  liked: "true" | "false";
}

export interface ImageAPIResponseType {
  total_results: number;
  page: number;
  per_page: number;
  photos: ImageType[];
  next_page: string;
}
