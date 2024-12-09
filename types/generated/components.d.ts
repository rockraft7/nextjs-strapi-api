import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsLInk extends Struct.ComponentSchema {
  collectionName: 'components_components_l_inks';
  info: {
    description: '';
    displayName: 'LInk';
    icon: 'brush';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface LayoutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sections';
  info: {
    description: '';
    displayName: 'Hero Section';
    icon: 'calendar';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'components.l-ink', false>;
    subHeading: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.l-ink': ComponentsLInk;
      'layout.hero-section': LayoutHeroSection;
    }
  }
}
