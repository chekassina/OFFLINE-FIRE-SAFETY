export interface Product {
  id: string;
  name: string;
  category: 'extinguishers' | 'alarms' | 'safety' | 'emergency' | 'hose';
  description: string;
  image: string;
  features: string[];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  details: string[];
}

export interface Project {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'extinguishers' | 'installations' | 'alarms' | 'training' | 'events' | 'projects';
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ClientItem {
  id: string;
  name: string;
  category: string;
}
