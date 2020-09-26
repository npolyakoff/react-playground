import React from 'react';
import { Link } from "react-router-dom";
import styles from './AppHeader.module.css';

export default class AppHeader extends React.Component {
  links: Array<{to: string, name: string}> = [{to: '/', name: 'Home'}, {to: '/about', name: 'About'}]
  render() {
    return (
      <div className={`${styles.container} d-flex-center px-24`}>
        <div className="mr-24">Meow Club</div>
        <div>
          { this.links.map(link => <Link to={link.to} className="mr-16">{link.name}</Link> ) }
        </div>
      </div>
    )
  }
}