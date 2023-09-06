import { ReactNode } from "react";

export interface ITextProps {
    // Text Transformation
    // UPPER CASE
    upper?: object | Boolean,
    // lower case
    lower?: object | Boolean,
    // Title Case
    title?: object | Boolean,

    // Title(s)
    h1?: object | Boolean,
    h2?: object | Boolean,
    h3?: object | Boolean,
    h4?: object | Boolean,
    h5?: object | Boolean,

    // Text(s)
    p1?: object | Boolean,
    p2?: object | Boolean,

    // Inner Components
    children?: ReactNode
}