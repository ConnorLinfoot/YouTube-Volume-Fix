var video_element = document.getElementsByClassName( 'html5-main-video' );
var video = null;

if( video_element.length == 1 ) {
	// Assuming YouTube :P (I'm lazy)
	video = video_element[0];
	video.volume = video.volume * 2;

	var we_updated_volume = false;
	video.onvolumechange = function(event) {
		if( we_updated_volume ) {
			we_updated_volume = false;
			return;
		}
		var volume = video.volume;
		var new_volume = volume * 2;
		if( new_volume > 1 ) {
			new_volume = 1;
		}
		we_updated_volume = true;
		video.volume = volume * 2;
	};

}