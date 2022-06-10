export interface ITheme {
    primaryColor : string;
    secondaryColor : string;
    textColor : string;
    darkModePrimaryColor? : string;
    darkModeSecondaryColor? : string;
    darkModeTextColor? : string;
    mode : 'dark' | 'light'|'auto'|'inverted'
}