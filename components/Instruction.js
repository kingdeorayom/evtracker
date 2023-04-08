import React, { memo } from 'react'
import { StyleSheet } from 'react-native'
import AppText from './ui/AppText'

const Instruction = ({ title = '' }) => {
    return (
        <AppText variant='bodyLarge' style={styles.instruction}>
            {title}
        </AppText>
    )
}

export default memo(Instruction)

const styles = StyleSheet.create({

    instruction: {
        marginVertical: 10,
        color: '#808080',
        fontSize: 14
    },

})