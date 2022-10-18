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
            name: 'SP23',
            dec: 'Áo peplum kiểu dáng hàn quốc tay dài phối đen trắng trẻ trung chất vải tuyết mưa phối tơ hàn mềm mịn không nhăn nhàu A12',
            image: '../asssets/img/sp23.png',
            cours: '999.000đ',
            courOld: '1.200.000đ'
        },
        {
            name: 'SP24',
            dec: 'Áo sơ mi lụa phong cách hàn quốc dài tay cổ đức chất liệu lụa mềm mịn không nhăn nhàu A24',
            image: '../asssets/img/sp24.png',
            cours: '1.299.000đ',
            courOld: '1.500.000đ'

        },
        {
            name: 'SP28',
            dec: 'Váy Cổ Vuông Tay Trắng',
            image: '../asssets/img/sp28.png',
            cours: '1.299.000đ',
            courOld: '1.500.000đ'

        },
        {
            name: 'SP29',
            dec: 'Váy Cổ Sơ Mi Hai Màu Đen Be',
            image: '../asssets/img/sp29.png',
            cours: '1.299.000đ',
            courOld: '1.500.000đ'

        },
        {
            name: 'SP30',
            dec: 'Áo croptop Tay Phồng ngắn cổ vuông nhún ngực A2-TPN',
            image: '../asssets/img/sp30.png',
            cours: '1.299.000đ',
            courOld: '1.500.000đ'

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
                    <span class="home-product-item__sold">88 đã bán</span>
                </div>
                <div class="home-product-item__origin">
                    <span class="home-product-item__brand">Tanktop</span>
                    <span class="home-product-item__origin-name">Hàn Quốc</span>
                </div>
                <div class="home-product-item__favarite">
                    <i class="fas fa-check"></i>
                    <span>Yêu thích</span>
                </div>
                <div class="home-product-item__sale-off">
                    <span class="home-product-item__percent">10%</span>
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