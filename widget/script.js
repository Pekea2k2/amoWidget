window.reactBaseWidget = {};
window.reactBaseWidget.sourceUrl = 'http://localhost:8081/';
window.reactBaseWidget.productSysname = 'reactBaseWidget';

define([
    "jquery",
    "lib/components/base/modal",
    window.reactBaseWidget.sourceUrl + 'main.bundle.js',
], function($, Modal, mainBundle) {
    const Widget = function () {

        const self = this;
        self.system = this.system();
        self.langs = this.langs;

        const App = window.appWidget;

        this.getTemplate = function(callback) {
            var template = '<button id="myButton" style="width:65px;height:54px;">Click</button>';
            callback(template);
        };

        this.renderModal = function() {
            console.log('Succes');
            self.getTemplate(function(template) {
                var $modal = new Modal({
                    class_name: 'modal-window',
                    init: function ($modal_body) {
                        var $this = $(this);
                        $modal_body
                            .trigger('modal:loaded')
                            .html(template)
                            .trigger('modal:centrify')
                            .append('<span class="modal-body__close"><span class="icon icon-modal-close"></span></span>');

                        $("#myButton").click(function() {
                            let popup = document.createElement("div");
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
                            popup.innerHTML = "<h1>Salut</h1>";
                            document.body.appendChild(popup);

                            let closeBtn = document.createElement("button");
                            closeBtn.innerHTML = "Închide";
                            closeBtn.style.position = "absolute";
                            closeBtn.style.right = "20px";
                            closeBtn.style.top = "20px";
                            closeBtn.onclick = function() {
                                document.body.removeChild(popup);
                            };
                            popup.appendChild(closeBtn);
                        });
                    },
                    destroy: function () {}
                });
            });
        };

        this.callbacks = {
            render: function() {
                console.log('render');
                App.render(self);
                self.renderModal();
                return true;
            },
            init: function () {
                console.log('init');
                App.init(self);
                return true;
            },
            bind_actions: function () {
                App.bind_actions(self);
                return true;
            },
            settings: function () {
                console.log('settings');
                App.settings(self);
                return true;
            },
            dpSettings: function () {
                console.log('dpSettings');
                App.dpSettings(self);
            },
            advancedSettings: function () {
                console.log('advancedSettings');
                App.advancedSettings(self);
                return true;
            },
            onSave: function () {
                App.onSave(self);
                return true;
            },
            destroy: function() {
                App.destroy(self);
                return true;
            }
        };

        return this;

    };

    return Widget;

});
