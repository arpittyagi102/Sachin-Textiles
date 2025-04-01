type Product = {
  Product_Category: string;
  Images: string[];
  Product_Name: string;
  Description: string;
  Feature?: string | number; // todo: Fix the type here
  Price: string;
  Price_Value: number;
  Gender: string;
  Style: string;
  Material: string;
  Pattern: string;
  Color: string;
  Sleeve_Style: string;
  Size: string;
  type: string;
  handeling?: string | number; // todo: Fix the type here
  Waist_Pocket: string;
  Texture: string;
  Strength: string;
  Filling: string;
  Reusable: string;
  Disposable: string;
  Shape: string;
  Washable: string;
  id: string;
  rating?: number;
};

interface ProductInCart extends Product {
  quantity: number;
  colorIndexSelected?: number;
}

export type { Product, ProductInCart };
