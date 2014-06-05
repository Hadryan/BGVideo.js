function BGVideo(options) {
  var _this = this;
  document.body.innerHTML += '<div style="overflow:hidden;position:fixed;height:100%;width:100%;top:0;left:0;" id="video-wrapper"></div>'
  document.getElementById('video-wrapper').innerHTML = '\
  <video autoplay loop>\
    <source src="'+options.src+'" type="video/mp4">\
  </video>'
  _this.video = document.getElementById('video-wrapper').childNodes[1];
  _this.video.addEventListener( "loadedmetadata", function (e) {
      _this.aspect_ratio = this.videoWidth / this.videoHeight;
  }, false );
  window.onresize = function(){ resize_video(); }
  function resize_video() {
    if ( (window.innerWidth / window.innerHeight) > _this.aspect_ratio ){
      _this.video.style.width = '100%';
      _this.video.style.height = 'auto';
    }
    else{
      _this.video.style.width = 'auto';
      _this.video.style.height = '100%';
    }
  }
  resize_video();
}
