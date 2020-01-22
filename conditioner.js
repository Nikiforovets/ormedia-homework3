function Conditioner(model, currentTemperature){
    Devices.call(this, model);
    this._currentTemperature = currentTemperature;

    this.plusTemperature = function(){
        if(this._currentTemperature < 25 && this._state == true){
            this._currentTemperature += 2;
        }
    };

    this.minusTemperature = function(){
        if(this._currentTemperature > -5 && this._state == true){
            this._currentTemperature -= 2;
        }
    };

    this.getCurrentTemperature = function(){
        return this._currentTemperature;
    };
}