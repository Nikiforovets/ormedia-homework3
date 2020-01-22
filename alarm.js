function Alarm(model){
    Devices.call(this, model);
    var _password = "qwerty";
    var _passwordCounter = 0;
    var _sirenState = false;

    this.enterPassword = function(enteredPassword){
        if(enteredPassword == _password){
            console.log("Охранная сигнализация выключена");
            _passwordCounter = 0;
            return;
        }else{
            _passwordCounter++;
            if(_passwordCounter >= 3)
            this.turnOnSiren();
        }
    };

    this.onSiren = function(){
        _sirenState = true;
    };

    this.offSiren = function(enterPassword){
        if(enterPassword == _password){
            _sirenState = false;
            _passwordCounter = 0;
        }
    };
}