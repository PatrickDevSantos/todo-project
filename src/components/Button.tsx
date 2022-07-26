import { PlusCircle } from 'phosphor-react'
import { ButtonHTMLAttributes } from 'react';

import styles from './Button.module.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}
export function Button({ active, ...rest }: Props) {
  return (
    <button className={active ? styles.buttonActive : styles.button} {...rest}>
      Criar
      <PlusCircle size={16} className={styles.btnIcon} />
    </button>
  )
}