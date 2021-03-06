/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.insurance-separator-ul {
  padding: 5px 10px;
  margin-top: 0px;
}

.insurance-separator {
  padding: 10px 0px 0px 0px;
  font-size: 12px !important;
}

.insurance-card {
  background: #fff !important;
  padding: 1rem;
  flex-flow: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.insurance-subtitle {
  font-size: 20px !important;
}

.insurance-title {
  font-size: 20px !important;
  font-weight: bold;
}

.input-view {
  padding: 8px 0px;
  font-size: 14px;
}

.pb-20 {
  padding-bottom: 20px;
}

.marker-icon {
  color: #1973b8 !important;
}
`;