import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsBouton extends Struct.ComponentSchema {
  collectionName: 'components_elements_boutons';
  info: {
    displayName: 'Bouton';
  };
  attributes: {
    bgColor: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    nouvelOnglet: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    textColor: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    texte: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsElement extends Struct.ComponentSchema {
  collectionName: 'components_elements_elements';
  info: {
    displayName: 'Element';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    image: Schema.Attribute.Media<'images'>;
    titre: Schema.Attribute.String;
  };
}

export interface ElementsLien extends Struct.ComponentSchema {
  collectionName: 'components_elements_liens';
  info: {
    displayName: 'Lien';
  };
  attributes: {
    nouvelOnglet: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    texte: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsLienReseau extends Struct.ComponentSchema {
  collectionName: 'components_elements_lien_reseaus';
  info: {
    displayName: 'LienReseau';
  };
  attributes: {
    lien: Schema.Attribute.Component<'elements.lien', false>;
    reseau: Schema.Attribute.Enumeration<
      ['YOUTUBE', 'TWITTER', 'DISCORD', 'WEBSITE', 'LINKEDIN', 'FACEBOOK']
    >;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    texte: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsAPropos extends Struct.ComponentSchema {
  collectionName: 'components_sections_a_propos';
  info: {
    displayName: '\u00C0 propos';
  };
  attributes: {
    bouton: Schema.Attribute.Component<'elements.bouton', false>;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    elements: Schema.Attribute.Component<'elements.element', true>;
    liens_reseaux: Schema.Attribute.Component<'elements.lien-reseau', true>;
    styles: Schema.Attribute.Component<'utils.css', false>;
    titre: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface SectionsBlocElementImage extends Struct.ComponentSchema {
  collectionName: 'components_sections_bloc_element_images';
  info: {
    displayName: 'BlocElementImage';
  };
  attributes: {
    bouton: Schema.Attribute.Component<'elements.bouton', false>;
    elements: Schema.Attribute.Component<'elements.element', true>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    position_image: Schema.Attribute.Enumeration<['gauche', 'droite']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'droite'>;
    styles: Schema.Attribute.Component<'utils.css', false>;
    titre: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface SectionsBlocTexteImage extends Struct.ComponentSchema {
  collectionName: 'components_sections_bloc_texte_images';
  info: {
    displayName: 'BlocTexteImage';
  };
  attributes: {
    bouton: Schema.Attribute.Component<'elements.bouton', false>;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    position_image: Schema.Attribute.Enumeration<['gauche', 'droite']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'droite'>;
    styles: Schema.Attribute.Component<'utils.css', false>;
    titre: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface SectionsContact extends Struct.ComponentSchema {
  collectionName: 'components_sections_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    bouton: Schema.Attribute.Component<'elements.bouton', false>;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    elements: Schema.Attribute.Component<'elements.element', true>;
    liens: Schema.Attribute.Component<'elements.lien', true>;
    liens_reseaux: Schema.Attribute.Component<'elements.lien-reseau', true>;
    styles: Schema.Attribute.Component<'utils.css', false>;
    titre: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface SectionsEntete extends Struct.ComponentSchema {
  collectionName: 'components_sections_entetes';
  info: {
    displayName: 'Ent\u00EAte';
  };
  attributes: {
    styles: Schema.Attribute.Component<'utils.css', false>;
    titre: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface SectionsFaq extends Struct.ComponentSchema {
  collectionName: 'components_sections_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    elements: Schema.Attribute.Component<'elements.element', true>;
    titre: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface SectionsFonctionnalites extends Struct.ComponentSchema {
  collectionName: 'components_sections_fonctionnalites';
  info: {
    displayName: 'Fonctionnalit\u00E9s';
  };
  attributes: {
    bouton: Schema.Attribute.Component<'elements.bouton', false>;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    elements: Schema.Attribute.Component<'elements.element', true>;
    styles: Schema.Attribute.Component<'utils.css', false>;
    titre: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface SectionsFormulaireDeContant extends Struct.ComponentSchema {
  collectionName: 'components_sections_formulaire_de_contants';
  info: {
    displayName: 'FormulaireDeContant';
  };
  attributes: {
    styles: Schema.Attribute.Component<'utils.css', false>;
  };
}

export interface SectionsGalerie extends Struct.ComponentSchema {
  collectionName: 'components_sections_galeries';
  info: {
    displayName: 'Galerie';
  };
  attributes: {
    bouton: Schema.Attribute.Component<'elements.bouton', false>;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    elements: Schema.Attribute.Component<'elements.element', true>;
    styles: Schema.Attribute.Component<'utils.css', false>;
    titre: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    bouton: Schema.Attribute.Component<'elements.bouton', false>;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    elements: Schema.Attribute.Component<'elements.element', true>;
    image: Schema.Attribute.Media<'images'>;
    styles: Schema.Attribute.Component<'utils.css', false>;
    titre: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface SectionsListeBlog extends Struct.ComponentSchema {
  collectionName: 'components_sections_liste_blogs';
  info: {
    displayName: 'ListeBlog';
  };
  attributes: {
    styles: Schema.Attribute.Component<'utils.css', false>;
  };
}

export interface SectionsMarquee extends Struct.ComponentSchema {
  collectionName: 'components_sections_marquees';
  info: {
    displayName: 'Marquee';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    elements: Schema.Attribute.Component<'elements.element', true>;
    styles: Schema.Attribute.Component<'utils.css', false>;
    titre: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface SectionsPiedDePage extends Struct.ComponentSchema {
  collectionName: 'components_sections_pied_de_pages';
  info: {
    displayName: 'Pied de page';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    liens: Schema.Attribute.Component<'elements.lien', true>;
    liens_reseaux: Schema.Attribute.Component<'elements.lien-reseau', true>;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    styles: Schema.Attribute.Component<'utils.css', false>;
    titre: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface SectionsTemoignages extends Struct.ComponentSchema {
  collectionName: 'components_sections_temoignages';
  info: {
    displayName: 'T\u00E9moignages';
  };
  attributes: {
    bouton: Schema.Attribute.Component<'elements.bouton', false>;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    styles: Schema.Attribute.Component<'utils.css', false>;
    temoignages: Schema.Attribute.Relation<
      'oneToMany',
      'api::temoignage.temoignage'
    >;
    titre: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface UtilsCss extends Struct.ComponentSchema {
  collectionName: 'components_utils_csses';
  info: {
    displayName: 'CSS';
  };
  attributes: {
    bgColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    bgImage: Schema.Attribute.Media<'images'>;
    paddingTop: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    textColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface UtilsSeo extends Struct.ComponentSchema {
  collectionName: 'components_utils_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    publisher: Schema.Attribute.String;
    sharedImage: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.bouton': ElementsBouton;
      'elements.element': ElementsElement;
      'elements.lien': ElementsLien;
      'elements.lien-reseau': ElementsLienReseau;
      'elements.logo': ElementsLogo;
      'sections.a-propos': SectionsAPropos;
      'sections.bloc-element-image': SectionsBlocElementImage;
      'sections.bloc-texte-image': SectionsBlocTexteImage;
      'sections.contact': SectionsContact;
      'sections.entete': SectionsEntete;
      'sections.faq': SectionsFaq;
      'sections.fonctionnalites': SectionsFonctionnalites;
      'sections.formulaire-de-contant': SectionsFormulaireDeContant;
      'sections.galerie': SectionsGalerie;
      'sections.hero': SectionsHero;
      'sections.liste-blog': SectionsListeBlog;
      'sections.marquee': SectionsMarquee;
      'sections.pied-de-page': SectionsPiedDePage;
      'sections.temoignages': SectionsTemoignages;
      'utils.css': UtilsCss;
      'utils.seo': UtilsSeo;
    }
  }
}
