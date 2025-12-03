import type { Schema, Struct } from '@strapi/strapi';

export interface ListaAreas extends Struct.ComponentSchema {
  collectionName: 'components_lista_areas';
  info: {
    displayName: 'areas';
    icon: 'alien';
  };
  attributes: {
    descripcion: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images'>;
    nombre: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'lista.areas': ListaAreas;
    }
  }
}
