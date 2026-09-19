export interface Location {
  id: string;
  slug: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  mapEmbedUrl?: string;
  googleMapsUrl?: string;
  rating?: string;
  reviews?: string;
  description: string;
  isComingSoon?: boolean;
}

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: number;
  isVeg: boolean;
  isPopular?: boolean;
  category: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
}

export interface Event {
  id: string;
  slug: string;
  title: string;
  date: string;
  time: string;
  locationId: string;
  description: string;
  host?: string;
  capacity?: number;
  isPast?: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  content: string;
  source: string;
}
