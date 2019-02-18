sap.ui.define([], function () {
    return {
        capitalizeFirstLetter: function (sValue) {
            return sValue.charAt(0).toUpperCase() + sValue.slice(1);
        }
    };
});

/lib/MessageManager.js
    sap.ui.define(["sap/m/MessageBox", "sap/hello/lib/Formatter"], function (MessageBox, Formatter) {
        return {
            reportSuccess: function (sMsg, sTitle) {
                MessageBox.show(Formatter.capitalizeFirstLetter(sMsg), {
                    title: Formatter.capitalizeFirstLetter(sTitle)
                });
            }
        };
    });