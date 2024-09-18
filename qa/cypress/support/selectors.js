// This file contains all the selectors which we are using in all the pages which will help to resuse the selectors
export const Selectors = {
    Home_Page:{
        searchIcon : 'a[href="/search?q=all"]',
        headerLinks : 'header nav a',
        footer : 'footer',
    },

    Search_Page:{
        inputTextBox : 'form.input-group.search-bar input[placeholder="Search"]',
        submitSearchButton : 'span.input-group-btn button[type="submit"]',
        searchResult : '.grid__item.search-result h5 a',
    },

    Item_Page:{
        itemDescription : '.product-single__description',
        addCartButton : '#AddToCart2',
    },

    Cart_Section:{
        itemTittle : '.upcart-product-title-link',
    }
}