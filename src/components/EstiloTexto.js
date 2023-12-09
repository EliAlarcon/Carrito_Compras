import React, { Children } from "react"
import { Text, StyleSheet } from "react-native"
import theme from "./theme"

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    colorPrimary: {
        color: theme.colors.primary
    },
    colorSecondary: {
        color: theme.colors.textSecondary
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    subheading: {
        fontSize: theme.fontSizes.subheading
    }
})

export default function EstiloTexto({ children, color, fontSize, fontWeight, style, ...restOfProps }) {
    const textStyles = [
        styles.text,
        color = 'primary' && styles.colorPrimary,
        color = 'secondary' && styles.colorSecondary,
        fontSize = 'subheading' && styles.subheading,
        fontWeight = 'bold' && styles.bold
    ]

    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}
