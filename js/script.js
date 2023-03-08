const arr_links_1 = document.querySelectorAll(".menu_link");
const arr_lines = document.querySelectorAll(".line");

if (arr_links_1.length > 0){
    for (let index = 0; index < arr_links_1.length; index++){
        arr_links_1[index].addEventListener("mouseover", function(event){
            const element = event.target.textContent.toLowerCase();
            if (arr_lines.length > 0){
                for (let index_2 = 0; index_2 < arr_lines.length; index_2++){
                    if (element == arr_lines[index_2].id.toLowerCase()){
                        arr_links_1[index].classList.add("add_pixels");
                        arr_lines[index_2].classList.add("show");
                    };
                };
            };
        });
    };
};

if (arr_links_1.length > 0){
    for (let index = 0; index < arr_links_1.length; index++){
        arr_links_1[index].addEventListener("mouseout", function(event){
            if (arr_lines.length > 0){
                for (let index_2 = 0; index_2 < arr_lines.length; index_2++){
                    arr_links_1[index].classList.remove("add_pixels");
                    arr_lines[index_2].classList.remove("show");
                };
            };
        });
    };
};

const menuBurger = document.querySelector(".menu_burger");
const menuBurgerContainer = document.querySelector(".menu_burger_container");
const Body = document.querySelector("Body");
const wrapper = document.querySelector(".wrapper");

const headerButton = document.querySelector(".header_button_link");
const firstBlockButton = document.querySelector(".first_block_button_link");

menuBurger.addEventListener("click", function(event){
    menuBurgerContainer.classList.toggle("use");
    menuBurgerContainer.classList.toggle("brightness")
    Body.classList.toggle("overflow");
    wrapper.classList.toggle("overflow");
    wrapper.classList.toggle("opacity");
    headerButton.classList.toggle("pointer");
    firstBlockButton.classList.toggle("pointer");
});

const arr_navigation = document.querySelectorAll(".nav");
const arr_scrolls = document.querySelectorAll(".scroll");

if (arr_navigation.length > 0){
    for (let index = 0; index < arr_navigation.length; index++){
        arr_navigation[index].addEventListener("click", function(event){
            event.preventDefault();
            if (arr_scrolls.length > 0){
                for (let index_2 = 0; index_2 < arr_scrolls.length; index_2++){
                    const arr_classes = arr_scrolls[index_2].classList;
                    for (let index_3 = 0; index_3 < arr_classes.length; index_3++){
                        if (arr_navigation[index].textContent.toLowerCase() == arr_classes[index_3].toLowerCase()){
                            arr_scrolls[index_2].scrollIntoView({
                                block: "start",
                                inline: "nearest",
                                behavior: "smooth"
                            });
                            menuBurgerContainer.classList.toggle("use");
                            Body.classList.toggle("overflow");
                            wrapper.classList.toggle("overflow");
                            wrapper.classList.toggle("opacity");
                            headerButton.classList.toggle("pointer");
                            firstBlockButton.classList.toggle("pointer");
                        };
                    };
                };
            };
        });
    };
};

const arr_links_next = document.querySelectorAll(".menu_link");

if (arr_links_next.length > 0){
    for (let index = 0; index < arr_links_next.length; index++){
        arr_links_next[index].addEventListener("click", function(event){
            headerButton.classList.toggle("pointer");
            firstBlockButton.classList.toggle("pointer");
        });
    };
};

const popupButton = document.querySelector(".popup_button_close");
const popup = document.querySelector(".popup_wrapper");
const arr_elements = document.querySelectorAll(".wrapper > *");
const popupClose = document.querySelector(".popup_close_1");

headerButton.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.toggle("show_popup");
    popupClose.classList.toggle("change");
    Body.classList.toggle("overflow");
});

firstBlockButton.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.toggle("show_popup");
    popupClose.classList.toggle("change");
    Body.classList.toggle("overflow");
});

popupButton.addEventListener("click", function(event){
    popup.classList.toggle("show_popup");
    popupClose.classList.toggle("change");
    Body.classList.toggle("overflow");
});

popupClose.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.toggle("show_popup");
    popupClose.classList.toggle("change");
    Body.classList.toggle("overflow");
});
