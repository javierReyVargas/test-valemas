import { LookAndFeelModel } from "./core/models/lookAndFeel.model";

export interface IMappedTheme {
  [key: string]: string | null;
}

export const applyTheme = (theme: LookAndFeelModel): void => {
  if (!theme) return;

  theme = extend(theme);
  const themeObject: IMappedTheme = mapTheme(theme);
  if (!themeObject) return;

  const root = document.documentElement;
  Object.keys(themeObject).forEach((property) => {
    if (property === "name" || property === null) {
      return;
    }
    root.style.setProperty(property, themeObject[property]);
  });
};


export const mapTheme = (lookAndFeel: LookAndFeelModel): IMappedTheme => {
  return {
    "--ngx-color-primary": lookAndFeel.PrimaryColor,
    "--ngx-color-secondary": lookAndFeel.SecondaryColor,
    "--ngx-color-tertiary": lookAndFeel.TertiaryColor,
    "--imagen-background-login": `url(${lookAndFeel.ImageBackgroundLogin})`,
  };
};


export const extend = (newTheme: LookAndFeelModel): LookAndFeelModel => {
  return { ...newTheme };
};
