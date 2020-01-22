function Camera(model, liveRecording, nightMode){
    Devices.call(this, model);
    this._liveRecording = liveRecording;
    this._nightMode = nightMode;

    this.onLiveRecording = function(){
        this._liveRecording = true;
    };

    this.offLiveRecording = function(){
        this._liveRecording = false;
    };

    this.onNightMode = function(){
        this._nightMode = true;
    };

    this.offNightMode = function(){
        this._nightMode = false;
    };
}
