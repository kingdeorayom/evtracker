import React, { memo } from 'react'
import { Appbar } from 'react-native-paper'

const Header = () => {

    console.log('Header rendered')

    return (
        <Appbar.Header>
            <Appbar.Content title="" />
            <Appbar.Action icon="cached" onPress={() => console.log("Hello")} />
            <Appbar.Action icon="dots-vertical" onPress={() => console.log("Hello")} />
        </Appbar.Header>
    )
}

export default memo(Header)