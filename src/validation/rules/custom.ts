﻿///define(['ValidationApp/validation/i18n/textFormatter', 'ValidationApp/validation/rules', 'ValidationApp/validation/util'], function (textFormatter, rules, util) {

import * as rules from "../rules";

    var defaultMessage = 'Une erreur de validation est survenue.';
    var name = "custom";

    /// <summary>
    /// Verifie si la valeur saisie est un entier
    /// </summary>
    /// <param name="val">la valeur saisie</param>
    /// <returns>True si la valeur saisie est un entier, false sinon</returns>
    var validateView = function (value, params) {

        var success = true;

        if (params && params.validateView && typeof (params.validateView) == "function") {
             var result = params.validateView(value);
            if(typeof(result) == "object"){
                return result;
            } else{
                success = result;
            }            
        } else if (params) {
            success = params.validateView == true;
        }

        return {
            success: success,
            message: defaultMessage
        };
    };

    var validateModel = function (value, params) {

        var success = true;

        if (params && params.validateModel && typeof (params.validateModel) == "function") {
              var result = params.validateModel(value);
            if(typeof(result) == "object"){
                return result;
            } else{
                success = result;
            }      
        } else if (params) {
            success = params.validateModel == true;
        }

        return {
            success: success,
            message: defaultMessage
        };
    };


    var rule = {
        name: name,
        validateView: validateView,
        validateModel: validateModel,
        priority: 50
    };

 
export {rule};