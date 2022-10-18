const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const listao = $('#list-ao');
const login = $('#log-in');
const sigup = $('#sigup');
const mdsigup = $('#md-sigup');
const mdlogin = $('#md-login');
const callog = $('#backmdlg');
const calsig = $('#backmdsig');

login.onclick = function() {
    mdlogin.classList.add('avtive-modal');
}
callog.onclick = function() {
    mdlogin.classList.remove('avtive-modal');
}


sigup.onclick = function() {
    mdsigup.classList.add('avtive-modal');
}
calsig.onclick = function() {
    mdsigup.classList.remove('avtive-modal');
}
const app = {

    listao: [{
            name: 'SP22',
            dec: 'Chân Váy Jean Dáng Chữ A Siêu Hot',
            image: '../asssets/img/sp22.png',
            cours: '399.000đ',
            courOld: '500.000đ'

        },
        {
            name: 'SP25',
            dec: 'Quần jean nữ ống loe cạp cao co dãn nhẹ bốn chiều siêu tôn dáng chân dài',
            image: '../asssets/img/sp25.png',
            cours: '459.000đ',
            courOld: '500.000đ'

        },
        {
            name: 'SP26',
            dec: 'Quần Jean Skinny Nữ Dáng Ôm Lưng Siêu Cao Trơn Basic',
            image: '../asssets/img/sp26.png',
            cours: '398.000đ',
            courOld: '420.000đ'

        },
        {
            name: 'SP27',
            dec: 'Quần Baggy Ống Rộng Nữ Trơn Basic Trơn Phom Siêu Cao Tôn Dáng',
            image: '../asssets/img/sp27.png',
            cours: '329.000đ',
            courOld: '420.000đ'

        },
    ],

    start: function() {
        var _this = this;
        this.renderList();
    },

    renderList: function() {
        var htmls = this.listao.map(function(ao, index) {
            return `
            <div class="col l-2-4 m-4 c-6">
            <a class="home-product-item" href="#">
                <div class="home-product-item__img" style=" background-image: url(${ao.image});">
                </div>
                <h4 class="home-product-item__name">
                    ${ao.dec}
                </h4>
                <div class="home-product-item__price">
                    <span class="home-product-item__price-old">${ao.courOld}</span>
                    <span class="home-product-item__price-current">${ao.cours}</span>
                </div>
                <div class="home-product-item__action">
                    <span class="home-product-item__like home-product-item__like--liked">
                        <i class="home-product-item__like--icon-empty far fa-heart"></i>
                        <i class="home-product-item__like--icon-fill fas fa-heart"></i>
                    </span>
                    <div class="home-product-item__rating">
                        <i class="home-product-item__star--gold fa-solid fa-star"></i>
                        <i class="home-product-item__star--gold fa-solid fa-star"></i>
                        <i class="home-product-item__star--gold fa-solid fa-star"></i>
                        <i class="home-product-item__star--gold fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <span class="home-product-item__sold">20 đã bán</span>
                </div>
                <div class="home-product-item__origin">
                    <span class="home-product-item__brand">VietShop</span>
                    <span class="home-product-item__origin-name">Nghệ An</span>
                </div>
                <div class="home-product-item__favarite">
                    <i class="fas fa-check"></i>
                    <span>Yêu thích</span>
                </div>
                <div class="home-product-item__sale-off">
                    <span class="home-product-item__percent">15%</span>
                    <span class="home-product-item__sale-off-label">GIẢM</span>
                </div>
            </a>
        </div>
            `
        })
        listao.innerHTML = htmls.join('');
    },

}

app.start();