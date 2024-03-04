const scrollTable = function (el, reset) {
    let timer = null;

    if (reset) {
        clearInterval(timer);
        el.scrollTop = 0;
        el.offsetHeight = 0;
    }
   

    // el.appendChild(el.firstElementChild.cloneNode(true));
    function bindScrollHandal() {
        let offsetHeight = el.offsetHeight;
        let scrollHeight = el.firstElementChild.scrollHeight;
         // 如果当前可滚动的高度小于外层容器高度。就不进行滚动
        if (scrollHeight <= offsetHeight) {
            return false;
        }
        function bindScroll() {
            timer = setInterval(() => {
                if (el.scrollTop > scrollHeight) {
                    el.appendChild(el.removeChild(el.firstElementChild));
                }
                el.scrollTop++;
            }, 50);
        }
        bindScroll();
        el.addEventListener("mouseover", function () {
            clearInterval(timer);
        }, { passive: true });
    
        el.addEventListener("mouseleave", function () {
            bindScroll();
        }, { passive: true });
    }
   
    bindScrollHandal();
};

export default scrollTable;