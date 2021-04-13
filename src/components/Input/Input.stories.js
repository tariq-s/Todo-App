import React from 'react'
import Button from '../Button/Button'
import Input from './Input'

export default {
    title: 'Form/Input',
    component: Input
}

export const Small = () => <Input size={10} />
export const Medium = () => <Input size={15} />
export const Large = () => <Input size={20} />