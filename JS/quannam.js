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
            name: 'SP8',
            dec: 'Quần Đùi Nam GUZADO Thể Thao Chất Vải Gió Chun Mềm Mại,Co Giãn Vận Động Thoải Mái GSR01',
            image: '../asssets/img/sp8.png',
            cours: '1.299.000đ',
            courOld: '1.500.000đ'
        },
        {
            name: 'SP9',
            dec: 'Quần Kaki Nam Baggy Ống Suông Basic Unisex',
            image: '../asssets/img/sp9.png',
            cours: '1.299.000đ',
            courOld: '1.500.000đ'
        },
        {
            name: 'SP10',
            dec: 'Quần Jean Nam Baggy Ống Suông Unisex phong cách SIMPLE Kiểu quần bò nam form suông rộng jeans',
            image: '../asssets/img/sp10.png',
            cours: '1.299.000đ',
            courOld: '1.500.000đ'
        },
        {
            name: 'SP12',
            dec: 'Quần đùi,quần sooc nam thể thao vải gió mềm mịn',
            image: '../asssets/img/sp12.png',
            cours: '1.299.000đ',
            courOld: '1.500.000đ'
        },
        {
            name: 'SP13',
            dec: 'quần short nam BASIC , quần short tây nam kiểu dáng trẻ trung co dãn thoáng mát vải cotton',
            image: '../asssets/img/sp13.png',
            cours: '1.299.000đ',
            courOld: '1.500.000đ'
        },
        {
            name: 'SP19',
            dec: 'Quần Cargo Pants',
            image: '../asssets/img/sp19.png',
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