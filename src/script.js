import { DTWebComp } from './datatable-webcomp.js';
import { CPWebComp } from './colorpicker-webcomp.js';
import "./combobox.js";


// Object.defineProperty(DTWebComp.prototype, 'active', { value: active });
 
customElements.define('datatable-webcomp', DTWebComp)
customElements.define('colorpicker-webcomp', CPWebComp)
// customElements.define('datatable-webcounter', DTWebCounter)
