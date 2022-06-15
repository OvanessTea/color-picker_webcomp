import  './color-picker.js';

export class CPWebComp extends HTMLElement {

    constructor() {
        super();
        this.colorState="ffffff";
        this.selectedParams = {
            name: "new",
            type: this.selected.toLowerCase(),
            color: "#" + this.colorState.toUpperCase()
        }
    }

    attributeChangedCallback(prop, oldVal, newVal) {
        console.log(prop)
        if (prop === 'active') {
            this.render();
            let toggleActive = this.querySelector(".selected");
            toggleActive.addEventListener("click", this.toggleActive.bind(this));
            console.log(this.selectedParams)
            
            const picker = document.querySelector("color-picker");
            picker.addEventListener("color-change", () => {
                const {state} = picker
                this.colorState = state.hex;
                
            });
        } else if (prop === 'selected') {
            this.render();
            let optionsList = this.getElementsByClassName("option");
            for (let i=0; i < optionsList.length; i++) {
                optionsList[i].addEventListener("click", () => this.changeSelected)
            }
        
            // optionsList.forEach(o => {
            //     o.addEventListener("change", (event) => {
            //         console.log(event.target.value)
            //         toggleActive.innerHTML = event.target.value;
            //     });
            // })
        }
    }

    connectedCallback() {
        let html = document.importNode(DTWebCompTemplate.content, true);
        this.appendChild(html);
        this.render();
        let toggleActive = this.querySelector(".selected");
        toggleActive.addEventListener("click", this.toggleActive.bind(this));
        let optionsList = this.getElementsByClassName("option");
        for (let i=0; i < optionsList.length; i++) {
            optionsList[i].addEventListener("click", () => this.changeSelected)
        }
        const picker = document.querySelector("color-picker");
        picker.addEventListener("color-change", () => {
            const {state} = picker
            this.colorState = state.hex;
            
        });

        
    }

    render() {
        this.innerHTML = `  
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
                                        ${this.selected}
                                    </div>
                                    <div class="options-container ${this.active}">
                                        <div class="option">
                                            <input type="radio" class="radio" id="main" value="Main" name="color_type">
                                            <label for="color_type">Main</label>
                                        </div>
                                        <div class="option">
                                            <input type="radio" class="radio" id="primary" value="Primary" name="color_type">
                                            <label for="color_type">Primary</label>
                                        </div>
                                        <div class="option">
                                            <input type="radio" class="radio" id="secondary" value="Secondary" name="color_type">
                                            <label for="color_type">Secondary</label> 
                                        </div>
                                        <div class="option">
                                            <input type="radio" class="radio" id="base" value="Base" name="color_type">
                                            <label for="color_type">Base</label>
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                <color-picker></color-picker>
                <button class="addColor__btn cp_btn">Добавить</button>
                <script src=color-picker.js></script>
            </div>            
        `;
    }

    toggleActive() {
        this.active = this.active ? "" : "active";
    }
    changeSelected() {
        console.log(444)
        this.render();
        // this.active = "";
    }

    static get observedAttributes() {
        return ["active", "selected"];
    }

    get active() {
        return this.getAttribute("active");
    }

    set active(val) {
        this.setAttribute("active", val)
    }

    get selected() {
        return this.getAttribute("selected");
    }

    set selected(val) {
        this.setAttribute("selected", val)
    }
     

}