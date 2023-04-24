import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';

export function Sidebar () {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=40"/>
    
      <div className={styles.profile}>

        <img className={styles.avatar} src="https://github.com/leutzed.png"/>

        <strong>Daniel Leutze</strong>
        <span>Web dev</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
           Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}