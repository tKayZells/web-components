window.addEventListener("load", (e) =>{
    
    document.addEventListener("scroll", (s) => {
        // add scroll-y data to <html> dom element
        // reference data-scroll on css to update styles when 
        // the user is not at the top of the page.
        document.documentElement.dataset.scroll = window.scrollY;
    })

})