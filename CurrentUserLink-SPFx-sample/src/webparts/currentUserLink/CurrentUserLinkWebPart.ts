
import { BaseClientSideWebPart, IPropertyPaneConfiguration, PropertyPaneTextField, PropertyPaneToggle } from '@microsoft/sp-webpart-base';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import CurrentUserLink from './components/CurrentUserLink';
import { ICurrentUserLinkProps } from './components/ICurrentUserLinkProps';

export interface ICurrentUserLinkWebPartProps {
  baseUrl: string;
  showDetails: boolean;
}

export default class CurrentUserLinkWebPart extends BaseClientSideWebPart<ICurrentUserLinkWebPartProps> {
  public render(): void {
    const element: React.ReactElement<ICurrentUserLinkProps> = React.createElement(CurrentUserLink, {
      context: this.context,
      baseUrl: this.properties.baseUrl,
      showDetails: this.properties.showDetails
    });

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: { description: 'Current User Link settings' },
          groups: [
            {
              groupFields: [
                PropertyPaneTextField('baseUrl', {
                  label: 'Base URL (without query)',
                  multiline: false,
                  placeholder: 'https://in4-aro-shs-app-prd-web-02.azurewebsites.net/Pages/default.aspx'
                }),
                PropertyPaneToggle('showDetails', {
                  label: 'Show details',
                  onText: 'On',
                  offText: 'Off'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
