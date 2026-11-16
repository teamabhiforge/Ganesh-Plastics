export type PagePath =
  | 'home'
  | 'about-us'
  | 'products'
  | 'product-details'
  | 'manufacturing-and-quality'
  | 'why-choose-us'
  | 'contact-us'
  | 'enquiry-received';

export type ProductCategory =
  | 'all'
  | 'cylindrical'
  | 'jerrycans'
  | 'narrow-neck'
  | 'wide-mouth';

export interface Product {
  id: string;
  sku: string;
  name: string;
  category: 'cylindrical' | 'jerrycans' | 'narrow-neck' | 'wide-mouth';
  badge: string;
  subBadge?: string;
  tag: string;
  description: string;
  image: string;
  galleryImages: { label: string; url: string }[];
  sizes: string;
  resinGrade: string;
  closureType: string;
  wallThickness?: string;
  chemicalLine?: string;
  sealIntegrity?: string;
  nominalCapacity?: string;
  grammage?: string;
  typicalPayload?: string;
  dimensions?: string;
  colourOptions?: string;
  compatibleMedia?: string;
}

export interface RFQFormData {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  productCategory: string;
  monthlyVolume?: string;
  inductionSeal?: boolean;
  tamperEvident?: boolean;
  measuringCap?: boolean;
  specDetails: string;
  urgentDispatch?: boolean;
}
