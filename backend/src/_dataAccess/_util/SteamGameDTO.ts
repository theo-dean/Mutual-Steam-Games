export module SteamGameDTO {
  export interface PcRequirements {
    minimum: string;
    recommended: string;
  }

  export interface MacRequirements {
    minimum: string;
    recommended: string;
  }

  export interface LinuxRequirements {
    minimum: string;
    recommended: string;
  }

  export interface PriceOverview {
    currency: string;
    initial: number;
    final: number;
    discount_percent: number;
    initial_formatted: string;
    final_formatted: string;
  }

  export interface Sub {
    packageid: number;
    percent_savings_text: string;
    percent_savings: number;
    option_text: string;
    option_description: string;
    can_get_free_license: string;
    is_free_license: boolean;
    price_in_cents_with_discount: number;
  }

  export interface PackageGroup {
    name: string;
    title: string;
    description: string;
    selection_text: string;
    save_text: string;
    display_type: number;
    is_recurring_subscription: string;
    subs: Sub[];
  }

  export interface Platforms {
    windows: boolean;
    mac: boolean;
    linux: boolean;
  }

  export interface Metacritic {
    score: number;
    url: string;
  }

  export interface Category {
    id: number;
    description: string;
  }

  export interface Genre {
    id: string;
    description: string;
  }

  export interface Screenshot {
    id: number;
    path_thumbnail: string;
    path_full: string;
  }

  export interface Webm {
    480: string;
    max: string;
  }

  export interface Mp4 {
    480: string;
    max: string;
  }

  export interface Movie {
    id: number;
    name: string;
    thumbnail: string;
    webm: Webm;
    mp4: Mp4;
    highlight: boolean;
  }

  export interface Recommendations {
    total: number;
  }

  export interface Highlighted {
    name: string;
    path: string;
  }

  export interface Achievements {
    total: number;
    highlighted: Highlighted[];
  }

  export interface ReleaseDate {
    coming_soon: boolean;
    date: string;
  }

  export interface SupportInfo {
    url: string;
    email: string;
  }

  export interface ContentDescriptors {
    ids: any[];
    notes?: any;
  }

  export interface Data {
    type: string;
    name: string;
    steam_appid: number;
    required_age: number;
    is_free: boolean;
    controller_support: string;
    detailed_description: string;
    about_the_game: string;
    short_description: string;
    supported_languages: string;
    reviews: string;
    header_image: string;
    website: string;
    pc_requirements: PcRequirements;
    mac_requirements: MacRequirements;
    linux_requirements: LinuxRequirements;
    legal_notice: string;
    developers: string[];
    publishers: string[];
    price_overview: PriceOverview;
    packages: number[];
    package_groups: PackageGroup[];
    platforms: Platforms;
    metacritic: Metacritic;
    categories: Category[];
    genres: Genre[];
    screenshots: Screenshot[];
    movies: Movie[];
    recommendations: Recommendations;
    achievements: Achievements;
    release_date: ReleaseDate;
    support_info: SupportInfo;
    background: string;
    content_descriptors: ContentDescriptors;
  }

  export interface IRootObject {
    success: boolean;
    data: Data;
  }
}