export class CPWebComp extends HTMLElement {

    constructor() {
        super();
        // this.dataColor.addEventListener('dataColor', this.dataColor.bind(this));
    }

    dataColor = [
        {name: 'Мятное утро', type: 'base', color: '#86EAE9'},
        {name: 'Лавандовый пунш', type: 'main', color: '#B8B2DD'},
    ]
    
    connectedCallback() {
        let html = document.importNode(DTWebCompTemplate.content, true);
        this.appendChild(html);
        this.updateLabel();
        
    }

    // delete_btn = document.querySelector("#delete_btn");
    // delete_btn.addEventListener

    
    updateLabel() {
        this.insertAdjacentHTML('beforeEnd'
            ,`  
            <div id="colorpickerFrame">
                <div class="colorpickerFrame__nav">
                    <div class="nav_cotainer nav_cp">
                        <h2>Добавление цвета</h2>
                        <div>
                            <label>
                                <p>Название цвета</p>
                                <input type="text" placeholder="Введите название"/>
                            </label>
                            <label>
                                <p>Выберите тип</p>
                                <div class="select-box">
                                    <div class="selected">
                                        Main
                                    </div>
                                    <div class="option-container">
                                        <div class="option">
                                            <input type="radio" class="radio" id="main" name="color_type">
                                            <label for="color_type">Main</label>
                                        </div>
                                        <div class="option">
                                            <input type="radio" class="radio" id="primary" name="color_type">
                                            <label for="color_type">Primary</label>
                                        </div>
                                        <div class="option">
                                            <input type="radio" class="radio" id="secondary" name="color_type">
                                            <label for="color_type">Secondary</label>
                                        </div>
                                        <div class="option">
                                            <input type="radio" class="radio" id="base" name="color_type">
                                            <label for="color_type">Base</label>
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div> 
            </div>            
        `);
    }
 
    static get observedAttributes() {
        return ['index'];
    }
 
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(name)
        if (name === 'index') {
            this.updateLabel();
        }
    }
 
    deleteColor(item) {
        console.log(this.dataColor);
        console.log(item);
        // console.log(this.dataColor);
        this.setAttribute('dataColor', this.getAttribute('item'));
        // this.setAttribute('dataColor', this.dataColor.filter(item => item[event.target.childElementCount] === event.target.childElementCount));
        // this.dataColor = this.dataColor.filter(color => color[index] === index);
        // this.setAttribute('dataColor', this.dataColor);
        // console.log(this.dataColor);
    }

//     showMessage(event) {
//         this.setAttribute('count', +(this.getAttribute('count')) + 1);
//         this.counter.increment();
//     }
 }