import { DTWebComp } from './datatable-webcomp.js';
import { CPWebComp } from './colorpicker-webcomp.js';

// Object.defineProperty(DTWebComp.prototype, 'dataColor', { value: dataColor })
 
customElements.define('datatable-webcomp', DTWebComp)
customElements.define('colorpicker-webcomp', CPWebComp)
// customElements.define('datatable-webcounter', DTWebCounter)
