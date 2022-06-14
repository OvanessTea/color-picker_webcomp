

export class CPWebComp extends HTMLElement {

    constructor() {
        super();
    }

    attributeChangedCallback(prop, oldVal, newVal) {
        if (prop === 'active') {
            this.render();
            let toggleActive = this.querySelector(".selected");
            toggleActive.addEventListener("click", this.toggleActive.bind(this));
            let optionsList = document.querySelectorAll(".option");
            optionsList.forEach(option => {
                option.addEventListener("click", (option) => this.changeSelected(option.target));
            })
        }
    }

    connectedCallback() {
        let html = document.importNode(DTWebCompTemplate.content, true);
        this.appendChild(html);
        this.render();
        let toggleActive = this.querySelector(".selected");
        toggleActive.addEventListener("click", this.toggleActive.bind(this));
        let optionsList = document.querySelectorAll(".option");
        optionsList.forEach(option => {
            option.addEventListener("click", (option) => this.changeSelected(option.target));
        })
        
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
            </div>            
        `;
    }

    toggleActive() {
        this.active = this.active ? "" : "active";
    }
    changeSelected(option) {
        console.log(option)
        // console.log(option);
        let changeValue = option.value;
        // console.log(changeValue);
        if (this.selected !== option.querySelector("input").value) {
            console.log(option);
            this.selected = option.querySelector("input").value;
        }
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