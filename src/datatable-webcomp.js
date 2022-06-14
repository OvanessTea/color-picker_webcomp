export class DTWebComp extends HTMLElement {

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
            , `<div id='tableFrame'>
                <div class="tableFrame__nav">
                    <div class="nav_cotainer">
                        <h2 class="table_header">Таблица цветов</h2>
                        <div>
                            <button class="_icon">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="save_icon">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19 9.49323V19H6V6H15.1985L19 9.49323ZM15.5882 5L20 9.05405V20H5V5H15.5882Z" fill="#8D8D8D"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 15H9V19H16V15ZM8 14V20H17V14H8Z" fill="#8D8D8D"/>
                                </svg>
                            </button>
                            <button class="_icon">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="close_icon">
                                    <rect width="1.06064" height="11.6671" transform="matrix(0.707115 0.707099 -0.707115 0.707099 16.25 8)" fill="#777777"/>
                                    <rect width="1.06064" height="11.6671" transform="matrix(-0.707114 0.707099 -0.707114 -0.707099 16.9999 16.25)" fill="#777777"/>
                                </svg>                            
                            </button>
                        </div>
                    </div>
                </div> 
                <table class='dataTable'>
                    <tr>
                        <th width="90px">Цвет</th>
                        <th width="134px">Название</th>
                        <th width="115px">Тип</th>
                        <th width="115px">Код</th>
                        <th width="115px">Изменить</th>
                        <th width="115px">Удалить</th>
                    </tr>
                    ${this.dataColor.map((item, index) => (
                        "<tr key='"+index+"' index='"+index+"' observed>"+
                            "<td><div class='color_div' style='background: "+ item.color +"'></div></td>"+
                            "<td><p>"+item.name+"</p></td>"+
                            "<td><p>"+item.type+"</p></td>"+
                            "<td><p>"+item.color+"</p></td>"+
                            "<td><button class='_icon'>"+
                                "<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' class='edit_icon'>"+
                                    "<path d='M12.8701 3.60447C13.0429 3.41283 13.2481 3.26081 13.4739 3.1571C13.6997 3.05338 13.9417 3 14.1861 3C14.4306 3 14.6726"+ 
                                        "3.05338 14.8984 3.1571C15.1242 3.26081 15.3293 3.41283 15.5022 3.60447C15.675 3.79611 15.8121 4.02362 15.9056 4.27401C15.9991 4.5244 16.0473"+ 
                                        "4.79277 16.0473 5.06379C16.0473 5.33481 15.9991 5.60317 15.9056 5.85356C15.8121 6.10395 15.675 6.33146 15.5022 6.5231L6.61905 16.3735L3 "+
                                        "17.468L3.98701 13.4549L12.8701 3.60447Z' stroke='#8D8D8D' stroke-linecap='round' stroke-linejoin='round'/>"+
                                "</svg>"+                            
                            "</button></td>"+
                            "<td><button id='delete_btn' class='_icon' onclick='this.deleteColor("+index+")'}>"+
                                "<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' class='delete_icon'>"+
                                    "<path fill-rule='evenodd' clip-rule='evenodd' d='M15 4H4L5.26923 16H13.7308L15 4ZM13.8887 5H5.11135L6.16904 15H12.831L13.8887 5Z' fill='#8D8D8D'/>"+
                                    "<rect x='4' y='3' width='11' height='2' fill='#8D8D8D'/>"+
                                "</svg>"+                        
                            "</button></td>"+
                        "</tr>"
                    ))}
                                        
                </table>
                <button class="addColor__btn">Добавить цвет</button>
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