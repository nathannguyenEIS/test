
import * as React from 'react';
import styles from './CurrentUserLink.module.scss';
import { ICurrentUserLinkProps } from './ICurrentUserLinkProps';

export default function CurrentUserLink(props: ICurrentUserLinkProps) {
  const userLogin = props.context.pageContext.user.loginName || '';
  const userEmail = props.context.pageContext.user.email || userLogin;
  const userDisplayName = props.context.pageContext.user.displayName || userEmail;

  const encodedName = encodeURIComponent(userDisplayName);
  const encodedEmail = encodeURIComponent(userEmail);

  const baseUrl = props.baseUrl || 'https://in4-aro-shs-app-prd-web-02.azurewebsites.net/Pages/default.aspx';
  const href = `${baseUrl}?user=${encodedName}&email=${encodedEmail}`;

  return (
    <div className={styles.currentUserLink}>
      <a href={href} className={styles.link}>
        Open app for {userDisplayName}
      </a>
      {props.showDetails && (
        <div className={styles.details}>
          <div><strong>Name:</strong> {userDisplayName}</div>
          <div><strong>Email:</strong> {userEmail}</div>
          <div><strong>URL:</strong> {href}</div>
        </div>
      )}
    </div>
  );
}
