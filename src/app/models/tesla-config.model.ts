export interface CarModelOptions {
    code: string;
    description: string;
    colors: CarModelColor[];
}

export interface CarModelColor {
    code: string;
    description: string;
    price: number;
}

export interface CarModelConfigOptions {
    configs: CarModelConfigs[];
    towHitch: boolean;
    yoke: boolean;
}

export interface CarModelConfigs {
    id: number;
    description: string;
    range: number;
    speed: number;
    price: number;
}
  