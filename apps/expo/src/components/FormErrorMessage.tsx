import React from 'react'
import { Text } from 'react-native'

type Props = {
    errorText?: string
    visible?: boolean
}

const FormErrorMessage = ({ errorText, visible }: Props) => {
    if (!errorText) {
        return null
    }

    return <Text className="pt-2 text-red-600">{errorText}</Text>
}

export default FormErrorMessage
