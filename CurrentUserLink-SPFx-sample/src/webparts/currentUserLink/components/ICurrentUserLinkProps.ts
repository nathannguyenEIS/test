
import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface ICurrentUserLinkProps {
  context: WebPartContext;
  baseUrl?: string;       // e.g., https://in4-aro-shs-app-prd-web-02.azurewebsites.net/Pages/default.aspx
  showDetails?: boolean;  // optional debug toggle
}
