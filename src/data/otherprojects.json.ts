export interface Template {
  slug: string;
  title: string;
  text: string;
  images: Array<string>;
}

const branding: Template = {
  slug: "branding",
  text: "Diseñé la identidad visual de una marca de perfumes ficticia llamada «Bloom». El universo de la marca pretendía ser afrutado, colorido y dirigido a un público joven. Era esencial captar la esencia de una marca a la vez mágica y vibrante, creando materiales de comunicación que reflejaran plenamente esta atmósfera.",
  title: "Branding",
  images: [
    "logobloomblanc.png",
    "logobloomnoir.png",
    "logobloomorange.png",
    "logobloomrose.png",
    "TOUTLOGOBLOOM.png",
    "bloominpost'err.png",
    "bloominposterxxx.png",
  ],
};
const diseño: Template = {
  slug: "diseño",
  title: "Comunicación y diseño",
  text: "Diseñé carteles para una exposición fotográfica en el Centre Culturel Henri Desbals de Toulouse, así como el logotipo y varios soportes visuales para mostrar las fotos de la exposición. Uno de mis carteles fue seleccionado como cartel oficial. Para estos proyectos utilicé Adobe Photoshop e Illustrator. En mi tiempo libre, también diseño varios carteles para eventos ficticios.",
  images: [
    "neverending.png",
    "toulouse-1.png",
    "toulouse-2.png",
    "toulouse-3.png",
  ],
};
const redesSociales: Template = {
  slug: "redes-sociales",
  title: "Redes Sociales",
  text: "He creado cuentas en las redes sociales para el departamento de Arte y Comunicación de la Université de Toulouse Jean Jaurès. En estas cuentas se publican las nuevas entradas del blog y los eventos del departamento. También he creado entradas e historias con Canva.",
  images: [
    "IMG_9134.jpg",
    "IMG_9136.jpg",
    "IMG_9137.jpeg",
    "rrss-1.png",
    "rrss-2.png",
    "rrss-3.png",
  ],
};

const fotografia: Template = {
  slug: "fotografia",
  title: "Fotografía",
  text: "En mi tiempo libre me gusta hacer fotos, sobre todo de paisajes. Me esfuerzo por captar la belleza de la naturaleza. Mi objetivo es compartir mi visión del mundo y despertar el asombro de quienes miran mis fotos.",
  images: [
    "100_0177.jpg",
    "DSCN1138.jpg",
    "DSCN1390.jpg",
    "DSCN1400.jpg",
    "IMG_4742.jpg",
    "IMG_7127.jpg",
  ],
};

export const byName = {
  branding,
  diseño,
  redesSociales,
  fotografia,
};
export const otherprojects = Object.values(byName);
