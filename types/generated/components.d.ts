import type { Schema, Struct } from '@strapi/strapi';

export interface BloquesAreaDetalle extends Struct.ComponentSchema {
  collectionName: 'components_bloques_area_detalles';
  info: {
    displayName: 'areaDetalle';
    icon: 'alien';
  };
  attributes: {
    descripcion: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images'>;
    nombre: Schema.Attribute.String;
  };
}

export interface NavegadorMenu extends Struct.ComponentSchema {
  collectionName: 'components_navegador_menus';
  info: {
    displayName: 'menu';
    icon: 'alien';
  };
  attributes: {
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'bloques.area-detalle': BloquesAreaDetalle;
      'navegador.menu': NavegadorMenu;
    }
  }
}
