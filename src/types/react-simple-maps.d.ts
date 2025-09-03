declare module 'react-simple-maps' {
  import { ComponentType, ReactNode } from 'react';

  export interface GeographyObject {
    rsmKey: string;
    properties: Record<string, unknown>;
    geometry: Record<string, unknown>;
  }

  export interface ComposableMapProps {
    children?: ReactNode;
    projection?: string;
    projectionConfig?: {
      center?: [number, number];
      scale?: number;
    };
    width?: number;
    height?: number;
    className?: string;
  }

  export interface GeographiesProps {
    children: (props: { geographies: GeographyObject[] }) => ReactNode;
    geography: string;
  }

  export interface GeographyProps {
    geography: GeographyObject;
    className?: string;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    style?: {
      default?: Record<string, unknown>;
      hover?: Record<string, unknown>;
      pressed?: Record<string, unknown>;
    };
  }

  export interface MarkerProps {
    coordinates: [number, number];
    children?: ReactNode;
    className?: string;
  }

  export const ComposableMap: ComponentType<ComposableMapProps>;
  export const Geographies: ComponentType<GeographiesProps>;
  export const Geography: ComponentType<GeographyProps>;
  export const Marker: ComponentType<MarkerProps>;
}