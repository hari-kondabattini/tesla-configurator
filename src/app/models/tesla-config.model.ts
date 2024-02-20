
// export interface CarModelOptions {
//     // code: number;
//     // code: string;
//     code: CarModelCode;
//     description: string;
//     colors: CarModelColor[];
// }

// export type CarModelCode = '3' | 'C' | 'S' | 'X' | 'Y';

// export interface CarModelColor {
//     code: CarModelColorCode;
//     description: string;
//     price: number;
// }

// export type CarModelColorCode = 'black' | 'blue' | 'grey' | 'red' | 'white';






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
  