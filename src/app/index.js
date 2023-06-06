import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import AppAdvancedSettings from '@Components/advancedSettings/AppAdvancedSettings'

console.log('!!!!! START App React Widget !!!!!')
console.log(window.location)

window.appWidget = {
    render(self) {
        console.log('render2');

        // Crearea butonului
        let btn = document.createElement("button");

        // Setarea stilului butonului
        btn.style.width = "65px";
        btn.style.height = "54px";
        btn.innerHTML = "Click";

        // Atasarea functiei de click la buton
        btn.onclick = function() {
            // Crearea ferestrei popup
            let popup = document.createElement("div");

            // Setarea stilului ferestrei popup
            popup.style.width = "80%";
            popup.style.height = "80%";
            popup.style.position = "fixed";
            popup.style.top = "10%";
            popup.style.left = "10%";
            popup.style.background = "white";
            popup.style.zIndex = "1000";
            popup.style.padding = "20px";
            popup.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";
            popup.style.textAlign = "center";

            // Adăugarea textului la fereastra popup
            popup.innerHTML = "<h1>Salut</h1>";

            // Adăugarea ferestrei popup la body
            document.body.appendChild(popup);

            // Crearea unui buton de închidere pentru fereastra popup
            let closeBtn = document.createElement("button");
            closeBtn.innerHTML = "Închide";
            closeBtn.style.position = "absolute";
            closeBtn.style.right = "20px";
            closeBtn.style.top = "20px";

            // Atasarea funcției de click la butonul de închidere
            closeBtn.onclick = function() {
                document.body.removeChild(popup);
            };

            // Adăugarea butonului de închidere la fereastra popup
            popup.appendChild(closeBtn);
        };

        // Găsirea locației pentru inserarea butonului
        let buttonLocation = document.querySelector("#nav_menu > div:nth-child(12)");

        // Adăugarea butonului sub locația dorită
        buttonLocation.insertAdjacentElement('afterend', btn);

        return true;
    },
    init(self) {
        console.log('app init')
        return true
    },
    bind_actions(self) {
        console.log('app bind_actions')
        return true
    },
    settings(self) {
        console.log('app settings')
        return true
    },
    dpSettings(self) {
        console.log('app settings')
        return true
    },
    advancedSettings(self) {
        ReactDOM.render(
            <AppAdvancedSettings />,
            document.getElementById('work_area')
        )
        console.log('app advanced settings')
        console.log(self)
        return true
    },
    onSave() {},
    destroy() {},
}
