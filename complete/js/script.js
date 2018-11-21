;(function(){
    var staticIframe = document.querySelectorAll('iframe');

    function wrapIframes(iframe, container, className) {
        iframe.parentNode.insertBefore(container, iframe);
        container.classList.add(className);
    	container.appendChild(iframe);
    }

    for (var i = 0; i < staticIframe.length; i++) {
        var newDiv = document.createElement('DIV');
        var newClass = 'video-container';

        wrapIframes(staticIframe[i], newDiv, newClass);
    }
})();
