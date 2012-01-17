var express = require('express');

exports.plugCSRF = function (app) {
    app.use(express.csrf());
    app.dynamicHelpers({
        csrf:   function (req, res) {
            return req.session ? req.session._csrf : "";
        }
    });
};
