(() =>
{
    const refs =
    {
        openMenuBtn: document.querySelector('[data-menu-open]'),
        closeMenuBtn: document.querySelector('[data-menu-close]'),
     // body: document.querySelector('body'),        
        menu: document.querySelector('[data-menu]'),
     // menuList: document.querySelector('.modal-input')
    };
    refs.openMenuBtn.addEventListener('click', toggleModal);
    refs.closeMenuBtn.addEventListener('click', toggleModal);
    function toggleModal()
    {
        refs.menu.classList.toggle('is-hidden-menu');
        // refs.body.classList.toggle('no-scroll');
    }
})();
function Click_menu()
{
    var htmlProduct = document.getElementById("product-list");
    var footerForm = document.getElementById("footer-form");

    htmlProduct.innerHTML = "";
    footerForm.innerHTML = "";
}
function Click_close_menu()
{
    var product_list = document.getElementById("product-list");
    var footer_form = document.getElementById("footer-form");

    product_list.innerHTML = "<li class='product__item'>" +
                            "<article class='product__article-block'>" +
                                "<a class='product__link link' href='#product-1'>" +
                                    "<div class='product__block-overlay'>" +
                                        "<img class='product__image' src='./images/product-image-1.jpg' width='370' height='294' alt='товар'>" +
                                        "<div class='product__overlay'>" +
                                            "<p class='product__overlay-text'>" +
                                                "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів." +
                                                "Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу." +
                                            "</p>" +
                                        "</div>" +
                                    "</div>" +
                                    "<div class='product__block'>" +
                                        "<h3 class='product__list-tovar'>Технокряк</h3>" +
                                        "<p class='product__list-type'>Веб-сайт</p>" +
                                    "</div>" +
                                "</a>" +
                            "</article>" +
                        "</li>" +
                        "<li class='product__item'>" +
                            "<article class='product__article-block'>" +                      
                                "<a class='product__link link' href='#product-2'>" +
                                    "<div class='product__block-overlay'>" +
                                        "<img class='product__image' src='./images/product-image-2.jpg' width='370' height='294' alt='товар'>" +
                                        "<div class='product__overlay'>" +
                                            "<p class='product__overlay-text'>" +
                                                "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів." +
                                                "Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу." +
                                            "</p>" +
                                        "</div>" +
                                    "</div>" +
                                    "<div class='product__block'>" +
                                        "<h3 class='product__list-tovar'>Постер New Orlean vs Golden State</h3>" +
                                        "<p class='product__list-type'>Дизайн</p>" +
                                    "</div>" +
                                "</a>" +
                            "</article>" +
                        "</li>" +
                        "<li class='product__item'>" +
                            "<article class='product__article-block'>" +
                                "<a class='product__link link' href='#product-3'>" +
                                    "<div class='product__block-overlay'>" +
                                        "<img class='product__image' src='./images/product-image-3.jpg' width='370' height='294' alt='товар'>" +
                                        "<div class='product__overlay'>" +
                                            "<p class='product__overlay-text'>" +
                                                "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів." +
                                                "Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу." +
                                            "</p>" +
                                        "</div>" +
                                    "</div>" +
                                    "<div class='product__block'>" +
                                        "<h3 class='product__list-tovar'>Ресторан Seafood</h3>" +
                                        "<p class='product__list-type'>Додаток</p>" +
                                    "</div>" +
                                "</a>" +
                            "</article>" +
                        "</li>" +
                        "<li class='product__item'>" +
                            "<article class='product__article-block'>" +
                                "<a class='product__link link' href='#product-4'>" +
                                    "<div class='product__block-overlay'>" +
                                        "<img class='product__image' src='./images/product-image-4.jpg' width='370' height='294' alt='товар'>" +
                                        "<div class='product__overlay'>" +
                                            "<p class='product__overlay-text'>" +
                                                "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів." +
                                                "Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу." +
                                            "</p>" +
                                        "</div>" +
                                    "</div>" +
                                    "<div class='product__block'>" +
                                        "<h3 class='product__list-tovar'>Проєкт Prime</h3>" +
                                        "<p class='product__list-type'>Маркетинг</p>" +
                                    "</div>" +
                                "</a>" +
                            "</article>" +
                        "</li>" +
                        "<li class='product__item'>" +
                            "<article class='product__article-block'>" +
                                "<a class='product__link link' href='#product-5'>" +
                                    "<div class='product__block-overlay'>" +
                                        "<img class='product__image' src='./images/product-image-5.jpg' width='370' height='294' alt='товар'>" +
                                        "<div class='product__overlay'>" +
                                            "<p class='product__overlay-text'>" +
                                                "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів." +
                                                "Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу." +
                                            "</p>" +
                                        "</div>" +
                                    "</div>" +
                                    "<div class='product__block'>" +
                                        "<h3 class='product__list-tovar'>Проєкт Boxes</h3>" +
                                        "<p class='product__list-type'>Додаток</p>" +
                                    "</div>" +
                                "</a>" +
                            "</article>" +
                        "</li>" +
                        "<li class='product__item'>" +
                            "<article class='product__article-block'>" +
                                "<a class='product__link link' href='#product-6'>" +
                                    "<div class='product__block-overlay'>" +
                                        "<img class='product__image' src='./images/product-image-6.jpg' width='370' height='294' alt='товар'>" +
                                        "<div class='product__overlay'>" +
                                            "<p class='product__overlay-text'>" +
                                                "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів." +
                                                "Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу." +
                                            "</p>" +
                                        "</div>" +
                                    "</div>" +
                                    "<div class='product__block'>" +
                                        "<h3 class='product__list-tovar'>Inspiration has no Borders</h3>" +
                                        "<p class='product__list-type'>Веб-сайт</p>" +
                                    "</div>" +
                                "</a>" +
                            "</article>" +
                        "</li>" +
                        "<li class='product__item'>" +
                            "<article class='product__article-block'>" +
                                "<a class='product__link link' href='#product-7'>" +
                                    "<div class='product__block-overlay'>" +
                                        "<img class='product__image' src='./images/product-image-7.jpg' width='370' height='294' alt='товар'>" +
                                        "<div class='product__overlay'>" +
                                            "<p class='product__overlay-text'>" +
                                                "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів." +
                                                "Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу." +
                                            "</p>" +
                                        "</div>" +
                                    "</div>" +
                                    "<div class='product__block'>" +
                                        "<h3 class='product__list-tovar'>Видання Limited Edition</h3>" +
                                        "<p class='product__list-type'>Дизайн</p>" +
                                    "</div>" +
                                "</a>" +
                            "</article>" +
                        "</li>" +
                        "<li class='product__item'>" +
                            "<article class='product__article-block'>" +
                                "<a class='product__link link' href='#product-8'>" +
                                    "<div class='product__block-overlay'>" +
                                        "<img class='product__image' src='./images/product-image-8.jpg' width='370' height='294' alt='товар'>" +
                                        "<div class='product__overlay'>" +
                                            "<p class='product__overlay-text'>" +
                                                "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів." +
                                                "Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу." +
                                            "</p>" +
                                        "</div>" +
                                    "</div>" +
                                    "<div class='product__block'>" +
                                        "<h3 class='product__list-tovar'>Проєкт LAB</h3>" +
                                        "<p class='product__list-type'>Маркетинг</p>" +
                                    "</div>" +
                                "</a>" +
                            "</article>" +
                        "</li>" +
                        "<li class='product__item'>" +
                            "<article class='product__article-block'>" +
                                "<a class='product__link link' href='#product-9'>" +
                                    "<div class='product__block-overlay'>" +
                                        "<img class='product__image' src='./images/product-image-9.jpg' width='370' height='294' alt='товар'>" +
                                        "<div class='product__overlay'>" +
                                            "<p class='product__overlay-text'>" +
                                                "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів." +
                                                "Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу." +
                                            "</p>" +
                                        "</div>" +
                                    "</div>" +
                                    "<div class='product__block'>" +
                                        "<h3 class='product__list-tovar'>Growing Business</h3>" +
                                        "<p class='product__list-type'>Додаток</p>" +
                                    "</div>" +
                                "</a>" +
                            "</article>" +
                        "</li>";
    
    footer_form.innerHTML = "<div class='footer__form' id='form'>" +
                                "<h5 class='footer__title'>підпишіться на розсилку</h5>" +
                                "<div class='footer__block'>" +
                                    "<input class='footer__email' name='email' type='email' placeholder='E-mail'/>" +
                                    "<button class='footer__button' name='telegram' type='submit' value='primary'>" +
                                        "<span class='footer__button-text'>Підписатися</span>" +
                                        "<svg class='footer__icon-telegram' width='24' height='24'>" +
                                            "<use href='./images/icons.svg#icon-button-telegram'/>" +
                                        "</svg>" +
                                    "</button>" +
                                "</div>" +
                            "</div>";
}