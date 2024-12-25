import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsFeature extends Struct.ComponentSchema {
  collectionName: 'components_components_features';
  info: {
    description: '';
    displayName: 'Feature';
    icon: 'check';
  };
  attributes: {
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration<
      ['CLOCK_ICON', 'CHECK_ICON', 'CLOUD_ICON']
    >;
    subHeading: Schema.Attribute.Text;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    description: '';
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ComponentsLogo extends Struct.ComponentSchema {
  collectionName: 'components_components_logos';
  info: {
    description: '';
    displayName: 'Logo';
    icon: 'emotionHappy';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface ComponentsSocial extends Struct.ComponentSchema {
  collectionName: 'components_components_socials';
  info: {
    description: '';
    displayName: 'Social';
    icon: 'wheelchair';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<['VK_ICON', 'TG_ICON', 'GITHUB_ICON']>;
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface LayoutFeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_features_sections';
  info: {
    description: '';
    displayName: 'Features Section';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    feature: Schema.Attribute.Component<'components.feature', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    description: '';
    displayName: 'Footer';
    icon: 'arrowDown';
  };
  attributes: {
    copyright: Schema.Attribute.String;
    logo: Schema.Attribute.Component<'components.logo', false>;
    social: Schema.Attribute.Component<'components.social', true>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    description: '';
    displayName: 'Header';
    icon: 'arrowUp';
  };
  attributes: {
    ctaButton: Schema.Attribute.Component<'components.link', false>;
    logo: Schema.Attribute.Component<'components.logo', false>;
  };
}

export interface LayoutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sections';
  info: {
    description: '';
    displayName: 'Hero Section';
    icon: 'slideshow';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
    link: Schema.Attribute.Component<'components.link', false>;
    subHeading: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.feature': ComponentsFeature;
      'components.link': ComponentsLink;
      'components.logo': ComponentsLogo;
      'components.social': ComponentsSocial;
      'layout.features-section': LayoutFeaturesSection;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.hero-section': LayoutHeroSection;
    }
  }
}
