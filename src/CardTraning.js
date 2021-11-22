import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './CardTraning-styles.js';

import '@bbva-web-components/bbva-button-default/bbva-button-default.js';
import '@bbva-web-components/bbva-core-icon/bbva-core-icon.js';
import '@cells-components/coronita-icons/coronita-icons.js';

/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<card-traning></card-traning>
```

##styling-doc

@customElement card-traning
*/
export class CardTraning extends LitElement {
  static get is() {
    return 'card-traning';
  }

  // Declare properties
  static get properties() {
    return {
      title: { type: String },
      info: { type: String },
      listItems: { type: Array, attribute: 'list-items' },
      buttonName: { type: String, attribute: 'button-name' }
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.title = '';
    this.info = '';
    this.listItems = [];
    this.buttonName = '';
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('card-traning-shared-styles')
    ];
  }

  actionInsurance(){
    this.dispatchEvent(new CustomEvent('selection-insurance',{
      bubbles: true,
      composed: true,
      detail: this.title,
    }))  
  }
  // Define a template
  render() {
    return html`
<div class="insurance-card">
        <div class="input-view insurance-title insurance-subtitle">
          ${this.title}
        </div>
        <div class="input-view">${this.info}</div>
        <div class="insurance-seprartor-ul pb-20">
          ${this.listItems.map(
            (i) => html`
              <div class="insurance-separator">
                <bbva-core-icon
                  icon="coronita:bullet1"
                  class="marker-icon"
                ></bbva-core-icon>
                ${i}
              </div>
            `
          )}
        </div>
        <bbva-button-default variant="primary" @click="${this.actionInsurance}"
          >${this.buttonName}</bbva-button-default
        >
      </div>
    `;
  }
}
